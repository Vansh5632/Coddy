/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    // Handle type checking during build (Vercel will respect this)
    ignoreBuildErrors: false,
  },
  eslint: {
    // Handle linting during build (Vercel will respect this)
    ignoreDuringBuilds: false,
  },
  // Ensure server functions for Clerk authentication work properly
  experimental: {
    serverComponentsExternalPackages: ["convex/server"],
  },
};

module.exports = nextConfig;
