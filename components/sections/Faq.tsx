"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AccordionItem } from "@/components/ui/AccordionItem";

const FAQS = [
  {
    q: "Do you work with brands outside hospitality?",
    a: "Yes. Hospitality and nightlife are our core, but we work across real estate, automotive, retail, luxury, healthcare, and corporate brands that want to look and perform a tier above their competitors.",
  },
  {
    q: "How do you price?",
    a: "Every proposal is bespoke — built around your objectives, budget, industry, and scope. We don’t sell fixed packages, because premium outcomes aren’t one-size-fits-all.",
  },
  {
    q: "Do you work remotely and internationally?",
    a: "Yes. We’re based in Colombo and built to work with premium brands worldwide, operating remotely wherever possible and on the ground when the work demands it.",
  },
  {
    q: "What does a project look like?",
    a: "It starts with strategy, moves through creative direction and production, and continues into growth. You get a partner who owns the outcome — not a supplier who ships deliverables.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[var(--gap)]">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <div className="mb-[clamp(2rem,5vw,4rem)]">
          <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
            FAQ
          </Reveal>
          <Reveal as="h2" delay={0.08} className="mt-4 text-step-2">
            The questions
            <br />
            worth asking.
          </Reveal>
        </div>

        <div className="max-w-[900px] border-t border-off/10">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
