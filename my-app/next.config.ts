import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },   // needed for <Image />
  trailingSlash: true,
};

export default nextConfig;
