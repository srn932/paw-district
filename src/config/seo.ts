import type { Metadata } from "next";
import { business } from "./business";
import { siteConfig } from "./site";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const location = business.city ? ` in ${business.city}` : "";
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description: `${description}${location}.`,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
