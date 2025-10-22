// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      root: process.cwd(), // Explicitly set root to current directory
    },
  },
};

export default nextConfig;