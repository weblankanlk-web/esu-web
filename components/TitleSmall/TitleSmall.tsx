"use client";

import React from "react";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";

interface Title {
  title: string;
  subtitle: string;
}

const TitleSmall: React.FC<Title> = ({ title, subtitle }) => {
  const { color } = useTheme();
  return (
    <>
      <div className="title-wrapper">
        <div className="main-title-small">
          <h2> { title }
          <span style={{ color: color }}> {subtitle }</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default TitleSmall;
