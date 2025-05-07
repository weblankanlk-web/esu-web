"use client";

import InnerBanner from "@/components/InnerBanner/InnerBanner";

const page = () => {
  return (
    <>
     <div>
      <InnerBanner
        innerPageTitle={`Our <span>Faculties</span>`}
        innerPageDescription="Where we breathe life into technology! Welcome to ESOFT Metro Campus, where seven dynamic schools shape your educational journey. Join us in this diverse academic landscape for unparalleled excellence!"
        innerBgDesk="/images/faculity-lan.png"
        innerBgMobi="/images/faculity-lan.png"
      />  
    </div>
    <section className="course-overview position-relative">
      <div className="course-wrap">
        <div className="">
          
        </div>
         
      </div>
    </section>
    </>
   
     
  );
};

export default page;
