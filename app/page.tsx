"use client";

import { Fragment } from "react";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeTestimonials from "@/components/HomeTestimonials/HomeTestimonials";
import HomeCounter from "@/components/HomeCounter/HomeCounter";
import HomeCourses from "@/components/HomeCourses/HomeCourses";
import HomeUniversities from "@/components/HomeUniversities/HomeUniversities";

export default function Home() {
  return (
    <Fragment>
      <HomeBanner />
      <HomeAbout />
      <HomeCourses/>
      {/* <HomeCounter/> */}
      <HomeUniversities />
      <HomeTestimonials/>
    </Fragment>
  );
}
