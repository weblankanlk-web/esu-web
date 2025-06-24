// app/api/home-banner/route.ts
import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis"; // Import the Redis connection
import { graphQLClient } from "@/lib/graphql-client";
import { HOME_BANNER_QUERY } from "@/common/queries/query";

type HomeBannerTypes = {
  page: {
    id: string;
    title: string;
    homeBanner: {
      bannerImages: {
        desktopImage?: {
          node?: MediaItem;
        };
        mobileImage?: {
          node?: MediaItem;
        };
        bannerText?: string;
        logo?: {
          node?: MediaItem;
        };
        button?: {
          nodes?: ButtonNode[];
        };
      }[];
    };
  };
};

type MediaItem = {
  sourceUrl?: string;
  altText?: string;
  mediaDetails?: {
    width?: number;
    height?: number;
  };
};

type ButtonNode = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  schoolTypesColorFontFields?: {
    homeBannerButtonText?: string;
    color?: string;
  };
};

export async function GET(req: NextRequest) {
  const cacheKey = "homeBanners";

  try {
    // Check if the data is in Redis cache
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      console.log("Using cached data");
      return NextResponse.json(JSON.parse(cachedData));
    }

    // Fetch from GraphQL API if not in cache
    const response = await graphQLClient.request<HomeBannerTypes>(
      HOME_BANNER_QUERY
    );
    console.log("GraphQL response:", response);
    const banners = response.page?.homeBanner?.bannerImages || [];

    // Cache the response in Redis for future requests (expire in 1 hour)
    await redis.set(cacheKey, JSON.stringify(banners), "EX", 3600);

    // Return the fetched banners
    return NextResponse.json(banners);
  } catch (error) {
    console.error("Error fetching home banners:", error);
    return NextResponse.json(
      { error: "Failed to fetch home banners" },
      { status: 500 }
    );
  }
}
