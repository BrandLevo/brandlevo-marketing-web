import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        search: "",
      },
    ],
  },
};

export default config;
