"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import FaculityOverview from "@/components/FaculityOverview/FaculityOverview";
import DeanMessage from "@/components/DeanMessage/DeanMessage";
import { graphQLClient } from "@/lib/graphql-client";
import MembersLanding from "@/components/MembersLanding/MembersLanding";
import { FACULTY_INNER_QUERY } from "@/queries/queries";
import { FacultyInner, DeanDetails } from "@/types/data";

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
              faculty.schoolTypesColorFontFields.facultyDesktop?.node?.link ||
              ""
            }
            innerBgMobi={
              faculty.schoolTypesColorFontFields.facultyMobile?.node?.link || ""
            }
          />

          <FaculityOverview
            schoolOverviewTitle={`<span style="font-family: ${faculty.schoolTypesColorFontFields.courseFontFamily}; background: linear-gradient(90deg, ${faculty.schoolTypesColorFontFields.color} 0%, rgba(124, 124, 124, 0.70) 100%);">${faculty.schoolTypesColorFontFields.schoolOverviewTitle}</span>`}
            OverviewImage={
              faculty.schoolTypesColorFontFields.schoolOverviewImage?.node
                ?.link || ""
            }
            Overview={faculty.schoolTypesColorFontFields.schoolOverview}
          />

          {dean && (
            <DeanMessage
              title="Dean"
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
