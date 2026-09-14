import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { FAQAccordion } from "@/components/common/faq-accordion";
import { ButtonLink } from "@/components/common/button";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { getService, services } from "@/data/services";
import { siteConfig } from "@/config/site";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = getService(slug); if (!service) return {};
  const title = `${service.name} in Chennai`;
  const url = `${siteConfig.url}/services/${service.slug}`;
  return { title, description: service.description, alternates: { canonical: url }, openGraph: { title: `${title} | Paw District`, description: service.description, url, siteName: siteConfig.name, locale: "en_IN", type: "website", images: [{ url: "/images/paw-district-social.webp", width: 1200, height: 630, alt: "The Paw District in Chennai" }] }, twitter: { card: "summary_large_image", title: `${title} | Paw District`, description: service.description, images: ["/images/paw-district-social.webp"] } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = getService(slug); if (!service) notFound();
  return <><SEOJsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: `${service.name} at Paw District`, description: service.description, areaServed: { "@type": "City", name: "Chennai" }, provider: { "@id": `${siteConfig.url}/#business` }, url: `${siteConfig.url}/services/${service.slug}` }} /><PageHero eyebrow={service.kicker} title={service.headline} copy={service.intro} image={service.image} imagePosition={service.imagePosition} accent={service.color} breadcrumbs={[{ label: service.name }]} />
    <section className="container-shell section-pad"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow">What&apos;s included</p><h2 className="headline">Care in the useful details.</h2><p className="body-lg mt-6">We start with your pet&apos;s needs and build the visit from there. Contact us to confirm availability and the right inclusions for your pet.</p></Reveal><div className="grid gap-4 sm:grid-cols-2">{service.features.map((feature,index)=><Reveal key={feature} delay={index*.04} className="flex items-center gap-4 rounded-3xl border border-ink/10 bg-white p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint"><Check className="h-4 w-4" /></span><span className="font-bold">{feature}</span></Reveal>)}</div></div></section>
    <section className="bg-cream section-pad"><div className="container-shell"><Reveal><SectionHeading eyebrow="What to expect" title={`A ${service.name.toLowerCase()} visit, considered.`} /></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-3">{service.flow.map((step,index)=><Reveal key={step.title} delay={index*.08} className="card p-7 md:p-9"><span className="text-xs font-extrabold tracking-widest text-forest">0{index+1}</span><ShieldCheck className="my-10 h-8 w-8 text-forest" /><h3 className="text-2xl font-bold tracking-[-.04em]">{step.title}</h3><p className="mt-4 leading-7 text-muted">{step.text}</p></Reveal>)}</div></div></section>
    {service.slug === "grooming" && <section className="container-shell section-pad"><div className="grid gap-10 lg:grid-cols-2"><Reveal><div><p className="eyebrow">Grooming menu</p><h2 className="headline">A clear plan for their coat.</h2><p className="body-lg mt-6">Pricing depends on size, coat condition, style, behaviour and the time needed for comfortable handling. We confirm the service and price after discussing your pet.</p></div></Reveal><Reveal delay={.1} className="overflow-hidden rounded-4xl border border-ink/10">{["Bath & brush","Full groom","Cat grooming","De-shedding","Spa add-ons"].map((item)=><div key={item} className="flex items-center justify-between border-b border-ink/10 bg-white p-5 last:border-0"><span className="font-bold">{item}</span><span className="text-sm text-muted">Quote after consultation</span></div>)}</Reveal></div></section>}
    <section className="container-shell section-pad"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><Reveal><p className="eyebrow">Good questions</p><h2 className="headline">Before they visit.</h2><p className="mt-6 leading-7 text-muted">Specific health or medical concerns should be discussed with a qualified veterinarian.</p></Reveal><Reveal delay={.08}><FAQAccordion items={service.faqs} /><ButtonLink href="/faq" variant="outline" className="mt-8">See all FAQs</ButtonLink></Reveal></div></section><CTASection title={`Ready to plan their ${service.name.toLowerCase()} visit?`} copy="Tell us the useful things—their routine, temperament and what would make the day go well." /></>;
}
