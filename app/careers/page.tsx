"use client";

import React, { useEffect } from "react";
import "./style.scss";
import { Rooster } from "@/packages/rooster";
import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";

const page = () => {
  useEffect(() => {
    const rooster = new Rooster("#rooster", 155337, {
      defaultSubsidiary: 24,
    });
    rooster.setup();
  }, []);

  return (
    <>
      <InnerBanner
        innerPageTitlePrimary={"Careers"}
        innerPageTitleSecondary={"With Us"}
        innerPageDescription="Join Sri Lanka’s premier university for higher education excellence. At ESU, we value innovation, collaboration, and growth—offering you the chance to shape world-class education while building a rewarding career."
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
