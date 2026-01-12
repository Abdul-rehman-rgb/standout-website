import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: Is se production build mein errors ignore ho jayenge.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Typescript errors ko bhi ignore karne ke liye (agar zarurat ho)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
