"use client";

import React from "react";
import "./style.scss";

interface Button {
    buttonUrl: string;
    buttonName: string;
    buttonColor: string;
}

const Button: React.FC<Button> = ({ buttonUrl, buttonName, buttonColor }) => {
  return (
    <>
      <a href={buttonUrl} className="general-button" style={{ background: buttonColor }}>
        {buttonName}
      </a>
    </>
  );
};

export default Button;