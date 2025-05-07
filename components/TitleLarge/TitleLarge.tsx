"use client";

import React from "react";
import "./style.scss";

interface Title {
  title1: string;
  subtitle: string;
  title2:string;
}

const TitleLarge: React.FC<Title> = ({ title1, subtitle, title2 }) => {
  return (
    <>
      <div className="title-wrapper">
        <div className="main-title-large">
          <h2 dangerouslySetInnerHTML={{ __html: title1 }}></h2>
          <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
          <h2 dangerouslySetInnerHTML={{ __html: title2 }}></h2>
        </div>
      </div>
    </>
  );
};

export default TitleLarge;
