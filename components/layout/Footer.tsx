import Image from "next/image";

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
          <div>
            <h5 className="mb-4 text-step-n1 uppercase tracking-[0.16em] text-gold">Contact</h5>
            <a
              href="tel:+94771439128"
              className="block py-1 text-step-0 text-off-dim transition-colors duration-300 hover:text-off"
            >
              +94 (77) 143 9128
            </a>
            <a
              href="mailto:ugrowthmarketing@gmail.com"
              className="block py-1 text-step-0 text-off-dim transition-colors duration-300 hover:text-off"
            >
              ugrowthmarketing@gmail.com
            </a>
            <p className="py-1 text-step-0 text-off-dim">Colombo · Worldwide</p>
          </div>
        </div>

        <div className="mt-[clamp(2.5rem,6vw,5rem)] flex flex-wrap items-center justify-between gap-4 border-t border-off/10 pt-6 text-step-n1 text-off/40">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/brand/logo-wordmark.png"
              alt="UGrowth Media and Marketing"
              width={1047}
              height={362}
              className="h-7 w-auto flex-none object-contain"
            />
            <span>© {year} UGrowth — Media &amp; Marketing</span>
          </div>
          <span>Impossible to ignore.</span>
        </div>
      </div>
    </footer>
  );
}
