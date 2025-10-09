import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 768, 1080, 1440],
    imageSizes: [64, 96, 128, 256, 384],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: { optimizePackageImports: ["framer-motion"] },
};

export default nextConfig;
