"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

export function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);
  useEffect(() => { if (!inView || reduced) return; const start = performance.now(); const tick = (time: number) => { const progress = Math.min((time - start) / 1200, 1); setCurrent(value * (1 - Math.pow(1 - progress, 3))); if (progress < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); }, [inView, reduced, value]);
  const displayed = reduced ? value : current;
  return <span ref={ref}>{Number.isInteger(value) ? Math.round(displayed).toLocaleString("en-IN") : displayed.toFixed(1)}{suffix}</span>;
}
