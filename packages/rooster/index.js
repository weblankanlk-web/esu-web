import "./rooster.css";

export class Rooster {
  constructor(s, t, e = {}) {
    this.jobs = [];
    const i = e.pageSize ? Math.min(Math.max(e.pageSize, 10), 50) : 10;
    (this.config = {
      roosterDiv: s || "",
      companyId: t,
      sandbox: e.sandbox || !1,
      pageSize: i,
      currentPage: 1,
      hasMoreJobs: !0,
      isLoading: !1,
      totalJobs: 0,
    }),
      (this.filterConfig = {
        showSearch: !1 !== e.showSearch,
        showClass: e.showClass || !1,
        showSubclass: e.showSubclass || !1,
        showDepartment: e.showDepartment || !1,
        showJobType: e.showJobType || !1,
        showSubsidiaryFilter: e.showSubsidiaryFilter || !1,
      }),
      (this.filters = {
        searchTerm: "",
        class: "",
        subclass: "",
        department: "",
        jobType: "",
        subsidiary: e.defaultSubsidiary || "",
      }),
      (this.filterOptions = {
        classes: [],
        subclasses: [],
        departments: [],
        classSubclassMapping: [],
        subsidiaries: [],
        jobTypes: [
          { value: "full-time", label: "Full-Time" },
          { value: "internship", label: "Internship" },
          { value: "part-time", label: "Part-Time" },
          { value: "contract", label: "Contract" },
          { value: "casual", label: "Casual" },
          { value: "general", label: "General" },
        ],
      });
  }
  debounce(s, t) {
    let e;
    return function (...i) {
      const o = this;
      clearTimeout(e),
        (e = setTimeout(() => {
          s.apply(o, i);
        }, t));
    };
  }
  async setup() {
    const s = document.querySelector(this.config.roosterDiv);
    if (s) {
      let t = '<div class="rooster-filter">';
      if (
        (this.filterConfig.showSearch &&
          (t +=
            '<input type="search" placeholder="Search for Jobs" name="searchTerm" class="rooster-search">'),
        (t += '<div class="rooster-classification-filters">'),
        this.filterConfig.showClass &&
          (t +=
            '\n          <select id="classFilter" class="rooster-class-filter">\n            <option value="">All Classes</option>\n          </select>\n        '),
        this.filterConfig.showSubclass)
      ) {
        t += `\n          <select id="subclassFilter" class="rooster-subclass-filter" ${
          this.filterConfig.showClass ? "disabled" : ""
        }>\n            <option value="">All Subclasses</option>\n          </select>\n        `;
      }
      this.filterConfig.showDepartment &&
        (t +=
          '\n          <select id="departmentFilter" class="rooster-department-filter">\n            <option value="">All Departments</option>\n          </select>\n        '),
        this.filterConfig.showJobType &&
          (t +=
            '\n          <select id="jobTypeFilter" class="rooster-jobtype-filter">\n            <option value="">All Job Types</option>\n          </select>\n        '),
        this.filterConfig.showSubsidiaryFilter &&
          (t +=
            '\n          <select id="subsidiaryFilter" class="rooster-subsidiary-filter">\n            <option value="">All Companies</option>\n          </select>\n        '),
        (t += "</div></div>"),
        (s.innerHTML = `\n        <div class="rooster-container">\n          ${t}\n          <div class="jobs-count"></div>\n          <div class="jobs-list"></div>\n          <button class="load-more-button" style="display: none;">Load More Jobs</button>\n          <div class="jobs-loading" style="display: none;">Loading jobs...</div>\n          <div class="jobs-end-message" style="display: none;">No more jobs to load</div>\n        </div>`),
        this.hasAnyFilterEnabled()
          ? this.loadFilterOptions().then(() => {
              this.populateFilterDropdowns(),
                this.resetJobsList(),
                this.setupLoadMoreButton();
            })
          : (this.resetJobsList(), this.setupLoadMoreButton()),
        this.setupEventListeners();
    }
  }
  hasAnyFilterEnabled() {
    return Object.values(this.filterConfig).some((s) => !0 === s);
  }
  setupEventListeners() {
    const s = this;
    if (this.filterConfig.showSearch) {
      const t = document.querySelector(
          this.config.roosterDiv + " .rooster-search"
        ),
        e = this.debounce(function (t) {
          (s.filters.searchTerm = t.target.value), s.resetJobsList();
        }, 300);
      t.addEventListener("keyup", e);
    }
    this.filterConfig.showClass &&
      document
        .querySelector(this.config.roosterDiv + " #classFilter")
        .addEventListener("change", function (t) {
          (s.filters.class = t.target.value),
            (s.filters.subclass = ""),
            s.filterConfig.showSubclass && s.populateSubclassDropdown(),
            s.resetJobsList();
        }),
      this.filterConfig.showSubclass &&
        document
          .querySelector(this.config.roosterDiv + " #subclassFilter")
          .addEventListener("change", function (t) {
            (s.filters.subclass = t.target.value), s.resetJobsList();
          }),
      this.filterConfig.showDepartment &&
        document
          .querySelector(this.config.roosterDiv + " #departmentFilter")
          .addEventListener("change", function (t) {
            (s.filters.department = t.target.value), s.resetJobsList();
          }),
      this.filterConfig.showJobType &&
        document
          .querySelector(this.config.roosterDiv + " #jobTypeFilter")
          .addEventListener("change", function (t) {
            (s.filters.jobType = t.target.value), s.resetJobsList();
          }),
      this.filterConfig.showSubsidiaryFilter &&
        document
          .querySelector(this.config.roosterDiv + " #subsidiaryFilter")
          .addEventListener("change", function (t) {
            (s.filters.subsidiary = t.target.value), s.resetJobsList();
          });
  }
  async loadFilterOptions() {
    try {
      if (!this.config.companyId)
        return void console.error("Error: No companyId provided");
      const s = parseInt(this.config.companyId);
      if (isNaN(s))
        return void console.error("Error: Invalid companyId format");
      const t = [];
      if (
        (this.filterConfig.showClass && t.push("class"),
        this.filterConfig.showSubclass && t.push("subclass"),
        this.filterConfig.showDepartment && t.push("department"),
        this.filterConfig.showSubsidiaryFilter && t.push("subsidiary"),
        0 === t.length)
      )
        return;
      const e = `\n        query JobFilterOptions($input: JobFilterOptionsInput!) {\n          fetchJobFilterOptions(input: $input) {\n            filterOptions {\n              ${
          this.filterConfig.showClass ? "classes" : ""
        }\n              ${
          this.filterConfig.showClass && this.filterConfig.showSubclass
            ? "classSubclassMapping { class subClass }"
            : ""
        }\n              ${
          !this.filterConfig.showClass && this.filterConfig.showSubclass
            ? "subclasses"
            : ""
        }\n              ${
          this.filterConfig.showDepartment ? "departments" : ""
        }\n              ${
          this.filterConfig.showSubsidiaryFilter
            ? "subsidiaries { id name }"
            : ""
        }\n            }\n          }\n        }\n      `,
        i = await fetch(
          (this.config.sandbox
            ? "https://dev-api.rooster-next-level.click/integration/"
            : "https://api.rooster.jobs/integration/") + "graphql",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query: e,
              variables: { input: { companyId: s, filterTypes: t } },
            }),
          }
        ),
        o = await i.json();
      if (o.errors)
        return (
          console.error("GraphQL errors:", o.errors),
          void this.clearFilterOptions()
        );
      if (
        o.data &&
        o.data.fetchJobFilterOptions &&
        o.data.fetchJobFilterOptions.filterOptions
      ) {
        const s = o.data.fetchJobFilterOptions.filterOptions;
        if (
          ((this.filterOptions = {
            classes: s.classes || [],
            classSubclassMapping: s.classSubclassMapping || [],
            departments: s.departments || [],
            subsidiaries: s.subsidiaries || [],
            jobTypes: this.filterOptions.jobTypes,
          }),
          s.classSubclassMapping)
        ) {
          const t = new Set();
          s.classSubclassMapping.forEach((s) => {
            s.subClass.forEach((s) => {
              null != s && "" !== s && t.add(s);
            });
          }),
            (this.filterOptions.subclasses = Array.from(t).sort());
        }
      } else
        console.error("Failed to load filter options"),
          this.clearFilterOptions();
    } catch (s) {
      console.error("Error loading filter options:", s),
        this.clearFilterOptions();
    }
  }
  clearFilterOptions() {
    this.filterOptions = {
      classes: [],
      subclasses: [],
      classSubclassMapping: [],
      departments: [],
      subsidiaries: [],
      jobTypes: this.filterOptions.jobTypes,
    };
  }
  populateFilterDropdowns() {
    this.filterConfig.showClass && this.populateClassDropdown(),
      this.filterConfig.showSubclass && this.populateSubclassDropdown(),
      this.filterConfig.showDepartment && this.populateDepartmentDropdown(),
      this.filterConfig.showJobType && this.populateJobTypeDropdown(),
      this.filterConfig.showSubsidiaryFilter &&
        this.populateSubsidiaryDropdown();
  }
  populateClassDropdown() {
    const s = document.querySelector(this.config.roosterDiv + " #classFilter");
    if (!s) return;
    for (; s.options.length > 1; ) s.remove(1);
    const t =
      this.filterOptions.classSubclassMapping.length > 0
        ? this.filterOptions.classSubclassMapping.map((s) => s.class)
        : this.filterOptions.classes;
    t &&
      t.length > 0 &&
      t.forEach((t) => {
        const e = document.createElement("option");
        (e.value = t), (e.textContent = t), s.appendChild(e);
      });
  }
  populateSubclassDropdown() {
    const s = document.querySelector(
      this.config.roosterDiv + " #subclassFilter"
    );
    if (!s) return;
    for (; s.options.length > 1; ) s.remove(1);
    const t = this.filters.class;
    if (
      this.filterConfig.showClass &&
      t &&
      this.filterOptions.classSubclassMapping &&
      this.filterOptions.classSubclassMapping.length > 0
    ) {
      const e = this.filterOptions.classSubclassMapping.find(
        (s) => s.class === t
      );
      if (e && e.subClass && e.subClass.length > 0)
        return (
          (s.disabled = !1),
          void e.subClass.forEach((t) => {
            if (null == t || "" === t) return;
            const e = document.createElement("option");
            (e.value = t), (e.textContent = t), s.appendChild(e);
          })
        );
    }
    if (
      this.filterOptions.subclasses &&
      this.filterOptions.subclasses.length > 0
    )
      return (
        (s.disabled = !1),
        void this.filterOptions.subclasses.forEach((t) => {
          if (null == t || "" === t) return;
          const e = document.createElement("option");
          (e.value = t), (e.textContent = t), s.appendChild(e);
        })
      );
    s.disabled =
      !this.filterOptions.subclasses ||
      0 === this.filterOptions.subclasses.length;
  }
  populateDepartmentDropdown() {
    const s = document.querySelector(
      this.config.roosterDiv + " #departmentFilter"
    );
    if (s) {
      for (; s.options.length > 1; ) s.remove(1);
      this.filterOptions.departments &&
        this.filterOptions.departments.length > 0 &&
        this.filterOptions.departments.forEach((t) => {
          const e = document.createElement("option");
          (e.value = t), (e.textContent = t), s.appendChild(e);
        });
    }
  }
  populateJobTypeDropdown() {
    const s = document.querySelector(
      this.config.roosterDiv + " #jobTypeFilter"
    );
    if (s) {
      for (; s.options.length > 1; ) s.remove(1);
      this.filterOptions.jobTypes &&
        this.filterOptions.jobTypes.length > 0 &&
        this.filterOptions.jobTypes.forEach((t) => {
          const e = document.createElement("option");
          (e.value = t.value), (e.textContent = t.label), s.appendChild(e);
        });
    }
  }
  populateSubsidiaryDropdown() {
    const s = document.querySelector(
      this.config.roosterDiv + " #subsidiaryFilter"
    );
    if (s) {
      for (; s.options.length > 1; ) s.remove(1);
      this.filterOptions.subsidiaries &&
        this.filterOptions.subsidiaries.length > 0 &&
        this.filterOptions.subsidiaries.forEach((t) => {
          const e = document.createElement("option");
          (e.value = t.id),
            (e.textContent = t.name),
            t.id == this.filters.subsidiary && (e.selected = !0),
            s.appendChild(e);
        });
    }
  }
  setupLoadMoreButton() {
    const s = document.querySelector(
      this.config.roosterDiv + " .load-more-button"
    );
    s &&
      s.addEventListener("click", () => {
        !this.config.isLoading &&
          this.config.hasMoreJobs &&
          this.loadMoreJobs();
      });
  }
  resetJobsList() {
    (this.config.currentPage = 1),
      (this.config.hasMoreJobs = !0),
      (this.jobs = []);
    const s = document.querySelector(this.config.roosterDiv + " .jobs-list");
    s && (s.innerHTML = "");
    const t = document.querySelector(
      this.config.roosterDiv + " .load-more-button"
    );
    t && (t.style.display = "none");
    const e = document.querySelector(
      this.config.roosterDiv + " .jobs-end-message"
    );
    e && (e.style.display = "none"), this.loadJobs();
  }
  loadMoreJobs() {
    this.config.hasMoreJobs &&
      !this.config.isLoading &&
      (this.config.currentPage++, this.loadJobs(!0));
  }
  async loadJobs(s = !1) {
    const t = this;
    t.config.isLoading = !0;
    const e = document.querySelector(this.config.roosterDiv + " .jobs-loading");
    e && (e.style.display = "block");
    const i = document.querySelector(
      this.config.roosterDiv + " .load-more-button"
    );
    i && (i.style.display = "none");
    try {
      const t = {};
      this.filters.searchTerm &&
        "" !== this.filters.searchTerm.trim() &&
        (t.keyword = this.filters.searchTerm.trim()),
        this.filters.class &&
          "" !== this.filters.class.trim() &&
          (t.class = this.filters.class.trim()),
        this.filters.subclass &&
          "" !== this.filters.subclass.trim() &&
          (t.subclass = this.filters.subclass.trim()),
        this.filters.department &&
          "" !== this.filters.department.trim() &&
          (t.department = this.filters.department.trim()),
        this.filters.jobType &&
          "" !== this.filters.jobType.trim() &&
          (t.job_type = this.filters.jobType.trim()),
        this.filters.subsidiary &&
          "" !== this.filters.subsidiary &&
          (t.subsidiary = parseInt(this.filters.subsidiary));
      const e = await fetch(
          (this.config.sandbox
            ? "https://dev-api.rooster-next-level.click/integration/"
            : "https://api.rooster.jobs/integration/") + "graphql",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query:
                "\n              query FetchCompanyJobs($companyId: ID!, $page: Int, $limit: Int, $filters: JobFilters) {\n                fetchAllJobsPublicFiltered(companyId: $companyId, page: $page, limit: $limit, filters: $filters) {\n                  jobs {\n                    id\n                    title\n                    department\n                    location\n                    jobType\n                    tags\n                    class\n                    subclass\n                    salaryRange {\n                      currency\n                      min\n                      max\n                      frequency\n                    }\n                    subsidiaryCompany {\n                      id\n                      companyName\n                    }\n                  }\n                  pagination {\n                    totalJobs\n                    totalPages\n                    currentPage\n                    hasNextPage\n                    hasPreviousPage\n                    pageSize\n                  }\n                }\n              }\n            ",
              variables: {
                companyId: this.config.companyId,
                page: this.config.currentPage,
                limit: this.config.pageSize,
                filters: Object.keys(t).length > 0 ? t : null,
              },
            }),
          }
        ),
        i = await e.json();
      if (i.data && i.data.fetchAllJobsPublicFiltered) {
        const { jobs: t, pagination: e } = i.data.fetchAllJobsPublicFiltered;
        this.config.totalJobs = e.totalJobs;
        const o = document.querySelector(
          this.config.roosterDiv + " .jobs-count"
        );
        o &&
          (o.textContent = `${e.totalJobs} job${
            1 !== e.totalJobs ? "s" : ""
          } found`),
          (this.config.hasMoreJobs = e.hasNextPage);
        const n = t.map((s) => ({
          id: s.id,
          title: s.title,
          department: s.department || "General",
          location: s.location || "Remote",
          jobType: s.jobType || "full-time",
          tags: s.tags || "[]",
          class: s.class || "",
          subclass: s.subclass || "",
          salaryRange: s.salaryRange,
          subsidiaryCompany: s.subsidiaryCompany,
        }));
        (this.jobs = s ? [...this.jobs, ...n] : n),
          s ? this.renderNewJobs(n) : this.renderJobs(!1);
        const r = document.querySelector(
          this.config.roosterDiv + " .load-more-button"
        );
        r && (r.style.display = this.config.hasMoreJobs ? "block" : "none");
        const a = document.querySelector(
          this.config.roosterDiv + " .jobs-end-message"
        );
        a && (a.style.display = this.config.hasMoreJobs ? "none" : "block");
      } else console.error("Failed to load jobs", i.errors);
    } catch (s) {
      console.error("Error loading jobs:", s);
    } finally {
      const s = document.querySelector(
        this.config.roosterDiv + " .jobs-loading"
      );
      s && (s.style.display = "none"), (t.config.isLoading = !1);
    }
  }
  renderJobs(s = !1) {
    const t = document.querySelector(this.config.roosterDiv + " .jobs-list");
    if (!t) return;
    s || (t.innerHTML = "");
    const e = this.generateJobsHTML(
      this.jobs,
      this.filters.searchTerm && this.filters.searchTerm.length > 0,
      this.config.sandbox
    );
    t.innerHTML = e;
  }
  renderNewJobs(s) {
    const t = document.querySelector(this.config.roosterDiv + " .jobs-list");
    if (!t) return;
    if (this.filters.searchTerm && this.filters.searchTerm.length > 0)
      for (const e of s) {
        const s = this.generateJobHTML(e, this.config.sandbox),
          i = document.createElement("div");
        (i.innerHTML = s), t.appendChild(i.firstChild);
      }
    else {
      const e = {};
      for (const i of s) {
        if (!e[i.department]) {
          if (!t.querySelector(`[data-job-department="${i.department}"]`)) {
            const s = document.createElement("div");
            (s.className = "rooster-department-header"),
              s.setAttribute("data-job-department", i.department);
            const e = document.createElement("h3");
            (e.textContent = i.department), s.appendChild(e), t.appendChild(s);
          }
          e[i.department] = !0;
        }
        const s = this.generateJobHTML(i, this.config.sandbox),
          o = document.createElement("div");
        (o.innerHTML = s), t.appendChild(o.firstChild);
      }
    }
  }
  generateJobsHTML(s, t, e) {
    if (0 === s.length)
      return '<div class="no-jobs-message">No jobs found matching your criteria</div>';
    let i = "";
    if (t) for (const t of s) i += this.generateJobHTML(t, e);
    else {
      const t = {},
        o = [];
      for (const e of s)
        t[e.department]
          ? t[e.department].push(e)
          : (o.push(e.department), (t[e.department] = [e]));
      for (const s of o) {
        (i += `<div class="rooster-department-header" data-job-department="${s}">`),
          (i += `<h3>${s}</h3>`),
          (i += "</div>");
        for (const o of t[s]) i += this.generateJobHTML(o, e);
      }
    }
    return i;
  }
  generateJobHTML(s, t) {
    const e = this.filterOptions.jobTypes.find((t) => t.value === s.jobType),
      i = e ? e.label : "";
    let o = `<div class="rooster-job" data-job-department="${s.department}" data-job-employment-type="${s.jobType}" data-job-class="${s.class}" data-job-subclass="${s.subclass}">`;
    if (
      ((o += `<a href="${this.getBaseURL()}jobs/${s.id}?source=esu_website">`),
      (o += `<h3>${s.title}</h3>`),
      (o += "</a>"),
      (o += '<div class="data-row">'),
      (o += `<span class="inline-value" data-department="${s.department}">${s.department}</span>`),
      (o += `<span class="inline-value" data-location="${s.location}">${s.location}</span>`),
      (o += `<span class="inline-value" data-employment-type="${s.jobType}">${i}</span>`),
      s.salaryRange)
    ) {
      const { currency: t, min: e, max: i, frequency: n } = s.salaryRange;
      o += `<span class="inline-value" data-salary>${t} ${e.toLocaleString(
        "en-US"
      )} - ${i.toLocaleString("en-US")}/${n}</span>`;
    }
    return (
      (o += "</div>"),
      (o += `<a href="${this.getBaseURL()}jobs/${
        s.id
      }?source=esu_website" class="rooster-btn-apply">Apply Now</a>`),
      (o += "</div>"),
      o
    );
  }
  getBaseURL() {
    return this.config.sandbox
      ? "https://jobs.rooster-next-level.click/"
      : "https://boards.rooster.jobs/";
  }
}
