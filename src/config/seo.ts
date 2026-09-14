import type { Metadata } from "next";
import { business } from "./business";
import { siteConfig } from "./site";

export const socialImage = {
  url: "/images/paw-district-social.webp",
  width: 1200,
  height: 630,
  alt: "The Paw District — boarding, grooming and dog training in Chennai",
};

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const mentionsCity = description.toLowerCase().includes(business.city.toLowerCase());
  const cleanDescription = description.trim().replace(/[.]+$/, "");
  const resolvedDescription = `${cleanDescription}${mentionsCity ? "" : ` in ${business.city}`}.`;
  const url = new URL(path || "/", `${siteConfig.url}/`).toString().replace(/\/$/, path ? "" : "");
  return {
    title: title.toLowerCase().includes("paw district") ? { absolute: title } : title,
    description: resolvedDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: resolvedDescription,
      images: [socialImage.url],
    },
  };
}
