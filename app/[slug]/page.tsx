"use client";

import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import InquireForm from "@/components/sections/InquireForm/InquireForm";
import TitleExtraSmall from "@/components/common/TitleExtraSmall/TitleExtraSmall";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { graphQLClient } from "@/lib/graphql-client";
import { GET_FACULTY_DETAILS_BY_SLUG } from "@/common/queries/query";

const facultyData = [
  {
    title: "Computing",
    slug: "faculty-of-computing",
    image: "/images/faculty/faculty-of-computing.png",
  },
  {
    title: "Business & Law",
    slug: "faculty-of-business-law",
    image: "/images/faculty/faculty-of-business-and-law.png",
  },
  {
    title: "Life Science",
    slug: "faculty-of-life-science",
    image: "/images/faculty/faculty-of-life-science.png",
  },
  {
    title: "Engineering",
    slug: "faculty-of-engineering",
    image: "/images/faculty/faculty-of-engineering.png",
  },
  {
    title: "Art & Design",
    slug: "faculty-of-art-design",
    image: "/images/faculty/faculty-of-art-and-design.png",
  },
  {
    title: "Education, Languages & Sociology",
    slug: "faculty-of-education-languages-sociology",
    image: "/images/faculty/faculty-of-education-languages-and-sociology.png",
  },
];

interface FacultyTemplate {
  facultyTemplateFields: {
    facultyName: string;
    facultyDescription: string;
    universityLogo: {
      node: {
        altText: string;
        sourceUrl: string;
      };
    };
    facultyBackgroundImage: {
      node: {
        altText: string;
        sourceUrl: string;
      };
    };
  };
}

const page = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const [facultyDetails, setfacultyDetails] = useState<FacultyTemplate | null>(
    null
  );

  useEffect(() => {
    const fetchFacultyDetails = async () => {
      try {
        const data = await graphQLClient.request<{
          facultyTemplate: FacultyTemplate;
        }>(GET_FACULTY_DETAILS_BY_SLUG, {
          slug,
        });

        // console.log("📥 Fetched faculty details:", data.facultyTemplate);

        setfacultyDetails(data.facultyTemplate);
      } catch (error) {
        console.error("Error fetching faculty details:", error);
      }
    };

    fetchFacultyDetails();
  }, [slug]);

  return (
    <>
      {facultyDetails && (
        <section className={styles.facultyTemplate}>
          <div className={styles.facultyContainer}>
            <div className={styles.imageContainer}>
              {facultyDetails?.facultyTemplateFields
                ?.facultyBackgroundImage && (
                <Image
                  src={
                    facultyDetails?.facultyTemplateFields
                      ?.facultyBackgroundImage?.node?.sourceUrl
                  }
                  alt="Faculty Image"
                  width={790}
                  height={1030}
                  className={styles.imageBackground}
                />
              )}

              <Image
                src={`/images/faculty/overlay-shade-bg.png`}
                alt="Faculty Image"
                width={790}
                height={1030}
                className={styles.imageOverlay}
              />

              {facultyDetails?.facultyTemplateFields?.universityLogo && (
                <Image
                  src={
                    facultyDetails?.facultyTemplateFields?.universityLogo?.node
                      ?.sourceUrl
                  }
                  alt="Uni Logo Image"
                  width={300}
                  height={300}
                  className={styles.imageLogo}
                />
              )}

              <div className={styles.contentWrapper}>
                {/* <h2 className={styles.contentTitle}>
                  {facultyDetails?.facultyTemplateFields?.facultyName}
                </h2> */}
                <div
                  className={styles.contentTitle}
                  dangerouslySetInnerHTML={{
                    __html: facultyDetails?.facultyTemplateFields?.facultyName,
                  }}
                />

                <p className={styles.contentDescription}>
                  {facultyDetails?.facultyTemplateFields?.facultyDescription}
                </p>
              </div>
            </div>
            <div className={styles.contentContainer}>
              <InquireForm inquire_image={false} />
            </div>
          </div>
        </section>
      )}

      <section className={styles.facultyGrids}>
        <div className={styles.facultyGridContainer}>
          {facultyData.map((faculty, index) => (
            <div className={styles.facultyGridItem} key={index}>
              <Link href={`/faculties/${faculty.slug}`}>
                <Image
                  src={faculty.image}
                  alt={faculty.title}
                  width={600}
                  height={300}
                  quality={100}
                />
                <Image
                  src={`/images/faculty/faculty-overlay-shape.png`}
                  alt="Overlay Shade Image"
                  className={styles.facultyGridOverlay}
                  width={527}
                  height={269}
                />
                <div className={styles.facultyGridContent}>
                  <h3>
                    Faculty Of <br />
                    {faculty.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
