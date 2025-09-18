import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/img/**", // in case product images are under /img
      },
    ],
  },};

export default nextConfig;
