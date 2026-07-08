"use client";

import { motion } from "motion/react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WorkTilePlaceholder } from "@/components/ui/WorkTilePlaceholder";
import { EASE_PREMIUM } from "@/lib/motion";

const PROJECTS = [
  { name: "Industri", category: "Nightlife · Campaign", span: "md:col-span-7", aspect: "aspect-[16/11]" },
  { name: "Yevan David", category: "Athlete · Personal brand", span: "md:col-span-5", aspect: "aspect-[16/13]" },
  { name: "The Nets", category: "Sports bar · Events", span: "md:col-span-6", aspect: "aspect-[16/12]" },
  { name: "Crumbs & Doilies", category: "Bakery · Lifestyle", span: "md:col-span-6", aspect: "aspect-[16/12]" },
];

export function Work() {
  return (
    <section id="work" className="py-[var(--gap)]">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <div className="mb-[clamp(2rem,5vw,4rem)] flex flex-wrap items-baseline justify-between gap-8">
          <div>
            <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
              Selected work
            </Reveal>
            <Reveal as="h2" delay={0.08} className="mt-4 text-step-2">
              The brands we&rsquo;ve made
              <br />
              impossible to ignore.
            </Reveal>
          </div>
          <Reveal as="span" className="font-serif italic text-step-1 text-gold">
            04 projects
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8" stagger={0.12}>
          {PROJECTS.map((project) => (
            <RevealItem
              key={project.name}
              className={`group relative overflow-hidden rounded-sm bg-ink-2 ${project.span} ${project.aspect}`}
            >
              <a href="#contact" data-cursor="View case" className="block h-full w-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.1, ease: EASE_PREMIUM }}
                  className="h-full w-full"
                >
                  <WorkTilePlaceholder />
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/85 to-transparent p-[clamp(1rem,2vw,1.6rem)]">
                  <div>
                    <span className="block text-step-n1 uppercase tracking-[0.14em] text-off-dim">
                      {project.category}
                    </span>
                    <h3 className="text-step-1">{project.name}</h3>
                  </div>
                  <span className="flex-none translate-x-[-6px] text-step-n1 tracking-[0.08em] text-gold opacity-0 transition-all duration-400 ease-premium group-hover:translate-x-0 group-hover:opacity-100">
                    View →
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
