"use client";

import { useBreakpoints } from "@/lib/useIsDesktop";
import Image from "next/image";
import React from "react";
import "./style.scss";
import Location from "../Location";
import JobCategory from "../JobCategory";
import JobType from "../JobType";

const Newsletter = () => {
  const { isDesktop, isTablet } = useBreakpoints();

  return (
    <section className="newsletterSec">
      <Image
        src={
          isDesktop
            ? "/images/newsletter-banner.png"
            : isTablet
            ? "/images/newsletter-banner-mobi.png"
            : "/images/newsletter-mobi-banner.png"
        }
        alt="Subscribe to ESU Newsletter"
        width={1600}
        height={500}
        className="newsletterImg"
      />
      <div className="newsletterContent">
        <h2 className="newsletterTitle">Subscribe to our Newsletter</h2>
        <p className="newsletterPara">
          Collaborate with senior engineers to design, code, and enhance
          enterprise software solutions used by businesses worldwide.
        </p>

        <div className="newsletterForm">
          <input type="text" name="email" placeholder="Email" />

          <Location
            value={""}
            onChange={function (
              event: React.ChangeEvent<HTMLSelectElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />

          <JobType
            value={""}
            onChange={function (
              event: React.ChangeEvent<HTMLSelectElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />

          <JobCategory
            value={""}
            onChange={function (
              event: React.ChangeEvent<HTMLSelectElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />

          <button className="newletterBtn">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
