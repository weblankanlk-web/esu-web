import React from "react";
import "./style.scss";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className="global-preloader">
      {/* <div className="spinner" /> */}
      <Image src="/images/preloader.gif" width={200} height={200} alt="" />
    </div>
  );
};

export default Preloader;
