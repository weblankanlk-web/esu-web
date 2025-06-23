"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.scss";

const BestWebLogo = () => {
  return (
    <Link
      target="_blank"
      href="https://ebadge.bestweb.lk/api/v1/clicked/esu.lk/BestWeb/2025/Rate_Us"
      className="best-web"
    >
      <Image
        src="https://ebadge.bestweb.lk/eBadgeSystem/domainNames/esu.lk/BestWeb/2025/Rate_Us/image.png"
        alt="logo"
        width={120}
        height={120}
        style={{ marginTop: "20px" }}
      />
    </Link>
  );
};

export default BestWebLogo;
