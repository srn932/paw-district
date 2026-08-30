export const business = {
  name: "Paw District",
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  city: "",
  state: "",
  postalCode: "",
  country: "India",
  latitude: "",
  longitude: "",
  openingHours: [] as string[],
  instagram: "",
  facebook: "",
  youtube: "",
} as const;

export const displayBusiness = {
  phone: business.phone || "+91 ••••• •••••",
  email: business.email || "hello@pawdistrict.example",
  address: business.address || "Your Paw District address",
  hours: business.openingHours.length ? business.openingHours : ["Opening hours coming soon"],
};
