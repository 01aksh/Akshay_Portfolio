/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Akshay_Portfolio",
  assetPrefix: "/Akshay_Portfolio/",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
