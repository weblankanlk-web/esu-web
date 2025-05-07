"use client";

import React from "react";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";

interface Title {
  title1: string;
  subtitle: string;
  title2: string;
}

const TitleLarge: React.FC<Title> = ({ title1, subtitle, title2 }) => {
  const { color } = useTheme();

  console.log(color);

  return (
    <>
      <div className="title-wrapper">
        <div className="main-title-large">
          {/* <h2 dangerouslySetInnerHTML={{ __html: title1 }}></h2>
          <span dangerouslySetInnerHTML={{ __html: subtitle }} ></span>
          <h2 dangerouslySetInnerHTML={{ __html: title2 }}></h2> */}

          <h2>{title1}</h2>
          <span style={{ color: color }}>{subtitle}</span>
          <h2>{title2}</h2>
        </div>
      </div>
    </>
  );
};

export default TitleLarge;
