import React from "react";
import Image from "next/image";
import "./style.scss";
import TitleLarge from "../../../common/TitleLarge/TitleLarge";
import Button from "../../../common/Button/Button";
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
<span>Welcome to ESU - Sri Lanka's Premier Uni for Higher Education Excellence!</span>
<br/><br/>
Established in 2000, ESU has evolved from its origins in computing into a comprehensive, degree-awarding university offering globally recognised qualifications. Today, we serve 15,000 students annually across a dynamic network with a growing academic reputation both locally and internationally. We are committed to academic excellence, industry relevance, and global pathways. ESU offers undergraduate and postgraduate programmes in Computing, Engineering, Business, Law, Art & Design, Education and Life Sciences through its dedicated faculties that combine academic rigour, practical relevance, and an increasing focus on interdisciplinary research. Each faculty is led by credentialed academics and supported by a curriculum that is benchmarked against international standards.
<br/><br/>
Join us at ESU - where your unique potential meets infinite possibilities.
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
                <TitleLarge title="Welcome to" subtitle="ESOFT Uni" />
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
