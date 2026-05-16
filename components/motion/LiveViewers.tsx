"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  initial?: number;
  label?: string;
  className?: string;
};

export function LiveViewers({
  initial = 27,
  label = "people are viewing this offer",
  className,
}: Props) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        const delta = Math.random() < 0.5 ? -1 : 1;
        const next = c + delta;
        if (next < initial - 4) return initial - 3;
        if (next > initial + 5) return initial + 4;
        return next;
      });
    }, 2400);
    return () => clearInterval(id);
  }, [initial]);

  return (
    <div className={"inline-flex items-center gap-2 " + (className ?? "")}>
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/70" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-xs font-medium text-foreground/65 md:text-sm">
        <span className="relative inline-block min-w-[2ch] text-right font-mono font-semibold text-foreground/85">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={count}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="inline-block"
            >
              {count}
            </motion.span>
          </AnimatePresence>
        </span>{" "}
        {label}
      </span>
    </div>
  );
}
