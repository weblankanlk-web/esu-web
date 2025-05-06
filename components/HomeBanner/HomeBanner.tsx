// import React from "react";
// import "./style.scss";
// import Banner from "./Banner";

// const banners= [
//   {
//     ImgDesk: "/images/home-banner-blue.png",
//     ImgMob: "/images/home-banner-blue.png",
//     ImgLogo: "/images/logo-esu.png",
//     title: 'We are Committed to education and excellence beyond boundaries.',
//   },
//   {
//     ImgDesk: "/images/home-banner-blue.png",
//     ImgMob: "/images/home-banner-blue.png",
//     ImgLogo: "/images/logo-esu.png",
//     title: 'We are Committed to education and excellence beyond boundaries.',
//   },
//   {
//     ImgDesk: "/images/home-banner-blue.png",
//     ImgMob: "/images/home-banner-blue.png",
//     ImgLogo: "/images/logo-esu.png",
//     title: 'We are Committed to education and excellence beyond boundaries.',
//   },
//   {
//     ImgDesk: "/images/home-banner-blue.png",
//     ImgMob: "/images/home-banner-blue.png",
//     ImgLogo: "/images/logo-esu.png",
//     title: 'We are Committed to education and excellence beyond boundaries.',
//   },
//   {
//     ImgDesk: "/images/home-banner-blue.png",
//     ImgMob: "/images/home-banner-blue.png",
//     ImgLogo: "/images/logo-esu.png",
//     title: 'We are Committed to education and excellence beyond boundaries.',
//   },
//   {
//     ImgDesk: "/images/home-banner-blue.png",
//     ImgMob: "/images/home-banner-blue.png",
//     ImgLogo: "/images/logo-esu.png",
//     title: 'We are Committed to education and excellence beyond boundaries.',
//   },
// ];

// const buttons = [
//   {
//     buttonUrl: "#",
//     buttonName: "Computing",
//     buttonColor: "#02AEC9",
//   },
//   {
//     buttonUrl: "#",
//     buttonName: "Management &  Law",
//     buttonColor: "#02AEC9",
//   },
//   {
//     buttonUrl: "#",
//     buttonName: "Art & Design",
//     buttonColor: "#02AEC9",
//   },
//   {
//     buttonUrl: "#",
//     buttonName: "Life Science",
//     buttonColor: "#02AEC9",
//   },
//   {
//     buttonUrl: "#",
//     buttonName: "Engineering",
//     buttonColor: "#02AEC9",
//   },
//   {
//     buttonUrl: "#",
//     buttonName: "Language, Sociology & Education",
//     buttonColor: "#02AEC9",
//   },
// ];

// const HomeBanner = () => {
//   return (
//       <>
//           <section className='home-banner'>
//             <div className='full-wrap'>
//               <div className="banner-slider">
//                   {banners.map((banner, index) => (
//                     <Banner key={index} bannerData={banner} />
//                 ))}
//               </div>
//             </div>
//           </section>
//       </>
//   );
// };

// export default HomeBanner;

"use client"

import React from "react";
import Slider from "react-slick";
import "./style.scss";
import Banner from "./Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [
  {
    ImgDesk: "/images/home-banner-blue.png",
    ImgMob: "/images/home-banner-blue.png",
    ImgLogo: "/images/logo-esu.png",
    title: "We are Committed to education and excellence beyond boundaries.",
  },
  {
    ImgDesk: "/images/home-banner-blue.png",
    ImgMob: "/images/home-banner-blue.png",
    ImgLogo: "/images/logo-esu.png",
    title: "We are Committed to education and excellence beyond boundaries.",
  },

  {
    ImgDesk: "/images/home-banner-blue.png",
    ImgMob: "/images/home-banner-blue.png",
    ImgLogo: "/images/logo-esu.png",
    title: "We are Committed to education and excellence beyond boundaries.",
  },
  {
    ImgDesk: "/images/home-banner-blue.png",
    ImgMob: "/images/home-banner-blue.png",
    ImgLogo: "/images/logo-esu.png",
    title: "We are Committed to education and excellence beyond boundaries.",
  },
  {
    ImgDesk: "/images/home-banner-blue.png",
    ImgMob: "/images/home-banner-blue.png",
    ImgLogo: "/images/logo-esu.png",
    title: "We are Committed to education and excellence beyond boundaries.",
  },
  {
    ImgDesk: "/images/home-banner-blue.png",
    ImgMob: "/images/home-banner-blue.png",
    ImgLogo: "/images/logo-esu.png",
    title: "We are Committed to education and excellence beyond boundaries.",
  },
];

const buttons = [
  {
    buttonUrl: "#",
    buttonName: "Computing",
    buttonColor: "#02AEC9",
  },
  {
    buttonUrl: "#",
    buttonName: "Management &  Law",
    buttonColor: "#02AEC9",
  },
  {
    buttonUrl: "#",
    buttonName: "Art & Design",
    buttonColor: "#02AEC9",
  },
  {
    buttonUrl: "#",
    buttonName: "Life Science",
    buttonColor: "#02AEC9",
  },
  {
    buttonUrl: "#",
    buttonName: "Engineering",
    buttonColor: "#02AEC9",
  },
  {
    buttonUrl: "#",
    buttonName: "Language, Sociology & Education",
    buttonColor: "#02AEC9",
  },
];


const HomeBanner = () => {
  const settings = {
    dots: false, // pagination dots
    infinite: true, // loop
    speed: 500, // transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // 4 sec per slide
    arrows: false, // show prev/next arrows
  };

  return (
    <section className="home-banner">
      <div className="full-wrap">
        <Slider {...settings} className="banner-slider">
          {banners.map((banner, index) => (
            <div key={index}>
              <Banner bannerData={banner} />
            </div>
            
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeBanner;
