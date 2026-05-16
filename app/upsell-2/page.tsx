import { Check } from "lucide-react";

import { PriceReveal } from "@/components/motion/PriceReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TiltCard } from "@/components/motion/TiltCard";
import { UpsellLayout } from "@/components/shared/UpsellLayout";

const benefits = [
  "Fall asleep faster and stay asleep through the night",
  "Wake up recovered — less soreness, more energy",
  "Sharper focus and steadier performance day-to-day",
  "Calmer mood and a more even baseline",
];

export default function Upsell2Page() {
  return (
    <UpsellLayout
      yesHref="/thank-you"
      yesLabel="Yes, add the Sleep Stack"
      noHref="/thank-you"
      noLabel="No thanks, complete my order"
      countdown="09:47"
      viewers={24}
    >
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h1 className="text-balance font-display text-4xl leading-[1.02] tracking-tight text-primary sm:text-5xl md:text-6xl">
            Add our Sleep Stack — customers see{" "}
            <span className="font-editorial italic font-normal text-accent">
              2x
            </span>{" "}
            better results
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 w-full max-w-sm md:mt-10">
          <TiltCard className="relative overflow-hidden rounded-3xl bg-card shadow-xl shadow-primary/10 ring-1 ring-foreground/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600"
              alt="Sleep Stack supplement bottles"
              className="aspect-square w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg shadow-primary/30"
            >
              <span className="size-1 rounded-full bg-accent" />
              Doctor pick
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
          oldPrice="$79"
          newPrice="$39"
          suffix="today"
          className="mt-8 md:mt-10"
        />
      </div>
    </UpsellLayout>
  );
}
