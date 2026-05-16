"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  duration?: number;
  direction?: "left" | "right";
  className?: string;
  fade?: boolean;
};

export function Marquee({
  children,
  duration = 32,
  direction = "left",
  className,
  fade = true,
}: Props) {
  const reduce = useReducedMotion();
  const to = direction === "left" ? "-50%" : "50%";

  return (
    <div
      className={
        "relative overflow-hidden " +
        (fade
          ? "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          : "") +
        (className ? " " + className : "")
      }
    >
      <motion.div
        className="flex w-max gap-12 will-change-transform"
        animate={reduce ? undefined : { x: ["0%", to] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
