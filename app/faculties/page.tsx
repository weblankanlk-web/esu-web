"use client";

import { useEffect, useState } from "react";
import FaculityCard from "@/components/FaculityCard/FaculityCard";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import { graphQLClient } from "@/lib/graphql-client";

const FACULTY_TYPES_QUERY = `
query {
  schoolTypes {
    nodes {
      id
      name
      slug
      description
      schoolTypesColorFontFields {
        color
        courseFontFamily
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
    courseFontFamily: string;
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
        {(faculty?.length ? faculty.slice(0, faculty.length) : []).map(
          (faculity) => (
            <FaculityCard
              key={faculity.id}
              faculityImgDesk="/images/faculity-desk.png"
              faculityImgMobi="/images/faculity-desk.png"
              faculityName={`Faculty of <span>${faculity.name}</span>`}
              faculityIntro={`<span>${faculity.description}</span>`}
              facilityLink={`/faculty/${faculity.slug}`}
              fontFamily={faculity.schoolTypesColorFontFields?.courseFontFamily}
              fontColor={faculity.schoolTypesColorFontFields?.color}
            />
          )
        )}
      </div>
    </>
  );
};

export default Page;
