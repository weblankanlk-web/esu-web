import React from "react";
import "./style.scss";
import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import CampusCards from "@/components/pages/AboutUs/CampusCards/CampusCards";

const OurCampus = () => {
  return (
    <section className="home-universities our-campuses">
      <div className="full-wrap">
        <div className="title-wrap">
          <TitleLarge title="Our" subtitle=" Campuses" />
          <p>
            Our ESU network consists of three main campuses in Colombo, Kandy,
            and Jaffna, along with a regional network of affiliated colleges
            which offer a selection of HND’s and undergraduate programmes.  Our
            branch network supports ESU’s mission to deliver academically
            credible, industry-relevant qualifications that meet international
            standards. From ICT and Business to Engineering, Hospitality, and
            beyond, each branch serves as a centre for academic growth and
            professional development.
          </p>
        </div>
        <CampusCards />
      </div>
    </section>
  );
};

export default OurCampus;
