import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const SERVICES = [
  { no: "01", title: "Strategy & Positioning", desc: "We find the angle that makes you unignorable." },
  { no: "02", title: "Brand & Identity", desc: "We build brands people remember and trust." },
  { no: "03", title: "Creative Production", desc: "Cinematic content, photography, video, and 3D." },
  { no: "04", title: "Social & Community", desc: "We turn audiences into demand." },
  { no: "05", title: "Digital & Web", desc: "Destinations that convert attention into action." },
  { no: "06", title: "Event & Hospitality", desc: "Rooms full, nights sold out, brands remembered." },
];

export function Services() {
  return (
    <section id="services" className="py-[var(--gap)]">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <div className="mb-[clamp(2rem,5vw,4rem)]">
          <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
            What we do
          </Reveal>
          <Reveal as="h2" delay={0.08} className="mt-4 text-step-2">
            Capabilities, measured
            <br />
            in outcomes.
          </Reveal>
        </div>

        <RevealGroup className="border-t border-off/10" stagger={0.06}>
          {SERVICES.map((service) => (
            <RevealItem
              key={service.no}
              className="group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-off/10 py-[clamp(1.3rem,3vw,2.2rem)] transition-[padding] duration-500 ease-premium hover:pl-5 md:grid-cols-[auto_1fr_auto]"
            >
              <span className="font-serif italic text-step-0 text-gold">{service.no}</span>
              <h3 className="text-step-2 font-medium transition-colors duration-400 group-hover:text-gold">
                {service.title}
              </h3>
              <p className="hidden max-w-[34ch] text-right text-step-0 text-off-dim md:block">
                {service.desc}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
