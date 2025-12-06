import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "img.clerk.com" },
      { 
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
