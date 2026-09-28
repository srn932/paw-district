import type { Metadata } from "next";
import { business } from "./business";
import { siteConfig } from "./site";

export const socialImageUrl = new URL("/images/paw-district-social.jpg", siteConfig.url).toString();

export const socialImage = {
  url: socialImageUrl,
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "The Paw District — boarding, grooming and dog training in Chennai",
};

export const SEO_TITLE_MAX = 60;
export const SEO_DESCRIPTION_MAX = 160;

function validateMetadataText(title: string, description: string) {
  if (title.length > SEO_TITLE_MAX) {
    throw new Error(`SEO title exceeds ${SEO_TITLE_MAX} characters: "${title}" (${title.length})`);
  }
  if (description.length > SEO_DESCRIPTION_MAX) {
    throw new Error(`SEO description exceeds ${SEO_DESCRIPTION_MAX} characters: "${description}" (${description.length})`);
  }
}

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const mentionsCity = description.toLowerCase().includes(business.city.toLowerCase());
  const cleanDescription = description.trim().replace(/[.]+$/, "");
  const resolvedDescription = `${cleanDescription}${mentionsCity ? "" : ` in ${business.city}`}.`;
  const resolvedTitle = title.toLowerCase().includes(siteConfig.name.toLowerCase())
    ? title
    : `${title} | ${siteConfig.name}`;
  const rawUrl = new URL(path || "/", `${siteConfig.url}/`).toString();
  const url = path && rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : path ? rawUrl : new URL(siteConfig.url).origin;

  validateMetadataText(resolvedTitle, resolvedDescription);

  return {
    title: { absolute: resolvedTitle },
    description: resolvedDescription,
    alternates: { canonical: url },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [socialImage],
    },
  };
}
