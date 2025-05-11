import React from "react";
import "./style.scss";
import Link from "next/link";

interface Button {
    buttonUrl: string;
    buttonName: string;
    buttonColor: string;
}0

const ButtonOutline: React.FC<{buttonData:Button}> = ({ buttonData, }) => {
  return (
    <>
      <Link href={buttonData.buttonUrl} className="home-button" style={{ background: buttonData.buttonColor }}>
        {buttonData.buttonName}
      </Link>
    </>
  );
};

export default ButtonOutline;