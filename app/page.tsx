import { Fragment } from "react";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import HomeAbout from "@/components/HomeAbout/HomeAbout";

export default function Home() {
  return (
    <Fragment>
      <HomeBanner />
      <HomeAbout />
    </Fragment>
  );
}
