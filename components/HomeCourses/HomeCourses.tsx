"use client";

import React from "react";
import TitleSmall from "../TitleSmall/TitleSmall";
import "./style.scss";
import Button from "../Button/Button";

const HomeCourses = () => {
    return (
      <>
      <section className="home-courses">
        <div className="main-wrap-title">
            <div className="title-wrap">
                <TitleSmall title='Explore' subtitle='Our Courses'/>
            </div>
            <div className="button-wrap">
                <Button buttonName="Explore More" buttonUrl="#" />
            </div>
        </div>
      </section>
      </>
    );
  };
  
export default HomeCourses;