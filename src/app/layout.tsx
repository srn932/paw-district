import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { AnalyticsConsent } from "@/components/common/analytics-consent";
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
  icons: {
    icon: "/icon.svg",
    apple: "/images/paw-district-mark.webp",
  },
};

export const viewport: Viewport = { themeColor: "#17251F", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const address = business.address ? { "@type": "PostalAddress", streetAddress: business.address, addressLocality: business.city, addressRegion: business.state, postalCode: business.postalCode, addressCountry: business.country } : undefined;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${business.latitude},${business.longitude}`;
  return (
    <html lang="en">
      <body>
        <AnalyticsConsent />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SEOJsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${siteConfig.url}/#business`,
            name: business.name,
            description: siteConfig.description,
            url: siteConfig.url,
            image: `${siteConfig.url}/images/paw-district-social.webp`,
            logo: `${siteConfig.url}/images/paw-district-mark.webp`,
            telephone: business.phone,
            email: business.email,
            address,
            geo: {
              "@type": "GeoCoordinates",
              latitude: Number(business.latitude),
              longitude: Number(business.longitude),
            },
            hasMap: mapUrl,
            areaServed: { "@type": "City", name: business.city },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: business.phone,
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English"],
            },
            sameAs: [business.instagram, business.facebook, business.youtube].filter(Boolean),
          }}
        />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
