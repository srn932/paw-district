// PLACEHOLDER PLANS: Benefits and pricing require approval before launch.
export const membershipPlans = [
  { name: "Essential", price: "Price on request", description: "For pets finding a steadier care rhythm.", features: ["Preferred booking requests", "Routine reminders", "Member updates"], featured: false, placeholder: true },
  { name: "Plus", price: "Price on request", description: "For regular grooms, play days and familiar faces.", features: ["Everything in Essential", "Sample grooming saving", "Sample daycare benefit", "Birthday surprise"], featured: true, placeholder: true },
  { name: "Paw District Club", price: "Price on request", description: "For pets who practically have their own seat here.", features: ["Everything in Plus", "Priority request window", "Member-only offers", "Seasonal care review"], featured: false, placeholder: true },
] as const;
