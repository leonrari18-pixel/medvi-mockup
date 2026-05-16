import Link from "next/link";
import {
  ArrowRight,
  Package,
  RotateCcw,
  Star,
  Stethoscope,
} from "lucide-react";

import { CountUp } from "@/components/motion/CountUp";
import { MagneticCTA } from "@/components/motion/MagneticCTA";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TiltCard } from "@/components/motion/TiltCard";
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

const press = ["Vogue", "Men's Health", "GQ", "Esquire", "Forbes", "Wired", "Bloomberg"];

const stats = [
  { value: 50000, label: "Men treated", suffix: "+" },
  { value: 4.9, label: "Avg. rating", star: true, decimals: 1 },
  { value: 2, label: "Per dose", prefix: "$" },
  { value: 24, label: "Doctor response", suffix: "h" },
];

const howSteps = [
  {
    n: "01",
    title: "Take the assessment",
    body: "Three minutes online. No waiting rooms, no awkward small talk.",
  },
  {
    n: "02",
    title: "A real doctor reviews it",
    body: "A US-licensed physician designs your treatment within 24 hours.",
  },
  {
    n: "03",
    title: "It ships to your door",
    body: "Free, discreet, monthly. Cancel or pause from your phone.",
  },
];

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
    avatar: "https://i.pravatar.cc/80?img=11",
    name: "Marcus T.",
    meta: "42, member since 2024",
    quote:
      "The whole thing took ten minutes. My treatment showed up four days later and it just works.",
  },
  {
    avatar: "https://i.pravatar.cc/80?img=14",
    name: "David R.",
    meta: "38, member since 2025",
    quote:
      "I was nervous about asking my regular doctor. Talking to a Medvi physician felt easy — no judgment.",
  },
  {
    avatar: "https://i.pravatar.cc/80?img=12",
    name: "James W.",
    meta: "51, member since 2023",
    quote:
      "Price is straightforward, the doctors actually respond, no pharmacy run. The healthcare I always wanted.",
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

function Stars({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-3.5 fill-accent text-accent md:size-4"
        />
      ))}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-cream-gradient px-4 pb-20 pt-14 md:px-6 md:pb-32 md:pt-24">
          <div className="bg-grain pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent md:text-sm">
                <span aria-hidden className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                Prescribed online · Shipped to your door
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-balance font-display text-5xl leading-[0.95] tracking-[-0.02em] text-primary sm:text-6xl md:text-7xl lg:text-[5.75rem]">
                A better way to{" "}
                <span className="font-editorial italic font-normal text-accent">
                  treat
                </span>{" "}
                ED
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-balance text-base text-foreground/70 md:mt-8 md:text-lg lg:text-xl">
                Skip the awkward waiting rooms. Talk to a licensed physician
                online, get a personalized treatment plan, and have it shipped
                discreetly — starting at{" "}
                <span className="font-semibold text-primary">$2 a dose</span>.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex w-full max-w-md flex-col items-center gap-5 md:mt-12">
                <MagneticCTA
                  href="/quiz"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "pulse-glow group relative h-16 w-full rounded-2xl px-10 text-base font-medium shadow-lg shadow-primary/15 hover:bg-primary/90 hover:shadow-xl md:h-[68px] md:text-lg"
                  )}
                >
                  <span className="relative z-10 inline-flex items-center">
                    Start your free assessment
                    <ArrowRight
                      className="ml-2 size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </MagneticCTA>

                <div className="flex items-center gap-2 text-sm text-foreground/65">
                  <Stars />
                  <span className="font-medium text-foreground/85">4.9</span>
                  <span className="text-foreground/45">·</span>
                  <span>
                    <CountUp to={12847} duration={1.8} /> reviews
                  </span>
                </div>

                <p className="text-xs text-foreground/50">
                  Takes about 3 minutes · No charge until prescribed
                </p>
              </div>
            </Reveal>
          </div>

          {/* Press marquee */}
          <Reveal delay={0.35} className="relative mt-20 md:mt-24">
            <p className="mb-5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/45 md:text-xs">
              As featured in
            </p>
            <Marquee duration={38}>
              {press.map((p) => (
                <span
                  key={p}
                  className="font-editorial text-2xl text-foreground/40 md:text-3xl"
                >
                  {p}
                </span>
              ))}
            </Marquee>
          </Reveal>
        </section>

        {/* STATS BAND */}
        <section className="bg-primary px-4 py-12 text-primary-foreground md:px-6 md:py-16">
          <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
            {stats.map((s) => (
              <StaggerItem
                key={s.label}
                y={20}
                className="flex flex-col items-center text-center md:border-r md:border-primary-foreground/15 md:last:border-r-0"
              >
                <span className="font-display text-4xl tabular-nums tracking-tight md:text-5xl lg:text-6xl">
                  <CountUp
                    to={s.value}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix ?? ""}
                    decimals={s.decimals}
                  />
                  {s.star ? (
                    <span className="ml-1 text-accent">★</span>
                  ) : null}
                </span>
                <span className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/65 md:text-sm">
                  {s.label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-12 flex flex-col items-center text-center md:mb-16">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-accent">
                How it works
              </span>
              <h2 className="text-balance font-display text-4xl leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
                Care that fits in a{" "}
                <span className="font-editorial italic font-normal">
                  coffee break
                </span>
              </h2>
            </Reveal>

            <Stagger className="grid gap-8 md:grid-cols-3 md:gap-10">
              {howSteps.map((step) => (
                <StaggerItem key={step.n} y={28} className="relative">
                  <span
                    aria-hidden
                    className="font-editorial text-7xl italic leading-none text-accent/30 md:text-8xl"
                  >
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-primary md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-foreground/65 md:text-lg">
                    {step.body}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* TRUST PILLARS */}
        <section className="border-y border-foreground/10 bg-primary/[0.03] px-4 py-16 md:px-6 md:py-20">
          <Stagger className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {trustItems.map(({ icon: Icon, title, description }) => (
              <StaggerItem
                key={title}
                y={24}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm shadow-primary/20 transition-transform duration-300 hover:-translate-y-1">
                  <Icon className="size-6" aria-hidden />
                </div>
                <h3 className="font-display text-xl text-primary md:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 text-foreground/65 md:text-lg">
                  {description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.22em] text-accent">
                Real members
              </span>
              <h2 className="text-balance font-display text-4xl leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
                Trusted by{" "}
                <span className="font-editorial italic font-normal">
                  thousands
                </span>{" "}
                of men
              </h2>
            </Reveal>

            <Stagger className="grid gap-5 md:grid-cols-3 md:gap-6">
              {testimonials.map((t) => (
                <StaggerItem key={t.name} y={28}>
                  <TiltCard
                    max={8}
                    className="relative overflow-hidden rounded-3xl bg-card p-7 shadow-sm ring-1 ring-foreground/10 transition-shadow hover:shadow-xl md:p-8"
                  >
                    <Card className="border-0 bg-transparent p-0 shadow-none ring-0">
                      <CardContent className="flex h-full flex-col gap-5 p-0">
                        <Stars />
                        <p className="font-editorial text-xl leading-snug text-foreground/85 md:text-2xl">
                          “{t.quote}”
                        </p>
                        <div className="mt-auto flex items-center gap-3 border-t border-foreground/10 pt-5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={t.avatar}
                            alt={`${t.name} avatar`}
                            width={44}
                            height={44}
                            className="size-11 rounded-full object-cover ring-1 ring-foreground/10"
                          />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-primary">
                              {t.name}
                            </span>
                            <span className="text-xs text-foreground/55">
                              {t.meta}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 pb-20 md:px-6 md:pb-28">
          <div className="mx-auto max-w-2xl">
            <Reveal className="mb-10 text-center md:mb-14">
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.22em] text-accent">
                Questions
              </span>
              <h2 className="text-balance font-display text-4xl leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
                Frequently{" "}
                <span className="font-editorial italic font-normal">
                  asked
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <Accordion className="rounded-3xl bg-card px-6 shadow-sm ring-1 ring-foreground/10 md:px-8">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="py-6 text-base text-primary md:text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 md:text-lg">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA BAND */}
        <section className="relative mx-4 mb-16 overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-primary-foreground md:mx-6 md:mb-20 md:rounded-[3rem] md:px-12 md:py-24">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 size-72 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-20 size-72 rounded-full bg-accent/10 blur-3xl"
          />

          <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Take back your{" "}
              <span className="font-editorial italic font-normal text-accent">
                confidence
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-balance text-primary-foreground/75 md:mt-6 md:text-lg">
              Three minutes today. A doctor on your case tomorrow. Treatment at
              your door this week.
            </p>

            <MagneticCTA
              href="/quiz"
              className="group mt-10 inline-flex h-16 items-center justify-center rounded-2xl bg-background px-10 text-base font-medium text-primary shadow-lg transition-all hover:bg-accent hover:text-primary-foreground hover:shadow-xl md:mt-12 md:h-[68px] md:text-lg"
            >
              <span className="inline-flex items-center">
                Start your free assessment
                <ArrowRight
                  className="ml-2 size-5 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </MagneticCTA>

            <p className="mt-5 text-xs text-primary-foreground/60">
              No charge until prescribed · Cancel anytime
            </p>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
