import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Development imagery is remote placeholder content. This avoids requiring the
    // local Next.js server to fetch third-party images in restricted environments.
    // Replace with local, approved Paw District photography before launch.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
