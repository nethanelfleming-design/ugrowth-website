import { Reveal } from "@/components/ui/Reveal";

export function Studio() {
  return (
    <section id="studio" className="py-[var(--gap)]">
      <div className="mx-auto grid max-w-[var(--maxw)] grid-cols-1 items-center gap-[clamp(2rem,6vw,6rem)] px-[var(--pad)] md:grid-cols-2">
        <div>
          <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
            The studio
          </Reveal>
          <Reveal as="h2" delay={0.08} className="mt-4 text-step-3">
            Small by design.
          </Reveal>
          <Reveal as="p" delay={0.16} className="mt-6 text-step-0 text-off-dim">
            We take on a limited number of brands so that each one gets our full attention — and
            our best work. No fixed packages, no one-size-fits-all. Every client, campaign, and
            solution is built around the business behind it.
          </Reveal>
        </div>

        <Reveal
          delay={0.08}
          className="border-l-2 border-gold bg-gradient-to-r from-green/25 to-transparent py-2 pl-7"
        >
          <blockquote className="font-serif text-step-1 italic leading-[1.4] text-off">
            &ldquo;I started UGrowth because too many businesses treat marketing as posting
            content instead of building a brand with purpose. We combine strategy, creativity,
            and execution to make brands memorable, trusted, and impossible to ignore — as a
            long-term growth partner, not a vendor.&rdquo;
          </blockquote>
          <div className="mt-5">
            <b className="block font-sans font-semibold text-gold">Fleming Nethanel Gurusinghe</b>
            <span className="text-step-n1 text-off-dim">Founder &amp; CEO</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
