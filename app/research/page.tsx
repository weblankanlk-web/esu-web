"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import { graphQLClient } from "@/lib/graphql-client";
import { GET_ALL_PUBLICATIONS } from "@/common/queries/query";
import Link from "next/link";
import { useTheme } from "@/lib/ThemeContext";
import Image from "next/image";
import Button from "@/components/common/Button/Button";
import { Publication } from "@/common/interfaces/interface";

const page = () => {
  const { color } = useTheme();

  const [publications, setPublications] = useState<Publication[]>([]);
  const featuredPublications = publications.slice(0, 4);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPublications = publications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(
    new Set(
      publications
        .flatMap((pub) => pub.publicationType.nodes || [])
        .map((type) => `${type.name}|${type.slug}|${type.count}`)
    )
  ).map((str) => {
    const [name, slug, count] = str.split("|");
    return { name, slug, count };
  });

  const archives = publications.reduce((acc, pub) => {
    const date = new Date(pub.date);

    const yearMonth = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}`;
    acc[yearMonth] = (acc[yearMonth] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const { setColor } = useTheme();
  // useEffect(() => {
  //   setColor("rgb(0, 174, 205)");
  // }, [setColor]);

  useEffect(() => {
    const fetchPublications = async () => {
      const data = await graphQLClient.request<{
        publications: {
          nodes: Publication[];
        };
      }>(GET_ALL_PUBLICATIONS);

      // console.log("Publications data:", data);
      setPublications(data.publications.nodes);
    };

    fetchPublications();
  }, []);

  return (
    <>
      <InnerBanner
        innerPageTitlePrimary={"ESU"}
        innerPageTitleSecondary={"Research"}
        innerPageDescription="At ESU, research is at the heart of what we do. We’re driven by curiosity and a passion for solving real-world problems, whether it's in sustainability, robotics, global affairs, or social issues. Our collaborative, hands-on approach brings together diverse fields to create meaningful impact. Join us in shaping a better future through bold ideas and innovative research."
        innerBgDesk="/images/inner-banner.gif"
        innerBgMobi="/images/inner-banner.gif"
      />

      <section className="research-page-section">
        <div className="small-middle-wrap">
          <div className="landing-wrap">
            <div className="landing-results">
              <div className="landing-results-inner blog-results-inner">
                {filteredPublications.map((publication, index) => (
                  <div
                    className="school-box-single blog-box news-box-landing"
                    key={index}
                  >
                    <div className="school-box-inner">
                      <Link href={`/research/${publication.slug}`}>
                        <Image
                          className="feature-img-school"
                          src={publication.featuredImage.node.sourceUrl}
                          alt={publication.featuredImage.node.altText}
                          width={500}
                          height={500}
                          layout="responsive"
                        />
                      </Link>
                      <div className="school-box-inner-details">

                        <p className="m-0 aragraph paragraph--black date-p">
                          <span className="calendar-icon" style={{ marginRight: "8px" }}>
                            📅
                          </span>
                          {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }).format(new Date(publication.date))}
                        </p>
                        <Link
                          href={`/research/${publication.slug}`}
                          className="school-box-details d-flex"
                        >
                          <span >
                            {publication.title}
                          </span>
                        </Link>
                        <div className="paragraph paragraph--black publication-content">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: publication.content
                                .split(/<\/?[^p][^>]*>/g)
                                .join("")
                                .substring(0, 180) + "...",
                            }}
                          />
                        </div>

                        <Link className="d-flex align-items-center justify-content-between research-link" href={`/research/${publication.slug}`}>
                          <span
                            className="campus-arrow"
                            style={{
                              background: color || "rgb(0, 174, 205)",
                            }}
                          >
                            ➜
                          </span>                  
                        </Link>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default page;