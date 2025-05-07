"use client";

import React from "react";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";

interface Button {
  buttonUrl: string;
  buttonName: string;
}

const Button: React.FC<Button> = ({ buttonUrl, buttonName }) => {
  const { color } = useTheme();

  return (
    <>
      <a
        href={buttonUrl}
        className="general-button"
        style={{ background: color }}
      >
        {buttonName}
      </a>
    </>
  );
};

export default Button;
