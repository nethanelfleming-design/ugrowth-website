import { Target, Fingerprint, Clapperboard, Users, Globe, PartyPopper } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const SERVICES = [
  { no: "01", title: "Strategy & Positioning", desc: "We find the angle that makes you unignorable.", icon: Target },
  { no: "02", title: "Brand & Identity", desc: "We build brands people remember and trust.", icon: Fingerprint },
  { no: "03", title: "Creative Production", desc: "Cinematic content, photography, video, and 3D.", icon: Clapperboard },
  { no: "04", title: "Social & Community", desc: "We turn audiences into demand.", icon: Users },
  { no: "05", title: "Digital & Web", desc: "Destinations that convert attention into action.", icon: Globe },
  { no: "06", title: "Event & Hospitality", desc: "Rooms full, nights sold out, brands remembered.", icon: PartyPopper },
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
              className="group relative grid grid-cols-[auto_auto_1fr] items-center gap-5 overflow-hidden border-b border-off/10 py-[clamp(1.3rem,3vw,2.2rem)] transition-[padding] duration-500 ease-premium hover:pl-5 md:grid-cols-[auto_auto_1fr_auto]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-gold/[0.06] to-transparent transition-transform duration-700 ease-premium group-hover:translate-x-0"
              />
              <span className="font-serif italic text-step-0 text-gold">{service.no}</span>
              <service.icon
                size={22}
                strokeWidth={1.5}
                className="text-off-dim transition-colors duration-400 group-hover:text-gold"
              />
              <h3 className="text-step-2 font-medium transition-colors duration-400 group-hover:text-gold">
                {service.title}
              </h3>
              <p className="col-span-3 max-w-[34ch] text-step-0 text-off-dim md:col-span-1 md:justify-self-end md:text-right">
                {service.desc}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
