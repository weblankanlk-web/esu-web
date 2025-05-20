"use client";

import Image from "next/image";
import "./style.scss";
import TitleLarge from "@/components/common/TitleLarge/TitleLarge";

const CreativeCollage = () => {
  return (
    <section className="creative-collage">
      <TitleLarge title="Faculty" subtitle=" Highlights" />
      <br />
      <br />
      <div className="grid-wrapper">
        <div className="tall">
          <img src="/images/designer1.png" alt="" />
        </div>

        <div className="wide">
          <img src="/images/creative-brain.png" alt="" />
        </div>

        <div className="wide">
          <img src="/images/idea-head.png" alt="" />
        </div>
        <div className="tall">
          <img src="/images/designer1.png" alt="" />
        </div>
        <div className="wide">
          <img src="/images/designer-drawing.png" alt="" />
        </div>

        <div className="wide">
          <img src="/images/students-learning.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CreativeCollage;
