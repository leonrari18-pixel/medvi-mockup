import { Check } from "lucide-react";

import { UpsellLayout } from "@/components/shared/UpsellLayout";

const benefits = [
  "Better sleep, deeper and more consistent",
  "Faster recovery after exertion",
  "Reduced day-to-day stress and tension",
  "Supports the efficacy of your ED treatment",
];

export default function Upsell1Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div
        role="status"
        aria-live="polite"
        className="w-full bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground md:text-base"
      >
        <span className="mr-2" aria-hidden>
          ✓
        </span>
        Order confirmed — one more thing
      </div>

      <UpsellLayout
        yesHref="/upsell-2"
        yesLabel="Yes, add to my order — one click, no card needed"
        noHref="/downsell-1"
        noLabel="No thanks, I'll pass"
        countdown="09:47"
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl">
            Add Magnesium Complex to{" "}
            <span className="font-editorial italic font-normal text-accent">
              boost
            </span>{" "}
            your results
          </h1>

          <div className="mt-8 w-full max-w-sm overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-foreground/10 md:mt-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600"
              alt="Magnesium Complex supplement bottle"
              className="aspect-square w-full object-cover"
            />
          </div>

          <ul className="mt-8 flex w-full max-w-md flex-col gap-3 text-left md:mt-10">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-base text-foreground/85"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3" aria-hidden />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-baseline justify-center gap-3 md:mt-10">
            <span className="font-editorial text-2xl italic text-foreground/40 line-through md:text-3xl">
              $49
            </span>
            <span className="font-editorial text-5xl italic text-accent md:text-6xl">
              $19
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent md:text-sm">
              today only
            </span>
          </div>
        </div>
      </UpsellLayout>
    </div>
  );
}
