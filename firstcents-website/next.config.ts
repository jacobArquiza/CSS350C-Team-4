import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https"
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
