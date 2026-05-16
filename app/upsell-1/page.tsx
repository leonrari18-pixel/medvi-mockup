import { Check } from "lucide-react";

import { PriceReveal } from "@/components/motion/PriceReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TiltCard } from "@/components/motion/TiltCard";
import { UpsellLayout } from "@/components/shared/UpsellLayout";

const benefits = [
  "Better sleep, deeper and more consistent",
  "Faster recovery after exertion",
  "Reduced day-to-day stress and tension",
  "Supports the efficacy of your ED treatment",
];

export default function Upsell1Page() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col bg-background text-foreground">
      <div
        role="status"
        aria-live="polite"
        className="relative w-full overflow-hidden bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground md:text-base"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.18)_50%,transparent_60%)] bg-[length:200%_100%]"
          style={{ animation: "shimmer 3s linear infinite" }}
        />
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
        viewers={31}
      >
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <h1 className="text-balance font-display text-4xl leading-[1.02] tracking-tight text-primary sm:text-5xl md:text-6xl">
              Add Magnesium Complex to{" "}
              <span className="font-editorial italic font-normal text-accent">
                boost
              </span>{" "}
              your results
            </h1>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 w-full max-w-sm md:mt-10">
            <TiltCard className="relative overflow-hidden rounded-3xl bg-card shadow-xl shadow-primary/10 ring-1 ring-foreground/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600"
                alt="Magnesium Complex supplement bottle"
                className="aspect-square w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg shadow-accent/30"
              >
                <span className="size-1 rounded-full bg-primary-foreground" />
                Bestseller
              </div>
            </TiltCard>
          </Reveal>

          <Stagger className="mt-8 flex w-full max-w-md flex-col gap-3 text-left md:mt-10">
            {benefits.map((b) => (
              <StaggerItem
                key={b}
                x={-12}
                className="flex items-start gap-3 text-base text-foreground/85"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3" aria-hidden />
                </span>
                <span>{b}</span>
              </StaggerItem>
            ))}
          </Stagger>

          <PriceReveal
            oldPrice="$49"
            newPrice="$19"
            suffix="today only"
            className="mt-8 md:mt-10"
          />
        </div>
      </UpsellLayout>
    </div>
  );
}
