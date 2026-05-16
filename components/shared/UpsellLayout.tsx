import Link from "next/link";
import type { ReactNode } from "react";

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
};

export function UpsellLayout({
  children,
  yesHref,
  noHref,
  yesLabel,
  noLabel,
  countdown = "09:47",
}: UpsellLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="relative flex flex-1 flex-col items-center px-4 pb-12 pt-20 md:px-6 md:pb-16 md:pt-10">
        <div className="pointer-events-none absolute right-4 top-4 md:right-6 md:top-6">
          <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent shadow-sm md:text-sm">
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-accent"
            />
            Offer expires in {countdown}
          </div>
        </div>

        <div className="flex w-full max-w-2xl flex-1 flex-col items-center">
          <div className="w-full">{children}</div>

          <div className="mt-10 flex w-full flex-col items-center gap-4 md:mt-12">
            <Link
              href={yesHref}
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-14 w-full rounded-2xl px-8 text-base font-medium shadow-md shadow-primary/10 hover:bg-primary/90 hover:shadow-lg md:h-16 md:text-lg"
              )}
            >
              {yesLabel}
            </Link>

            <Link
              href={noHref}
              className="text-sm text-foreground/60 underline-offset-4 transition-colors hover:text-foreground hover:underline"
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
