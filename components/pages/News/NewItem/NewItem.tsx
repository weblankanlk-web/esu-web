"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "@/lib/ThemeContext";
import "./style.scss";

const NewItem = ({ news }: any) => {
  const { setColor, color } = useTheme();

  return (
    <div className="school-box-single news-box-landing">
      <div className="school-box-inner">
        <Link href={`/news/${news.slug}`}>
          <img
            className="feature-img-school"
            src={news.featuredImage.node?.sourceUrl || ""}
            alt={news.featuredImage.node?.altText || ""}
          />
        </Link>
        <div className="school-box-inner-details">
          <p className="m-0 aragraph paragraph--black date-p">
            <span className="calendar-icon" style={{ marginRight: "8px" }}>
              📅
            </span>
            {new Date(news.date).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
          <Link
            href={`/news/${news.slug}`}
            className="school-box-details d-flex pointer-event-none"
          >
            <span>
              {news.title.length > 60
                ? news.title.substring(0, 70) + "..."
                : news.title}
            </span>
          </Link>
          <div className="paragraph paragraph--black">
            <div
              dangerouslySetInnerHTML={{
                __html: (() => {
                  const tempDiv = document.createElement("div");
                  tempDiv.innerHTML = news.content.replace(/&nbsp;/g, " ");
                  const textContent =
                    tempDiv.textContent || tempDiv.innerText || "";
                  return textContent.length > 180
                    ? textContent.substring(0, 180) + "..."
                    : textContent;
                })(),
              }}
            />
          </div>
          <Link
            className="d-flex align-items-center justify-content-between"
            href={`/news/${news.slug}`}
          >
            <span className="campus-arrow" style={{ background: color }}>
              ➜
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
