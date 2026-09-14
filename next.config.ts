import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   htmlLimitedBots: /.*/,
  images: {
    // Development imagery is remote placeholder content. This avoids requiring the
    // local Next.js server to fetch third-party images in restricted environments.
    // Replace with local, approved Paw District photography before launch.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      { source: "/services", destination: "/services/boarding", permanent: true },
      { source: "/services/daycare", destination: "/services/boarding", permanent: true },
      { source: "/services/wellness", destination: "/services/training", permanent: true },
      { source: "/services/spa", destination: "/services/grooming", permanent: true },
      { source: "/services/vet-consultations", destination: "/visit", permanent: true },
      { source: "/services/puppy-care", destination: "/services/training", permanent: true },
      { source: "/services/senior-support", destination: "/services/boarding", permanent: true },
      { source: "/contact", destination: "/visit", permanent: true },
      { source: "/book", destination: "/visit", permanent: true },
      { source: "/blog/is-dog-daycare-right-for-your-pet", destination: "/blog/dog-training-at-home-five-foundations", permanent: true },
    ];
  },
};

export default nextConfig;
