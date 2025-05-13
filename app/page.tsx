"use client";

import HomeUniversities from "@/components/pages/HomePage/HomeUniversities/HomeUniversities";
import HomeAbout from "@/components/pages/HomePage/HomeAbout/HomeAbout";
import HomeBanner from "@/components/pages/HomePage/HomeBanner/HomeBanner";
import HomeCourses from "@/components/pages/HomePage/HomeCourses/HomeCourses";
import HomeTestimonials from "@/components/pages/HomePage/HomeTestimonials/HomeTestimonials";
import HomeDifference from "@/components/pages/HomePage/HomeDifference/HomeDifference";
import { Fragment } from "react";
import HomeNews from "@/components/pages/HomePage/HomeNews/HomeNews";

export default function Home() {
  return (
    <Fragment>
      <HomeBanner />
      <HomeAbout />
      <HomeDifference />
      <HomeCourses />
      <HomeUniversities />
      <HomeNews />
      <HomeTestimonials />
    </Fragment>
  );
}
