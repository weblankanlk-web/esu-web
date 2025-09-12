"use client";

import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import FaculityOverview from "@/components/pages/Faculty/FaculityOverview/FaculityOverview";
import React, { useEffect, useState } from "react";
import "./style.scss";
import OurPartners from "@/components/pages/Internship/OurPartners/OurPartners";
import CurrentOpportunities from "@/components/pages/Internship/CurrentOpportunities/CurrentOpportunities";
import { usePathname } from "next/navigation";
import { graphQLClient } from "@/lib/graphql-client";
import {
  GET_FACULTY_OVERVIEW_SLUG,
  GET_INTERNSHIP_PROGRAM,
  GET_OUR_PATNERS_SLUG,
} from "@/common/queries/query";
import Preloader from "@/components/common/Preloader/Preloader";
import Newsletter from "@/components/pages/Internship/Newsletter/Newsletter";

interface InnerBannerData {
  innerPageTitlePrimary: string;
  innerPageTitleSecondary: string;
  innerPageDescription: string;
  innerBgDesk?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  innerBgMobi?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

interface FacultyOverviewData {
  overview: string;
  schoolOverviewTitle: string;
  overviewImage?: {
    node?: {
      altText: string;
      sourceUrl: string;
    };
  };
}

interface PartnerImageNode {
  altText: string;
  sourceUrl: string;
}

interface PartnerGalleryItem {
  ourPartnersImage: {
    node: PartnerImageNode;
  };
}

interface OurPartnersResponse {
  page: {
    ourPartners: {
      ourPartnersGallery: PartnerGalleryItem[];
    };
  };
}

interface Logo {
  src: string;
  alt: string;
}

const page = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  console.log(slug);

  const [innerBanner, setInnerBanner] = useState<InnerBannerData | null>(null);
  const [facultyOverview, setFacultyOverview] =
    useState<FacultyOverviewData | null>(null);

  const [ourPartners, setOurPartners] = useState<Logo[]>([]);

  const [loading, setLoading] = useState(true);
  const [loadingFacultyOverview, setLoadingFacultyOverview] = useState(true);

  useEffect(() => {
    setLoading(true);
    setLoadingFacultyOverview(true);

    const fetchData = async () => {
      try {
        if (!slug) return;

        const data = await graphQLClient.request<{
          page: { innerBanner: InnerBannerData };
        }>(GET_INTERNSHIP_PROGRAM, { slug });

        setInnerBanner(data.page?.innerBanner || null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching internship program:", error);
      }
    };

    const fetchFacutlyOverview = async () => {
      try {
        if (!slug) return;

        const data = await graphQLClient.request<{
          page: { faculityOverview: FacultyOverviewData };
        }>(GET_FACULTY_OVERVIEW_SLUG, { slug });

        setFacultyOverview(data.page?.faculityOverview || null);
        setLoadingFacultyOverview(false);
      } catch (error) {
        console.error("Error fetching internship program:", error);
      }
    };

    const fetchOurPatners = async () => {
      try {
        if (!slug) return;

        const data = await graphQLClient.request<OurPartnersResponse>(
          GET_OUR_PATNERS_SLUG,
          { slug }
        );
        const formattedLogos: Logo[] =
          data.page?.ourPartners?.ourPartnersGallery?.map((item) => ({
            src: item.ourPartnersImage.node.sourceUrl,
            alt: item.ourPartnersImage.node.altText || "Partner Logo",
          })) || [];

        setOurPartners(formattedLogos);
      } catch (error) {
        console.error("Error fetching internship program:", error);
      }
    };

    fetchData();
    fetchFacutlyOverview();
    fetchOurPatners();
  }, [slug]);

  if (loading) return <Preloader />;

  return (
    <div className="intership-page">
      <InnerBanner
        innerPageTitlePrimary={innerBanner?.innerPageTitlePrimary || "Inner"}
        innerPageTitleSecondary={
          innerBanner?.innerPageTitleSecondary || "Banner"
        }
        innerPageDescription={innerBanner?.innerPageDescription || ""}
        innerBgDesk={
          innerBanner?.innerBgDesk?.node.sourceUrl || "/images/inner-banner.gif"
        }
        innerBgMobi={
          innerBanner?.innerBgMobi?.node.sourceUrl || "/images/inner-banner.gif"
        }
      />

      <div
        style={
          {
            "--faculty-color": "#00AECD",
            "--faculty-font": "Space Grotesk",
          } as React.CSSProperties
        }
      >
        <FaculityOverview
          schoolOverviewTitle={`<span class="intership-overview-title">${facultyOverview?.schoolOverviewTitle}</span>`}
          OverviewImage={
            "https://cms.esu.lk/wp-content/uploads/2025/05/Group-10000050CX22-1.png"
          }
          Overview={`${facultyOverview?.overview}`}
        />
      </div>

      <OurPartners logos={ourPartners || []} />

      <CurrentOpportunities />

      <Newsletter />
    </div>
  );
};

export default page;
