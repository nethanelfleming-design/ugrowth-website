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
  return (
    <section className="py-[var(--gap)]">
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

        <RevealGroup
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"
          stagger={0.06}
        >
          {STEPS.map((step) => (
            <RevealItem key={step.n} className="border-t border-off/10 pt-6">
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
