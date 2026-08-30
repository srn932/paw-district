import { PageHero } from "@/components/common/page-hero";
import { ServiceCard } from "@/components/common/service-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { pageMetadata } from "@/config/seo";
import { services } from "@/data/services";

export const metadata = pageMetadata("Pet Care Services", "Explore grooming, pet spa, daycare, boarding, wellness, veterinary consultations, puppy care and senior pet support", "/services");

export default function ServicesPage() {
  return <><PageHero eyebrow="The care map" title="One district. Plenty of ways to care." copy="From the everyday essentials to the stay-away-from-home days, choose care that begins with who your pet is." breadcrumbs={[{ label: "Services" }]} accent="bg-sun" /><section className="container-shell pb-20 md:pb-28"><Reveal><SectionHeading eyebrow="All services" title="Find their kind of care." copy="Every service is shaped around comfort, behaviour, health notes and the small routines your pet already knows." /></Reveal><div className="mt-14 grid gap-6 md:grid-cols-2">{services.map((service,index)=><Reveal key={service.slug} delay={(index%2)*.07}><ServiceCard service={service} index={index} /></Reveal>)}</div></section><CTASection title="Not sure what fits? Tell us about them." copy="A few useful details about routine, temperament and what you need are enough to start the conversation." /></>;
}
