"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/lib/ThemeContext";

interface Logo {
  imageUrl: string;
}

const Logo: React.FC<{ logoData: Logo }> = ({
    logoData,
}) => {
  const { color } = useTheme();
  return (
    <>
      <div id="logo-item">
        <div className="l-item-inner" style={{ borderBottomColor: color }} >
             <Image
                src={logoData.imageUrl}
                width={256}
                height={85}
                alt=""
            />
        </div>
      </div>
    </>
  );
};

export default Logo;
