"use client";

import React, { useEffect } from "react";
import "./style.scss";
import { Rooster } from "@/packages/rooster";
import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";

const page = () => {
  useEffect(() => {
    const rooster = new Rooster("#rooster", 155337, {
      defaultSubsidiary: 23,
    });
    rooster.setup();
  }, []);

  return (
    <>
      <InnerBanner
        innerPageTitlePrimary={"Careers"}
        innerPageTitleSecondary={"at ESU"}
        innerPageDescription="Join ESU and take your career forward with Sri Lanka’s premier university. We offer a supportive and innovative work environment, opportunities for professional growth, and the chance to contribute to world-class education. Be part of a team that values collaboration, learning, and making a lasting impact."
        innerBgDesk="/images/inner-banner.gif"
        innerBgMobi="/images/inner-banner.gif"
      />

      <section className="careers-sec">
        <div id="rooster"></div>
      </section>
    </>
  );
};

export default page;
