"use client";

import React from "react";
import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleLarge from "../../../common/TitleLarge/TitleLarge";
import Logo from "./Logo";

const logos = [
  {
    imageUrl: "/images/brand1.png",
  },
  {
    imageUrl: "/images/brand2.png",
  },
  {
    imageUrl: "/images/brand3.png",
  },
  {
    imageUrl: "/images/brand4.png",
  },
  {
    imageUrl: "/images/brand5.png",
  },
  {
    imageUrl: "/images/brand6.png",
  },
];

const HomeUniversities = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="home-universities">
        <div className="full-wrap">
          <div className="title-wrap">
            <TitleLarge title="Academic" subtitle=" Partnerships" />
          </div>
          <div className="slider-wrap">
            <Slider {...settings} className="logo-slider">
              {logos.map((logo, index) => (
                <div key={index}>
                  <Logo logoData={logo} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeUniversities;
