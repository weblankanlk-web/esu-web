"use client";

import { useEffect, useState } from "react";
import FaculityCard from "@/components/FaculityCard/FaculityCard";
import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import { graphQLClient } from "@/lib/graphql-client";
import { FACULTY_TYPES_QUERY } from "@/queries/queries";
import { Faculty } from "@/types/data";
import { usePathname } from "next/navigation";
import Breadrumb from "@/components/common/Breadcrumb/Breadcrumb";

const Page = () => {
  const [faculty, setFaculty] = useState<Faculty[]>([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const data = await graphQLClient.request<{
          schoolTypes: { nodes: Faculty[] };
        }>(FACULTY_TYPES_QUERY);
        console.log("✅ Fetched faculties:", data.schoolTypes.nodes);
        setFaculty(data.schoolTypes.nodes);
      } catch (error) {
        console.error("❌ Error fetching faculties:", error);
      }
    };

    fetchFaculties();
  }, []);

  return (
    <>
      {/* Optional: use InnerBanner if needed */}
      {/* <InnerBanner
        innerPageTitle={`Our <span>Faculties</span>`}
        innerPageDescription=""
        innerBgDesk="/images/faculity-lan.png"
        innerBgMobi="/images/faculity-lan.png"
      /> */}

      <Breadrumb />

      <div className="small-middle-wrap">
        <h2 className="section-heading section-heading--black">
          Our <span>Faculties</span>
        </h2>
      </div>

      <div className="faculty-wrap">
        {faculty.map((faculity, index) => {
          console.log(`🔍 Rendering faculty #${index + 1}:`, faculity);

          const imageUrl =
            faculity.schoolTypesColorFontFields?.facultyDesktop?.node
              ?.sourceUrl || "/images/faculity-desk.png";

          const fontFamily =
            faculity.schoolTypesColorFontFields?.courseFontFamily?.[0] || "inherit";

          const fontColor =
            faculity.schoolTypesColorFontFields?.color || "inherit";

          return (
            <FaculityCard
              key={faculity.id}
              faculityImgDesk={imageUrl}
              faculityImgMobi={imageUrl}
              faculityName={faculity.schoolTypesColorFontFields?.facultyName || ""}
              faculityIntro={faculity.description || ""}
              facilityLink={faculity.slug}
              fontFamily={fontFamily}
              fontColor={fontColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default Page;