"use client";

import { Fragment } from "react";
import HomeBanner from "@/components/pages/HomePage/HomeBanner/HomeBanner";
import HomeAbout from "@/components/pages/HomePage/HomeAbout/HomeAbout";
import HomeTestimonials from "@/components/pages/HomePage/HomeTestimonials/HomeTestimonials";
import HomeCounter from "@/components/pages/HomePage/HomeCounter/HomeCounter";
import HomeCourses from "@/components/pages/HomePage/HomeCourses/HomeCourses";

export default function Home() {
  return (
    <Fragment>
      <HomeBanner />
      <HomeAbout />
      <HomeCourses/>
      <HomeCounter/>
      <HomeTestimonials/>
    </Fragment>
  );
}
