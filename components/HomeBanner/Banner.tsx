"use client"

import React from "react";
import Image from "next/image";
import "./style.scss";

interface BannerProps {
    ImgDesk: string;
    ImgMob: string;
    ImgLogo:string;
    title:string;
  }

const Banner: React.FC<{bannerData:BannerProps}> = ({ bannerData }) => {
  return (
    <>
    <section className="banner-item">
        <div className="image-container">
            <picture>
                <source srcSet={bannerData?.ImgDesk} media="(min-width: 992px)" />
                <source srcSet={bannerData?.ImgMob} media="(max-width: 991px)" />
                <img
                    src={bannerData?.ImgDesk || bannerData?.ImgMob}
                    className="d-block w-100"
                    alt="Image"
                />
            </picture>
        </div>
        <div className="detail-container">
            <div className="detail-wrap">
                <Image
                    src={bannerData?.ImgLogo}
                    width={900}
                    height={850}
                    alt=""
                />
                <div className="home-content"><p>{bannerData?.title}</p></div>
            </div>
           
        </div>
    </section>
    
    </>
  );
};

export default Banner;