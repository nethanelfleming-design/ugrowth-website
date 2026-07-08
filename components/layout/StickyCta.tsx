"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { EASE_PREMIUM } from "@/lib/motion";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > window.innerHeight * 0.9);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{ y: show ? 0 : "120%" }}
      transition={{ duration: 0.5, ease: EASE_PREMIUM }}
      className="fixed inset-x-0 bottom-0 z-[700] border-t border-off/10 bg-ink/90 px-[var(--pad)] py-3 backdrop-blur-md md:hidden"
    >
      <a
        href="#contact"
        className="flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-step-n1 font-medium text-ink"
      >
        Start a project →
      </a>
    </motion.div>
  );
}
