export const business = {
  name: "Paw District",
  phone: "+91 73389 00239",
  whatsapp: "+91 73389 00239",
  email: "hello@thepawdistrict.in",
  address: "No. 20, Mappedu Rd, Alappakam, New Perungalathur, Chennai, Nedunkundram, Tamil Nadu 600063",
  city: "Chennai",
  state: "Tamil Nadu",
  postalCode: "600063",
  country: "India",
  latitude: "12.890917",
  longitude: "80.124797",
  mapUrl: "https://maps.app.goo.gl/SiJeWQrfvCXZNATp6",
  openingHours: ["Monday – Sunday: 8:00 AM – 8:00 PM"],
  instagram: "",
  facebook: "",
  youtube: "",
} as const;

export const displayBusiness = {
  phone: business.phone,
  email: business.email,
  address: business.address,
  hours: business.openingHours,
};
