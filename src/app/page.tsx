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
import { AnimatedCounter } from "@/components/common/animated-counter";
import { stats } from "@/data/stats";
import { TestimonialStrip } from "@/components/common/testimonial-strip";
import { BeforeAfterSlider } from "@/components/common/before-after-slider";
import { blogPosts } from "@/data/blog";
import { CTASection } from "@/components/sections/cta-section";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata("Paw District | Grooming, Daycare, Boarding & Wellness", "Everything your pet needs in one happy district: thoughtful grooming, daycare, boarding and pet wellness", "/");

const reasons = [
  ["Care that fits the pet", "No copy-paste routines. Attention shaped around coat, character, comfort and the day they are having."],
  ["Clean means clean", "Spaces, tools and daily routines designed around real hygiene—not surface-level shine."],
  ["People who speak pet", "Handlers who notice body language, respect boundaries and never rush an introduction."],
  ["Updates you actually want", "Clear, useful communication before, during and after care."],
  ["Safety before everything", "Thoughtful supervision, controlled environments and honest decisions."],
  ["One familiar place", "Less switching. Less stress. More familiar faces across the care they need."],
];

export default function HomePage() {
  return (
    <>
      <SEOJsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: "Paw District", url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000", potentialAction: { "@type": "SearchAction", target: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog?q={search_term_string}`, "query-input": "required name=search_term_string" } }} />
      <section className="container-shell pb-16 pt-32 md:pb-24 md:pt-40 lg:pt-44">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10">
            <Reveal><p className="eyebrow">Welcome to Paw District</p><h1 className="display pretty-balance">Everything they need.<br /><span className="text-forest">Right in their district.</span></h1></Reveal>
            <Reveal delay={.12}><p className="body-lg mt-7 max-w-xl">From fresh trims and playful days to cosy stays and everyday wellness, Paw District brings thoughtful pet care under one roof.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/book">Book a visit</ButtonLink><ButtonLink href="/services" variant="outline">Explore the district</ButtonLink></div><p className="mt-8 text-xs font-bold uppercase tracking-[.12em] text-muted">Grooming <span className="mx-2 text-leaf">·</span> Daycare <span className="mx-2 text-leaf">·</span> Boarding <span className="mx-2 text-leaf">·</span> Wellness</p></Reveal>
          </div>
          <Reveal delay={.15}><PremiumHeroVisual /></Reveal>
        </div>
        <a href="#intro" className="mt-10 inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.18em] text-muted"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15"><ArrowDown className="h-4 w-4" /></span>Take a walk</a>
      </section>
      <TrustMarquee />

      <section id="intro" className="container-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end"><Reveal><p className="eyebrow">01 · The idea</p><h2 className="headline">Built around<br />their world.</h2></Reveal><Reveal delay={.1}><p className="body-lg max-w-xl">Pets do not need complicated care. They need people who understand them, spaces that feel safe, and routines built around how they actually live.</p><p className="mt-7 text-2xl font-bold tracking-[-.03em]">That is Paw District.</p></Reveal></div>
        <div className="mt-14 grid gap-5 md:grid-cols-[1.3fr_.7fr]"><Reveal className="relative min-h-[420px] overflow-hidden rounded-5xl"><Image src="https://images.unsplash.com/photo-1527526029430-319f10814151?auto=format&fit=crop&w=1800&q=85" alt="Pet parent sharing a warm moment with a dog" fill sizes="(max-width: 768px) 100vw, 65vw" className="object-cover object-[center_46%]" /></Reveal><div className="grid gap-5"><Reveal className="relative min-h-52 overflow-hidden rounded-4xl bg-peach" delay={.1}><Image src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85" alt="Relaxed cat in warm daylight" fill sizes="(max-width: 768px) 100vw, 35vw" className="object-cover object-[center_38%]" /></Reveal><Reveal className="flex min-h-52 items-end rounded-4xl bg-sun p-7" delay={.15}><div><Sparkles className="mb-8 h-7 w-7" /><p className="text-2xl font-bold leading-tight tracking-[-.03em]">Good days start with a wag.</p></div></Reveal></div></div>
      </section>

      <section className="bg-cream section-pad">
        <div className="container-shell"><Reveal><SectionHeading eyebrow="02 · The care map" title="Pick their kind of day." copy="Four ways to care. One familiar team that learns the details that make your pet, your pet." /></Reveal><div className="mt-14 grid gap-6 md:grid-cols-2">{featuredServices.map((service, index) => <Reveal key={service.slug} delay={index % 2 * .08}><ServiceCard service={service} index={index} /></Reveal>)}</div></div>
      </section>

      <section className="container-shell section-pad"><Reveal><SectionHeading eyebrow="03 · Easy does it" title="Three steps to a happier visit." /></Reveal><div className="mt-14 grid gap-5 lg:grid-cols-3">{[["01","Tell us about them","Pet type, age, temperament, routine and what they need."],["02","Pick their plan","Choose grooming, daycare, boarding or wellness care."],["03","Let the tail wag","We take it from here—and keep you in the loop."]].map(([number,title,copy], index) => <Reveal key={number} delay={index*.08} className="group rounded-4xl border border-ink/10 p-7 transition hover:bg-mint md:p-9"><span className="text-xs font-extrabold tracking-[.18em] text-leaf">STEP {number}</span><div className="my-12 h-px bg-ink/10 transition group-hover:bg-forest/25" /><h3 className="subhead">{title}</h3><p className="mt-4 leading-7 text-muted">{copy}</p></Reveal>)}</div></section>

      <section className="bg-ink text-white section-pad"><div className="container-shell"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><Reveal><div className="lg:sticky lg:top-32"><p className="eyebrow !text-mint">04 · Why us</p><h2 className="headline">Pet care without the guesswork.</h2><ButtonLink href="/why-paw-district" variant="light" className="mt-8">Why Paw District</ButtonLink></div></Reveal><div className="grid gap-px overflow-hidden rounded-4xl bg-white/15 sm:grid-cols-2">{reasons.map(([title,copy],index)=><Reveal key={title} delay={index*.04} className="bg-ink p-7 md:p-9"><span className="mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Check className="h-4 w-4 text-mint" /></span><h3 className="text-xl font-bold tracking-[-.03em]">{title}</h3><p className="mt-3 leading-7 text-white/60">{copy}</p></Reveal>)}</div></div></div></section>

      <section className="container-shell section-pad"><Reveal><SectionHeading eyebrow="05 · Inside" title="Life inside the District." copy="Designed for movement, stillness, curious noses and the very serious business of napping." /></Reveal><div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-3">{[
        ["Play, with a plan","https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&w=1200&q=85","md:col-span-2 md:row-span-2","50% 44%"],
        ["Quiet corners","https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=85","","50% 38%"],
        ["Fresh stations","https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85","","50% 40%"],
        ["Room to snooze","https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85","","50% 35%"],
        ["Updates from their day","https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=85","md:col-span-2","50% 42%"],
      ].map(([title,image,span,position],index)=><Reveal key={title} className={`group relative overflow-hidden rounded-4xl ${span}`} delay={index*.05}><Image src={image} alt={`${title} at a premium pet-care space`} fill sizes="(max-width:768px) 100vw, 66vw" style={{objectPosition:position}} className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" /><p className="absolute bottom-6 left-6 text-xl font-bold text-white">{title}</p></Reveal>)}</div></section>

      <section className="bg-mint py-16 md:py-24"><div className="container-shell"><p className="mb-10 text-center text-[10px] font-extrabold uppercase tracking-[.2em] text-forest">Placeholder metrics · replace before launch</p><div className="grid grid-cols-2 gap-8 lg:grid-cols-4">{stats.map((stat)=><div key={stat.label} className="text-center"><p className="text-4xl font-extrabold tracking-[-.06em] md:text-6xl"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></p><p className="mt-3 text-[10px] font-extrabold uppercase tracking-[.17em] text-forest">{stat.label}</p></div>)}</div></div></section>

      <section className="container-shell section-pad"><Reveal><SectionHeading eyebrow="06 · Word on the street" title="Heard around the District." copy="Sample review layout shown for development. Verified pet-parent words will live here before launch." /></Reveal><div className="mt-12"><TestimonialStrip /></div><ButtonLink href="/testimonials" variant="outline" className="mt-5">Read all stories</ButtonLink></section>

      <section className="bg-cream section-pad"><div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center"><Reveal><BeforeAfterSlider /></Reveal><Reveal delay={.1}><p className="eyebrow">07 · Grooming glow-up</p><h2 className="headline">From scruffy to selfie-ready.</h2><p className="body-lg mt-6">Drag to compare a relevant same-dog grooming transformation. This representative sample should be replaced with a verified Paw District result—with pet-parent permission—before launch.</p><ButtonLink href="/services/grooming" className="mt-8">See the grooming menu</ButtonLink></Reveal></div></section>

      <section className="container-shell section-pad"><div className="grid overflow-hidden rounded-5xl bg-peach lg:grid-cols-2"><Reveal className="p-8 md:p-14 lg:p-16"><p className="eyebrow">Membership</p><h2 className="headline">Regular care.<br />Better value.</h2><p className="body-lg mt-6 text-ink/65">For pets who practically have their own seat at Paw District.</p><ul className="mt-8 grid gap-3 sm:grid-cols-2">{["Preferred booking slots","Grooming savings","Daycare benefits","Birthday surprises","Member-only offers"].map(item=><li key={item} className="flex items-center gap-3 text-sm font-semibold"><Check className="h-4 w-4 text-forest" />{item}</li>)}</ul><ButtonLink href="/membership" className="mt-9">Explore membership</ButtonLink></Reveal><Reveal className="relative min-h-[380px] overflow-hidden" delay={.1}><Image src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=85" alt="Relaxed dog enjoying regular Paw District care" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-[center_42%]" /></Reveal></div></section>

      <section className="bg-cream section-pad"><div className="container-shell"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><Reveal><SectionHeading eyebrow="08 · The journal" title="Notes from the District." /></Reveal><ButtonLink href="/blog" variant="outline">Visit the journal</ButtonLink></div><div className="mt-12 grid gap-6 md:grid-cols-3">{blogPosts.slice(0,3).map((post,index)=><Reveal key={post.slug} delay={index*.07}><Link href={`/blog/${post.slug}`} className="group block"><div className="relative aspect-[4/3] overflow-hidden rounded-4xl bg-mint/30"><Image src={post.image} alt={post.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover object-[center_38%] transition duration-700 group-hover:scale-105" /></div><div className="mt-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.15em] text-muted"><span>{post.category}</span><span>·</span><span>{post.readingTime}</span></div><h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-.04em] group-hover:text-forest">{post.title}</h3><span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.12em]">Read the note <ArrowUpRight className="h-4 w-4" /></span></Link></Reveal>)}</div></div></section>
      <div className="pt-20 md:pt-28"><CTASection /></div>
    </>
  );
}
