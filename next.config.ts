import type { NextConfig } from "next";

const isEn = process.env.NEXT_PUBLIC_LOCALE === "en";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isEn ? "/portfolio/en" : "/portfolio",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
