/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    unoptimized: false, // keep true if you don't want Next.js optimization
    minimumCacheTTL: 60, // cache time in seconds
  },
  experimental: {
    largePageDataBytes: 256 * 1000,
  },
};

export default nextConfig;
