"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { graphQLClient } from "@/lib/graphql-client";
import { ThreeDots } from "react-loader-spinner";
import CourseItem from "@/components/CourseItem/CourseItem";
import Breadrumb from "@/components/Breadcrumb/Breadcrumb";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";
import {
  ALL_COURSE_QUERY,
  BRANCH_TYPES_QUERY,
  COURSE_TYPES_QUERY,
  DELIVERY_MODE_QUERY,
  SCHOOL_TYPES_QUERY,
} from "@/queries/queries";
import { FaTimes } from "react-icons/fa";
import {
  CourseList,
  FilterPanel,
  Pagination,
  SearchBar,
} from "@/components/Courses";

type CourseType = {
  id: string;
  name: string;
  slug: string;
};

type BranchType = {
  id: string;
  name: string;
  slug: string;
};

type SchoolType = {
  id: string;
  name: string;
  slug: string;
};

type DeliveryModeTypes = {
  id: string;
  name: string;
  slug: string;
};

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
  schoolTypes?: { nodes: { slug: string; name: string }[] };
  courseTypes?: { nodes: { slug: string; name: string }[] };
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

  // const [loadingSchools, setLoadingSchools] = useState(true);
  // const [loadingPrograms, setLoadingPrograms] = useState(true);
  // const [loadingModes, setLoadingModes] = useState(true);
  // const [loadingBranches, setLoadingBranches] = useState(true);

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // const handleCheckboxChange = (
  //   value: string,
  //   selected: string[],
  //   setSelected: React.Dispatch<React.SetStateAction<string[]>>
  // ) => {
  //   if (selected.includes(value)) {
  //     setSelected(selected.filter((item) => item !== value));
  //   } else {
  //     setSelected([...selected, value]);
  //   }
  // };

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
        }>(ALL_COURSE_QUERY);

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
        // setLoadingPrograms(true);
        const data = await graphQLClient.request<{
          courseTypes: { nodes: CourseType[] };
        }>(COURSE_TYPES_QUERY);
        setCourseTypes(data.courseTypes.nodes);
        // setLoadingPrograms(false);
      } catch (error) {
        console.error("Error fetching course types:", error);
      }
    }

    async function fetchBranchTypes() {
      try {
        // setLoadingBranches(true);
        const data = await graphQLClient.request<{
          branchTypes: { nodes: BranchType[] };
        }>(BRANCH_TYPES_QUERY);

        setBranchTypes(data.branchTypes.nodes);
        // setLoadingBranches(false);
      } catch (error) {
        console.error("Error fetching branch types:", error);
      }
    }

    async function fetchSchoolTypes() {
      try {
        // setLoadingSchools(true);
        const data = await graphQLClient.request<{
          schoolTypes: { nodes: SchoolType[] };
        }>(SCHOOL_TYPES_QUERY);

        setSchoolTypes(data.schoolTypes.nodes);
        // setLoadingSchools(false);
      } catch (error) {
        console.error("Error fetching school types:", error);
      }
    }

    async function fetchDeliveryModeTypes() {
      try {
        // setLoadingModes(true);
        const data = await graphQLClient.request<{
          deliveryModeTypes: { nodes: DeliveryModeTypes[] };
        }>(DELIVERY_MODE_QUERY);

        setDeliveryModeTypes(data.deliveryModeTypes.nodes);
        // setLoadingModes(false);
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

  // const paginatedCourses =
  //   filteredCourses.length > 0 ? filteredCourses : allCourses;

  const { color } = useTheme();

  const toggleMobileFilter = () => {
    setMobileFilterOpen((prev) => !prev);
  };

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <>
      <Breadrumb />

      <section className="simple-padding-bottom dark-lightmode dark-font-change">
        <div className="small-middle-wrap">
          <h2 className="section-heading section-heading--black">
            our <span>courses</span>
          </h2>

          <div className="landing-wrap-top">
            <div className="landing-results landing-results-top">
              <SearchBar search={search} setSearch={setSearch} />
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
                      <span> | Facultie(s): {selectedSchools.join(", ")}</span>
                    )}
                    {selectedPrograms.length > 0 && (
                      <span> | Program(s): {selectedPrograms.join(", ")}</span>
                    )}
                    {selectedModes.length > 0 && (
                      <span> | Mode(s): {selectedModes.join(", ")}</span>
                    )}
                    {selectedBranches.length > 0 && (
                      <span> | Branche(s): {selectedBranches.join(", ")}</span>
                    )}
                  </p>
                </div>
              ) : null}

              <div className="d-flex filter-clear-wrap justify-content-between align-items-center">
                <h5 className="desktop-div">filter by</h5>
                <button
                  id="filter-toggle"
                  className="mobile-div"
                  style={{ backgroundColor: color }}
                  onClick={toggleMobileFilter}
                >
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
              <div
                className={`att-box-wrapper ${
                  mobileFilterOpen ? "show-mobile-filter" : "hide-mobile-filter"
                }`}
              >
                <button
                  className="mobile-filter-btn"
                  onClick={toggleMobileFilter}
                >
                  <FaTimes />
                </button>
                <FilterPanel
                  title="Faculties"
                  options={schoolTypes}
                  selected={selectedSchools}
                  setSelected={setSelectedSchools}
                  loading={false}
                />
                <FilterPanel
                  title="Programs"
                  options={courseTypes}
                  selected={selectedPrograms}
                  setSelected={setSelectedPrograms}
                  loading={false}
                />
                <FilterPanel
                  title="Modes"
                  options={deliveryModeTypes}
                  selected={selectedModes}
                  setSelected={setSelectedModes}
                  loading={false}
                />
                <FilterPanel
                  title="Branches"
                  options={branchTypes}
                  selected={selectedBranches}
                  setSelected={setSelectedBranches}
                  loading={false}
                />
              </div>
            </div>

            {/* Course List */}
            <div className="landing-results">
              <div className="landing-results-inner">
                <CourseList
                  courses={filteredCourses}
                  currentPage={currentPage}
                  coursesPerPage={coursesPerPage}
                />

                {/* {paginatedCourses
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
                  ))} */}

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />

                {/* <div className="pagination-div">
                  {currentPage > 1 && (
                    <button
                      className="page-numbers"
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      &lt;&lt;
                    </button>
                  )}

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

                  {currentPage <
                    Math.ceil(filteredCourses.length / coursesPerPage) && (
                    <button
                      className="page-numbers next"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      &gt;&gt;
                    </button>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
