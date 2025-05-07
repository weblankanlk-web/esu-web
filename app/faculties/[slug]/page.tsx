"use client";

import { useEffect, useState } from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import FaculityOverview from "@/components/FaculityOverview/FaculityOverview";
import { graphQLClient } from "@/lib/graphql-client";
import { useRouter } from 'next/router';

const SCHOOL_INNER_QUERY = `
query ($slug: [String]) {
  schoolTypes(where: {slug: $slug}) {
    nodes {
      schoolTypesColorFontFields {
        schoolOverview
        schoolOverviewImage {
          node {
            id
            link
            altText
          }
        }
        facultyName
      }
    }
  }
}`;
type FacultyInner = {
  id: string;
  name: string;
  slug: string;
  description: string;
  schoolTypesColorFontFields: {
    schoolOverview: string;
    schoolOverviewImage: {
      node: {
        id: string;
        link: string;
        altText: string;
      };
    };
    facultyName: string;
  };
};

const page = () => {
  const path = window.location.pathname; // e.g., "/faculties/school-of-art-design"
  const slug = path.split("/").pop();    // "school-of-art-design"

  const [faculty, setSchoolInner] = useState<FacultyInner[]>([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const data = await graphQLClient.request<{
          schoolTypes: { nodes: FacultyInner[] };
        }>(SCHOOL_INNER_QUERY, {
          slug: slug
        });
        console.log("Fetched school:", data.schoolTypes.nodes); // console log
        setSchoolInner(data.schoolTypes.nodes);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
    };

    fetchFaculties();
  }, []);

  return (
    <>
      <InnerBanner
        innerPageTitle={`Our <span>Faculties</span>`}
        innerPageDescription="Where we breathe life into technology! Welcome to ESOFT Metro Campus, where seven dynamic schools shape your educational journey. Join us in this diverse academic landscape for unparalleled excellence!"
        innerBgDesk="/images/faculity-lan.png"
        innerBgMobi="/images/faculity-lan.png"
      />
      <FaculityOverview
        OverviewTitle={`Art & Design`}
        OverviewImage="/images/artanddesign.png"
        Overview="Welcome to the ESOFT School of Computing, where we breathe life into technology! Our comprehensive array of courses is designed to empower students to fearlessly navigate the rapidly evolving world of computing and beyond. Our highly qualified academic staff ensures a unique learning experience that stands out. We’re not just a school; we’re your gateway to transformative learning!

        Qualifications offered at the ESOFT School of Computing are not only endorsed by the UGC but also hold recognition from esteemed international entities. This affords students the flexibility to choose a pathway that aligns perfectly with their aspirations."
      />
    </>
  );
}
export default page;
