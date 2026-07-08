import Image from "next/image";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "TikTok" },
  { href: "#", label: "LinkedIn" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-off/10 bg-ink-2 pb-8 pt-[clamp(3rem,7vw,6rem)]">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="font-serif text-[clamp(3rem,12vw,8rem)] font-semibold leading-[0.9] tracking-tight text-off">
            Let&rsquo;s
            <br />
            talk<span className="text-gold">.</span>
          </div>
          <div className="flex flex-wrap gap-[clamp(2rem,5vw,5rem)]">
            <div>
              <h5 className="mb-4 text-step-n1 uppercase tracking-[0.16em] text-gold">Navigate</h5>
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-1 text-step-0 text-off-dim transition-colors duration-300 hover:text-off"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <h5 className="mb-4 text-step-n1 uppercase tracking-[0.16em] text-gold">Contact</h5>
              <a
                href="tel:+94771439128"
                className="block py-1 text-step-0 text-off-dim transition-colors duration-300 hover:text-off"
              >
                +94 (77) 143 9128
              </a>
              <a
                href="mailto:hello@ugrowth.agency"
                className="block py-1 text-step-0 text-off-dim transition-colors duration-300 hover:text-off"
              >
                hello@ugrowth.agency
              </a>
              <p className="py-1 text-step-0 text-off-dim">Colombo · Worldwide</p>
            </div>
            <div>
              <h5 className="mb-4 text-step-n1 uppercase tracking-[0.16em] text-gold">Follow</h5>
              <div className="flex flex-col gap-1">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="block py-1 text-step-0 text-off-dim transition-colors duration-300 hover:text-off"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(2.5rem,6vw,5rem)] flex flex-wrap items-center justify-between gap-4 border-t border-off/10 pt-6 text-step-n1 text-off/40">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 flex-none">
              <Image
                src="/assets/brand/logo-256.png"
                alt="UGrowth Media and Marketing"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <span>© {year} UGrowth — Media &amp; Marketing</span>
          </div>
          <span>Impossible to ignore.</span>
        </div>
      </div>
    </footer>
  );
}
