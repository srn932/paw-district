import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function PremiumHeroVisual() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-5xl bg-cream shadow-soft md:h-[620px]">
      <div className="absolute inset-0">
        <Image
          src="/images/paw-district-hero-lounge.webp"
          alt="A dog and cat relaxing together in a warm pet-care lounge"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-[53%_50%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-white/10" />
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-3xl border border-white/40 bg-white/90 p-4 md:bottom-7 md:left-7 md:right-auto md:max-w-sm md:p-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-white"><ShieldCheck className="h-5 w-5" /></span>
        <div><p className="text-xs font-extrabold uppercase tracking-[.13em] text-forest">Care built around them</p><p className="mt-1 text-sm leading-5 text-muted">Calm spaces. Familiar routines. Real attention.</p></div>
      </div>
      <span className="absolute right-5 top-5 rounded-full border border-white/50 bg-ivory/90 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[.16em] text-forest md:right-7 md:top-7">A welcoming space</span>
    </div>
  );
}
