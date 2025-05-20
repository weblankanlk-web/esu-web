"use client";

import React from "react";
import Image from "next/image";
import "./style.scss";
import TitleLarge from "../../../common/TitleLarge/TitleLarge";
import Link from "next/link";
import { useTheme } from "@/lib/ThemeContext";

const campuses = [
  {
    name: "Colombo",
    image: "/images/colombo.jpg",
    description: "Explore ESU Colombo Campus",
    link: "/colombo-campus",
  },
  {
    name: "Kandy",
    image: "/images/colombo.jpg",
    description: "Explore ESU Kandy Campus",
    link: "/kandy-campus",
  },
  {
    name: "Jaffna",
    image: "/images/colombo.jpg",
    description: "ESU Jaffna Campus Coming Soon...",
  },
];

const CampusCards = () => {
  const { color } = useTheme();

  return (
    <section className="campus-section">
      <div className="title-wrap">
        <TitleLarge title="Our" subtitle=" Campuses" />
        <br />
        <br />
        <p>
          Our ESU network consists of three main campuses in Colombo, Kandy, and
          Jaffna, along with a regional network of affiliated colleges which
          offer a selection of HND’s and undergraduate programmes.  Our branch
          network supports ESU’s mission to deliver academically credible,
          industry-relevant qualifications that meet international standards.
          From ICT and Business to Engineering, Hospitality, and beyond, each
          branch serves as a centre for academic growth and professional
          development.
        </p>
      </div>
      <br />
      <br />
      <div className="campus-grid">
        {campuses.map((campus, index) => (
          <div key={index} className="campus-card">
            <Link href={campus.link ? `/about-us/${campus.link}` : "#"}>
              <Image
                src={campus.image}
                alt={campus.name}
                width={550}
                height={650}
                className="campus-image"
              />
              <div className="campus-overlay">
                <h3 className="campus-title">{campus.name}</h3>
                <div className="d-flex align-items-center justify-content-between">
                  <p
                    className="campus-description"
                    style={{
                      color: color,
                    }}
                  >
                    {campus.description}
                  </p>
                  {campus.link && (
                    <span
                      className="campus-arrow"
                      style={{
                        background: color,
                      }}
                    >
                      ➜
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusCards;
