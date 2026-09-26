"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export function MagneticLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 20, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 240, damping: 20, mass: 0.35 });

  return (
    <motion.span
      className="inline-flex"
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.16);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.2);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <Link href={href} className={cn("btn-light group", className)}>
        <span className="button-label">{children}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.span>
  );
}
