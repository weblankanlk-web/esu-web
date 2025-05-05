"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import { graphQLClient } from "@/lib/graphql-client";
import { validate } from "graphql";
import { Audio, FallingLines, ThreeDots } from "react-loader-spinner";
import CourseItem from "@/components/CourseItem/CourseItem";
import Breadrumb from "@/components/Breadcrumb/Breadcrumb";
import "./style.scss";

const COURSE_TYPES_QUERY = `
query {
    courseTypes  {
      nodes {
        id
        name
        slug
      }
    }
}`;

type CourseType = {
  id: string;
  name: string;
  slug: string;
};

const BRANCH_TYPES_QUERY = `
query {
  branchTypes (first: 100) {
    nodes {
      id
      name
      slug
    }
  }
}
`;

type BranchType = {
  id: string;
  name: string;
  slug: string;
};

const SCHOOL_TYPES_QUERY = `
query{
  schoolTypes (first: 100) {
    nodes {
      id
      name
      slug
    }
  }
}
`;

type SchoolType = {
  id: string;
  name: string;
  slug: string;
};

const DELIVERY_MODE_QUERY = `
query {
  deliveryModeTypes(first: 100) {
    nodes {
      id
      name
      slug
    }
  }
}
`;

type DeliveryModeTypes = {
  id: string;
  name: string;
  slug: string;
};

const COURSE_QUERY = `
query {
  courses (first: 100) {
    nodes {
      id
      title
      content
      slug
      featuredImage {
        node {
          id
          slug
          uri
          mediaItemUrl
        }
      }
      courses {
        courseId
        courseCode
        hideCount
        studentsCount
        partnerUniversity {
          node {
            id
          }
        }
        title
        subTitle
        description
        overview
        yearTitle {
          fieldGroupName
          modules
        }
        entryRequirements
        documents
        lecturePanelDescription
      }
    
      schoolTypes {
        nodes {
          slug
        }
      }
      courseTypes {
        nodes {
          slug
        }
      }
      deliveryModeTypes {
        nodes {
          slug
        }
      }
      branchTypes {
        nodes {
          slug
        }
      }
    }
  }
}
`;

