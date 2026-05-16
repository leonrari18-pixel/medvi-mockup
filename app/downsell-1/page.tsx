import { UpsellLayout } from "@/components/shared/UpsellLayout";

export default function Downsell1Page() {
  return (
    <UpsellLayout
      yesHref="/upsell-2"
      yesLabel="Yes, add the travel size for $9"
      noHref="/upsell-2"
      noLabel="No thanks, continue"
      countdown="09:47"
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl">
          <span className="font-editorial italic font-normal text-accent">
            Wait
          </span>{" "}
          — try the travel size for $9 instead
        </h1>

        <div className="mt-8 w-full max-w-[260px] overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-foreground/10 md:mt-10 md:max-w-xs">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1550572017-edd951b55104?w=400"
            alt="Magnesium Complex travel-size bottle"
            className="aspect-square w-full object-cover"
          />
        </div>

        <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/75 md:mt-10 md:text-lg">
          Same formula, travel size. Risk-free at our lowest price.
        </p>

        <div className="mt-6 flex items-baseline justify-center gap-2 md:mt-8">
          <span className="font-editorial text-5xl italic text-accent md:text-6xl">
            $9
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent md:text-sm">
            one-time
          </span>
        </div>
      </div>
    </UpsellLayout>
  );
}
