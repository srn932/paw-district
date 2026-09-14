import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/common/button";
import { SectionHeading } from "@/components/common/section-heading";
import { ServiceCard } from "@/components/common/service-card";
import { TrustMarquee } from "@/components/common/marquee";
import { Reveal } from "@/components/motion/reveal";
import { PremiumHeroVisual } from "@/components/common/premium-hero-visual";
import { featuredServices } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { CTASection } from "@/components/sections/cta-section";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { pageMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";

export const metadata = pageMetadata(
  "Paw District | Pet Boarding, Grooming & Dog Training in Chennai",
  "Thoughtful pet boarding, professional grooming and practical dog training in one happy district",
  "/"
);

const reasons = [
  [
    "Care that fits the pet",
    "No copy-paste routines. Attention shaped around coat, character, comfort and the day they are having.",
  ],
  [
    "Clean means clean",
    "Spaces, tools and daily routines designed around real hygiene—not surface-level shine.",
  ],
  [
    "People who speak pet",
    "Handlers who notice body language, respect boundaries and never rush an introduction.",
  ],
  [
    "Updates you actually want",
    "Clear, useful communication before, during and after care.",
  ],
  [
    "Safety before everything",
    "Thoughtful supervision, controlled environments and honest decisions.",
  ],
  [
    "One familiar place",
    "Less switching. Less stress. More familiar faces across the care they need.",
  ],
];

export default function HomePage() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Paw District",
          url: siteConfig.url,
        }}
      />

      <section className="container-shell pb-16 pt-32 md:pb-24 md:pt-40 lg:pt-44">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10">
            <Reveal>
              <p className="eyebrow">Welcome to Paw District</p>
              <h1 className="display pretty-balance">
                Everything they need.
                <br />
                <span className="text-forest">Right in their district.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="body-lg mt-7 max-w-xl">
                From comfortable stays and supervised play to fresh trims and
                practical training, Paw District brings thoughtful pet care
                together in Chennai.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/services/boarding">
                  Explore boarding
                </ButtonLink>

                <ButtonLink href="/visit" variant="outline">
                  Visit the District
                </ButtonLink>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[.12em] text-muted">
                Boarding <span className="mx-2 text-leaf">·</span> Grooming{" "}
                <span className="mx-2 text-leaf">·</span> Training
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <PremiumHeroVisual />
          </Reveal>
        </div>

        <a
          href="#intro"
          className="mt-10 inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.18em] text-muted"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15">
            <ArrowDown className="h-4 w-4" />
          </span>
          Take a walk
        </a>
      </section>

      <TrustMarquee />

      <section id="intro" className="container-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="eyebrow">01 · The idea</p>
            <h2 className="headline">
              Built around
              <br />
              their world.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="body-lg max-w-xl">
              Pets do not need complicated care. They need people who understand
              them, spaces that feel safe, and routines built around how they
              actually live.
            </p>

            <p className="mt-7 text-2xl font-bold tracking-[-.03em]">
              That is Paw District.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-[1.3fr_.7fr]">
          <Reveal className="relative min-h-[420px] overflow-hidden rounded-5xl">
            <Image
              src="https://images.unsplash.com/photo-1527526029430-319f10814151?auto=format&fit=crop&w=1800&q=85"
              alt="Pet parent sharing a warm moment with a dog"
              fill
              sizes="(max-width: 768px) 100vw, 65vw"
              className="object-cover object-[center_46%]"
            />
          </Reveal>

          <div className="grid gap-5">
            <Reveal
              className="relative min-h-52 overflow-hidden rounded-4xl bg-peach"
              delay={0.1}
            >
              <Image
                src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85"
                alt="Relaxed cat in warm daylight"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover object-[center_38%]"
              />
            </Reveal>

            <Reveal
              className="flex min-h-52 items-end rounded-4xl bg-sun p-7"
              delay={0.15}
            >
              <div>
                <Sparkles className="mb-8 h-7 w-7" />
                <p className="text-2xl font-bold leading-tight tracking-[-.03em]">
                  Good days start with a wag.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="02 · What we do"
              title="Three ways we help."
              copy="Boarding, grooming and training—one familiar team that learns the details that make your pet, your pet."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell section-pad">
        <Reveal>
          <SectionHeading
            eyebrow="03 · Easy does it"
            title="Three steps to a happier day."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {[
            [
              "01",
              "Tell us about them",
              "Age, temperament, routine and what you would like help with.",
            ],
            [
              "02",
              "Choose their focus",
              "Plan a boarding stay, grooming session or training conversation.",
            ],
            [
              "03",
              "Let the tail wag",
              "We take it from here—and keep you in the loop.",
            ],
          ].map(([number, title, copy], index) => (
            <Reveal
              key={number}
              delay={index * 0.08}
              className="group rounded-4xl border border-ink/10 p-7 transition hover:bg-mint md:p-9"
            >
              <span className="text-xs font-extrabold tracking-[.18em] text-forest">
                STEP {number}
              </span>

              <div className="my-12 h-px bg-ink/10 transition group-hover:bg-forest/25" />

              <h3 className="subhead">{title}</h3>
              <p className="mt-4 leading-7 text-muted">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white section-pad">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow !text-mint">04 · Why us</p>
                <h2 className="headline">Pet care without the guesswork.</h2>

                <ButtonLink
                  href="/why-paw-district"
                  variant="light"
                  className="mt-8"
                >
                  Why Paw District
                </ButtonLink>
              </div>
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-4xl bg-white/15 sm:grid-cols-2">
              {reasons.map(([title, copy], index) => (
                <Reveal
                  key={title}
                  delay={index * 0.04}
                  className="bg-ink p-7 md:p-9"
                >
                  <span className="mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Check className="h-4 w-4 text-mint" />
                  </span>

                  <h3 className="text-xl font-bold tracking-[-.03em]">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">{copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell section-pad">
        <div className="overflow-hidden rounded-5xl bg-peach p-8 md:p-14 lg:p-16">
          <Reveal>
            <p className="eyebrow">Regular care</p>
            <h2 className="headline">One team. One familiar conversation.</h2>
            <p className="body-lg mt-6 max-w-3xl text-ink/80">
              If your pet needs grooming, boarding or training more than once,
              tell us about their routine. We will discuss suitable options and
              confirm every booking directly with you.
            </p>
            <ButtonLink href="/membership" className="mt-9">
              Ask about regular care
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream section-pad">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="05 · The journal"
                title="Notes from the District."
              />
            </Reveal>

            <ButtonLink href="/blog" variant="outline">
              Visit the journal
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.07}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-4xl bg-mint/30">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover object-[center_38%] transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.15em] text-muted">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-.04em] group-hover:text-forest">
                    {post.title}
                  </h3>

                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.12em]">
                    Read the note
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CTASection />
      </div>
    </>
  );
}
