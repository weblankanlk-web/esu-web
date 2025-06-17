"use client";

import React, { useState, useEffect } from "react";
import { graphQLClient } from "@/lib/graphql-client";
import Breadrumb from "@/components/common/Breadcrumb/Breadcrumb";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";
import {
  ALL_COURSE_QUERY,
  BRANCH_TYPES_QUERY,
  COURSE_TYPES_QUERY,
  DELIVERY_MODE_QUERY,
  SCHOOL_TYPES_QUERY,
} from "@/common/queries/query";
import {
  CourseType,
  BranchType,
  SchoolType,
  DeliveryModeTypes,
  Courses,
} from "@/common/types/type";
import {
  CourseList,
  FilterPanel,
  Pagination,
  SearchBar,
} from "@/components/pages/Courses";
import { FaTimes } from "react-icons/fa";
import TitleText from "../../components/common/TextColorChange/TextColorChange";
import BannerTitleWithOutImage from "@/components/common/BannerTitleWithOutImage/BannerTitleWithOutImage";
import Filter from "@/components/pages/Courses/Filter/Filter";
import Preloader from "@/components/common/Preloader/Preloader";
import { useSearchParams } from "next/navigation";

export default function CoursesPage() {
  const { setColor } = useTheme();

  const [search, setSearch] = useState("");

  const [courseTypes, setCourseTypes] = useState<CourseType[]>([]);
  const [branchTypes, setBranchTypes] = useState<BranchType[]>([]);
  const [schoolTypes, setSchoolTypes] = useState<SchoolType[]>([]);
  const [deliveryModeTypes, setDeliveryModeTypes] = useState<
    DeliveryModeTypes[]
  >([]);

  const [allCourses, setAllCourses] = useState<Courses[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Courses[]>([]);

  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [coursesPerPage, setCoursesPerPage] = useState(12);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updatedCoursesPerPage = () => {
      if (window.innerWidth <= 768) {
        setCoursesPerPage(6);
      } else {
        setCoursesPerPage(12);
      }
    };

    updatedCoursesPerPage();

    window.addEventListener("resize", updatedCoursesPerPage);

    return () => {
      window.removeEventListener("resize", updatedCoursesPerPage);
    };
  }, []);

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
    allCourses,
  ]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await graphQLClient.request<{
          courses: { nodes: Courses[] };
        }>(ALL_COURSE_QUERY);

        const filteredByBranch = data.courses.nodes.filter(
          (course) => (course.branchTypes?.nodes ?? []).length > 0
        );

        setAllCourses(filteredByBranch);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching course types:", error);
      }
    }

    fetchCourses();
  }, []);

  useEffect(() => {
    async function fetchCourseTypes() {
      try {
        const data = await graphQLClient.request<{
          courseTypes: { nodes: CourseType[] };
        }>(COURSE_TYPES_QUERY);

        // Filter out undesired course types
        const excludedNames = [
          "Certificate Level",
          "Diploma Level",
          "Higher National Certificate",
          "Higher National Diploma Level",
        ];
        const filteredTypes = data.courseTypes.nodes.filter(
          (type) => !excludedNames.includes(type.name)
        );

        setCourseTypes(filteredTypes);
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

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty");
  const programs = searchParams.get("programs");

  const [filtersReady, setFiltersReady] = useState(false);

  useEffect(() => {
    async function fetchAllFilters() {
      try {
        const [
          courseTypeData,
          branchTypeData,
          schoolTypeData,
          deliveryModeData,
        ] = await Promise.all([
          graphQLClient.request<{ courseTypes: { nodes: CourseType[] } }>(
            COURSE_TYPES_QUERY
          ),
          graphQLClient.request<{ branchTypes: { nodes: BranchType[] } }>(
            BRANCH_TYPES_QUERY
          ),
          graphQLClient.request<{ schoolTypes: { nodes: SchoolType[] } }>(
            SCHOOL_TYPES_QUERY
          ),
          graphQLClient.request<{
            deliveryModeTypes: { nodes: DeliveryModeTypes[] };
          }>(DELIVERY_MODE_QUERY),
        ]);

        const excludedNames = [
          "Certificate Level",
          "Diploma Level",
          "Higher National Certificate",
          "Higher National Diploma Level",
        ];

        setCourseTypes(
          courseTypeData.courseTypes.nodes.filter(
            (type) => !excludedNames.includes(type.name)
          )
        );

        setBranchTypes(branchTypeData.branchTypes.nodes);
        setSchoolTypes(schoolTypeData.schoolTypes.nodes);
        setDeliveryModeTypes(deliveryModeData.deliveryModeTypes.nodes);

        setFiltersReady(true);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    }

    fetchAllFilters();
  });

  useEffect(() => {
    if (!filtersReady) return;

    if (faculty) {
      setSelectedSchools([faculty]);
    }
    if (programs) {
      setSelectedPrograms([programs]);
    }
  }, [filtersReady, faculty, programs]);

  console.log(selectedSchools);

  if (isLoading) return <Preloader />;

  return (
    <>
      <Breadrumb />

      <section className="simple-padding-bottom course-section our-couses-section">
        <div className="small-middle-wrap">
          <BannerTitleWithOutImage title="Our Courses" subtitle="" />

          <div className="landing-wrap-top" data-aos="fade-up">
            <div className="landing-results landing-results-top">
              <SearchBar search={search} setSearch={setSearch} />
            </div>
          </div>

          <div className="landing-wrap">
            {/* Filter Section */}
            <Filter
              setSelectedSchools={setSelectedSchools}
              setSelectedPrograms={setSelectedPrograms}
              setSelectedModes={setSelectedModes}
              setSelectedBranches={setSelectedBranches}
              setSearch={setSearch}
              search={search}
              selectedSchools={selectedSchools}
              selectedPrograms={selectedPrograms}
              selectedModes={selectedModes}
              selectedBranches={selectedBranches}
              filteredCourses={filteredCourses}
            />
            <div className="landing-results">
              <div className="landing-results-inner">
                {/* Course List */}
                <CourseList
                  courses={filteredCourses}
                  currentPage={currentPage}
                  coursesPerPage={coursesPerPage}
                />

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
