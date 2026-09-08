import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["79.143.185.101"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "qclay.design" },
    ],
  },
};

export default nextConfig;
