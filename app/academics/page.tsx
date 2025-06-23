"use client";

import React, { useState, useEffect } from "react";
import { graphQLClient } from "@/lib/graphql-client";
import Breadrumb from "@/components/common/Breadcrumb/Breadcrumb";
import "./style.scss";
import { GET_ALL_ACADEMIC_STAFF } from "@/common/queries/query";
import { Courses, Staffs } from "@/common/types/type";
import { CourseList, Pagination, SearchBar } from "@/components/pages/Courses";
import Filter from "@/components/pages/Courses/Filter/Filter";
import FaculityCard from "@/components/pages/Faculty/FaculityCard/FaculityCard";
import MemberCardItem from "@/components/pages/Faculty/MembersLanding/MemberCard/MemberCard";
import { useTheme } from "@/lib/ThemeContext";
import BannerTitleWithOutImage from "@/components/common/BannerTitleWithOutImage/BannerTitleWithOutImage";
import Preloader from "@/components/common/Preloader/Preloader";

export default function AcademicsPage() {
  const [search, setSearch] = useState("");

  const [allAcademics, setAllAcademics] = useState<Staffs[]>([]);
  const [filteredAcademics, setFilteredAcademics] = useState<Staffs[]>([]);

  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  // const coursesPerPage = 12;

  const [academicsPerPage, setAcademicsPerPage] = useState(12);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updatedAcademicsPerPage = () => {
      if (window.innerWidth <= 768) {
        setAcademicsPerPage(6);
      } else {
        setAcademicsPerPage(12);
      }
    };

    updatedAcademicsPerPage();

    window.addEventListener("resize", updatedAcademicsPerPage);

    return () => {
      window.removeEventListener("resize", updatedAcademicsPerPage);
    };
  }, []);

  useEffect(() => {
    let results = [...allAcademics];

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

    setFilteredAcademics(results);
  }, [search, selectedSchools, allAcademics]);

  useEffect(() => {
    async function fetchAcademics() {
      try {
        const data = await graphQLClient.request<{
          staffs: { nodes: Staffs[] };
        }>(GET_ALL_ACADEMIC_STAFF);

        const strategicTeam = [
          "Dr. Dayan Rajapakse",
          "Mr. Nishan Sembacuttiaratchy",
          "Mr. Amila Bandara",
        ];

        const filteredAcademics = data.staffs.nodes.filter(
          (staff) => !strategicTeam.includes(staff.title)
        );

        setAllAcademics(filteredAcademics);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching academics:", error);
      }
    }

    fetchAcademics();
  }, []);

  const totalPages = Math.ceil(filteredAcademics.length / academicsPerPage);

  if (isLoading) return <Preloader />;

  return (
    <>
      <Breadrumb />

      <section className="simple-padding-bottom academics-page-section acadamic-member-section">
        <div className="small-middle-wrap">
          <BannerTitleWithOutImage title="our academics" subtitle="" />

          <div className="landing-wrap-top">
            <div className="landing-results landing-results-top">
              <SearchBar search={search} setSearch={setSearch} />
            </div>
          </div>

          <div className="landing-wrap">
            {/* Filter Section */}
            <Filter
              setSelectedSchools={(schools: string[]) => {
                setSelectedSchools(schools);
                setCurrentPage(1);
              }}
              setSelectedPrograms={null}
              setSelectedModes={null}
              setSelectedBranches={null}
              setSearch={setSearch}
              search={search}
              selectedSchools={selectedSchools}
              selectedPrograms={null}
              selectedModes={null}
              selectedBranches={null}
              filteredCourses={filteredAcademics}
            />

            <div className="landing-results">
              <div className="landing-results-inner academics-mamber-group">
                {filteredAcademics.length > 0 &&
                  filteredAcademics
                    .slice(
                      (currentPage - 1) * academicsPerPage,
                      currentPage * academicsPerPage
                    )
                    .map((academicsItem, index) => (
                      <MemberCardItem
                        memberData={academicsItem}
                        key={`${academicsItem.title}-${index}`}
                      />
                    ))}

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
