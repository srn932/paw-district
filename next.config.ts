import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
  "frame-src https://www.google.com https://www.googletagmanager.com",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
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
      { source: "/testimonials", destination: "/why-paw-district", permanent: true },
      { source: "/blog/is-dog-daycare-right-for-your-pet", destination: "/blog/dog-training-at-home-five-foundations", permanent: true },
    ];
  },
};

export default nextConfig;
