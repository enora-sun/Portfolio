import type { NextConfig } from "next";

const repo = "Portfolio";
const isGhPages = process.env.NEXT_PUBLIC_GH_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGhPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? `/${repo}` : "",
  },
};

export default nextConfig;

