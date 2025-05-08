import React from 'react';
import Logo from './Logo';
import Image from 'next/image';
import "./style.scss";
import TitleLarge from '../TitleLarge/TitleLarge';
import Button from '../Button/Button';
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

const content= [
{ text:"<span>Welcome to ESOFT Metro Campus – Sri Lanka's Premier Destination for Higher Education Excellence! Established in 2000,</span> ESOFT has grown into the country's largest private sector higher education network, providing educational opportunities for over 30,000 students annually across our 40 branches. Committed to shaping futures, we offer a diverse range of programs in ICT & Computing, Business Management, Hospitality Management, Engineering, Personal & Professional Development, Language Training and Corporate Training.What started with a focus on Computing has now blossomed into a beacon of academic diversity and excellence, empowering students to chart their path to success. Join us on this transformative journey where education meets innovation!"}
];

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
      <section className='home-about'>
        <div className='full-wrap'>
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
                <TitleLarge title1='Infinite You,' subtitle='Infinite' title2='Possibilities'/>
              </div>
              <div className="button-wrap">
                <Button buttonName='About Us' buttonUrl='#'/>
              </div>
              <div
                    className="the-content-div"
                    dangerouslySetInnerHTML={{
                      __html: content[0]?.text || "",
                    }}
                />
            </div>
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
  )
}

export default HomeAbout;
