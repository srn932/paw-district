import Image from "next/image";
import { Breadcrumbs } from "./breadcrumbs";
import { Reveal } from "@/components/motion/reveal";

export function PageHero({ eyebrow, title, copy, image, imagePosition = "50% 40%", breadcrumbs, accent = "bg-mint" }: { eyebrow: string; title: string; copy: string; image?: string; imagePosition?: string; breadcrumbs?: { label: string; href?: string }[]; accent?: string }) {
  return (
    <section className="container-shell pb-16 pt-32 md:pb-24 md:pt-40">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <div className={`mt-8 overflow-hidden rounded-5xl ${accent}`}>
        <div className={`grid ${image ? "lg:grid-cols-[1.05fr_.95fr]" : ""}`}>
          <Reveal className="flex flex-col justify-center p-8 md:p-14 lg:min-h-[590px] lg:p-16"><p className="eyebrow">{eyebrow}</p><h1 className="display pretty-balance">{title}</h1><p className="body-lg mt-7 max-w-xl text-ink/70">{copy}</p></Reveal>
          {image && <Reveal className="relative min-h-[360px] overflow-hidden bg-white/25 lg:min-h-full" delay={.1}><Image src={image} alt={`${title} at Paw District`} fill priority sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectPosition: imagePosition }} className="object-cover" /></Reveal>}
        </div>
      </div>
    </section>
  );
}
