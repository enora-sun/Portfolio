import type { NextConfig } from "next";
const repo = "Portfolio"; // your repo name
const isGhPages = process.env.NEXT_PUBLIC_GH_PAGES === "true";
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },   // needed for <Image />
  trailingSlash: true,
  ...(isGhPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

export default nextConfig;
