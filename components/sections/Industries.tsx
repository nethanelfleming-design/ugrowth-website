import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const TAGS = [
  "Nightlife",
  "Restaurants",
  "Bars",
  "Sports pubs",
  "Hotels",
  "Beach clubs",
  "Events",
  "Real estate",
  "Automotive",
  "Retail",
  "Luxury",
  "Healthcare",
  "Corporate",
];

export function Industries() {
  return (
    <section className="py-[var(--gap)]">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <div className="mb-[clamp(2rem,5vw,4rem)]">
          <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
            Industries
          </Reveal>
          <Reveal as="h2" delay={0.08} className="mt-4 text-step-2">
            Rooted in hospitality.
            <br />
            Built for range.
          </Reveal>
        </div>

        <RevealGroup className="flex flex-wrap gap-x-4 gap-y-3" stagger={0.03}>
          {TAGS.map((tag, i) => (
            <RevealItem
              key={tag}
              as="span"
              className={`font-serif text-[clamp(1.1rem,3.5vw,2rem)] transition-colors duration-300 hover:text-off ${
                i === 0 ? "font-semibold text-gold" : "text-off/45"
              }`}
            >
              {tag}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
