"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import FaculityOverview from "@/components/FaculityOverview/FaculityOverview";
import DeanMessage from "@/components/DeanMessage/DeanMessage";
import { graphQLClient } from "@/lib/graphql-client";
import MembersLanding from "@/components/MembersLanding/MembersLanding";

// ✅ GraphQL query to fetch faculty + dean data
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
    staffType(id: "dean", idType: SLUG) {
      staffs {
        nodes {
          staffAcf {
            designation
            message
            qualifications
          }
          title
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

// ✅ TypeScript types
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

type DeanDetails = {
  title: string;
  staffAcf: {
    designation: string;
    message: string;
    qualifications: string;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
};

const FacultyInnerPage = () => {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();

  const [faculty, setFaculty] = useState<FacultyInner | null>(null);
  const [dean, setDean] = useState<DeanDetails | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchFacultyDetails = async () => {
      try {
        const data = await graphQLClient.request<{
          schoolTypes: { nodes: FacultyInner[] };
          staffType: { staffs: { nodes: DeanDetails[] } };
        }>(FACULTY_INNER_QUERY, { slug });

        if (data.schoolTypes.nodes.length > 0) {
          setFaculty(data.schoolTypes.nodes[0]);
        }

        if (data.staffType.staffs.nodes.length > 0) {
          setDean(data.staffType.staffs.nodes[0]);
        }
      } catch (error) {
        console.error("❌ Error fetching faculty/dean data:", error);
      }
    };

    fetchFacultyDetails();
  }, [slug]);

  return (
    <>
      {faculty && (
        <>
          <InnerBanner
            innerPageTitle={`Faculty of <span style="color: ${faculty.schoolTypesColorFontFields.color}; font-family: ${faculty.schoolTypesColorFontFields.courseFontFamily}">${faculty.schoolTypesColorFontFields.facultyName}</span>`}
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
              faculty.schoolTypesColorFontFields.schoolOverviewImage?.node?.link ||
              ""
            }
            Overview={faculty.schoolTypesColorFontFields.schoolOverview}
          />

          {dean && (
            <DeanMessage
              DeanName={dean.title}
              designation={dean.staffAcf.designation}
              qualifications={dean.staffAcf.qualifications}
              message={dean.staffAcf.message}
              featuredImage={dean.featuredImage.node}
              fontFamily={faculty.schoolTypesColorFontFields.courseFontFamily}
              fontColor={faculty.schoolTypesColorFontFields.color}
            />
          )}

          <MembersLanding
            slug={slug || ""}
            sectinTitle1="Faculty" 
            sectinTitle2="Members" 
            fontFamily={faculty.schoolTypesColorFontFields.courseFontFamily}
            fontColor={faculty.schoolTypesColorFontFields.color}
          />


        </>
      )}
    </>
  );
};

export default FacultyInnerPage;
