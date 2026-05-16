"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import type { ReactNode } from "react";

const SPRING = { type: "spring" as const, stiffness: 110, damping: 18 };

type StaggerProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
};

export function Stagger({
  children,
  stagger = 0.08,
  delayChildren = 0.05,
  ...rest
}: StaggerProps) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: reduce
        ? {}
        : { staggerChildren: stagger, delayChildren },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type ItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  x?: number;
  y?: number;
};

export function StaggerItem({ children, x = 0, y = 16, ...rest }: ItemProps) {
  const reduce = useReducedMotion();

  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, x, y },
        visible: { opacity: 1, x: 0, y: 0, transition: SPRING },
      };

  return (
    <motion.div variants={item} {...rest}>
      {children}
    </motion.div>
  );
}
