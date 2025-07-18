"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { ThemeProvider } from "@/lib/ThemeContext";
import Preloader from "@/components/common/Preloader/Preloader";
import Chatbot from "@/components/sections/Chatbot/Chatbot";
import InquireForm from "@/components/sections/InquireForm/InquireForm";
import Modal from "@/components/common/Modal/Modal";
import { usePathname } from "next/navigation";
import BackToTopButton from "@/components/common/BackToTopButton/BackToTopButton";
import ScrollToTop from "@/components/common/ScrollToTop/ScrollToTop";
import BestWebLogo from "@/components/common/BestWebLogo/BestWebLogo";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    // Preloader logic
    const handleLoad = () => setIsLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    // AOS animation init
    // AOS.init({
    //   duration: 800,
    //   once: false,
    // });
  }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <ThemeProvider>
      <ScrollToTop />
      {!isAdmin && <Header />}
      {children}
      {!isAdmin && <Footer />}
      {/* <Chatbot /> */}
      <BackToTopButton />
      <BestWebLogo />
    </ThemeProvider>
  );
}
