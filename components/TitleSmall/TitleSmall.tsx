"use client";

import React from "react";
import "./style.scss";

interface Title {
  title: string;
  subtitle: string;
}

const TitleSmall: React.FC<Title> = ({ title, subtitle }) => {
  return (
    <>
      <div className="title-wrapper">
        <div className="main-title-small">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
        </div>
      </div>
    </>
  );
};

export default TitleSmall;
