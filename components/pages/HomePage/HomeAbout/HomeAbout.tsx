import React from "react";
import Image from "next/image";
import "./style.scss";
import TitleLarge from '../../../common/TitleLarge/TitleLarge';
import Button from '../../../common/Button/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const content = `
<span>Welcome to ESU – Sri Lanka’s Leading Destination for World-Class Education!</span>
<br/><br/>
Step into a future of limitless possibilities with ESU. Our diverse programs in Computing, Business & Law, Engineering, Hospitality, Languages,  Life Sciences & Sociology, and Art & Design are crafted to empower you with the skills, knowledge, and confidence to thrive in a global landscape.
<br/><br/>
Where innovation shapes education, and ambition fuels achievement — <b>your journey begins here</b>!
`;

const HomeAbout = () => {
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
      <section className="home-about">
        <div className="full-wrap">
          <div className="image-detail-wrap">
            <div className="left">
              <Image
                src="/images/all-made-of-future.png"
                width={900}
                height={850}
                alt=""
              />
            </div>
            <div className="right">
              <div className="title-wrap">
                <TitleLarge
                  title1="Welcome to"
                  subtitle="ESOFT Uni"
                  title2=""
                />
              </div>
              <div className="button-wrap">
                {/* <Button buttonName="About Us" buttonUrl="#" /> */}
              </div>
              <div
                className="the-content-div"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
