"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./style.scss";
import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";

const sitemapData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      {
        label: "ESU Colombo",
        href: "/about-us/colombo-campus",
      },
      {
        label: "ESU Kandy",
        href: "/about-us/kandy-campus",
      },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
  },

  {
    label: "Faculties",
    href: "/faculties",
    children: [
      {
        label: "Faculty of Computing",
        href: "/faculties/faculty-of-computing",
      },
      {
        label: "Faculty of Business & Law",
        href: "/faculties/faculty-of-business-law",
      },
      {
        label: "Faculty of Life Science",
        href: "/faculties/Faculty of Life Science",
      },
      {
        label: "Faculty of Engineering",
        href: "/faculties/faculty-of-engineering",
      },
      {
        label: "Faculty of Art & Design",
        href: "/faculties/faculty-of-art-design",
      },
      {
        label: "Faculty of Education, Languages & Sociology",
        href: "/faculties/faculty-of-education-languages-sociology",
      },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
  },
  {
    label: "News & Events",
    href: "/news",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Payment Policy",
    href: "/payment-policy",
  },
  {
    label: "Refund Policy",
    href: "/refund-policy",
  },
  {
    label: "Quality Policy",
    href: "/quality-policy",
  },
  {
    label: "Sitemap",
    href: "/sitemap",
  },
];

function TreeNode({ node, globalOpen }: any) {
  const [open, setOpen] = useState(globalOpen || false);
  const hasChildren = node.children && node.children.length > 0;

  useEffect(() => {
    setOpen(globalOpen);
  }, [globalOpen]);

  return (
    <>
      <li className="sitemap__node">
        <div className="sitemap__label">
          {hasChildren && (
            <button className="sitemap__toggle" onClick={() => setOpen(!open)}>
              {open ? "−" : "+"}
            </button>
          )}
          {node.href ? (
            <Link href={node.href} className="sitemap__link">
              {node.label}
            </Link>
          ) : (
            <span className="sitemap__text">{node.label}</span>
          )}
        </div>
        {hasChildren && open && (
          <ul className="sitemap__children">
            {node.children.map((child: any, idx: number) => (
              <TreeNode key={idx} node={child} />
            ))}
          </ul>
        )}
      </li>
    </>
  );
}

const page = () => {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <>
      <InnerBanner
        innerPageTitlePrimary={""}
        innerPageTitleSecondary={"Sitemap"}
        innerPageDescription="Explore the full structure of the ESU website in one place. Quickly navigate to key sections including faculties, courses, academics, news, policies, and contact information. Our sitemap helps you find what you're looking for with ease."
        innerBgDesk="/images/inner-banner.gif"
        innerBgMobi="/images/inner-banner.gif"
      />

      <main className="sitemap__wrapper">
        <button
          onClick={() => setExpandAll(!expandAll)}
          className="sitemap__toggle-mobile"
          aria-label="Toggle"
        >
          {expandAll ? "Collapse All" : "Expand All"}
        </button>
        <ul className="sitemap__list">
          {sitemapData.map((node, idx) => (
            <TreeNode key={idx} node={node} globalOpen={expandAll} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default page;
