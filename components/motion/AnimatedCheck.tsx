"use client";

import { motion } from "motion/react";

type Props = {
  size?: number;
  className?: string;
};

export function AnimatedCheck({ size = 96, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      <motion.circle
        cx="50"
        cy="50"
        r="46"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.path
        d="M30 52 L45 67 L72 38"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.55, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
