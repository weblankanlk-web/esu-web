"use client";

import {
  FACULTY_TYPES_QUERY,
  VICE_CHANCELLOR_QUERY,
} from "@/common/queries/query";
import { Faculty, ViceChancellor } from "@/common/types/type";
import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import CampusFacilities from "@/components/pages/AboutUs/CampusFacilities/CampusFacilities";
import CreativeCollage from "@/components/pages/AboutUs/CreativeCollage/CreativeCollage";
import ContactHeadOffice from "@/components/pages/Contact/ContactHeadOffice/ContactHeadOffice";
import DeanMessage from "@/components/pages/Faculty/DeanMessage/DeanMessage";
import { graphQLClient } from "@/lib/graphql-client";
import { useTheme } from "@/lib/ThemeContext";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [viceChancellor, setViceChancellor] = useState<ViceChancellor | null>(
    null
  );

  const { color } = useTheme();

  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const facultySlug = slug?.split("-").join(" ").toUpperCase();

  // console.log("facultySlug", facultySlug);

  console.log("slug", slug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [facultyRes, vcRes] = await Promise.all([
          graphQLClient.request<{ schoolTypes: { nodes: Faculty[] } }>(
            FACULTY_TYPES_QUERY
          ),
          graphQLClient.request<{
            staffType: {
              staffs: {
                nodes: ViceChancellor[];
              };
            };
          }>(VICE_CHANCELLOR_QUERY),
        ]);

        // setFaculty(facultyRes.schoolTypes.nodes);

        const vc = vcRes.staffType.staffs.nodes[0];
        setViceChancellor(vc);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <InnerBanner
        innerPageTitle={`ESU <span>${facultySlug}</span>`}
        innerPageDescription="Welcome to ESU – Sri Lanka's premier uni for higher education excellence! Since our inception in 2000, we have evolved into a leading private uni, offering industry-relevant, globally recognised academic programmes. Our growing academic network spans multiple campuses, empowering students to achieve their full potential across a wide range of disciplines."
        innerBgDesk="/images/campus-inner-banner.gif"
        innerBgMobi="/images/campus-inner-banner.gif"
      />

      {/* {viceChancellor && (
        <DeanMessage
          title="Pro Vice Chancellor's"
          DeanName={viceChancellor.title}
          designation={viceChancellor.staffAcf.designation || ""}
          message={viceChancellor.staffAcf.message || ""}
          featuredImage={{
            sourceUrl:
              viceChancellor.featuredImage?.node?.sourceUrl ||
              "/images/placeholder.jpg",
            altText:
              viceChancellor.featuredImage?.node?.altText || "Vice Chancellor",
          }}
          fontFamily={"inherit"} // You can update this if you add font in VC fields
          fontColor={color} // Update if VC fields include color
        />
      )} */}

      <CampusFacilities />

      <CreativeCollage slug={slug || ""}/>

      <ContactHeadOffice />
    </>
  );
};

export default page;
