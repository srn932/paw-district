export const membershipPlans = [
  {
    name: "Companion",
    eyebrow: "A thoughtful start",
    price: "₹2,499",
    cadence: "per year",
    description: "For pets who visit often enough to enjoy a few familiar-member extras.",
    features: [
      "Member rates on routine grooming",
      "Preferred booking requests",
      "Helpful care reminders",
      "A little birthday surprise",
    ],
    featured: false,
  },
  {
    name: "Regular",
    eyebrow: "The happy middle",
    price: "₹4,999",
    cadence: "per year",
    description: "For regular grooms, occasional stays and pets who know the team by name.",
    features: [
      "Everything in Companion",
      "Extra value on regular grooming",
      "Member rates on boarding",
      "Seasonal member-only offers",
    ],
    featured: true,
  },
  {
    name: "All-Rounder",
    eyebrow: "Care, all together",
    price: "₹9,999",
    cadence: "per year",
    description: "For pets who use more of the District across grooming, boarding and training.",
    features: [
      "Everything in Regular",
      "A training member benefit",
      "Priority booking request window",
      "An annual care-routine review",
    ],
    featured: false,
  },
] as const;
