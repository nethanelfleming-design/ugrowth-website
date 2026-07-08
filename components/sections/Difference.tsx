import { Reveal } from "@/components/ui/Reveal";

export function Difference() {
  return (
    <section className="bg-green-deep py-[var(--gap)]">
      <div className="mx-auto grid max-w-[var(--maxw)] grid-cols-1 items-center gap-[clamp(2rem,6vw,6rem)] px-[var(--pad)] md:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
            The difference
          </Reveal>
          <Reveal as="h2" delay={0.08} className="mt-4 text-step-3">
            Most brands don&rsquo;t have a{" "}
            <s className="text-off/30 no-underline">content</s> problem.
            <br />
            They have an <em className="text-gold not-italic">attention</em> problem.
          </Reveal>
        </div>
        <Reveal as="p" delay={0.16} className="text-step-1 leading-[1.4] text-off-dim">
          In a crowded market, being good is invisible. We make brands impossible to overlook —
          and turn that attention into customers, bookings, and revenue.
        </Reveal>
      </div>
    </section>
  );
}
