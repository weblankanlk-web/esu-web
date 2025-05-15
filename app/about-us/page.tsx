import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import HomeAbout from "@/components/pages/HomePage/HomeAbout/HomeAbout";
import HomeUniversities from "@/components/pages/HomePage/HomeUniversities/HomeUniversities";
import React from "react";

const page = () => {
  return (
    <>
      <InnerBanner
        innerPageTitle={`About <span>Us</span>`}
        innerPageDescription="Welcome to ESOFT Metro Campus – Sri Lanka's premier destination for higher education excellence! Since 2000, we've grown into the country's largest private sector higher education network, providing educational opportunities for over 30,000 students annually across our expansive 40-branch network"
        innerBgDesk="/images/contact-us-banner.png"
        innerBgMobi="/images/contact-us-banner.png"
      />
      <HomeAbout />
      <HomeUniversities />
    </>
  );
};

export default page;
