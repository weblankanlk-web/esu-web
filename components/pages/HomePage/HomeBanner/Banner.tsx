"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../../../common/Button/Button";
import "./style.scss";

interface BannerProps {
  ImgDesk: string;
  ImgMob: string;
  ImgLogo: string;
  title: string;
}

const Banner: React.FC<{ bannerData: BannerProps }> = ({ bannerData }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="banner-item">
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
            <Image src={bannerData?.ImgLogo} width={900} height={850} alt="" />
            <div className="home-content">
              <p>{bannerData?.title}</p>
            </div>
            <div className="search-wrapper">
              <div className="search-form-ajax">
                <input
                  type="text"
                  name="search-keyword"
                  className="type-check"
                  placeholder="Search Courses"
                  id="search-key"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button id="search-form-ajax-submit" type="submit">
                  <Image
                    src="/images/search.png"
                    width={20}
                    height={20}
                    alt="search"
                  />
                </button>
              </div>
              <div className="button">
                <Button
                  buttonName="Register Online"
                  buttonUrl="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
