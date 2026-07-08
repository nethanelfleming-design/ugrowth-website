"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { EASE_PREMIUM } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

const HERO_DELAY = 2;

export function Hero() {
  const atmosphereRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !atmosphereRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(atmosphereRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-end overflow-hidden pb-[clamp(2rem,6vh,5rem)]">
      <div
        ref={atmosphereRef}
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 15%, rgba(27,59,47,.55), transparent 70%), radial-gradient(50% 40% at 15% 90%, rgba(27,59,47,.35), transparent 70%), var(--ink)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(rgba(245,242,234,.6) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="mx-auto w-full max-w-[var(--maxw)] px-[var(--pad)]">
        <h1 className="text-step-4 font-semibold leading-[1.02] tracking-[-0.025em]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "102%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: EASE_PREMIUM, delay: HERO_DELAY }}
              className="block"
            >
              Impossible
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "102%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: EASE_PREMIUM, delay: HERO_DELAY + 0.09 }}
              className="block"
            >
              to ignore.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: HERO_DELAY + 0.3 }}
          className="mt-6 max-w-[34ch] font-serif text-step-1 italic text-gold"
        >
          A creative growth partner for brands that refuse to blend in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: HERO_DELAY + 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <Button href="#work" variant="ghost">
            See the work
          </Button>
          <span className="flex items-center gap-2 text-step-n1 uppercase tracking-[0.18em] text-off-dim">
            Scroll
            <i className="block h-px w-[46px] origin-left animate-scan bg-gold" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
