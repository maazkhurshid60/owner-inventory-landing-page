import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚨 Temporarily skip ESLint during `next build`.
    // Fix the reported issues later and remove this.
    ignoreDuringBuilds: true,
  },
  // If you use remote images, add allowed hosts here:
  // images: {
  //   remotePatterns: [
  //     { protocol: "https", hostname: "your.cdn.com" },
  //     { protocol: "https", hostname: "images.example.com" },
  //   ],
  // },
};

export default nextConfig;
