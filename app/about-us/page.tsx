import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import OurCampus from "@/components/pages/AboutUs/OurCampus/OurCampus";
import ContactCards from "@/components/pages/Contact/ContactCards/ContactCards";
import ContactHeadOffice from "@/components/pages/Contact/ContactHeadOffice/ContactHeadOffice";
import HomeAbout from "@/components/pages/HomePage/HomeAbout/HomeAbout";
import HomeUniversities from "@/components/pages/HomePage/HomeUniversities/HomeUniversities";
import React from "react";

const page = () => {
  return (
    <>
      <InnerBanner
        innerPageTitle={`About <span>Us</span>`}
        innerPageDescription="Welcome to ESU – Sri Lanka's premier uni for higher education excellence! Since our inception in 2000, we have evolved into a leading private uni, offering industry-relevant, globally recognised academic programmes. Our growing academic network spans multiple campuses, empowering students to achieve their full potential across a wide range of disciplines."
        innerBgDesk="/images/contact-us-banner.png"
        innerBgMobi="/images/contact-us-banner.png"
      />
      <HomeAbout />
      <HomeUniversities />

      <OurCampus />

      <ContactHeadOffice/>
    </>
  );
};

export default page;
