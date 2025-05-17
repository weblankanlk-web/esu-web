"use client";

import React from "react";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";

interface Button {
  buttonName: string;
  onClickFunction: any;
}

const ButtonClick: React.FC<Button> = ({ buttonName, onClickFunction }) => {
  const { color } = useTheme();

  return (
    <>
      <button
        className="general-button"
        style={{ background: color }}
        onClick={onClickFunction}
      >
        {buttonName}
      </button>
    </>
  );
};

export default ButtonClick;
