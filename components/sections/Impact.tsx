import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

const STATS = [
  { value: 10, suffix: "K+", label: "Community grown for a single athlete brand." },
  { value: 4, suffix: "", label: "Premium brands built across nightlife, sport & hospitality." },
  { value: 100, suffix: "%", label: "Bespoke — no fixed packages, ever." },
];

export function Impact() {
  return (
    <section className="py-[var(--gap)]">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <div className="mb-[clamp(2rem,5vw,4rem)]">
          <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
            Impact
          </Reveal>
          <Reveal as="h2" delay={0.08} className="mt-4 text-step-2">
            Work that moves
            <br />
            the numbers.
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-10 sm:grid-cols-3" stagger={0.1}>
          {STATS.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="font-serif text-step-3 leading-none text-gold">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 max-w-[22ch] text-step-0 text-off-dim">{stat.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal as="p" className="mt-10 font-serif text-step-n1 italic text-off/40">
          Figures shown are illustrative of scope; verified client metrics are added as each
          engagement reports.
        </Reveal>
      </div>
    </section>
  );
}
