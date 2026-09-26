"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type RevealVariant = "lift" | "fade" | "clip";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  variant = "lift",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px -8% 0px" });
  const reduceMotion = useReducedMotion();

  const hidden =
    variant === "clip"
      ? { opacity: 0.35, y: y / 2, clipPath: "inset(0 0 100% 0 round 2rem)" }
      : variant === "fade"
        ? { opacity: 0 }
        : { opacity: 0, y };
  const visible =
    variant === "clip"
      ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0 round 2rem)" }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduceMotion ? false : hidden}
      animate={reduceMotion || inView ? visible : hidden}
      transition={{ duration: variant === "clip" ? 0.9 : 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
