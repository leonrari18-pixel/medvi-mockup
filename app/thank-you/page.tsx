import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const lineItems = [
  { name: "QUAD Treatment", price: "$89/month" },
  { name: "Magnesium Complex", price: "$19" },
  { name: "Sleep Stack", price: "$39" },
];

const steps = [
  "A licensed doctor reviews your assessment within 24 hours",
  "Your prescription ships discreetly in unmarked packaging",
  "We follow up in 30 days to check your progress",
];

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2
              size={64}
              strokeWidth={1.75}
              className="text-primary"
              aria-hidden
            />
          </div>

          <h1 className="mt-6 text-balance text-center font-display text-4xl leading-[1.05] tracking-tight text-primary md:mt-8 md:text-6xl">
            You&rsquo;re{" "}
            <span className="font-editorial italic font-normal text-accent">
              all set
            </span>
            , John
          </h1>

          <p className="mt-3 max-w-md text-center text-sm text-foreground/65 md:text-base">
            We&rsquo;ve sent a confirmation to your email. Here&rsquo;s a
            summary of your order.
          </p>

          <Card className="mt-10 w-full rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10 md:mt-12 md:p-7">
            <CardContent className="flex flex-col gap-5 p-0">
              <h2 className="font-display text-xl text-primary md:text-2xl">
                Your order
              </h2>

              <ul className="flex flex-col divide-y divide-foreground/10">
                {lineItems.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <span className="font-medium text-primary">
                      {item.name}
                    </span>
                    <span className="text-sm text-foreground/75">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-foreground/10 pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-foreground/70">
                    Total
                  </span>
                  <span className="font-editorial text-4xl italic text-primary md:text-5xl">
                    $147
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="mt-14 w-full md:mt-20">
            <h2 className="text-center font-display text-2xl text-primary md:text-3xl">
              What happens next
            </h2>

            <ol className="mt-6 flex flex-col gap-4 md:mt-8">
              {steps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-2xl bg-card p-4 ring-1 ring-foreground/10 md:p-5"
                >
                  <span
                    aria-hidden
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground md:size-9 md:text-base"
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm text-foreground/80 md:text-base">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-12 h-14 w-full max-w-md rounded-2xl px-8 text-base font-medium shadow-md shadow-primary/10 hover:bg-primary/90 hover:shadow-lg md:mt-16 md:h-16 md:text-lg"
            )}
          >
            Access your patient portal
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
