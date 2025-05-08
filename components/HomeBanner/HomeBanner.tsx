"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import TabsWithImages from "./Tabs";
import { graphQLClient } from "@/lib/graphql-client";
import { HOME_BANNER_QUERY } from "@/queries/queries";

type HomeBannerTypes = {
  page: {
    id: string;
    title: string;
    homeBanner: {
      bannerImages: {
        desktopImage?: {
          node?: MediaItem;
        };
        mobileImage?: {
          node?: MediaItem;
        };
        bannerText?: string;
        logo?: {
          node?: MediaItem;
        };
        button?: {
          nodes?: ButtonNode[];
        };
      }[];
    };
  };
};

type MediaItem = {
  sourceUrl?: string;
  altText?: string;
  mediaDetails?: {
    width?: number;
    height?: number;
  };
};

type ButtonNode = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  schoolTypesColorFontFields?: {
    homeBannerButtonText?: string;
    color?: string;
  };
};

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

  const [homeBanners, sethomeBanners] = useState<
    HomeBannerTypes["page"]["homeBanner"]["bannerImages"]
  >([]);

  useEffect(() => {
    async function fetchHomeBanners() {
      try {
        const response = await graphQLClient.request<HomeBannerTypes>(
          HOME_BANNER_QUERY
        );
        const banners = response.page?.homeBanner?.bannerImages || [];
        sethomeBanners(banners);
      } catch (error) {
        console.error("Error fetching home banners:", error);
      }
    }

    fetchHomeBanners();
  }, []);

  // console.log(homeBanners);

  return (
    <section className="home-banner">
      <div className="full-wrap">
        <TabsWithImages
          tabData={homeBanners.map((item, index) => ({
            id: `tab${index + 1}`,
            title: item.bannerText || `Tab ${index + 1}`,
            ImgDesk:
              item.desktopImage?.node?.sourceUrl ||
              "/images/home-banner-blue.png",
            ImgMob:
              item.mobileImage?.node?.sourceUrl ||
              "/images/home-banner-blue.png",
            ImgLogo: item.logo?.node?.sourceUrl || "/images/logo-esu.png",
            text: item.bannerText || "Default description",
            color: item?.button?.nodes?.[0]?.schoolTypesColorFontFields?.color || "#000000",
            buttonName: item?.button?.nodes?.[0]?.name || "Default Button Name",
          }))}
        />
      </div>
    </section>
  );
};

export default HomeBanner;
