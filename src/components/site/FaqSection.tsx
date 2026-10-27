import { useId, type ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowUpRight } from "lucide-react";
import { TransitionLink } from "@/components/site/TransitionLink";
import { CtaLink, Eyebrow, Reveal } from "@/components/site/ui";
import type { FaqItem } from "@/lib/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
  label = "Frequently asked questions",
  className,
}: {
  items: readonly FaqItem[];
  label?: string;
  className?: string;
}) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      role="group"
      aria-label={label}
      data-faq-accordion
      className={cn("min-w-0 border-t border-border", className)}
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          data-faq-item={item.id}
          className="min-w-0 border-b border-border transition-colors duration-200 data-[state=open]:bg-background"
        >
          <Accordion.Header asChild>
            <h3 className="m-0">
              <Accordion.Trigger className="group grid min-h-16 w-full grid-cols-[1.6rem_minmax(0,1fr)_1.5rem] items-start gap-3 px-2 py-5 text-left font-display text-base leading-snug font-bold transition-colors hover:text-primary focus-visible:relative focus-visible:z-10 focus-visible:outline-offset-[-2px] sm:grid-cols-[2rem_minmax(0,1fr)_1.5rem] sm:gap-4 sm:px-4 sm:py-6 sm:text-lg">
                <span className="label-mono pt-0.5 leading-relaxed text-primary" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 text-balance">{item.question}</span>
                <span
                  className="relative mt-0.5 flex h-5 w-5 items-center justify-center text-signal"
                  aria-hidden
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span className="absolute h-3 w-px bg-current transition-transform duration-200 group-data-[state=open]:scale-y-0 motion-reduce:transition-none" />
                </span>
              </Accordion.Trigger>
            </h3>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
            <div className="max-w-3xl pr-10 pb-6 pl-[2.85rem] text-base leading-relaxed text-muted-foreground sm:pr-14 sm:pb-7 sm:pl-16">
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export function FaqSection({
  items,
  id,
  eyebrow = "Questions, answered",
  title = "A little clarity before you build.",
  intro = "Practical answers to the questions that often come up before a project begins.",
  showAllLink = true,
  className,
}: {
  items: readonly FaqItem[];
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  showAllLink?: boolean;
  className?: string;
}) {
  const headingId = `${useId()}-faq-heading`;

  if (items.length === 0) return null;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      data-faq-section
      className={cn("border-y border-border bg-paper", className)}
    >
      <div className="site-container section-space grid min-w-0 gap-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.3fr)] lg:gap-14">
        <Reveal className="min-w-0">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            id={headingId}
            className="mt-4 max-w-md text-[clamp(2rem,4.8vw,3.25rem)] leading-[1.1] font-extrabold text-balance sm:mt-5"
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">{intro}</p>
          )}
          {showAllLink && (
            <div className="mt-7">
              <CtaLink to="/faq" variant="outline">
                Browse all FAQs
              </CtaLink>
            </div>
          )}
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Something specific to your project?{" "}
            <TransitionLink
              to="/contact"
              className="inline-flex items-center gap-1 font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-signal"
            >
              Ask our team <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </TransitionLink>
          </p>
        </Reveal>
        <Reveal delay={100} className="min-w-0">
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
