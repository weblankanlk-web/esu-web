"use client";

import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import "./style.scss";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${visible ? "visible" : ""}`}
      aria-label="Back to top"
    >
      <FaArrowUp size={25} />
    </button>
  );
};

export default BackToTopButton;
