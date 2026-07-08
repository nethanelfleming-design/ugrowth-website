import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  return (
    <section className="py-[clamp(6rem,16vh,12rem)]">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
          Manifesto
        </Reveal>
        <Reveal as="h2" delay={0.08} className="mt-4 max-w-[20ch] text-step-3">
          Most agencies make content. <em className="text-gold not-italic">We build brands.</em>
        </Reveal>
        <Reveal
          as="p"
          delay={0.16}
          className="mt-8 max-w-[52ch] text-step-1 leading-[1.4] text-off-dim"
        >
          Every frame we shoot, every campaign we run, every detail we place answers to one
          question: does it grow the business? We work with a small number of ambitious brands
          — and we treat their growth as our own.
        </Reveal>
        <Reveal
          as="p"
          delay={0.24}
          className="mt-6 font-serif italic text-gold"
        >
          From Colombo, for the world.
        </Reveal>
      </div>
    </section>
  );
}
