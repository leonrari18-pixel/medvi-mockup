import Link from "next/link";
import { Package, RotateCcw, Stethoscope } from "lucide-react";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    icon: Stethoscope,
    title: "Licensed US doctors",
    description:
      "Every plan is reviewed and prescribed by a board-certified physician.",
  },
  {
    icon: Package,
    title: "Discreet shipping",
    description:
      "Plain, unmarked packaging delivered free to your door each month.",
  },
  {
    icon: RotateCcw,
    title: "Cancel anytime",
    description:
      "No long contracts. Pause or cancel from your dashboard in two clicks.",
  },
];

const testimonials = [
  {
    avatar: "https://i.pravatar.cc/80?img=1",
    name: "Marcus, 42",
    quote:
      "The whole thing took ten minutes. My treatment showed up four days later and it just works. Wish I’d done this years ago.",
  },
  {
    avatar: "https://i.pravatar.cc/80?img=2",
    name: "David, 38",
    quote:
      "I was nervous about asking my regular doctor. Talking to a Medvi physician felt easy — no judgment, no awkward waiting room.",
  },
  {
    avatar: "https://i.pravatar.cc/80?img=3",
    name: "James, 51",
    quote:
      "Price is straightforward, the doctors actually respond, and there’s no pharmacy run. It’s the version of healthcare I always wanted.",
  },
];

const faqs = [
  {
    question: "How does Medvi treat ED?",
    answer:
      "After a short online assessment, a licensed US physician reviews your medical history and, if appropriate, prescribes a treatment such as generic sildenafil or tadalafil. Your medication is shipped directly to you each month — no pharmacy visit required.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Plans start at $2 per dose for generic sildenafil. There are no consultation fees, no membership fees, and no surprise charges. You’ll see your exact monthly price before you ever check out.",
  },
  {
    question: "Is my information private?",
    answer:
      "Yes. Medvi is fully HIPAA-compliant. Your visit, your prescription, and your records are encrypted and visible only to you and your care team. We never sell your data, and your packaging arrives plain and unbranded.",
  },
  {
    question: "How fast does my order ship?",
    answer:
      "Most orders ship the same business day a doctor approves your plan, and arrive within 3–5 days. Shipping is always free, in a discreet, unmarked package signed for by you.",
  },
  {
    question: "Can I cancel or pause my plan?",
    answer:
      "Anytime. There are no contracts and no cancellation fees. You can pause shipments, change your dose, or cancel entirely from your dashboard in under a minute.",
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent md:text-sm">
              <span aria-hidden className="size-1.5 rounded-full bg-accent" />
              100% online · prescribed by US doctors
            </span>

            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              A better way to treat ED
            </h1>

            <p className="mt-5 max-w-xl text-base text-foreground/70 md:mt-6 md:text-lg">
              Skip the awkward waiting rooms. Talk to a licensed physician
              online, get a personalized treatment plan, and have it shipped
              discreetly to your door — starting at $2 a dose.
            </p>

            <Link
              href="/quiz"
              className={cn(
                buttonVariants({ variant: "default" }),
                "mt-8 h-14 rounded-2xl px-8 text-base font-medium shadow-md shadow-primary/10 hover:bg-primary/90 hover:shadow-lg md:mt-10 md:h-16 md:px-10 md:text-lg"
              )}
            >
              Start your free assessment
            </Link>

            <p className="mt-4 text-xs text-foreground/50">
              Takes about 3 minutes · No charge until prescribed
            </p>
          </div>
        </section>

        {/* Trust */}
        <section className="border-y border-foreground/10 bg-primary/[0.03] px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {trustItems.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg text-primary md:text-xl">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm text-foreground/65 md:text-base">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
              <h2 className="font-display text-3xl leading-tight tracking-tight text-primary md:text-4xl">
                Trusted by thousands of men
              </h2>
              <p className="mt-3 text-sm text-foreground/65 md:text-base">
                Real Medvi members, in their own words.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              {testimonials.map((t) => (
                <Card
                  key={t.name}
                  className="rounded-2xl bg-card p-6 shadow-sm ring-0 transition-shadow hover:shadow-md md:p-7"
                >
                  <CardContent className="flex h-full flex-col gap-5 p-0">
                    <p className="text-base leading-relaxed text-foreground/85">
                      “{t.quote}”
                    </p>
                    <div className="mt-auto flex items-center gap-3 pt-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.avatar}
                        alt={`${t.name} avatar`}
                        width={40}
                        height={40}
                        className="size-10 rounded-full object-cover ring-1 ring-foreground/10"
                      />
                      <span className="text-sm font-medium text-primary">
                        {t.name}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 pb-20 md:px-6 md:pb-28">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center md:mb-12">
              <h2 className="font-display text-3xl leading-tight tracking-tight text-primary md:text-4xl">
                Frequently asked
              </h2>
              <p className="mt-3 text-sm text-foreground/65 md:text-base">
                Everything to know before you start.
              </p>
            </div>

            <Accordion
              className="rounded-2xl bg-card px-5 shadow-sm ring-1 ring-foreground/10 md:px-7"
            >
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="py-5 text-base text-primary md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 flex flex-col items-center text-center">
              <p className="text-sm text-foreground/65">
                Ready when you are.
              </p>
              <Link
                href="/quiz"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "mt-4 h-14 rounded-2xl px-8 text-base font-medium shadow-md shadow-primary/10 hover:bg-primary/90 hover:shadow-lg md:h-16 md:px-10 md:text-lg"
                )}
              >
                Start your free assessment
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
