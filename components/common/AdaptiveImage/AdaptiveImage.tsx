"use client";

import React, { useState } from "react";
import Image from "next/image";
import "placeholder-loading/dist/css/placeholder-loading.min.css";
import styles from "./AdaptiveImage.module.scss";

interface AdaptiveImageProps {
  src?: string;
  alt?: string;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
  loading?: "lazy" | "eager";
  quality?: number;
}

const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  src,
  alt = "Image",
  className = "",
  width,
  height,
  priority = false,
  loading = "lazy",
  quality = 75,
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);

  const constructedPlaceholder = `https://placehold.co/${width}x${height}/eeeeee/333333?text=${encodeURIComponent(
    "Image not found"
  )}`;

  const handleError = () => {
    setImgSrc(constructedPlaceholder);
    setHasError(true);
  };

  return (
    <div className={`${styles.adaptiveImageWrapper} ${className}`}>
      {!imgSrc && (
        <div className={`${styles.phitem} ph-item`}>
          <div
            className="ph-picture"
            style={{ width: width, height: height }}
          ></div>
        </div>
      )}
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          loading={priority ? "eager" : loading}
          onError={handleError}
          style={{
            objectFit: "cover",
            transition: "opacity 0.3s ease-in-out",
          }}
          className={hasError ? styles.imageError : ""}
        />
      )}
    </div>
  );
};

export default AdaptiveImage;
