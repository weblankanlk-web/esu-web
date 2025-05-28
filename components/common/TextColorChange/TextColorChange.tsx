"use client";

import React from "react";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";
import { TitleInterface } from "@/common/interfaces/interface";

const TitleText: React.FC<TitleInterface> = ({ title, subtitle }) => {
  const { color } = useTheme();
  return (
    <div className="title-wrapper">
      <div className="main-title-small">
        {title && <h2> {title} </h2>}
        {subtitle && (
          <h2>
            <span style={{ color: color }}> {subtitle}</span>
          </h2>
        )}
      </div>
    </div>
  );
};

export default TitleText;
