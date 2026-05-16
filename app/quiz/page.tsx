import { MagneticCTA } from "@/components/motion/MagneticCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const options = [
  { value: "rarely", title: "Rarely", description: "only occasionally" },
  { value: "sometimes", title: "Sometimes", description: "a few times a month" },
  { value: "often", title: "Often", description: "most weeks" },
  { value: "always", title: "Always", description: "every time" },
];

export default function QuizPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <Progress value={37.5} aria-label="Quiz progress" />
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/55 md:text-sm">
              Step 3 of 8
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-3 text-balance font-display text-4xl leading-[1.05] tracking-tight text-primary md:text-5xl lg:text-6xl">
              How{" "}
              <span className="font-editorial italic font-normal text-accent">
                often
              </span>{" "}
              do you experience symptoms?
            </h1>
          </Reveal>

          <RadioGroup
            name="frequency"
            aria-label="How often do you experience symptoms?"
            className="mt-8 md:mt-10"
          >
            <Stagger className="grid gap-3 md:gap-4">
              {options.map((opt) => (
                <StaggerItem key={opt.value} y={14}>
                  <label
                    htmlFor={`freq-${opt.value}`}
                    className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-foreground/15 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-md has-[[data-checked]]:-translate-y-0.5 has-[[data-checked]]:border-primary has-[[data-checked]]:bg-primary/[0.04] has-[[data-checked]]:shadow-lg has-[[data-checked]]:shadow-primary/10 has-[[data-checked]]:ring-2 has-[[data-checked]]:ring-primary/20 md:p-6"
                  >
                    <RadioGroupItem
                      id={`freq-${opt.value}`}
                      value={opt.value}
                      className="mt-1 size-5 transition-transform duration-200 data-checked:scale-110"
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-display text-lg font-medium text-primary md:text-xl">
                        {opt.title}
                      </span>
                      <span className="text-sm text-foreground/65 md:text-base">
                        {opt.description}
                      </span>
                    </div>
                  </label>
                </StaggerItem>
              ))}
            </Stagger>
          </RadioGroup>

          <Reveal delay={0.4} className="mt-10 md:mt-12">
            <MagneticCTA
              href="/checkout"
              className={cn(
                buttonVariants({ variant: "default" }),
                "pulse-glow group relative h-14 w-full rounded-2xl px-8 text-base font-medium shadow-md shadow-primary/10 hover:bg-primary/90 hover:shadow-lg md:h-16 md:w-auto md:min-w-[280px] md:text-lg"
              )}
            >
              <span className="relative z-10">Continue</span>
            </MagneticCTA>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
