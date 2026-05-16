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
        <h1 className="font-display text-3xl leading-[1.1] tracking-tight text-primary sm:text-4xl md:text-5xl">
          Wait — try the travel size for $9 instead
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
          <span className="font-display text-3xl font-bold text-accent md:text-4xl">
            $9
          </span>
          <span className="text-sm font-medium uppercase tracking-wide text-accent md:text-base">
            one-time
          </span>
        </div>
      </div>
    </UpsellLayout>
  );
}
