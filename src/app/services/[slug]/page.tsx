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
import { pageMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { getService, services } from "@/data/services";

const groomingMenu = [
  ["Bath & brush", "Starts from ₹1,499"],
  ["Full groom", "Starts from ₹2,499"],
  ["Cat grooming", "Starts from ₹999"],
  ["De-shedding", "Starts from ₹1,999"],
  ["Spa add-ons", "Starts from ₹499"],
] as const;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata(
    `${service.name} Chennai | Paw District`,
    service.description,
    `/services/${service.slug}`,
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${service.name} at Paw District`,
          description: service.description,
          areaServed: { "@type": "City", name: "Chennai" },
          provider: { "@id": `${siteConfig.url}/#business` },
          url: `${siteConfig.url}/services/${service.slug}`,
        }}
      />
      <PageHero
        eyebrow={service.kicker}
        title={service.headline}
        copy={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        imagePosition={service.imagePosition}
        accent={service.color}
        breadcrumbs={[{ label: service.name }]}
      />

      <section className="container-shell section-pad">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">What&apos;s included</p>
            <h2 className="headline">Care in the useful details.</h2>
            <p className="body-lg mt-6">
              We start with your pet&apos;s needs and build the visit from there.
              Contact us to confirm availability and the right inclusions for your pet.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, index) => (
              <Reveal key={feature} delay={index * 0.04} className="flex items-center gap-4 rounded-3xl border border-ink/10 bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-bold">{feature}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionHeading eyebrow="What to expect" title={`A ${service.name.toLowerCase()} visit, considered.`} />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {service.flow.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} className="card p-7 md:p-9">
                <span className="text-xs font-extrabold tracking-widest text-forest">0{index + 1}</span>
                <ShieldCheck className="my-10 h-8 w-8 text-forest" aria-hidden="true" />
                <h3 className="text-2xl font-bold tracking-[-.04em]">{step.title}</h3>
                <p className="mt-4 leading-7 text-muted">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {service.slug === "grooming" ? (
        <section id="grooming-menu" className="container-shell section-pad scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="eyebrow">Grooming menu</p>
                <h2 className="headline">A clear plan for their coat.</h2>
                <p className="body-lg mt-6">
                  Pricing depends on size, coat condition, style, behaviour and the
                  time needed for comfortable handling. We confirm the service and
                  price after discussing your pet.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="overflow-hidden rounded-4xl border border-ink/10">
              {groomingMenu.map(([item, price]) => (
                <div key={item} className="flex flex-col gap-1 border-b border-ink/10 bg-white p-5 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="font-bold">{item}</span>
                  <span className="text-sm font-semibold text-forest">{price}</span>
                </div>
              ))}
              <p className="border-t border-ink/10 bg-cream px-5 py-4 text-xs text-muted">
                * Prices are inclusive of taxes.
              </p>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="container-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="eyebrow">Good questions</p>
            <h2 className="headline">Before they visit.</h2>
            <p className="mt-6 leading-7 text-muted">
              Specific health or medical concerns should be discussed with a qualified veterinarian.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <FAQAccordion items={service.faqs} />
            <ButtonLink href="/faq" variant="outline" className="mt-8">See all FAQs</ButtonLink>
          </Reveal>
        </div>
      </section>
      <CTASection
        title={`Ready to plan their ${service.name.toLowerCase()} visit?`}
        copy="Tell us the useful things—their routine, temperament and what would make the day go well."
      />
    </>
  );
}
