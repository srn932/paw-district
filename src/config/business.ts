export const business = {
  name: "Paw District",
  phone: "+91 73389 00239",
  whatsapp: "+91 73389 00239",
  email: "info@thepawdistrict.in",
  address: "No. 20/4A1A3, Mappedu Road, Alapakkam - Nedunkundram",
  city: "Chennai",
  state: "Tamil Nadu",
  postalCode: "600063",
  country: "India",
  latitude: "12.890742",
  longitude: "80.124825",
  openingHours: [] as string[],
  instagram: "",
  facebook: "",
  youtube: "",
} as const;

export const displayBusiness = {
  phone: business.phone,
  email: business.email,
  address: `${business.address}, ${business.city}, ${business.state} ${business.postalCode}`,
  hours: business.openingHours.length ? business.openingHours : ["Opening hours coming soon"],
};
