import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pastorfrigorgb.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "e7.pngegg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "p7.hiclipart.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "1000logos.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "coffeegeography.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
