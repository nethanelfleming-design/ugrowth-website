"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

const springConfig = { stiffness: 200, damping: 20, mass: 0.6 };

export function TiltCard({
  children,
  className = "",
  strength = 8,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), springConfig);
  const scale = useSpring(1, springConfig);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleEnter() {
    scale.set(1.02);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, scale, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
