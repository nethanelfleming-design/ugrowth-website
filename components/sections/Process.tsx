"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "motion/react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const STEPS = [
  { n: "01", title: "Research", desc: "Understanding the brand, audience, and objectives." },
  { n: "02", title: "Strategy", desc: "Planning content, campaigns, and creative direction." },
  { n: "03", title: "Mood Boarding", desc: "Developing the visual style and brand direction." },
  { n: "04", title: "Creation", desc: "Photography, videography, and design production." },
  { n: "05", title: "Editing", desc: "Refining visuals, video, and final assets." },
  { n: "06", title: "Publishing", desc: "Delivering across the right platforms." },
  { n: "07", title: "Growth", desc: "Monitoring performance and improving results." },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !railRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        railRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className="py-[var(--gap)]">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <div className="mb-[clamp(2rem,5vw,4rem)]">
          <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
            How we work
          </Reveal>
          <Reveal as="h2" delay={0.08} className="mt-4 text-step-2">
            A process that
            <br />
            de-risks the outcome.
          </Reveal>
        </div>

        <div className="relative mb-2 h-px w-full bg-off/10">
          <div ref={railRef} className="absolute inset-y-0 left-0 w-full origin-left bg-gold" />
        </div>

        <RevealGroup className="grid grid-cols-1 gap-8 pt-6 sm:grid-cols-2 md:grid-cols-4" stagger={0.06}>
          {STEPS.map((step) => (
            <RevealItem key={step.n}>
              <span className="font-serif italic text-step-0 text-gold">{step.n}</span>
              <h4 className="mt-2 mb-2 text-step-0 font-semibold tracking-[0.01em]">{step.title}</h4>
              <p className="text-step-n1 text-off-dim">{step.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
