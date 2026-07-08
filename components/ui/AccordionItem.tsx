"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-off/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-8 py-6 text-left font-serif text-step-1 text-off md:py-7"
        aria-expanded={isOpen}
      >
        {question}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          className="flex-none text-gold"
        >
          <Plus size={22} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            className="overflow-hidden"
          >
            <p className="max-w-[62ch] pb-6 text-off-dim">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
