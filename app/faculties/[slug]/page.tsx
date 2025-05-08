"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import FaculityOverview from "@/components/FaculityOverview/FaculityOverview";
import { graphQLClient } from "@/lib/graphql-client";

// ✅ GraphQL query to fetch faculty details
const FACULTY_INNER_QUERY = `
  query ($slug: [String]) {
    schoolTypes(where: { slug: $slug }) {
      nodes {
        schoolTypesColorFontFields {
          schoolOverview
          schoolOverviewTitle
          color
          courseFontFamily
          facultyName
          schoolOverviewImage {
            node {
              id
              link
              altText
              title
            }
          }
          facultyDesktop {
            node {
              id
              link
              altText
              title
            }
          }
          facultyMobile {
            node {
              id
              link
              altText
              title
            }
          }
        }
      }
    }
  }
`;

// ✅ TypeScript interface for faculty data
type FacultyInner = {
  schoolTypesColorFontFields: {
    schoolOverview: string;
    schoolOverviewTitle: string;
    color: string;
    courseFontFamily: string;
    facultyName: string;
    schoolOverviewImage: {
      node: {
        id: string;
        link: string;
        altText: string;
        title: string;
      };
    };
    facultyDesktop: {
      node: {
        id: string;
        link: string;
        altText: string;
        title: string;
      };
    };
    facultyMobile: {
      node: {
        id: string;
        link: string;
        altText: string;
        title: string;
      };
    };
  };
};

const FacultyInnerPage = () => {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop(); // Extract slug from URL

  const [faculty, setFaculty] = useState<FacultyInner | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchFacultyDetails = async () => {
      try {
        const data = await graphQLClient.request<{
          schoolTypes: { nodes: FacultyInner[] };
        }>(FACULTY_INNER_QUERY, { slug });

        if (data.schoolTypes.nodes.length > 0) {
          setFaculty(data.schoolTypes.nodes[0]);
        }
      } catch (error) {
        console.error("❌ Error fetching faculty data:", error);
      }
    };

    fetchFacultyDetails();
  }, [slug]);

  return (
    <>
      {faculty && (
        <>
          <InnerBanner
            innerPageTitle={`Faculty of <span style="color: ${faculty.schoolTypesColorFontFields.color}; font-family: ${faculty.schoolTypesColorFontFields.courseFontFamily}"> ${faculty.schoolTypesColorFontFields.facultyName} </span>`}
            innerPageDescription={`Welcome to the Faculty of ${faculty.schoolTypesColorFontFields.facultyName}.`}
            innerBgDesk={
              faculty.schoolTypesColorFontFields.facultyDesktop?.node?.link || ""
            }
            innerBgMobi={
              faculty.schoolTypesColorFontFields.facultyMobile?.node?.link || ""
            }
          />

          <FaculityOverview
            schoolOverviewTitle={`<span style="font-family: ${faculty.schoolTypesColorFontFields.courseFontFamily}; background: linear-gradient(90deg, ${faculty.schoolTypesColorFontFields.color} 0%, rgba(124, 124, 124, 0.70) 100%);">${faculty.schoolTypesColorFontFields.schoolOverviewTitle}</span>`}
            OverviewImage={
              faculty.schoolTypesColorFontFields.schoolOverviewImage?.node?.link || ""
            }
            Overview={faculty.schoolTypesColorFontFields.schoolOverview}
          />
        </>
      )}
    </>
  );
};

export default FacultyInnerPage;
