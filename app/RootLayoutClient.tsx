"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { ThemeProvider } from "@/lib/ThemeContext";
import Preloader from "@/components/common/Preloader/Preloader";
import Chatbot from "@/components/Chatbot/Chatbot";
import InquireForm from "@/components/InquireForm/InquireForm";
import Modal from "@/components/common/Modal/Modal";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const handleLoad = () => setIsLoading(false);
  //   if (document.readyState === "complete") {
  //     handleLoad();
  //   } else {
  //     window.addEventListener("load", handleLoad);
  //   }
  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
      {/* <Chatbot /> */}
    </ThemeProvider>
  );
}
