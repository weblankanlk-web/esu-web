"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import "./style.scss";
import { graphQLClient } from "@/lib/graphql-client";
import {
  GET_OUR_HIGHLIGHTS_BY_FACULTY_SLUG,
  GET_OUR_HIGHLIGHTS_BY_SLUG,
} from "@/common/queries/query";

const images = [
  "/images/1.png",
  "/images/1.png",
  "/images/1.png",
  "/images/1.png",
  "/images/1.png",
  "/images/1.png",
];

interface HighlightItem {
  ourHighlightsImage: {
    node: {
      altText: string;
      sourceUrl: string;
    };
  };
}

const OurHighlights = ({ pageSlug }: any) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [ourHighlights, setOurHighlights] = useState<HighlightItem[]>([]);

  interface OurHighlightsResponse {
    page?: {
      ourHighlights?: {
        ourHighlights?: HighlightItem[];
      };
    };

    schoolType?: {
      ourHighlights?: {
        ourHighlights?: HighlightItem[];
      };
    };
  }

  useEffect(() => {
    const fetchOurHighlights = async () => {
      try {
        if (
          pageSlug == "faculty-of-art-design" ||
          pageSlug == "faculty-of-life-science" ||
          pageSlug == "faculty-of-computing" ||
          pageSlug == "faculty-of-engineering" ||
          pageSlug == "faculty-of-business-law" ||
          pageSlug == "faculty-of-education-languages-sociology"
        ) {
          const response: OurHighlightsResponse = await graphQLClient.request(
            GET_OUR_HIGHLIGHTS_BY_FACULTY_SLUG,
            { slug: pageSlug }
          );
          const highlights =
            response?.schoolType?.ourHighlights?.ourHighlights || [];
          setOurHighlights(highlights);
        } else {
          const response: OurHighlightsResponse = await graphQLClient.request(
            GET_OUR_HIGHLIGHTS_BY_SLUG,
            { slug: pageSlug }
          );
          const highlights = response?.page?.ourHighlights?.ourHighlights || [];
          setOurHighlights(highlights);
        }
      } catch (error) {
        console.error("Error fetching our highlights:", error);
      }
    };

    fetchOurHighlights();
  }, [pageSlug]);

  console.log("Our Highlights:", ourHighlights);

  return (
    <section className="our-campus-highlights" data-aos="fade-up">
      <TitleLarge title="Our" subtitle=" Highlights" />
      <br />
      {/* MOBILE SLIDER */}
      {ourHighlights && (
        <div className="our-highlights-slider mobile-only">
          <Slider {...settings}>
            {ourHighlights.map((highlights, index) => (
              <div key={index} className="our-highlights-item">
                <Image
                  src={highlights.ourHighlightsImage.node.sourceUrl}
                  alt={
                    highlights.ourHighlightsImage.node.altText ||
                    `highlight-${index}`
                  }
                  width={300}
                  height={300}
                  layout="responsive"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* DESKTOP GRID */}
      {ourHighlights && (
        <div className="our-highlights-grid desktop-only">
          {ourHighlights.map((highlights, index) => (
            <div key={index} className="our-highlights-item">
              <Image
                src={highlights.ourHighlightsImage.node.sourceUrl}
                alt={
                  highlights.ourHighlightsImage.node.altText ||
                  `highlight-${index}`
                }
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      )}

      {ourHighlights.length === 0 && (
        <div className="no-highlights">
          <p>No highlights available at the moment.</p>
        </div>
      )}
    </section>
  );
};

export default OurHighlights;
