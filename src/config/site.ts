import { business } from "./business";

export const siteConfig = {
  name: business.name,
  tagline: "Everything your pet needs. One happy district.",
  description:
    "Thoughtful pet boarding, professional grooming and practical dog training in one warm, pet-first place in Chennai.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.thepawdistrict.in",
  navigation: [
    { label: "Our District", href: "/about" },
    { label: "Boarding", href: "/services/boarding" },
    { label: "Grooming", href: "/services/grooming" },
    { label: "Training", href: "/services/training" },
    { label: "Membership", href: "/membership" },
    { label: "Journal", href: "/blog" },
    { label: "Visit the District", href: "/visit" },
  ],
} as const;

export function whatsappUrl(message = "Hi Paw District, I'd like to know more about boarding, grooming or training.") {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || business.whatsapp;
  return number ? `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}` : "/visit";
}
