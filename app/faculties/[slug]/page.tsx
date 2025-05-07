"use client";

import InnerBanner from "@/components/InnerBanner/InnerBanner";
import FaculityOverview from "@/components/FaculityOverview/FaculityOverview";

const page = () => {
  return (
    <>
      <InnerBanner
        innerPageTitle={`Our <span>Faculties</span>`}
        innerPageDescription="Where we breathe life into technology! Welcome to ESOFT Metro Campus, where seven dynamic schools shape your educational journey. Join us in this diverse academic landscape for unparalleled excellence!"
        innerBgDesk="/images/faculity-lan.png"
        innerBgMobi="/images/faculity-lan.png"
      />  
      <FaculityOverview
       OverviewTitle={`Art & Design `}
       OverviewImage="/images/artanddesign.png"
       Overview="Welcome to the ESOFT School of Computing, where we breathe life into technology! Our comprehensive array of courses is designed to empower students to fearlessly navigate the rapidly evolving world of computing and beyond. Our highly qualified academic staff ensures a unique learning experience that stands out. We’re not just a school; we’re your gateway to transformative learning!

        Qualifications offered at the ESOFT School of Computing are not only endorsed by the UGC but also hold recognition from esteemed international entities. This affords students the flexibility to choose a pathway that aligns perfectly with their aspirations."
      />
    </>
   
     
  );
}
export default page;
