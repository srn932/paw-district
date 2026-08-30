import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { ChatWidget } from "@/components/common/chat-widget";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { business } from "@/config/business";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Paw District | Modern Pet Care", template: "%s | Paw District" },
  description: siteConfig.description,
  applicationName: "Paw District",
  keywords: ["pet boarding Chennai", "dog boarding", "cat boarding", "pet grooming Chennai", "dog grooming", "cat grooming", "dog training Chennai", "puppy training"],
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#17251F", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const address = business.address ? { "@type": "PostalAddress", streetAddress: business.address, addressLocality: business.city, addressRegion: business.state, postalCode: business.postalCode, addressCountry: business.country } : undefined;
  return (
    <html lang="en">
      <body><SEOJsonLd data={{ "@context": "https://schema.org", "@type": ["LocalBusiness", "PetStore"], name: business.name, description: siteConfig.description, url: siteConfig.url, telephone: business.phone || undefined, email: business.email || undefined, address, geo: business.latitude && business.longitude ? { "@type": "GeoCoordinates", latitude: business.latitude, longitude: business.longitude } : undefined, openingHours: business.openingHours.length ? business.openingHours : undefined, sameAs: [business.instagram, business.facebook, business.youtube].filter(Boolean) }} /><Navbar /><main>{children}</main><Footer /><WhatsAppButton /><ChatWidget /><MobileActionBar /></body>
    </html>
  );
}
