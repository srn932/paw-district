"use client";

import Image from "next/image";
import {
  BedDouble,
  Bell,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Check,
  ClipboardCheck,
  Gift,
  GraduationCap,
  Heart,
  Home,
  Link2,
  PawPrint,
  Percent,
  Scissors,
  ShieldCheck,
  Star,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ButtonLink } from "@/components/common/button";
import { Reveal } from "@/components/motion/reveal";
import { membershipAssurances, membershipPlans, membershipTerms, trainingProgramme } from "@/data/membership";

const icons: Record<string, LucideIcon> = {
  bed: BedDouble,
  bell: Bell,
  calendar: CalendarDays,
  chart: ChartNoAxesColumnIncreasing,
  clipboard: ClipboardCheck,
  gift: Gift,
  graduation: GraduationCap,
  heart: Heart,
  home: Home,
  link: Link2,
  paw: PawPrint,
  percent: Percent,
  scissors: Scissors,
  shield: ShieldCheck,
  star: Star,
  users: UsersRound,
};

type MembershipPlan = (typeof membershipPlans)[number];

function PlanCard({ plan }: { plan: MembershipPlan }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 170, damping: 24, mass: 0.45 });
  const springY = useSpring(pointerY, { stiffness: 170, damping: 24, mass: 0.45 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2.2, 2.2]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [2.2, -2.2]);
  const featured = plan.featured;

  return (
    <motion.article
      className={`group relative flex h-full flex-col overflow-hidden rounded-4xl border p-5 shadow-[0_20px_60px_rgba(23,37,31,.07)] sm:p-7 ${featured ? "border-forest bg-forest text-white xl:-my-3" : "border-ink/10 bg-ivory text-ink"}`}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
        pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      {featured ? (
        <span className="absolute right-5 top-5 z-10 rounded-full bg-sun px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.14em] text-ink">
          Most popular
        </span>
      ) : null}

      <div className="grid grid-cols-[5.75rem_1fr] items-center gap-4 sm:grid-cols-[7rem_1fr] sm:gap-5 xl:grid-cols-[6.25rem_1fr] 2xl:grid-cols-[7rem_1fr]">
        <div className={`relative aspect-square overflow-hidden rounded-[1.65rem] ${featured ? "bg-white/10" : "bg-cream"}`}>
          <Image
            src={plan.image}
            alt={plan.imageAlt}
            fill
            sizes="(max-width: 640px) 92px, 112px"
            style={{ objectPosition: plan.imagePosition }}
            quality={90}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className={featured ? "pt-8 sm:pt-0 xl:pt-8 2xl:pt-0" : ""}>
          <p className={`text-[10px] font-extrabold uppercase tracking-[.2em] ${featured ? "text-mint" : "text-forest"}`}>
            {plan.tier} membership
          </p>
          <h3 className="mt-2 text-[1.7rem] font-bold leading-none tracking-[-.045em]">{plan.name}</h3>
          <p className={`mt-3 text-[15px] leading-6 ${featured ? "text-white/72" : "text-muted"}`}>{plan.description}</p>
        </div>
      </div>

      <div className="mt-7 flex items-end gap-2">
        <span className="text-[2.85rem] font-extrabold leading-none tracking-[-.065em] sm:text-[3.25rem]">{plan.price}</span>
        <span className={`pb-1 text-sm ${featured ? "text-white/60" : "text-muted"}`}>{plan.cadence}</span>
      </div>

      <div className={`mt-6 space-y-1 rounded-3xl p-2 ${featured ? "bg-white/[.08]" : "bg-cream"}`}>
        {plan.highlights.map((highlight) => {
          const Icon = icons[highlight.icon];
          return (
            <motion.div key={highlight.title} className={`grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl p-3 ${featured ? "hover:bg-white/[.07]" : "hover:bg-white"}`} whileHover={reduceMotion ? undefined : { x: 3 }}>
              <span className={`flex h-10 w-10 items-center justify-center rounded-full ${featured ? "bg-white/10 text-sun" : "bg-white text-forest"}`}>
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold leading-5">{highlight.title}</span>
                <span className={`mt-1 block text-xs leading-5 ${featured ? "text-white/60" : "text-muted"}`}>{highlight.detail}</span>
              </span>
            </motion.div>
          );
        })}
      </div>

      <ul className={`my-6 space-y-3 border-t pt-6 ${featured ? "border-white/15" : "border-ink/10"}`}>
        {plan.benefits.map(([icon, benefit]) => {
          const Icon = icons[icon];
          return (
            <li key={benefit} className="grid grid-cols-[1rem_1.25rem_1fr] items-start gap-2.5 text-[15px] leading-6">
              <Check className={`mt-0.5 h-4 w-4 ${featured ? "text-sun" : "text-forest"}`} aria-hidden="true" />
              <Icon className={`mt-0.5 h-4 w-4 ${featured ? "text-mint" : "text-forest"}`} aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          );
        })}
      </ul>

      <ButtonLink href="/visit" variant={featured ? "light" : "outline"} className={`mt-auto w-full ${featured ? "!bg-sun hover:!bg-white" : "!bg-transparent"}`}>
        Join {plan.name}
      </ButtonLink>
    </motion.article>
  );
}

export function MembershipPlans() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="plans" className="membership-pricing scroll-mt-24 overflow-hidden bg-cream section-pad">
      <div className="container-shell">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">The Paw District membership</p>
            <h2 className="headline mx-auto max-w-3xl pretty-balance">A year of care, just for them.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Exclusive benefits, meaningful savings and a closer bond—with grooming,
              boarding and training plans shaped around the care they use most.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 xl:grid-cols-3 xl:py-4">
          {membershipPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-ink/10 bg-ivory p-5 shadow-[0_20px_60px_rgba(23,37,31,.05)] sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[.75fr_2.25fr] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-forest">Included in Training Club</p>
                <h3 className="mt-3 text-[1.7rem] font-bold leading-tight tracking-[-.04em]">Basic Training Programme</h3>
                <p className="mt-3 text-[15px] leading-6 text-muted">A structured foundation programme to build good habits, confidence and better everyday behaviour.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {trainingProgramme.map((step) => {
                  const Icon = icons[step.icon];
                  return (
                    <motion.div key={step.number} className="group relative rounded-3xl bg-cream p-4" whileHover={reduceMotion ? undefined : { y: -4 }}>
                      <div className="flex items-center justify-between">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sun/60 text-[10px] font-extrabold">{step.number}</span>
                        <Icon className="h-5 w-5 text-forest transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" aria-hidden="true" />
                      </div>
                      <p className="mt-5 text-[15px] font-bold leading-5">{step.title}</p>
                      <p className="mt-2 text-[13px] leading-5 text-muted">{step.copy}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="fade">
          <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {membershipAssurances.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div key={item.title} className="flex items-center gap-3 bg-ivory p-4">
                  <Icon className="h-6 w-6 shrink-0 text-forest" aria-hidden="true" />
                  <span><span className="block text-sm font-bold">{item.title}</span><span className="mt-1 block text-xs leading-5 text-muted">{item.copy}</span></span>
                </div>
              );
            })}
          </div>
          <div className="mt-5 border-t border-ink/10 pt-4 text-[11px] leading-5 text-muted">
            <span className="mr-2 font-extrabold uppercase tracking-[.12em] text-ink">Terms & conditions</span>
            {membershipTerms.map((term, index) => <span key={term}>{index ? " · " : ""}{term}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
