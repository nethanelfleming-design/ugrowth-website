"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode, MouseEvent } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  magnetic?: boolean;
};

const springConfig = { stiffness: 220, damping: 18, mass: 0.6 };

export function Button({ href, children, variant = "solid", className = "", magnetic = true }: ButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    if (!magnetic) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    x.set(relX * 14);
    y.set(relY * 8);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-step-n1 font-medium tracking-wide transition-colors duration-300 will-change-transform";
  const solid = "bg-gold text-ink hover:bg-gold-soft";
  const ghost = "border border-off/15 text-off hover:border-gold hover:text-gold";

  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variant === "solid" ? solid : ghost} ${className}`}
    >
      {children}
      <ArrowRight
        size={16}
        className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
      />
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} data-cursor="View" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} data-cursor="View" className="inline-block">
      {content}
    </Link>
  );
}
