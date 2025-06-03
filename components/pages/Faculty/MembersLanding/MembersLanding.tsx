"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import MemberCardItem from "./MemberCard/MemberCard";
import { graphQLClient } from "@/lib/graphql-client";
import { MEMBERS_QUERY } from "@/common/queries/query";
import { StaffMember } from "@/common/types/type";
import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import { Pagination } from "../../Courses";

interface MembersLandingProps {
  slug: string;
  sectinTitle1: string;
  sectinTitle2: string;
  fontFamily: string;
  fontColor: string;
}

const MembersLanding: React.FC<MembersLandingProps> = ({
  slug,
  fontFamily,
  fontColor,
  sectinTitle1,
  sectinTitle2,
}) => {
  const [facultyMembers, setFacultyMembers] = useState<StaffMember[]>([]);

  const facultyMembersPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchFacultyMembers = async () => {
      try {
        const data = await graphQLClient.request<{
          schoolType: {
            staffs: {
              nodes: StaffMember[];
            };
          };
        }>(MEMBERS_QUERY, { slug });

        const allMembers = data.schoolType?.staffs?.nodes || [];

        console.log("All members", allMembers);

        const filteredMembers = allMembers.filter((member) => {
          const slugs = member.staffTypes?.nodes?.map((node: any) =>
            node.slug.toLowerCase()
          );

          const title = member.title.toLowerCase();

          const isDean = slugs?.includes("dean") || title === "dean";
          const isHead =
            slugs?.includes("head-of-department") ||
            title === "head-of-department";

          return !isDean && !isHead;
        });

        console.log("Filtered Member", filteredMembers);

        setFacultyMembers(filteredMembers);
      } catch (err) {
        console.error("❌ Error fetching staff members:", err);
      }
    };

    fetchFacultyMembers();
  }, [slug]);

  const totalPages = Math.ceil(facultyMembers.length / facultyMembersPerPage);

  const paginationMembers = facultyMembers.slice(
    (currentPage - 1) * facultyMembersPerPage,
    currentPage * facultyMembersPerPage
  );

  return (
    <section className="faculty-member-section">
      <div className="faculty-member-wrap">
        {/* <h2 className="dean-message-title">
          {sectinTitle1}{" "}
          <span style={{ color: fontColor }}>{sectinTitle2}</span>
        </h2> */}
        <div className="members-wrap title-wrap mb-5">
          <TitleLarge title={sectinTitle1} subtitle={sectinTitle2} />
        </div>
        <div className="members-wrap d-flex flex-wrap  ">
          {paginationMembers.length === 0 ? (
            <p>No staff members found for this department.</p>
          ) : (
            paginationMembers.map((member, index) => (
              <MemberCardItem key={index} memberData={member} />
            ))
          )}

          {totalPages && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MembersLanding;
