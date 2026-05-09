import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    // Required in Next.js 16: restrict which quality values are allowed
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
