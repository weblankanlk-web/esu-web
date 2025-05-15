"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import FaculityOverview from "@/components/FaculityOverview/FaculityOverview";
import DeanMessage from "@/components/DeanMessage/DeanMessage";
import { graphQLClient } from "@/lib/graphql-client";
import MembersLanding from "@/components/MembersLanding/MembersLanding";
import { FACULTY_INNER_QUERY } from "@/common/queries/query";
import { FacultyInner, DeanDetails } from "@/common/types/type";
import "./style.scss";

const FacultyInnerPage = () => {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();

  const [faculty, setFaculty] = useState<FacultyInner | null>(null);
  const [deans, setDeans] = useState<DeanDetails[]>([]);

  useEffect(() => {
    if (!slug) return;

    const fetchFacultyDetails = async () => {
      try {
        const data = await graphQLClient.request<{
          schoolTypes: { nodes: FacultyInner[] };
          staffType: { staffs: { nodes: DeanDetails[] } };
        }>(FACULTY_INNER_QUERY, { slug });

        if (data.schoolTypes.nodes.length > 0) {
          console.log("🎓 Faculty Details:", data.schoolTypes.nodes[0]);
          setFaculty(data.schoolTypes.nodes[0]);
        }

        if (data.staffType.staffs.nodes.length > 0) {
          console.log("🎓 All Dean Records:", data.staffType.staffs.nodes);
          setDeans(data.staffType.staffs.nodes);
        }
      } catch (error) {
        console.error("❌ Error fetching faculty/dean data:", error);
      }
    };

    fetchFacultyDetails();
  }, [slug]);

  const matchingDean = deans.find((dean) =>
    dean.schoolTypes?.nodes?.some((node) => node.slug === slug)
  );

  return (
    <>
      {faculty && (
        <>
          <div
            style={
              {
                "--faculty-color": faculty.schoolTypesColorFontFields.color,
                "--faculty-font":
                  faculty.schoolTypesColorFontFields.courseFontFamily,
              } as React.CSSProperties
            }
          >
            <InnerBanner
              innerPageTitle={`Faculty of <span class="inner-banner-title">${faculty.schoolTypesColorFontFields.facultyName}</span>`}
              innerPageDescription={`Welcome to the Faculty of ${faculty.schoolTypesColorFontFields.facultyName}.`}
              innerBgDesk={
                faculty.schoolTypesColorFontFields.facultyDesktop?.node?.link ||
                ""
              }
              innerBgMobi={
                faculty.schoolTypesColorFontFields.facultyMobile?.node?.link ||
                ""
              }
            />

            <FaculityOverview
              schoolOverviewTitle={`<span class="faculty-overview-title">${faculty.schoolTypesColorFontFields.schoolOverviewTitle}</span>`}
              OverviewImage={
                faculty.schoolTypesColorFontFields.schoolOverviewImage?.node
                  ?.link || ""
              }
              Overview={faculty.schoolTypesColorFontFields.schoolOverview}
            />
          </div>

          {matchingDean && (
            <DeanMessage
              title="Dean"
              DeanName={matchingDean.title}
              designation={matchingDean.staffAcf.designation}
              message={matchingDean.staffAcf.message}
              featuredImage={matchingDean.featuredImage.node}
              fontFamily={
                matchingDean.schoolTypes?.nodes?.find(
                  (node) => node.slug === slug
                )?.schoolTypesColorFontFields?.courseFontFamily ||
                faculty.schoolTypesColorFontFields.courseFontFamily
              }
              fontColor={
                matchingDean.schoolTypes?.nodes?.find(
                  (node) => node.slug === slug
                )?.schoolTypesColorFontFields?.color ||
                faculty.schoolTypesColorFontFields.color
              }
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
