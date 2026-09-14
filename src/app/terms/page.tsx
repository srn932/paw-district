import { PageHero } from "@/components/common/page-hero";
import { business, displayBusiness } from "@/config/business";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata("Terms & Conditions", "Website and pet-care enquiry terms for The Paw District", "/terms");

const sections = [
  ["Website use", "This website provides general information about Paw District's services and ways to contact us. It does not provide emergency, veterinary or medical advice. Please contact a qualified veterinarian for medical concerns and the appropriate emergency service for urgent situations."],
  ["Enquiries and bookings", "Submitting an enquiry or opening a pre-filled WhatsApp message does not create a booking or guarantee availability. A visit, stay, grooming appointment or training session is booked only after Paw District confirms the service, timing and any applicable price or payment requirement directly with you."],
  ["Prices and service details", "Prices, inclusions, availability, deposits, cancellation terms and refund arrangements are confirmed before a booking. Website descriptions are general and may be updated as services change. If anything on the website differs from the details confirmed for your booking, the directly confirmed booking details apply."],
  ["Accurate pet information", "Pet parents are responsible for sharing accurate, current health, vaccination, medication, diet, behaviour and emergency-contact information relevant to the requested care. Tell us promptly if this information changes before or during a booking."],
  ["Care suitability and safety", "We may adjust, pause or decline an activity or service when health, behaviour, safety, staffing or facility conditions make the planned care unsuitable. Any material change will be discussed with the pet parent or emergency contact when reasonably possible."],
  ["Training and general guidance", "Training outcomes vary with the dog, behaviour history, health, environment and consistency of practice. No particular result is guaranteed. General website guidance does not replace individual veterinary or qualified behavioural advice where health or safety concerns are involved."],
  ["Third-party services", "Links to WhatsApp, Google Maps and other third-party services are provided for convenience. Those services are operated under their own terms and policies, and Paw District is not responsible for their availability or independent processing."],
  ["Intellectual property", "The Paw District name, original website copy, interface and brand assets may not be copied or reused without permission, except where applicable law allows it. Third-party photographs, icons and services remain subject to their respective licences and terms."],
  ["Changes and contact", `We may update these terms when the website, services or applicable requirements change. Questions can be sent to ${business.email} or mailed to ${displayBusiness.address}.`],
] as const;

export default function TermsPage() {
  return <><PageHero eyebrow="Legal" title="Clear terms for calmer visits." copy="How website enquiries, bookings and general service information work." breadcrumbs={[{ label: "Terms & conditions" }]} accent="bg-peach" /><article className="container-shell pb-24"><div className="mx-auto max-w-3xl"><p className="mb-12 text-sm font-bold uppercase tracking-[.12em] text-forest">Last updated 15 September 2026</p>{sections.map(([title, copy]) => <section key={title} className="mb-10"><h2 className="text-2xl font-bold tracking-[-.035em]">{title}</h2><p className="mt-4 text-lg leading-8 text-muted">{copy}</p></section>)}</div></article></>;
}
