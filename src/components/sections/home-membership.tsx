"use client";

import { CalendarHeart, PawPrint, Scissors, Sparkles } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ButtonLink } from "@/components/common/button";
import { Reveal } from "@/components/motion/reveal";

const benefits = [
  { icon: CalendarHeart, title: "Easier planning", copy: "Preferred booking requests" },
  { icon: Scissors, title: "Everyday value", copy: "Across regular pet care" },
  { icon: Sparkles, title: "Thoughtful extras", copy: "Seasonal member surprises" },
  { icon: PawPrint, title: "Familiar care", copy: "One team that knows them" },
];

export function HomeMembership() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 130, damping: 18, mass: 0.5 });
  const springY = useSpring(pointerY, { stiffness: 130, damping: 18, mass: 0.5 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const pawX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const pawY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  return (
    <section id="membership-preview" className="container-shell section-pad scroll-mt-24">
      <Reveal variant="clip">
        <div className="membership-grid relative isolate overflow-hidden rounded-[2rem] bg-ink px-5 py-8 text-white sm:rounded-5xl sm:px-9 sm:py-11 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-leaf/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-[30%] h-72 w-72 rounded-full bg-sun/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow !text-mint">Paw District membership</p>
              <h2 className="headline max-w-2xl pretty-balance">
                Care that remembers them.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Useful value across grooming, boarding and training—with the ease
                of returning to a team that already knows the little things.
              </p>

              <div className="mt-8 flex flex-wrap gap-2" aria-label="Membership highlights">
                {["One familiar team", "More value", "Thoughtful extras"].map((item) => (
                  <span key={item} className="rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-mint">
                    {item}
                  </span>
                ))}
              </div>

              <ButtonLink href="/membership" variant="light" className="mt-9 w-full sm:w-auto">
                Explore membership
              </ButtonLink>
            </div>

            <motion.div
              id="membership-pass"
              className="relative mx-auto w-full max-w-2xl [perspective:1200px]"
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
              <motion.div
                className="relative overflow-hidden rounded-[1.75rem] border border-white/40 bg-sun p-5 text-ink shadow-[0_35px_100px_rgba(0,0,0,.28)] sm:rounded-5xl sm:p-8"
                style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
              >
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-10 text-forest/10"
                  style={reduceMotion ? undefined : { x: pawX, y: pawY }}
                >
                  <PawPrint className="h-40 w-40 rotate-12 sm:h-52 sm:w-52" strokeWidth={1.2} />
                </motion.div>

                <div className="relative flex items-start justify-between gap-4 border-b border-ink/15 pb-6">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-forest">District member</p>
                    <p className="mt-2 text-2xl font-bold tracking-[-.04em] sm:text-3xl">For familiar faces.</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-sun sm:h-14 sm:w-14">
                    <PawPrint className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                </div>

                <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                  {benefits.map(({ icon: Icon, title, copy }, index) => (
                    <motion.div
                      key={title}
                      className="group rounded-3xl border border-ink/10 bg-ivory/75 p-4 backdrop-blur-sm sm:p-5"
                      whileHover={reduceMotion ? undefined : { y: -4, rotate: index % 2 ? 0.5 : -0.5 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    >
                      <Icon className="h-5 w-5 text-forest transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" aria-hidden="true" />
                      <p className="mt-7 font-bold tracking-[-.02em]">{title}</p>
                      <p className="mt-1 text-sm text-ink/65">{copy}</p>
                    </motion.div>
                  ))}
                </div>

              </motion.div>

              <motion.span
                aria-hidden="true"
                className="absolute -bottom-5 -left-3 hidden h-16 w-16 items-center justify-center rounded-full border-4 border-ink bg-mint text-forest shadow-soft sm:flex"
                animate={reduceMotion ? undefined : { rotate: [-7, 7, -7], y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-6 w-6" />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
