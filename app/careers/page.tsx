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
        innerPageTitleSecondary={"Us"}
        innerPageDescription="At ESU, we believe our people are the driving force behind our success. As Sri Lanka’s premier university for higher education excellence, we are committed to building a workplace that values innovation, collaboration, and professional growth. Since our establishment in 2000, ESU has expanded into a dynamic network of institutions, creating opportunities for talented individuals to contribute to world-class education while advancing their own careers. Join us and be part of a community that empowers both students and staff to reach their fullest potential."
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
