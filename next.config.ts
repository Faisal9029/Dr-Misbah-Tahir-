import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   // ✅ New way
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.sanity.io",
    },
  ],
},

};

export default nextConfig;
