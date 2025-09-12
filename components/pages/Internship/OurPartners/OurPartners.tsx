"use client";

import React from "react";
import Image from "next/image";
import "./style.scss";
import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Logo = {
  src: string;
  alt: string;
};

type OurPartnersProps = {
  logos: Logo[];
};

const OurPartners: React.FC<OurPartnersProps> = ({ logos }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <section className="logoSection">
      <div className="logoSecTitle">
        <TitleLarge title="Our" subtitle="Partners" />
      </div>

      {/* Desktop Grid */}
      <div className="logoGrid desktopOnly">
        {logos.map((logo, index) => (
          <div key={index} className="logoCard">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={80}
              className="logoImg"
            />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="logoSlider mobileOnly">
        <Slider {...sliderSettings}>
          {logos.map((logo, index) => (
            <div key={index} className="logoCard">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                className="logoImg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurPartners;
