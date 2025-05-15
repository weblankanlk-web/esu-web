import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import React from "react";
import ContactCards from "../../Contact/ContactCards/ContactCards";
import "./style.scss";

const OurCampus = () => {
  return (
    <>
      <section className="home-universities our-campuses">
        <div className="full-wrap">
          <div className="title-wrap">
            <TitleLarge title="Our" subtitle=" Campuses" />
          </div>
          <ContactCards about={true} />
        </div>
      </section>
    </>
  );
};

export default OurCampus;
