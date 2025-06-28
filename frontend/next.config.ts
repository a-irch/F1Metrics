import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '192.168.1.195',
    'localhost',
    '127.0.0.1',
  ],
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.formula1.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
