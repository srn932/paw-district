"use client";

import { useState } from "react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const source = "url('/images/grooming-transformation.png')";
  return <div className="relative aspect-[4/3] overflow-hidden rounded-5xl bg-peach shadow-soft" role="img" aria-label="The same cream-coloured dog before and after a professional grooming transformation">
    <div className="absolute inset-0 bg-cover" style={{ backgroundImage: source, backgroundSize: "200% 100%", backgroundPosition: "right center" }} />
    <div className="absolute inset-0 bg-cover" style={{ backgroundImage: source, backgroundSize: "200% 100%", backgroundPosition: "left center", clipPath: `inset(0 ${100-position}% 0 0)` }} />
    <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(23,37,31,.08)]" style={{ left: `${position}%` }}><span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-bold shadow-soft">↔</span></div>
    <input type="range" min="5" max="95" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" aria-label="Move the slider to compare the dog before and after grooming" />
    <span className="absolute left-5 top-5 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Before · sample</span>
    <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">After · sample</span>
  </div>;
}
