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
import "./style.scss";
import TabsWithImages from "./Tabs";

const HomeBanner = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, 
    arrows: false, 
  };

  return (
    <section className="home-banner">
      <div className="full-wrap">
       <TabsWithImages tabData={[
         { id: 'tab1', title: 'Computing', 
          ImgDesk: "/images/home-banner-blue.png",
          ImgMob: "/images/home-banner-blue.png",
          ImgLogo: "/images/logo-esu.png",
          text: "We are Committed to education and excellence beyond boundaries.", 
          },
          { id: 'tab2', title: 'Management &  Law',
              ImgDesk: "/images/home-banner-blue.png",
              ImgMob: "/images/home-banner-blue.png",
              ImgLogo: "/images/logo-esu.png",
              text: "We are Committed to education and excellence beyond boundaries.", 
          },
          { id: 'tab3', title: 'Art & Design', 
              ImgDesk: "/images/home-banner-blue.png",
              ImgMob: "/images/home-banner-blue.png",
              ImgLogo: "/images/logo-esu.png",
              text: "We are Committed to education and excellence beyond boundaries.", 
          },
          { id: 'tab4', title: 'Life Science', 
              ImgDesk: "/images/home-banner-blue.png",
              ImgMob: "/images/home-banner-blue.png",
              ImgLogo: "/images/logo-esu.png",
              text: "We are Committed to education and excellence beyond boundaries.", 
          },
          { id: 'tab5', title: 'Engineering', 
              ImgDesk: "/images/home-banner-blue.png",
              ImgMob: "/images/home-banner-blue.png",
              ImgLogo: "/images/logo-esu.png",
              text: "We are Committed to education and excellence beyond boundaries.", 
          },
          { id: 'tab6', title: 'Language, Sociology & Education', 
              ImgDesk: "/images/home-banner-blue.png",
              ImgMob: "/images/home-banner-blue.png",
              ImgLogo: "/images/logo-esu.png",
              text: "We are Committed to education and excellence beyond boundaries.", 
          },
       ]}/>
      </div>
    </section>
  );
};

export default HomeBanner;
