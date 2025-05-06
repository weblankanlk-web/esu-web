import React from 'react';
import Logo from './Logo';
import Image from 'next/image';
import "./style.scss";
import TitleLarge from '../TitleLarge/TitleLarge';
import Button from '../Button/Button';

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
  return (
    <>
      <section className='home-about'>
        <div className='full-wrap'>
          <div className="image-detail-wrap">
            <div className="left">
              <Image
                src="/images/about-home.png"
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
                <Button buttonName='About Us' buttonUrl='#' buttonColor='#02AEC9'/>
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
              <div className="logo-slider">
                {logos.map((logo, index) => (
                    <Logo key={index} logoData={logo} />
                ))}
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeAbout;
