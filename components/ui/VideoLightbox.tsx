"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion";

type VideoLightboxProps = {
  src: string | null;
  poster?: string;
  title?: string;
  onClose: () => void;
};

export function VideoLightbox({ src, poster, title, onClose }: VideoLightboxProps) {
  useEffect(() => {
    if (!src) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          className="fixed inset-0 z-[9500] flex items-center justify-center bg-ink/92 p-6 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            aria-label="Close video"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-off/15 text-off transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <X size={20} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            className="relative aspect-[9/16] h-full max-h-[86vh] overflow-hidden rounded-sm bg-ink-2"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={src}
              src={src}
              poster={poster}
              controls
              autoPlay
              playsInline
              className="h-full w-full object-contain"
            />
            {title && (
              <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-ink/80 to-transparent p-4">
                <span className="text-step-n1 uppercase tracking-[0.1em] text-off-dim">{title}</span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
