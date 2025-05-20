"use client";

import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import React, { useEffect, useState } from "react";
import "./style.scss";
import MemberCardItem from "../../Faculty/MembersLanding/MemberCard/MemberCard";
import { graphQLClient } from "@/lib/graphql-client";
import { OUR_STRATEGIC_TEAM } from "@/common/queries/query";
import { StaffMember } from "@/common/types/type";

interface StrategicTeamMember {
  id: string;
  name: string;
  title: string;
  image: {
    url: string;
    altText: string;
  };
  description: string;
  slug: string;
  schoolTypes?: {
    nodes?: {
      slug: string;
    }[];
  };
}

const OurStrategicTeam = () => {
  const [ourStrategicTeam, setOurStrategicTeam] = useState<StrategicTeamMember[]>(
    []
  );

  useEffect(() => {
    const fetchStrategicTeam = async () => {
      try {
        const data = await graphQLClient.request<{
          staffType: any;
          strategicTeam: {
            nodes: StrategicTeamMember[];
          };
        }>(OUR_STRATEGIC_TEAM);

        console.log("🎓 All Strategic Team Records:", data.staffType.staffs.nodes);
        setOurStrategicTeam(data.staffType.staffs.nodes);
      } catch (error) {
        console.error("Error fetching strategic team data:", error);
      }
    };

    fetchStrategicTeam();
  }, []);

  return (
    <section className="our-strategic-team">
      <div className="full-wrap">
        <div className="title-wrap">
          <TitleLarge title="Our" subtitle=" Strategic Team" />
          <p className="pt-5">
            ESU is guided by a strong and forward-thinking leadership team
            committed to academic excellence, institutional integrity, and
            inclusive growth. With extensive experience across both education
            and industry, our leaders remain actively engaged with key sectors
            to stay ahead of emerging trends and evolving workforce needs. They
            set the university’s strategic direction, cultivate international
            partnerships, and ensure that our programmes are globally relevant
            and locally impactful. Their vision underpins our mission to provide
            accessible, high-quality higher education in Sri Lanka.
          </p>
        </div>
        {/* strategic team members */}
        <div className="strategic-team-members">
          <div className="members-wrap d-flex flex-wrap justify-content-start gap-1">
            {ourStrategicTeam.length === 0 ? (
              <p>No Strategic Team found for this department.</p>
            ) : (
              ourStrategicTeam.map((member, index) => (
                <MemberCardItem key={index} memberData={member} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrategicTeam;
