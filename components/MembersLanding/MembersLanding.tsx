"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import MemberCardItem from "./MemberCard/MemberCard";
import { graphQLClient } from "@/lib/graphql-client";
import { MEMBERS_QUERY } from "@/common/queries/query";
import { StaffMember } from "@/common/types/type";

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

  useEffect(() => {
    const fetchFacultyMembers = async () => {
      try {
        const data = await graphQLClient.request<{
          schoolType: {
            staffs: {
              nodes: StaffMember[];
            }
          }
        }>(MEMBERS_QUERY, { slug });

        const allMembers = data.schoolType?.staffs?.nodes || [];

        const filteredMembers = allMembers.filter(
          (member) =>
            !member.slug.toLowerCase().includes("dean") &&
            member.title.toLowerCase() !== "dean"
        );

        setFacultyMembers(filteredMembers);
      } catch (err) {
        console.error("❌ Error fetching staff members:", err);
      }
    };

    fetchFacultyMembers();
  }, [slug]);

  return (

    <>
      <section className="faculty-member-section">
        <div className="faculty-member-wrap">
          <h2 className="dean-message-title">
            {sectinTitle1} <span style={{ color: fontColor }}>{sectinTitle2}</span>
          </h2>
          <div className="members-wrap d-flex flex-wrap justify-content-start gap-1">
              {facultyMembers.length === 0 ? (
                <p>No staff members found for this department.</p>
              ) : (
                facultyMembers.map((member, index) => (
                  <MemberCardItem
                    key={index}
                    memberData={member}
                  />
                ))
              )}
          </div>

        </div>
      </section>
    </>

  );
};

export default MembersLanding;
