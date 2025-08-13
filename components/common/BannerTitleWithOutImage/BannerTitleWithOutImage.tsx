"use client";

import React from "react";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";
import { TitleInterface } from "@/common/interfaces/interface";

const BannerTitleWithOutImage: React.FC<TitleInterface> = ({
  title,
  subtitle,
}) => {
  const { color } = useTheme();

  return (
    <h2 className="section-heading--black banner-text-without-image" data-aos="flip-down">
      {!subtitle ? (
        title
          ?.split(" ")
          .map((word, idx) =>
            idx === 1 ? <span key={idx}>{word} </span> : `${word} `
          )
      ) : (
        <>
          {title} <span>{subtitle}</span>
        </>
      )}
    </h2>
  );
};

export default BannerTitleWithOutImage;
