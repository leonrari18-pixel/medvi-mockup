"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type Props = {
  oldPrice?: string;
  newPrice: string;
  suffix?: string;
  className?: string;
};

export function PriceReveal({
  oldPrice,
  newPrice,
  suffix,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const reduce = useReducedMotion();
  const animate = reduce ? undefined : inView ? "visible" : "hidden";

  return (
    <div
      ref={ref}
      className={
        "flex items-baseline justify-center gap-3 " + (className ?? "")
      }
    >
      {oldPrice ? (
        <span className="relative inline-block">
          <motion.span
            initial="hidden"
            animate={animate}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className="font-editorial text-2xl italic text-foreground/40 md:text-3xl"
          >
            {oldPrice}
          </motion.span>
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ originX: 0 }}
            className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-accent/70"
          />
        </span>
      ) : null}

      <motion.span
        initial="hidden"
        animate={animate}
        variants={{
          hidden: { opacity: 0, y: 24, scale: 0.85 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 16,
              delay: 0.85,
            },
          },
        }}
        className="font-editorial text-5xl italic text-accent md:text-6xl"
      >
        {newPrice}
      </motion.span>

      {suffix ? (
        <motion.span
          initial="hidden"
          animate={animate}
          variants={{
            hidden: { opacity: 0, x: -6 },
            visible: { opacity: 1, x: 0, transition: { delay: 1.1 } },
          }}
          className="text-xs font-medium uppercase tracking-[0.18em] text-accent md:text-sm"
        >
          {suffix}
        </motion.span>
      ) : null}
    </div>
  );
}
