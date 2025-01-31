import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "https://imageplaceholder.net",
      "picsum.photos",
      "i.pinimg.com",
    ],
  },
};

export default nextConfig;
