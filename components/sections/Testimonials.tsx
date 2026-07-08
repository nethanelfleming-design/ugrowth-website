import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const QUOTES = [
  { who: "Industri" },
  { who: "The Nets" },
  { who: "Yevan David" },
];

export function Testimonials() {
  return (
    <section className="py-[var(--gap)]">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <div className="mb-[clamp(2rem,5vw,4rem)]">
          <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
            What clients say
          </Reveal>
          <Reveal as="h2" delay={0.08} className="mt-4 text-step-2">
            Proof, in their words.
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8" stagger={0.1}>
          {QUOTES.map((quote) => (
            <RevealItem
              key={quote.who}
              className="flex min-h-[260px] flex-col rounded-sm border border-off/10 bg-ink-2 p-[clamp(1.5rem,3vw,2.4rem)]"
            >
              <div className="font-serif text-[3.2rem] leading-[0.6] text-gold">&ldquo;</div>
              <p className="mt-5 flex-1 font-serif italic text-step-0 text-off/40">
                [ Client testimonial — to be added ]
              </p>
              <div className="mt-6 text-step-n1 uppercase tracking-[0.06em] text-off-dim">
                {quote.who}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
