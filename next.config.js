/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // assetPrefix: ".",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
