// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set root to current directory
    root: process.cwd()
  },
};

export default nextConfig;