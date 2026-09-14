import Image from "next/image";
import { Heart, MessageCircle, ShieldCheck, Sparkles, Users, Waves } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "About Paw District",
  "Learn how Paw District brings thoughtful boarding, grooming and dog training together in one familiar place in Chennai",
  "/about",
);

const standards = [
  [ShieldCheck, "Safety", "Controlled introductions, clear notes and decisions that put comfort before convenience."],
  [Sparkles, "Hygiene", "Clean tools, clean spaces and routines built to stay that way throughout the day."],
  [Users, "Skilled care", "People who keep learning how to read behaviour, handle thoughtfully and communicate clearly."],
  [Heart, "Comfort", "A quieter pace, a break or a changed plan when your pet tells us they need it."],
  [MessageCircle, "Communication", "Useful updates and honest conversations, including when a service is not the right fit."],
  [Waves, "Individual care", "Age, coat, confidence, health and routine all shape the visit."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our District"
        title="The kind of place we would want for our own pets."
        copy="One familiar place for thoughtful boarding, grooming and training—and people who notice what each pet needs."
        image="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=1400&q=80"
        imagePosition="50% 42%"
        breadcrumbs={[{ label: "About" }]}
        accent="bg-peach"
      />

      <section className="container-shell section-pad">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Why we exist</p>
            <h2 className="headline">Care should feel connected.</h2>
          </Reveal>
          <Reveal className="space-y-5 text-2xl font-semibold leading-snug tracking-[-.03em] text-ink/70">
            <p>Boarding in one place.</p>
            <p>Grooming in another.</p>
            <p>Training somewhere else.</p>
            <p className="pt-4 text-ink">
              Paw District brings these important parts of pet life into one
              familiar environment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative min-h-[500px] overflow-hidden rounded-5xl">
            <Image
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80"
              alt="Dog and cat relaxing together"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-[center_42%]"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Our belief</p>
            <h2 className="headline">
              Family, yes.
              <br />
              Individuals, always.
            </h2>
            <div className="body-lg mt-7 space-y-4">
              <p>Different routines. Different personalities. Different ways of saying “not today.”</p>
              <p className="font-bold text-ink">Good care notices the difference.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-pad">
        <Reveal>
          <SectionHeading eyebrow="Our standards" title="The things that should never feel optional." />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map(([Icon, title, copy]) => (
            <Reveal key={title} className="rounded-4xl border border-ink/10 p-7 md:p-9">
              <Icon className="h-7 w-7 text-forest" aria-hidden="true" />
              <h3 className="mt-12 text-2xl font-bold tracking-[-.04em]">{title}</h3>
              <p className="mt-4 leading-7 text-muted">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
