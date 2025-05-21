import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Optimize for Docker by including only necessary files
  images: {
    unoptimized: true, // Disable image optimization for non-Vercel deployments
  },
};

export default nextConfig;
