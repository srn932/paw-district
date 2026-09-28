export const membershipPlans = [
  {
    name: "Grooming Club",
    tier: "Companion",
    price: "₹2,499",
    cadence: "per year",
    description: "For pets who love to stay fresh, comfortable and well-groomed throughout the year.",
    image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Happy dog after a professional grooming session",
    imagePosition: "50% 38%",
    highlights: [
      { icon: "scissors", title: "2 complimentary grooming sessions", detail: "Any breed · All standard grooming services" },
      { icon: "percent", title: "20% off your next 10 grooming sessions", detail: "Valid for 12 months" },
    ],
    benefits: [
      ["calendar", "Priority booking requests"],
      ["bell", "Care reminders"],
      ["gift", "A birthday surprise for your pet"],
      ["star", "Member-only offers and seasonal benefits"],
    ],
    featured: false,
  },
  {
    name: "Boarding Club",
    tier: "Regular",
    price: "₹4,999",
    cadence: "per year",
    description: "For families who travel, work long hours or need a trusted place for their pet to stay.",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Relaxed golden retriever during a boarding stay",
    imagePosition: "50% 46%",
    highlights: [
      { icon: "bed", title: "3 AC boarding days included", detail: "Standard AC suite · Valid for 12 months" },
      { icon: "scissors", title: "1 complimentary grooming session", detail: "Any breed · All standard grooming services" },
      { icon: "percent", title: "20% off your next 15 boarding days", detail: "Valid for 12 months" },
    ],
    benefits: [
      ["calendar", "Priority booking for peak dates"],
      ["home", "Regular updates during your pet's stay"],
      ["heart", "Care reminders and wellness tips"],
      ["gift", "A birthday surprise for your pet"],
      ["star", "Member-only offers and seasonal benefits"],
    ],
    featured: true,
  },
  {
    name: "Training Club",
    tier: "All-Rounder",
    price: "₹9,999",
    cadence: "per year",
    description: "For pets whose care goes beyond the basics—with behaviour, confidence and happier everyday life.",
    image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Dog confidently following a trainer outdoors",
    imagePosition: "50% 44%",
    highlights: [
      { icon: "graduation", title: "Basic Training Programme included", detail: "4 structured sessions · Details below" },
      { icon: "bed", title: "3 AC boarding days included", detail: "Standard AC suite · Valid for 12 months" },
      { icon: "scissors", title: "1 complimentary grooming session", detail: "Any breed · All standard grooming services" },
      { icon: "percent", title: "20% off your next 15 training sessions", detail: "Valid for 12 months" },
    ],
    benefits: [
      ["calendar", "Priority booking for training classes"],
      ["chart", "Progress updates and trainer feedback"],
      ["heart", "Care reminders and wellness tips"],
      ["gift", "A birthday surprise for your pet"],
      ["star", "Member-only offers and seasonal benefits"],
    ],
    featured: false,
  },
] as const;

export const trainingProgramme = [
  { number: "01", icon: "clipboard", title: "Assessment session", copy: "Understanding your pet's behaviour and goals." },
  { number: "02", icon: "paw", title: "Basic obedience", copy: "Sit, stay, down, focus and more." },
  { number: "03", icon: "link", title: "Leash & impulse control", copy: "Better walking manners and calmer choices." },
  { number: "04", icon: "users", title: "Recall & social behaviour", copy: "Building confidence and positive interactions." },
] as const;

export const membershipAssurances = [
  { icon: "paw", title: "Trusted team", copy: "Professional care, always" },
  { icon: "shield", title: "Safe & hygienic", copy: "Clean, secure and pet-friendly" },
  { icon: "heart", title: "Personalised care", copy: "Based on your pet's needs" },
  { icon: "star", title: "Priority support", copy: "For our members" },
  { icon: "gift", title: "Exclusive offers", copy: "Throughout the year" },
] as const;

export const membershipTerms = [
  "All memberships are valid for 12 months from the date of purchase.",
  "Complimentary services are non-transferable and cannot be encashed.",
  "Discounted sessions apply only to the specified number of sessions.",
  "Prior booking is required and all services remain subject to availability.",
  "Membership benefits cannot be combined with other offers or packages.",
] as const;
