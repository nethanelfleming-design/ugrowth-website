import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Cta() {
  return (
    <section id="contact" className="py-[clamp(6rem,16vh,12rem)] text-center">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
          The invitation
        </Reveal>
        <Reveal as="h2" delay={0.08} className="mt-4 text-step-4 tracking-[-0.02em]">
          Let&rsquo;s build something
          <br />
          impossible to ignore.
        </Reveal>
        <Reveal as="p" delay={0.16} className="mx-auto mt-6 max-w-[40ch] text-off-dim">
          We take on a limited number of brands each quarter. If yours is one of them, let&rsquo;s
          talk.
        </Reveal>
        <Reveal delay={0.24} className="mt-10 inline-block">
          <Button href="mailto:hello@ugrowth.agency" className="px-8 py-4 text-step-0">
            Start a project
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
