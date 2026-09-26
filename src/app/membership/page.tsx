import {
  BadgePercent,
  CalendarCheck2,
  Check,
  Gift,
  HeartHandshake,
  PawPrint,
  Sparkles,
} from "lucide-react";
import { ButtonLink } from "@/components/common/button";
import { FAQAccordion } from "@/components/common/faq-accordion";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { pageMetadata } from "@/config/seo";
import { membershipPlans } from "@/data/membership";

export const metadata = pageMetadata(
  "Pet Care Membership Chennai | Paw District",
  "Explore Paw District membership in Chennai for grooming, boarding and training benefits, member value and a more familiar care routine",
  "/membership",
);

const benefits = [
  {
    icon: BadgePercent,
    title: "Value that feels useful",
    copy: "Member benefits are built around the care pets actually return for—not a long list of things nobody uses.",
  },
  {
    icon: CalendarCheck2,
    title: "Planning feels easier",
    copy: "Request regular visits with one team that already knows your pet, their routine and the useful little details.",
  },
  {
    icon: HeartHandshake,
    title: "Familiarity grows",
    copy: "More visits with familiar people can mean calmer handovers, better context and fewer repeated explanations.",
  },
];

const steps = [
  ["01", "Choose your fit", "Start with the plan closest to the care your pet uses most."],
  ["02", "Tell us about them", "We will confirm suitability, plan benefits and the best fit with you."],
  ["03", "Make the District familiar", "Book care as needed and enjoy the benefits included in your active plan."],
];

const faqs = [
  {
    question: "Do I need a membership to use Paw District?",
    answer:
      "Not at all. Boarding, grooming and training remain available without membership. Membership is simply for pet parents who want more value and a familiar rhythm across repeat visits.",
  },
  {
    question: "How is membership billed?",
    answer:
      "Membership is billed annually at the price shown for your chosen plan. We confirm the included benefits and applicable terms before you join.",
  },
  {
    question: "Does membership guarantee a booking?",
    answer:
      "No. All bookings remain subject to availability and suitability for the pet and requested service. Some plans may include a preferred request window, but every visit is confirmed directly.",
  },
  {
    question: "Can one plan cover more than one pet?",
    answer:
      "Multi-pet rules will be confirmed after consultation. Tell us about your pets and we will help you find the most sensible option.",
  },
  {
    question: "Can I change or cancel my plan?",
    answer:
      "Yes, subject to the final billing and notice terms shared before you join. There will be no surprises: the applicable rules will be clear before payment.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Paw District membership"
        title="More familiar care. More value in every visit."
        copy="For pets who keep coming back—and pet parents who like having grooming, boarding and training benefits in one happy place."
        breadcrumbs={[{ label: "Membership" }]}
        accent="bg-peach"
      />

      <section className="container-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Why join</p>
            <h2 className="headline">The perks of being a regular.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-lg max-w-2xl">
              Membership is designed to make repeat care feel simpler, warmer
              and better value—while keeping every recommendation centred on
              the pet in front of us.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-5xl bg-ink/10 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, copy }, index) => (
            <Reveal key={title} delay={index * 0.06} className="bg-ivory p-7 md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-forest">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-10 text-2xl font-bold tracking-[-.04em]">{title}</h3>
              <p className="mt-4 leading-7 text-muted">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="plans" className="scroll-mt-24 bg-cream section-pad">
        <div className="container-shell">
          <Reveal>
            <div>
              <p className="eyebrow">Choose your membership</p>
              <h2 className="headline">A plan for every kind of regular.</h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {membershipPlans.map((plan, index) => (
              <Reveal
                key={plan.name}
                delay={index * 0.07}
                className={`relative flex flex-col rounded-5xl border p-7 md:p-9 ${plan.featured ? "border-forest bg-forest text-white shadow-soft" : "border-ink/10 bg-ivory"}`}
              >
                {plan.featured ? (
                  <span className="absolute right-6 top-6 rounded-full bg-sun px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-ink">
                    Most popular
                  </span>
                ) : null}
                <p className={`text-[10px] font-extrabold uppercase tracking-[.18em] ${plan.featured ? "text-mint" : "text-forest"}`}>
                  {plan.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-[-.05em]">{plan.name}</h3>
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-extrabold tracking-[-.06em]">{plan.price}</span>
                  <span className={`pb-1 text-sm ${plan.featured ? "text-white/60" : "text-muted"}`}>{plan.cadence}</span>
                </div>
                <p className={`mt-5 leading-7 ${plan.featured ? "text-white/70" : "text-muted"}`}>
                  {plan.description}
                </p>
                <ul className={`my-8 space-y-4 border-y py-8 ${plan.featured ? "border-white/15" : "border-ink/10"}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm font-semibold">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-sun" : "text-forest"}`} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/visit" variant={plan.featured ? "light" : "primary"} className="mt-auto">
                  Ask about {plan.name}
                </ButtonLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">How it works</p>
              <h2 className="headline">Three steps. Zero fuss.</h2>
              <PawPrint className="mt-10 h-10 w-10 text-leaf" aria-hidden="true" />
            </div>
          </Reveal>
          <div className="grid gap-4">
            {steps.map(([number, title, copy], index) => (
              <Reveal
                key={number}
                delay={index * 0.06}
                className="grid gap-6 rounded-4xl border border-ink/10 p-7 sm:grid-cols-[auto_1fr] sm:items-start md:p-9"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-peach text-xs font-extrabold text-forest">
                  {number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold tracking-[-.04em]">{title}</h3>
                  <p className="mt-3 leading-7 text-muted">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <Reveal>
            <p className="eyebrow !text-mint">A little extra happiness</p>
            <h2 className="headline">Because loyalty deserves a wag back.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Useful savings, thoughtful extras and one team that gets to know
              your pet better over time. That is the whole idea.
            </p>
            <ButtonLink href="/visit" variant="light" className="mt-8">
              Ask about membership
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.08} className="relative overflow-hidden rounded-5xl bg-mint p-8 text-ink md:p-12">
            <Sparkles className="h-8 w-8 text-forest" aria-hidden="true" />
            <p className="mt-16 text-3xl font-bold leading-tight tracking-[-.04em]">
              Member benefits across grooming, boarding and training—all under
              one familiar roof.
            </p>
            <Gift className="absolute -bottom-8 -right-6 h-40 w-40 rotate-[-10deg] text-forest opacity-10" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="eyebrow">Membership FAQs</p>
            <h2 className="headline">Worth knowing.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to become a District regular?"
        copy="Tell us about your pet, the care they use and the plan that caught your eye. We will take it from there."
      />
    </>
  );
}
