import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Search, X } from "lucide-react";
import { TransitionLink } from "@/components/site/TransitionLink";
import { FaqAccordion } from "@/components/site/FaqSection";
import { CtaLink, Eyebrow, PageHero } from "@/components/site/ui";
import { faqGroups } from "@/lib/faqs";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    seo(
      "Frequently Asked Questions | CREATOV Engineering Consultancy",
      "Find practical answers about planning a home, architectural and structural design, BOQ, building approvals, construction consultancy, renovation and development with CREATOV.",
    ),
  component: FaqPage,
});

function FaqPage() {
  const [query, setQuery] = useState("");
  const search = query.trim().toLocaleLowerCase();
  const groups = useMemo(
    () =>
      faqGroups
        .map((group) => ({
          ...group,
          items: search
            ? group.items.filter((item) =>
                `${group.title} ${item.question} ${item.answer}`
                  .toLocaleLowerCase()
                  .includes(search),
              )
            : group.items,
        }))
        .filter((group) => group.items.length > 0),
    [search],
  );
  const count = groups.reduce((total, group) => total + group.items.length, 0);

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions before you build?"
        titleClassName="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98]"
        intro="From the first conversation to decisions on site, find practical answers about our services and how we work."
      />
      <section className="site-container section-space-compact" aria-label="Find answers">
        <div className="grid gap-5 border-b border-border pb-8 sm:pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-12">
          <div>
            <Eyebrow>Start with your question</Eyebrow>
            <h2 className="mt-3 text-2xl leading-tight font-extrabold sm:text-3xl">
              A clearer next step.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Search a topic or browse the service categories below.
            </p>
          </div>
          <div>
            <label htmlFor="faq-search" className="label-mono block text-muted-foreground">
              Search questions
            </label>
            <div className="relative mt-2">
              <Search
                className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try budget, drawings or renovation"
                autoComplete="off"
                aria-controls="faq-results"
                className="min-h-13 w-full min-w-0 appearance-none border border-border bg-paper py-3 pr-14 pl-11 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary [&::-webkit-search-cancel-button]:appearance-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute top-1/2 right-1 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              )}
            </div>
          </div>
        </div>

        <p
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="mt-5 text-sm text-muted-foreground"
        >
          {search
            ? `${count} ${count === 1 ? "answer" : "answers"} found for “${query.trim()}”.`
            : `${count} answers across planning and our services.`}
        </p>

        <div className="mt-8 grid min-w-0 gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
          <aside className="min-w-0">
            <div className="lg:sticky lg:top-28">
              <p id="faq-topics-label" className="label-mono text-signal">
                Browse topics
              </p>
              <nav aria-labelledby="faq-topics-label" className="mt-4">
                <ul className="flex flex-wrap gap-2 lg:block lg:space-y-1">
                  {groups.map((group) => (
                    <li key={group.id}>
                      <a
                        href={`#faq-${group.id}`}
                        className="inline-flex min-h-11 items-center border border-border px-3 py-2 text-sm leading-snug transition-colors hover:border-primary hover:text-primary lg:flex lg:border-0 lg:px-0"
                      >
                        {group.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Every project has its own context. These answers are a starting point for a
                discussion about yours.
              </p>
            </div>
          </aside>

          <div id="faq-results" className="min-w-0 space-y-12 sm:space-y-16" data-faq-results>
            {groups.length > 0 ? (
              groups.map((group) => (
                <section
                  key={group.id}
                  id={`faq-${group.id}`}
                  aria-labelledby={`faq-heading-${group.id}`}
                  data-faq-category={group.id}
                >
                  <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline sm:gap-6">
                    <h2
                      id={`faq-heading-${group.id}`}
                      className="text-2xl leading-tight font-extrabold sm:text-3xl"
                    >
                      {group.title}
                    </h2>
                    {group.serviceSlug && (
                      <TransitionLink
                        to="/services/$slug"
                        params={{ slug: group.serviceSlug }}
                        className="label-mono inline-flex shrink-0 items-center gap-1.5 text-primary transition-colors hover:text-signal"
                      >
                        View service <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      </TransitionLink>
                    )}
                  </div>
                  <FaqAccordion
                    key={`${group.id}-${search}`}
                    items={group.items}
                    label={`${group.title} questions`}
                  />
                </section>
              ))
            ) : (
              <div className="border border-border bg-paper p-6 sm:p-9" data-faq-no-results>
                <h2 className="text-2xl font-extrabold">No matching questions yet.</h2>
                <p className="mt-3 max-w-lg text-muted-foreground">
                  Try a shorter phrase such as “budget” or “drawings”, or ask our team about your
                  project.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="min-h-11 border border-foreground/70 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
                  >
                    Show all questions
                  </button>
                  <CtaLink to="/contact">Ask our team</CtaLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-paper">
        <div className="site-container section-space-compact flex flex-col justify-between gap-6 sm:flex-row sm:items-center sm:gap-10">
          <div>
            <p className="label-mono text-primary">Let's talk it through</p>
            <h2 className="mt-3 text-2xl leading-tight font-extrabold sm:text-3xl">
              Your project deserves a specific answer.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Share your site, current stage and what you need help with. We can discuss the right
              next steps.
            </p>
          </div>
          <CtaLink to="/contact" className="self-start sm:shrink-0">
            Discuss your project
          </CtaLink>
        </div>
      </section>
    </>
  );
}
