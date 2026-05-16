import Link from "next/link";
import type { ReactNode } from "react";

import { CountdownTicker } from "@/components/motion/CountdownTicker";
import { LiveViewers } from "@/components/motion/LiveViewers";
import { MagneticCTA } from "@/components/motion/MagneticCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Header } from "@/components/shared/Header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type UpsellLayoutProps = {
  children: ReactNode;
  yesHref: string;
  noHref: string;
  yesLabel: string;
  noLabel: string;
  countdown?: string;
  viewers?: number;
};

export function UpsellLayout({
  children,
  yesHref,
  noHref,
  yesLabel,
  noLabel,
  countdown = "09:47",
  viewers = 27,
}: UpsellLayoutProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />

      <main className="relative flex flex-1 flex-col items-center px-4 pb-12 pt-24 md:px-6 md:pb-16 md:pt-12">
        <div className="pointer-events-none absolute right-4 top-4 md:right-6 md:top-6">
          <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent shadow-sm md:text-sm">
            <span
              aria-hidden
              className="relative flex size-1.5"
            >
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            <CountdownTicker initial={countdown} />
          </div>
        </div>

        <div className="flex w-full max-w-2xl flex-1 flex-col items-center">
          <Reveal className="w-full">{children}</Reveal>

          <div className="mt-10 flex w-full flex-col items-center gap-5 md:mt-12">
            <LiveViewers initial={viewers} />

            <MagneticCTA
              href={yesHref}
              className={cn(
                buttonVariants({ variant: "default" }),
                "pulse-glow group relative h-14 w-full rounded-2xl px-8 text-base font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl md:h-16 md:text-lg"
              )}
            >
              <span className="relative z-10">{yesLabel}</span>
            </MagneticCTA>

            <Link
              href={noHref}
              className="text-sm text-foreground/55 underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {noLabel}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UpsellLayout;
