"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

function parse(input: string | number): number {
  if (typeof input === "number") return Math.max(0, input);
  const [m, s] = input.split(":").map(Number);
  return Math.max(0, (m || 0) * 60 + (s || 0));
}

function format(total: number): { mm: string; ss: string } {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return { mm: String(m).padStart(2, "0"), ss: String(s).padStart(2, "0") };
}

function Digit({ value }: { value: string }) {
  return (
    <span className="relative inline-block w-[1ch] overflow-hidden text-center tabular-nums">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

type Props = {
  initial?: string | number;
  className?: string;
  prefix?: string;
};

export function CountdownTicker({
  initial = "09:47",
  className,
  prefix = "Offer expires in",
}: Props) {
  const [remaining, setRemaining] = useState(() => parse(initial));

  useEffect(() => {
    if (remaining <= 0) return;
    const id = setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [remaining]);

  const { mm, ss } = format(remaining);

  return (
    <span className={className}>
      {prefix}{" "}
      <span className="font-mono font-semibold">
        <Digit value={mm[0]} />
        <Digit value={mm[1]} />
        <span className="mx-px">:</span>
        <Digit value={ss[0]} />
        <Digit value={ss[1]} />
      </span>
    </span>
  );
}
