import { CalendarCheck2, MessagesSquare, PawPrint } from "lucide-react";
import { ButtonLink } from "@/components/common/button";
import { FAQAccordion } from "@/components/common/faq-accordion";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Regular Pet Care in Chennai",
  "Talk to Paw District about a practical routine for repeat grooming, boarding or dog training in Chennai",
  "/membership",
);

const steps = [
  {
    icon: PawPrint,
    title: "Tell us about your pet",
    copy: "Share their routine, temperament, care history and the services you are considering.",
  },
  {
    icon: MessagesSquare,
    title: "Discuss a suitable rhythm",
    copy: "We will talk through frequency, comfort, availability and what makes sense for your pet.",
  },
  {
    icon: CalendarCheck2,
    title: "Confirm each booking",
    copy: "Services, dates and prices are always confirmed directly before care begins.",
  },
];

const faqs = [
  {
    question: "Do I need a membership to use Paw District?",
    answer:
      "No. You can contact us about boarding, grooming or training whenever you need help.",
  },
  {
    question: "Can you recommend a regular care schedule?",
    answer:
      "Yes. The right schedule depends on your pet, their coat, routine, temperament and the service involved. We will discuss it with you before suggesting a plan.",
  },
  {
    question: "Are bookings automatically guaranteed?",
    answer:
      "No. Every booking is confirmed directly after we check availability and make sure the requested care is suitable.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="For regular visitors"
        title="A simpler rhythm for ongoing pet care."
        copy="Keep grooming, boarding and training conversations in one familiar place—with every recommendation shaped around your pet."
        breadcrumbs={[{ label: "Regular care" }]}
        accent="bg-peach"
      />

      <section className="container-shell section-pad">
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, copy }) => (
            <Reveal key={title} className="rounded-4xl border border-ink/10 p-7 md:p-9">
              <Icon className="h-7 w-7 text-forest" aria-hidden="true" />
              <h2 className="mt-10 text-2xl font-bold tracking-[-.04em]">{title}</h2>
              <p className="mt-4 leading-7 text-muted">{copy}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-4xl bg-mint p-7 md:p-10">
          <h2 className="text-3xl font-bold tracking-[-.04em]">Start with a conversation.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            Tell us which services you use, how often you need them and what helps
            your pet feel comfortable. We will share the current options,
            availability and pricing directly.
          </p>
          <ButtonLink href="/visit" className="mt-7">
            Ask about regular care
          </ButtonLink>
        </div>
      </section>

      <section className="container-shell pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="eyebrow">Regular care FAQs</p>
            <h2 className="headline">Worth knowing.</h2>
          </Reveal>
          <Reveal>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Build a care rhythm that fits."
        copy="Tell us about your pet and we will help you plan the next step."
      />
    </>
  );
}
