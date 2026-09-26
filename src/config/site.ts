import { business } from "./business";

export const siteConfig = {
  name: business.name,
  tagline: "Everything your pet needs. One happy district.",
  description:
    "Thoughtful pet boarding, professional grooming and practical dog training in one warm, pet-first place in Chennai.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.thepawdistrict.in",
  navigation: [
    { label: "Our District", href: "/about" },
    { label: "Membership", href: "/membership" },
    { label: "Journal", href: "/blog" },
  ],
  experienceNavigation: [
    { label: "Boarding", href: "/services/boarding", copy: "Stay, play and settle in" },
    { label: "Grooming", href: "/services/grooming", copy: "Coat care with patience" },
    { label: "Training", href: "/services/training", copy: "Clear cues for real life" },
  ],
} as const;

export function whatsappUrl(message = "Hi Paw District, I'd like to know more about boarding, grooming or training.") {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || business.whatsapp;
  return number ? `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}` : "/visit";
}
