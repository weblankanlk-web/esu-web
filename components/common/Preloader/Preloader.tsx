import React from "react";
import "./style.scss";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className="global-preloader">
      {/* <div className="spinner" /> */}
      <Image src="/images/preloader-light.gif" width={300} height={300} alt="" />
    </div>
  );
};

export default Preloader;
