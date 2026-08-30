"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ShieldCheck } from "lucide-react";

export function PremiumHeroVisual() {
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24 });
  const imageX = useTransform(smoothX, [-.5, .5], [-10, 10]);
  const imageY = useTransform(smoothY, [-.5, .5], [-8, 8]);
  const cardX = useTransform(smoothX, [-.5, .5], [8, -8]);
  const cardY = useTransform(smoothY, [-.5, .5], [6, -6]);

  return (
    <motion.div
      className="relative h-[440px] overflow-hidden rounded-5xl bg-cream shadow-soft md:h-[620px]"
      onPointerMove={(event) => {
        if (reduced) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left) / bounds.width - .5);
        pointerY.set((event.clientY - bounds.top) / bounds.height - .5);
      }}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
    >
      <motion.div className="absolute -inset-3" style={reduced ? undefined : { x: imageX, y: imageY }}>
        <Image src="/images/paw-district-hero-lounge.png" alt="A calm dog and cat in Paw District's warm modern pet-care lounge" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[53%_50%]" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-white/10" />
      <motion.div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-3xl border border-white/40 bg-white/85 p-4 backdrop-blur-xl md:bottom-7 md:left-7 md:right-auto md:max-w-sm md:p-5" style={reduced ? undefined : { x: cardX, y: cardY }}>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-white"><ShieldCheck className="h-5 w-5" /></span>
        <div><p className="text-xs font-extrabold uppercase tracking-[.13em] text-forest">Care built around them</p><p className="mt-1 text-sm leading-5 text-muted">Calm spaces. Familiar routines. Real attention.</p></div>
      </motion.div>
      <span className="absolute right-5 top-5 rounded-full border border-white/50 bg-ivory/85 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[.16em] text-forest backdrop-blur-md md:right-7 md:top-7">Inside the District</span>
    </motion.div>
  );
}
