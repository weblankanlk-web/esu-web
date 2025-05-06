import React from "react";
import "./style.scss";

interface Button {
    buttonUrl: string;
    buttonName: string;
    buttonColor: string;
}

const ButtonOutline: React.FC<{buttonData:Button}> = ({ buttonData, }) => {
  return (
    <>
      <a href={buttonData.buttonUrl} className="home-button" style={{ background: buttonData.buttonColor }}>
        {buttonData.buttonName}
      </a>
    </>
  );
};

export default ButtonOutline;