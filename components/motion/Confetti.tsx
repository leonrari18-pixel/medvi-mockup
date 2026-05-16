"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";

const PALETTE = ["#1F3D2E", "#C97B5C", "#FAF8F5", "#D9B89C", "#3A6B52"];

type Particle = {
  id: number;
  x: number;
  rotate: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  drift: number;
};

function build(count: number, seed: number): Particle[] {
  const rand = (n: number) => {
    seed = (seed * 9301 + 49297) % 233280;
    return (seed / 233280) * n;
  };
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: rand(100),
    rotate: rand(720) - 360,
    color: PALETTE[Math.floor(rand(PALETTE.length))],
    delay: rand(0.4),
    duration: 1.6 + rand(1.4),
    size: 6 + Math.floor(rand(8)),
    drift: rand(80) - 40,
  }));
}

type Props = {
  count?: number;
  className?: string;
};

export function Confetti({ count = 80, className }: Props) {
  const reduce = useReducedMotion();
  const particles = useMemo(() => build(count, 42), [count]);

  if (reduce) return null;

  return (
    <div
      aria-hidden
      className={
        "pointer-events-none absolute inset-x-0 top-0 z-10 h-[60vh] overflow-hidden " +
        (className ?? "")
      }
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -40, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: ["-10%", "110%"],
            x: [0, p.drift],
            opacity: [0, 1, 1, 0],
            rotate: p.rotate,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size * 1.4,
            backgroundColor: p.color,
            borderRadius: p.id % 3 === 0 ? "9999px" : "2px",
          }}
          className="absolute top-0"
        />
      ))}
    </div>
  );
}
