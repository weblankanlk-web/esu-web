import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["esoft.lk", "esoft.local", "cms.esu.lk"],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
