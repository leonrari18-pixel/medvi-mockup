"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useRef, type ReactNode } from "react";

const SPRING = { stiffness: 220, damping: 18, mass: 0.5 };

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticCTA({
  href,
  children,
  className,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);
  const reduce = useReducedMotion();

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: sx, y: sy, willChange: "transform" }}
      className="inline-block w-full md:w-auto"
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={className}
      >
        {children}
      </Link>
    </motion.div>
  );
}
