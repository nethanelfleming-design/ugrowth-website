"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#studio", label: "Studio" },
];

export function Header() {
  const [shrink, setShrink] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShrink(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[800] flex items-center justify-between px-[var(--pad)] transition-[padding,background-color,backdrop-filter] duration-500 ease-premium ${
          shrink
            ? "border-b border-off/10 bg-ink/70 py-3.5 backdrop-blur-md"
            : "border-b border-transparent py-5.5"
        }`}
      >
        <Link href="#top" className="font-serif text-2xl font-semibold tracking-tight">
          <span className="text-off">UG</span>
          <span className="text-gold">rowth</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-step-n1 tracking-wide text-off-dim transition-colors duration-300 hover:text-off"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 ease-premium group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            data-cursor="Talk"
            className="rounded-full bg-gold px-5 py-2.5 text-step-n1 font-medium text-ink transition-colors duration-300 hover:bg-gold-soft"
          >
            Let&rsquo;s talk →
          </a>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[900] flex h-8 w-8 items-center justify-center md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="fixed inset-0 z-[790] flex flex-col justify-center gap-1 bg-ink px-[var(--pad)] pb-8 pt-24"
          >
            {NAV_LINKS.concat({ href: "#contact", label: "Contact" }).map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 font-serif text-[clamp(2.2rem,10vw,3.5rem)] text-off"
              >
                <span className="mr-3 align-super text-sm tracking-[0.1em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
