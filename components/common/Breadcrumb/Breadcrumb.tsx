"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./style.scss";

const Breadrumb = () => {
  const pathname = usePathname();

  const pathSegements = pathname.split("/").filter((segment) => segment !== "");

  const getLabel = (segment: string) => {
    return segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <section className="braedcumb-section dark-lightmode dark-font-change">
      <div className="small-middle-wrap">
        <p>
          <Link href="/">Home</Link>

          {pathSegements.map((segment, index) => {
            const fullPath = "/" + pathSegements.slice(0, index + 1).join("/");
            const isLast = index === pathSegements.length - 1;

            return (
              <span key={index}>
                {" "} → {" "}
                {isLast ? (
                  <span>{getLabel(segment)}</span>
                ) : (
                  <Link href={fullPath}>{getLabel(segment)}</Link>
                )}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default Breadrumb;
