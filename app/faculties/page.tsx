"use client";

import FaculityCard from "@/components/FaculityCard/FaculityCard";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

const page = () => {
  return (
    <>
      <InnerBanner
        innerPageTitle={`Our <span>Faculties</span>`}
        innerPageDescription="Where we breathe life into technology! 
      Welcome to ESOFT Metro Campus, where seven dynamic schools shape your educational journey. Join us in this diverse academic landscape for unparalleled excellence!
      "
        innerBgDesk="/images/faculity-lan.png"
        innerBgMobi="/images/faculity-lan.png"
      />
      <div className="faculty-wrap">
        <FaculityCard
          faculityImgDesk="/images/faculity-desk.png"
          faculityImgMobi="/images/faculity-desk.png"
          faculityName="Faculty of <span>Science</span>"
          faculityIntro="<span>Where we breathe life into technology! 
          Our comprehensive array of courses is designed to empower students to fearlessly navigate the rapidly evolving world of computing and beyond.</span>. Our highly qualified academic staff ensures a unique learning experience that stands out. We're not just a school; we're your gateway to transformative learning!"
          facilityLink="/faculty1"
        />
      </div>
    </>
  );
};

export default page;
