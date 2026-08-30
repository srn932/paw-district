import { business } from "./business";

export const siteConfig = {
  name: business.name,
  tagline: "Everything your pet needs. One happy district.",
  description:
    "Thoughtful grooming, daycare, boarding and everyday wellness in one warm, pet-first place.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  navigation: [
    { label: "Our District", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Grooming", href: "/services/grooming" },
    { label: "Daycare", href: "/services/daycare" },
    { label: "Boarding", href: "/services/boarding" },
    { label: "Wellness", href: "/services/wellness" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export function whatsappUrl(message = "Hi Paw District, I'd like to know more about your pet care services.") {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || business.whatsapp;
  return number ? `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}` : "/contact";
}
