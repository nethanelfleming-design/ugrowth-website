"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_PREMIUM } from "@/lib/motion";

export function Loader({ onDone }: { onDone?: () => void }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const tick = setInterval(() => {
      p = Math.min(100, p + Math.round(6 + Math.random() * 14));
      setPct(p);
      if (p >= 100) clearInterval(tick);
    }, 90);

    const finish = setTimeout(() => {
      setPct(100);
      setTimeout(() => {
        setDone(true);
        onDone?.();
      }, 500);
    }, 1500);

    return () => {
      clearInterval(tick);
      clearTimeout(finish);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          className="fixed inset-0 z-[9000] grid place-items-center bg-ink"
        >
          <div className="text-center">
            <div className="overflow-hidden font-serif text-[clamp(2rem,7vw,4rem)] font-semibold tracking-[0.02em] text-off">
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE_PREMIUM }}
                className="inline-block"
              >
                UGROWTH
              </motion.span>
            </div>
            <div className="mx-auto mt-6 h-px w-[min(220px,50vw)] overflow-hidden bg-off/10">
              <motion.i
                initial={{ width: "0%" }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                className="block h-full bg-gold"
              />
            </div>
            <div className="mt-3 font-sans text-[11px] tracking-[0.2em] text-off-dim">{pct}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
