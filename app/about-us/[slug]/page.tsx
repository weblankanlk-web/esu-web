"use client";

import { CAMPUS_VICE_CHANCELLOR_QUERY } from "@/common/queries/query";
import { ViceChancellor } from "@/common/types/type";
import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import CampusFacilities from "@/components/pages/AboutUs/CampusFacilities/CampusFacilities";
import ContactHeadOffice from "@/components/pages/Contact/ContactHeadOffice/ContactHeadOffice";
import DeanMessage from "@/components/pages/Faculty/DeanMessage/DeanMessage";
import { graphQLClient } from "@/lib/graphql-client";
import { useTheme } from "@/lib/ThemeContext";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./style.scss";
import OurHighlights from "@/components/pages/AboutUs/OurHighlights/OurHighlights";

const Page = () => {
  const [viceChancellor, setViceChancellor] = useState<ViceChancellor | null>(
    null
  );
  const { color } = useTheme();
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const facultySlugRaw = slug || "";
  const words = facultySlugRaw.split("-");

  const sentenceCaseWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  const [firstWord] = sentenceCaseWords;

  useEffect(() => {
    const fetchData = async (campusSlug: string | null) => {
      if (!campusSlug) return;

      try {
        const data = await graphQLClient.request<{
          staffType: {
            staffs: {
              nodes: ViceChancellor[];
            };
          };
        }>(CAMPUS_VICE_CHANCELLOR_QUERY, { slug: campusSlug });

        const vc = data.staffType?.staffs?.nodes?.[0];
        setViceChancellor(vc);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    let campusSlug: string | null = null;

    switch (slug) {
      case "colombo-campus":
        campusSlug = "colombo-vice-chancellor";
        break;
      case "kandy-campus":
        campusSlug = "kandy-vice-chancellor";
        break;
      case "jaffna-campus":
        campusSlug = "jaffna-vice-chancellor";
        break;
    }

    fetchData(campusSlug);
  }, [slug]);

  // Dynamic banner image logic
  let innerBgDesk = "/images/inner-banner.gif";
  let innerBgMobi = "/images/inner-banner.gif";

  let address = "No 03, De Fonseka Place, Colombo 4, Sri Lanka.";
  let phone = "+94 769 000 400";
  let phonenumber = "+94769000400";
  let email = "info@esu.lk";

  if (pathname.includes("colombo")) {
    innerBgDesk = "/images/about/colombo-banner.jpg";
    innerBgMobi = "/images/about/colombo-banner.jpg";
    address = "No 03, De Fonseka Place, Colombo 4, Sri Lanka.";
    phone = "+94 769 000 400";
    phonenumber = "+94769000400";
  } else if (pathname.includes("jaffna")) {
    innerBgDesk = "/images/about/jaffna-banner.jpg";
    innerBgMobi = "/images/about/jaffna-banner.jpg";
  } else if (pathname.includes("kandy")) {
    innerBgDesk = "/images/about/kandy-banner.jpg";
    innerBgMobi = "/images/about/kandy-banner.jpg";
    address = "No 479, William Gopallawa Mawatha, Kandy, Sri Lanka.";
    phone = "+94 768 800 400";
    phonenumber = "+94768800400";
  }

  return (
    <>
      <InnerBanner
        innerPageTitlePrimary={"ESU "}
        innerPageTitleSecondary={
          <span className="inner-banner-title">{firstWord}</span>
        }
        innerPageDescription="Welcome to ESU – Sri Lanka's premier uni for higher education excellence! Since our inception in 2000, we have evolved into a leading private uni, offering industry-relevant, globally recognised academic programmes. Our growing academic network spans multiple unis, empowering students to achieve their full potential across a wide range of disciplines."
        innerBgDesk={innerBgDesk}
        innerBgMobi={innerBgMobi}
      />

      <div className="campus-inner-page">
        {viceChancellor && (
          <DeanMessage
            title="Pro Vice Chancellor's"
            DeanName={viceChancellor.title}
            designation={viceChancellor.staffAcf.designation || ""}
            message={viceChancellor.staffAcf.viceChancellorMessage || ""}
            featuredImage={{
              sourceUrl:
                viceChancellor.featuredImage?.node?.sourceUrl ||
                "/images/placeholder.jpg",
              altText:
                viceChancellor.featuredImage?.node?.altText ||
                "Vice Chancellor",
            }}
            slugUrl={viceChancellor?.slug}
            fontFamily={"inherit"}
            fontColor={color}
          />
        )}

        <CampusFacilities />

        <OurHighlights pageSlug={slug} />

        <ContactHeadOffice
          address={address}
          phone={phone}
          phonenumber={phonenumber}
          email={email}
        />
      </div>
    </>
  );
};

export default Page;