type Courses = {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: {
    node: {
      id: string;
      slug: string;
      uri: string;
      mediaItemUrl: string;
    };
  } | null;
  courses: {
    courseId: string;
    courseCode: string;
    hideCount: boolean;
    studentsCount: string | null;
    partnerUniversity: {
      node: {
        id: string;
      };
    } | null;
    title: string | null;
    subTitle: string | null;
    description: string | null;
    overview: string | null;
    yearTitle: {
      fieldGroupName: string;
      modules: string;
    } | null;
    entryRequirements: string | null;
    documents: string | null;
    lecturePanelDescription: string | null;
  };
  schoolTypes?: { nodes: { slug: string }[] };
  courseTypes?: { nodes: { slug: string }[] };
  deliveryModeTypes?: { nodes: { slug: string }[] };
  branchTypes?: { nodes: { slug: string }[] };
};

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const [courseTypes, setCourseTypes] = useState<CourseType[]>([]);
  const [branchTypes, setBranchTypes] = useState<BranchType[]>([]);
  const [schoolTypes, setSchoolTypes] = useState<SchoolType[]>([]);
  const [deliveryModeTypes, setDeliveryModeTypes] = useState<
    DeliveryModeTypes[]
  >([]);

  const [allCourses, setAllCourses] = useState<Courses[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Courses[]>([]);
  // console.log("allCourses", allCourses);

  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;

  const [loadingSchools, setLoadingSchools] = useState(true);
  const [loadingPrograms, setLoadingPrograms] = useState(true);
  const [loadingModes, setLoadingModes] = useState(true);
  const [loadingBranches, setLoadingBranches] = useState(true);

  const handleCheckboxChange = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleClearFilters = () => {
    setSelectedSchools([]);
    setSelectedPrograms([]);
    setSelectedModes([]);
    setSelectedBranches([]);
    setSearch("");
  };

  // console.log("selectedSchools", selectedSchools);
  // console.log("selectedPrograms", selectedPrograms);
  // console.log("selectedModes", selectedModes);
  // console.log("selectedBranches", selectedBranches);

  useEffect(() => {
    let results = [...allCourses];

    if (search) {
      results = results.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedSchools.length > 0) {
      results = results.filter((course) =>
        course.schoolTypes?.nodes?.some((s) => selectedSchools.includes(s.slug))
      );
    }

    if (selectedPrograms.length > 0) {
      results = results.filter((course) =>
        course.courseTypes?.nodes?.some((c) =>
          selectedPrograms.includes(c.slug)
        )
      );
    }

    if (selectedModes.length > 0) {
      results = results.filter((course) =>
        course.deliveryModeTypes?.nodes?.some((d) =>
          selectedModes.includes(d.slug)
        )
      );
    }

    if (selectedBranches.length > 0) {
      results = results.filter((course) =>
        course.branchTypes?.nodes?.some((b) =>
          selectedBranches.includes(b.slug)
        )
      );
    }

    setFilteredCourses(results);
  }, [
    search,
    selectedSchools,
    selectedPrograms,
    selectedModes,
    selectedBranches,
  ]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await graphQLClient.request<{
          courses: { nodes: Courses[] };
        }>(COURSE_QUERY);

        setAllCourses(data.courses.nodes);
      } catch (error) {
        console.error("Error fetching course types:", error);
      }
    }

    fetchCourses();
  }, [allCourses]);

  useEffect(() => {
    async function fetchCourseTypes() {
      try {
        setLoadingPrograms(true);
        const data = await graphQLClient.request<{
          courseTypes: { nodes: CourseType[] };
        }>(COURSE_TYPES_QUERY);
        setCourseTypes(data.courseTypes.nodes);
        setLoadingPrograms(false);
      } catch (error) {
        console.error("Error fetching course types:", error);
      }
    }

    async function fetchBranchTypes() {
      try {
        setLoadingBranches(true);
        const data = await graphQLClient.request<{
          branchTypes: { nodes: BranchType[] };
        }>(BRANCH_TYPES_QUERY);

        setBranchTypes(data.branchTypes.nodes);
        setLoadingBranches(false);
      } catch (error) {
        console.error("Error fetching branch types:", error);
      }
    }

    async function fetchSchoolTypes() {
      try {
        setLoadingSchools(true);
        const data = await graphQLClient.request<{
          schoolTypes: { nodes: SchoolType[] };
        }>(SCHOOL_TYPES_QUERY);

        setSchoolTypes(data.schoolTypes.nodes);
        setLoadingSchools(false);
      } catch (error) {
        console.error("Error fetching school types:", error);
      }
    }

    async function fetchDeliveryModeTypes() {
      try {
        setLoadingModes(true);
        const data = await graphQLClient.request<{
          deliveryModeTypes: { nodes: DeliveryModeTypes[] };
        }>(DELIVERY_MODE_QUERY);

        setDeliveryModeTypes(data.deliveryModeTypes.nodes);
        setLoadingModes(false);
      } catch (error) {
        console.error("Error fetching delivery mode types:", error);
      }
    }

    fetchCourseTypes();
    fetchBranchTypes();
    fetchSchoolTypes();
    fetchDeliveryModeTypes();
  }, []);

  // console.log("filteredCourses", filteredCourses);

  const paginatedCourses =
    filteredCourses.length > 0 ? filteredCourses : allCourses;

  return (
    <>
      <Breadrumb />

      <section className="simple-padding-bottom dark-lightmode dark-font-change">
        <div className="small-middle-wrap">
          <h2 className="section-heading section-heading--black section-heading--underline section-heading--underline--center">
            <span>our courses</span>
          </h2>

          <div className="landing-wrap-top">
            <div className="landing-results landing-results-top">
              <div className="search-form-ajax">
                <input
                  type="text"
                  name="search-keyword"
                  className="type-check"
                  placeholder="Search Courses"
                  id="search-key"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button id="search-form-ajax-submit" type="submit">
                  <Image
                    src="/images/search.png"
                    width={20}
                    height={20}
                    alt="search"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="landing-wrap">
            {/* Filter Section */}
            <div className="landing-filter">
              {search ||
              selectedSchools.length ||
              selectedPrograms.length ||
              selectedModes.length ||
              selectedBranches.length ? (
                <div>
                  <p id="search-breif">
                    <span id="result-count">{filteredCourses.length} </span>
                    {search && <span id="result-keyword">"{search}"</span>}
                    Search Results for:
                    {selectedSchools.length > 0 && (
                      <span> | School(s): {selectedSchools.join(", ")}</span>
                    )}
                    {selectedPrograms.length > 0 && (
                      <span> | School(s): {selectedPrograms.join(", ")}</span>
                    )}
                    {selectedModes.length > 0 && (
                      <span> | School(s): {selectedModes.join(", ")}</span>
                    )}
                    {selectedBranches.length > 0 && (
                      <span> | School(s): {selectedBranches.join(", ")}</span>
                    )}
                  </p>
                </div>
              ) : null}

              <div className="d-flex filter-clear-wrap justify-content-between align-items-center">
                <h5 className="desktop-div">filter by</h5>
                <button id="filter-toggle" className="mobile-div">
                  Select Filter
                </button>
                <button
                  className="clear-filter-btn"
                  id="clear-filters-btn"
                  onClick={handleClearFilters}
                >
                  Clear
                </button>
              </div>

              <ul id="selected-checks"></ul>
              <div className="att-box-wrapper">
                <div className="attribute-box">
                  <h6>School</h6>
                  {loadingSchools ? (
                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ThreeDots
                        visible={true}
                        height="60"
                        width="60"
                        color="#02AEC9"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  ) : (
                    schoolTypes.map((type) => (
                      <div className="attribute-box-check" key={type.id}>
                        <input
                          className="type-check"
                          type="checkbox"
                          value={type.slug}
                          checked={selectedSchools.includes(type.slug)}
                          onChange={() =>
                            handleCheckboxChange(
                              type.slug,
                              selectedSchools,
                              setSelectedSchools
                            )
                          }
                        />
                        <label htmlFor="">{type.name}</label>
                      </div>
                    ))
                  )}
                </div>
                <div className="attribute-box">
                  <h6>program</h6>

                  {loadingPrograms ? (
                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ThreeDots
                        visible={true}
                        height="60"
                        width="60"
                        color="#02AEC9"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  ) : (
                    courseTypes.map((type) => (
                      <div className="attribute-box-check" key={type.id}>
                        <input
                          className="type-check"
                          type="checkbox"
                          value={type.slug}
                          checked={selectedPrograms.includes(type.slug)}
                          onChange={() =>
                            handleCheckboxChange(
                              type.slug,
                              selectedPrograms,
                              setSelectedPrograms
                            )
                          }
                        />
                        <label htmlFor="">{type.name}</label>
                      </div>
                    ))
                  )}
                </div>
                <div className="attribute-box">
                  <h6>delivery mode</h6>
                  {loadingModes ? (
                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ThreeDots
                        visible={true}
                        height="60"
                        width="60"
                        color="#02AEC9"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  ) : (
                    deliveryModeTypes.map((type) => (
                      <div className="attribute-box-check" key={type.id}>
                        <input
                          className="type-check"
                          type="checkbox"
                          value={type.slug}
                          checked={selectedModes.includes(type.slug)}
                          onChange={() =>
                            handleCheckboxChange(
                              type.slug,
                              selectedModes,
                              setSelectedModes
                            )
                          }
                        />
                        <label htmlFor="">{type.name}</label>
                      </div>
                    ))
                  )}
                </div>
                <div className="attribute-box">
                  <h6>Branch</h6>
                  {loadingBranches ? (
                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ThreeDots
                        visible={true}
                        height="60"
                        width="60"
                        color="#02AEC9"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  ) : (
                    branchTypes.map((type) => (
                      <div className="attribute-box-check" key={type.id}>
                        <input
                          className="type-check"
                          type="checkbox"
                          value={type.slug}
                          checked={selectedBranches.includes(type.slug)}
                          onChange={() =>
                            handleCheckboxChange(
                              type.slug,
                              selectedBranches,
                              setSelectedBranches
                            )
                          }
                        />
                        <label htmlFor="">{type.name}</label>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Course List */}
            <div className="landing-results">
              <div className="landing-results-inner">
                {paginatedCourses
                  .slice(
                    (currentPage - 1) * coursesPerPage,
                    currentPage * coursesPerPage
                  )
                  .map((course) => (
                    <CourseItem
                      course={{
                        ...course,
                        featuredImage: course.featuredImage
                          ? {
                              node: {
                                mediaItemUrl:
                                  course.featuredImage.node.mediaItemUrl,
                              },
                            }
                          : undefined,
                        courses: {
                          ...course.courses,
                          studentsCount: course.courses.studentsCount
                            ? parseInt(course.courses.studentsCount, 10)
                            : undefined,
                        },
                      }}
                    />
                  ))}

                <div className="pagination-div">
                  {/* Previous Button */}
                  {currentPage > 1 && (
                    <button
                      className="page-numbers"
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      &lt;&lt;
                    </button>
                  )}

                  {/* Page Numbers */}
                  {Array.from(
                    {
                      length: Math.ceil(
                        filteredCourses.length / coursesPerPage
                      ),
                    },
                    (_, index) => (
                      <button
                        key={index + 1}
                        className={`page-numbers ${
                          currentPage === index + 1 ? "current" : ""
                        }`}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    )
                  )}

                  {/* Next Button */}
                  {currentPage <
                    Math.ceil(filteredCourses.length / coursesPerPage) && (
                    <button
                      className="page-numbers next"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      &gt;&gt;
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
