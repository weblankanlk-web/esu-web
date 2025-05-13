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

  setColor(
    academicStaff?.schoolTypes?.nodes?.[0]?.schoolTypesColorFontFields?.color
  );

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
    <>
      <div className="profile">
        <div className="profile__card">
          <Image
            src={academicStaff.featuredImage?.node?.sourceUrl || ""}
            alt={academicStaff.featuredImage?.node?.altText || "Staff"}
            className="profile__image"
            width={100}
            height={100}
            style={{ background: color }}
          />
          {/* <div className="profile__contact">
            <p className="contact-number">Contact Us Number</p>
            <a href="tel:+94714120934">+94 71 412 0934</a>
            <br />
            <p className="email-address">Email Address</p>
            <a href="mailto:Dayan@esoft.lk">Dayan@esoft.lk</a>
          </div> */}
        </div>

        <div className="profile__content">
          <div className="profile__header">
            <h2>{academicStaff.title}</h2>
            <p className="designation">{academicStaff.staffAcf?.designation}</p>
            <p className="qualifications">
              {academicStaff.staffAcf?.qualifications}
            </p>
            <a href="#" className="faculty">
              {academicStaff.schoolTypes?.nodes
                .map((node) => node.name)
                .join(" | ")}
              &nbsp;|&nbsp;
              {
                academicStaff?.schoolTypes?.nodes?.[0]?.children?.nodes?.[0]
                  ?.name
              }
            </a>
          </div>

          {academicStaff.staffAcf?.academicQualifications && (
            <section className="profile__section">
              <h3>
                ACADEMIC <span style={{ color: color }}>QUALIFICATIONS</span>
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: academicStaff.staffAcf?.academicQualifications || "",
                }}
              />
            </section>
          )}

          {academicStaff.staffAcf?.careerSummary && (
            <section className="profile__section">
              <h3>
                CAREER <span style={{ color: color }}>SUMMARY</span>
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: academicStaff.staffAcf?.careerSummary || "",
                }}
              />
            </section>
          )}

          {academicStaff.staffAcf?.myPublications && (
            <section className="profile__section">
              <h3>
                MY <span style={{ color: color }}>PUBLICATIONS</span>
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: academicStaff.staffAcf?.myPublications || "",
                }}
              />
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
