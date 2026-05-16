import { Check } from "lucide-react";

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
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="font-display text-3xl leading-[1.1] tracking-tight text-primary sm:text-4xl md:text-5xl">
          Add our Sleep Stack — customers see 2x better results
        </h1>

        <div className="mt-8 w-full max-w-sm overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-foreground/10 md:mt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600"
            alt="Sleep Stack supplement bottles"
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
          <span className="text-lg text-foreground/40 line-through md:text-xl">
            $79
          </span>
          <span className="font-display text-3xl font-bold text-accent md:text-4xl">
            $39
          </span>
          <span className="text-sm font-medium uppercase tracking-wide text-accent md:text-base">
            today
          </span>
        </div>
      </div>
    </UpsellLayout>
  );
}
