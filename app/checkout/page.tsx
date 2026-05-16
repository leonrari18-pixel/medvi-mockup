import Link from "next/link";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function Field({
  id,
  label,
  className,
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wide text-foreground/60"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "h-12 rounded-xl border-foreground/15 bg-card px-4 text-base text-foreground placeholder:text-foreground/35 md:text-base";

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12">
            <h1 className="font-display text-4xl leading-tight tracking-tight text-primary md:text-5xl">
              <span className="font-editorial italic font-normal text-accent">
                Almost
              </span>{" "}
              there
            </h1>
            <p className="mt-2 text-sm text-foreground/65 md:text-base">
              Enter your details to finish your order.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {/* Left — shipping & payment */}
            <form className="flex flex-col gap-8">
              <section>
                <h2 className="font-display text-xl text-primary md:text-2xl">
                  Shipping
                </h2>
                <p className="mt-1 text-sm text-foreground/60">
                  Sent in plain, unbranded packaging.
                </p>

                <div className="mt-5 flex flex-col gap-4">
                  <Field id="name" label="Full name">
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="John Carter"
                      className={inputClass}
                    />
                  </Field>

                  <Field id="address" label="Address line 1">
                    <Input
                      id="address"
                      name="address"
                      autoComplete="address-line1"
                      placeholder="221B Baker Street"
                      className={inputClass}
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_120px_140px]">
                    <Field id="city" label="City">
                      <Input
                        id="city"
                        name="city"
                        autoComplete="address-level2"
                        placeholder="Brooklyn"
                        className={inputClass}
                      />
                    </Field>
                    <Field id="state" label="State">
                      <Input
                        id="state"
                        name="state"
                        autoComplete="address-level1"
                        placeholder="NY"
                        className={inputClass}
                      />
                    </Field>
                    <Field id="zip" label="Zip">
                      <Input
                        id="zip"
                        name="zip"
                        inputMode="numeric"
                        autoComplete="postal-code"
                        placeholder="11201"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field id="email" label="Email">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </Field>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl text-primary md:text-2xl">
                  Payment
                </h2>
                <p className="mt-1 text-sm text-foreground/60">
                  Securely encrypted. No charge until your doctor approves.
                </p>

                <Field id="card" label="Card information" className="mt-5">
                  <div
                    id="card"
                    role="group"
                    aria-label="Card number ending in 4242"
                    className="flex h-12 items-center justify-between rounded-xl border border-foreground/15 bg-card px-4 shadow-[inset_0_1px_0_rgba(0,0,0,0.02)]"
                  >
                    <span className="font-mono text-base tracking-[0.18em] text-foreground/80">
                      •••• •••• •••• 4242
                    </span>
                    <span className="inline-flex items-center rounded-md bg-[#1A1F71] px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                      Visa
                    </span>
                  </div>
                </Field>
              </section>
            </form>

            {/* Right — order summary */}
            <aside className="md:sticky md:top-24 md:self-start">
              <Card className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10 md:p-7">
                <CardContent className="flex flex-col gap-5 p-0">
                  <div>
                    <h2 className="font-display text-xl text-primary md:text-2xl">
                      Your order
                    </h2>
                  </div>

                  <div className="flex items-start justify-between gap-4 rounded-xl bg-primary/[0.04] p-4">
                    <div>
                      <p className="font-medium text-primary">
                        QUAD Treatment
                      </p>
                      <p className="mt-0.5 text-xs text-foreground/60">
                        Monthly subscription · Cancel anytime
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-primary">
                      $89/month
                    </p>
                  </div>

                  <dl className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center justify-between text-foreground/70">
                      <dt>Subtotal</dt>
                      <dd>$89.00</dd>
                    </div>
                    <div className="flex items-center justify-between text-foreground/70">
                      <dt>Shipping</dt>
                      <dd className="text-accent">Free</dd>
                    </div>
                  </dl>

                  <div className="border-t border-foreground/10 pt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-medium text-foreground/70">
                        Total
                      </span>
                      <span className="font-editorial text-4xl italic text-primary md:text-5xl">
                        $89.00
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/upsell-1"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "h-14 w-full rounded-2xl px-8 text-base font-medium shadow-md shadow-primary/10 hover:bg-primary/90 hover:shadow-lg md:h-16 md:text-lg"
                    )}
                  >
                    Complete purchase
                  </Link>

                  <p className="text-center text-xs text-foreground/55">
                    By completing your purchase you agree to our Terms and
                    Privacy Policy.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
