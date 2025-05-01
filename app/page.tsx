import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
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
