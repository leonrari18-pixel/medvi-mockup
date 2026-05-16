import { PriceReveal } from "@/components/motion/PriceReveal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { UpsellLayout } from "@/components/shared/UpsellLayout";

export default function Downsell1Page() {
  return (
    <UpsellLayout
      yesHref="/upsell-2"
      yesLabel="Yes, add the travel size for $9"
      noHref="/upsell-2"
      noLabel="No thanks, continue"
      countdown="04:23"
      viewers={18}
    >
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h1 className="text-balance font-display text-4xl leading-[1.02] tracking-tight text-primary sm:text-5xl md:text-6xl">
            <span className="font-editorial italic font-normal text-accent">
              Wait
            </span>{" "}
            — try the travel size for $9 instead
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 w-full max-w-[260px] md:mt-10 md:max-w-xs">
          <TiltCard className="relative overflow-hidden rounded-3xl bg-card shadow-xl shadow-primary/10 ring-1 ring-foreground/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1550572017-edd951b55104?w=400"
              alt="Magnesium Complex travel-size bottle"
              className="aspect-square w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg shadow-accent/30"
            >
              <span className="size-1 rounded-full bg-primary-foreground" />
              One-time only
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/75 md:mt-10 md:text-lg">
            Same formula, travel size. Risk-free at our lowest price.
          </p>
        </Reveal>

        <PriceReveal
          newPrice="$9"
          suffix="one-time"
          className="mt-6 md:mt-8"
        />
      </div>
    </UpsellLayout>
  );
}
