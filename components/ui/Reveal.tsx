"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

const MOTION_TAGS = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  h2: motion.h2,
} as const;

type TagName = keyof typeof MOTION_TAGS;

type RevealProps = {
  children: ReactNode;
  as?: TagName;
  className?: string;
  delay?: number;
  variants?: Variants;
  amount?: number;
};

export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  variants = fadeUp,
  amount = 0.2,
}: RevealProps) {
  const MotionTag = MOTION_TAGS[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  as?: TagName;
  stagger?: number;
  amount?: number;
};

export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.1,
  amount = 0.15,
}: RevealGroupProps) {
  const MotionTag = MOTION_TAGS[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  as?: TagName;
  variants?: Variants;
}) {
  const MotionTag = MOTION_TAGS[as];
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
