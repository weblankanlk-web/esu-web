"use client";

import { useEffect, useState } from "react";
import FaculityCard from "@/components/FaculityCard/FaculityCard";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import { graphQLClient } from "@/lib/graphql-client";

const FACULTY_TYPES_QUERY = `
query {
  schoolTypes(where: { parent: null }) {
    nodes {
      id
      name
      slug
      description
      schoolTypesColorFontFields {
        color
        courseFontFamily
        facultyName
        facultyDesktop {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
}`;

type Faculty = {
  id: string;
  name: string;
  slug: string;
  description: string;
  schoolTypesColorFontFields: {
    color: string;
    courseFontFamily: string[]; // It's an array as there are 6 values in cms
    facultyName: string; // we need to get this as only the faculty should change color
    facultyDesktop?: {
      node: {
        sourceUrl: string;
        altText?: string;
      };
    } | null; // default assign null
  };
};

const Page = () => {
  const [faculty, setFaculty] = useState<Faculty[]>([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const data = await graphQLClient.request<{
          schoolTypes: { nodes: Faculty[] };
        }>(FACULTY_TYPES_QUERY);
        console.log("Fetched faculties:", data.schoolTypes.nodes); // console log
        setFaculty(data.schoolTypes.nodes);
      } catch (error) {
        console.error("Error fetching faculties:", error);
      }
    };

    fetchFaculties();
  }, []);

  return (
    <>
      <InnerBanner
        innerPageTitle={`Our <span>Faculties</span>`}
        innerPageDescription="Where we breathe life into technology! 
        Welcome to ESOFT Metro Campus, where seven dynamic schools shape your educational journey. Join us in this diverse academic landscape for unparalleled excellence!"
        innerBgDesk="/images/faculity-lan.png"
        innerBgMobi="/images/faculity-lan.png"
      />

      <div className="faculty-wrap">
        {faculty.map((faculity, index) => {
          console.log(`Rendering faculty #${index + 1}:`, faculity);

          const imageUrl =
            faculity.schoolTypesColorFontFields?.facultyDesktop?.node
              ?.sourceUrl || "/images/faculity-desk.png";

          const fontFamily =
            faculity.schoolTypesColorFontFields?.courseFontFamily?.[0] ||
            "inherit";

          const fontColor =
            faculity.schoolTypesColorFontFields?.color || "inherit";

          return (
            <FaculityCard
              key={faculity.id}
              faculityImgDesk={imageUrl}
              faculityImgMobi={imageUrl}
              faculityName={`${faculity.schoolTypesColorFontFields.facultyName}`} // we take from the array
              faculityIntro={`${faculity.description}`}
              facilityLink={`${faculity.slug}`}
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
