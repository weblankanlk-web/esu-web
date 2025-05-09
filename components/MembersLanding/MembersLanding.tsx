"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import MemberCardItem from "./MemberCard/MemberCard"; 
import { graphQLClient } from "@/lib/graphql-client";

interface StaffMember {
  title: string;
  staffAcf: {
    designation: string;
    message: string;
  };
  featuredImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  };
  staffType: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
}

interface MembersLandingProps {
  slug: string;
  sectinTitle1: string;
  sectinTitle2: string;
  fontFamily: string;
  fontColor: string;
}

const MEMBERS_QUERY = `
  query GetStaffsByType($slug: [String]) {
    staffs(where: { staffTypeSlug: $slug }) {
      nodes {
        title
        staffAcf {
          designation
          message
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        staffType {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

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
        const data = await graphQLClient.request<{ staffs: { nodes: StaffMember[] } }>(
          MEMBERS_QUERY,
          { slug: [slug] } // Filter by the selected faculty type
        );

        // Filter out members with staffType 'dean'
        const filtered = data.staffs.nodes.filter(
          (staff) =>
            !staff.staffType.nodes.some((type) => type.slug === "dean")
        );

        setFacultyMembers(filtered);
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
        <h2 className="dean-message-title" style={{ fontFamily }}>
          {sectinTitle1} <span style={{ color: fontColor }}>{sectinTitle2}</span>
        </h2>

        {facultyMembers.length === 0 ? (
          <p>No staff members found for this department.</p>
        ) : (
          facultyMembers.map((member, index) => (
            <MemberCardItem
              key={index}
              MemberName={member.title}
              MemberDesignation={member.staffAcf.designation}
              MemberQualifications={member.staffAcf.message}
              MemberFeaturedImage={member.featuredImage?.node}
            />
          ))
        )}
      </div>
    </section>
    </>
 
  );
};

export default MembersLanding;
