"use client";

import React from "react";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";
import Link from "next/link";

interface Button {
  buttonUrl: string;
  buttonName: string;
}

const Button: React.FC<Button> = ({ buttonUrl, buttonName }) => {
  const { color } = useTheme();

  return (
    <>
      <Link
        href={buttonUrl}
        className="general-button"
        style={{ background: color }}
      >
        {buttonName}
      </Link>
    </>
  );
};

export default Button;
