import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-sports.io",
        pathname: "/public/img/logos/**",
      },
    ],
  },
};

export default nextConfig;
