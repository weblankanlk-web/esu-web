"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import { useTheme } from "@/lib/ThemeContext";
import { usePathname } from "next/navigation";
import { graphQLClient } from "@/lib/graphql-client";
import { ACADEMIC_STAFF } from "@/common/queries/query";
import { ThreeDots } from "react-loader-spinner";
import { AcademicStaff } from "@/common/types/type";
import { FaGraduationCap, FaResearchgate } from "react-icons/fa";

const page = () => {
  const { color, setColor } = useTheme();
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();

  const [academicStaff, setAcademicStaff] = useState<AcademicStaff | null>(
    null
  );

  useEffect(() => {
    if (!slug) return;

    async function fetchAcademicStaff() {
      try {
        const data = await graphQLClient.request<{
          staff: AcademicStaff;
        }>(ACADEMIC_STAFF, { slug });

        setAcademicStaff(data.staff);
      } catch (error) {
        console.error("❌ Error fetching academic staff data:", error);
      }
    }

    fetchAcademicStaff();
  }, [slug]);

  useEffect(() => {
    const newColor =
      academicStaff?.schoolTypes?.nodes?.[0]?.schoolTypesColorFontFields?.color;
    if (newColor) {
      setColor(newColor);
    }
  }, [academicStaff]);

  if (!academicStaff)
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <ThreeDots
          visible={true}
          height="60"
          width="60"
          color={color}
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  return (
    <div className="profile">
      <div className="profile__card">
        <Image
          src={academicStaff.featuredImage?.node?.sourceUrl || ""}
          alt={academicStaff.featuredImage?.node?.altText || "Staff"}
          className="profile__image"
          width={500}
          height={500}
          style={{ background: color }}
        />

        {/* check and see if there are any values, if so only show the component */}

        {(academicStaff?.staffAcf?.googleScholarUrl?.url ||
          academicStaff?.staffAcf?.researchGateUrl?.url) && (
          <div className="profile__contact">
            <div className="scholar-link-block">
              {academicStaff.staffAcf.googleScholarUrl?.url && (
                <a
                  href={academicStaff.staffAcf.googleScholarUrl.url}
                  target={
                    academicStaff.staffAcf.googleScholarUrl.target || "_blank"
                  }
                  rel="noopener noreferrer"
                  className="scholar-link"
                >
                  <FaGraduationCap />
                  {academicStaff.staffAcf.googleScholarUrl.title ||
                    "Google Scholar"}
                </a>
              )}

              {academicStaff.staffAcf.researchGateUrl?.url && (
                <a
                  href={academicStaff.staffAcf.researchGateUrl.url}
                  target={
                    academicStaff.staffAcf.researchGateUrl.target || "_blank"
                  }
                  rel="noopener noreferrer"
                  className="scholar-link"
                >
                  <FaResearchgate />
                  {academicStaff.staffAcf.researchGateUrl.title ||
                    "ResearchGate"}
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="profile__content">
        <div className="profile__header">
          <h2>{academicStaff.title}</h2>

          <p className="designation">{academicStaff.staffAcf?.designation}</p>

          <p className="academictitle">
            {academicStaff.staffAcf?.academicTitle}
          </p>

          {academicStaff.schoolTypes?.nodes?.length ? (
            <h3>
              <span style={{ color: color }} className="faculty">
                {academicStaff.schoolTypes.nodes
                  .map((node) => node.name)
                  .filter(Boolean)
                  .join(", ")}
              </span>
            </h3>
          ) : null}
        </div>

        {academicStaff.staffAcf?.careerSummary && (
          <section className="profile__section">
            <h3>
              <span style={{ color: color }}>CAREER SUMMARY</span>
            </h3>
            <p>{academicStaff.staffAcf?.careerSummary}</p>
          </section>
        )}

        {(academicStaff?.staffAcf?.academicQualification?.length ?? 0) > 0 && (
          <section className="profile__section">
            <h3>
              <span style={{ color: color }}>ACADEMIC QUALIFICATIONS</span>
            </h3>
            <ul style={{ "--bullet-color": color } as React.CSSProperties}>
              {academicStaff.staffAcf.academicQualification!.map((pub) => (
                <li key={`${pub.text}-${pub.publicationLinks}`}>
                  {pub.publicationLinks ? (
                    <a
                      href={pub.publicationLinks}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.text}
                    </a>
                  ) : (
                    pub.text
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(academicStaff?.staffAcf?.academicHonors?.length ?? 0) > 0 && (
          <section className="profile__section">
            <h3>
              <span style={{ color: color }}>HONORS</span>
            </h3>
            <ul style={{ "--bullet-color": color } as React.CSSProperties}>
              {academicStaff.staffAcf.academicHonors!.map((pub) => (
                <li key={`${pub.text}-${pub.publicationLinks}`}>
                  {pub.publicationLinks ? (
                    <a
                      href={pub.publicationLinks}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.text}
                    </a>
                  ) : (
                    pub.text
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(academicStaff?.staffAcf?.academicAwards?.length ?? 0) > 0 && (
          <section className="profile__section">
            <h3>
              <span style={{ color: color }}>AWARDS & RECOGNITION</span>
            </h3>
            <ul style={{ "--bullet-color": color } as React.CSSProperties}>
              {academicStaff.staffAcf.academicAwards!.map((pub) => (
                <li key={`${pub.text}-${pub.publicationLinks}`}>
                  {pub.publicationLinks ? (
                    <a
                      href={pub.publicationLinks}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.text}
                    </a>
                  ) : (
                    pub.text
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(academicStaff?.staffAcf?.academicMembership?.length ?? 0) > 0 && (
          <section className="profile__section">
            <h3>
              <span style={{ color: color }}>MEMBERSHIPS</span>
            </h3>
            <ul style={{ "--bullet-color": color } as React.CSSProperties}>
              {academicStaff.staffAcf.academicMembership!.map((pub) => (
                <li key={`${pub.text}-${pub.publicationLinks}`}>
                  {pub.publicationLinks ? (
                    <a
                      href={pub.publicationLinks}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.text}
                    </a>
                  ) : (
                    pub.text
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(academicStaff?.staffAcf?.academicResearchInterest?.length ?? 0) >
          0 && (
          <section className="profile__section">
            <h3>
              <span style={{ color: color }}>RESEARCH INTEREST</span>
            </h3>
            <ul style={{ "--bullet-color": color } as React.CSSProperties}>
              {academicStaff.staffAcf.academicResearchInterest!.map(
                (item, idx) => (
                  <li key={item.text || idx}>{item.text}</li>
                )
              )}
            </ul>
          </section>
        )}

        {(academicStaff?.staffAcf?.academicResearch?.length ?? 0) > 0 && (
          <section className="profile__section">
            <h3>
              <span style={{ color: color }}>ONGOING RESEARCH</span>
            </h3>
            <ul style={{ "--bullet-color": color } as React.CSSProperties}>
              {academicStaff.staffAcf.academicResearch!.map((item, idx) => (
                <li key={item.research || idx}>
                  <strong>{item.research}</strong>
                  {item.researchDescription && (
                    <p>{item.researchDescription}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(academicStaff?.staffAcf?.academicPublications?.length ?? 0) > 0 && (
          <section className="profile__section">
            <h3>
              <span style={{ color: color }}>PUBLICATIONS</span>
            </h3>
            <ul style={{ "--bullet-color": color } as React.CSSProperties}>
              {academicStaff.staffAcf.academicPublications!.map((pub) => (
                <li key={`${pub.text}-${pub.publicationLinks}`}>
                  {pub.publicationLinks ? (
                    <a
                      href={pub.publicationLinks}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.text}
                    </a>
                  ) : (
                    pub.text
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default page;
