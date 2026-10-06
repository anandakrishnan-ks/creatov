import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { CtaBand, PageHero } from "@/components/site/ui";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";

export const Route = createFileRoute("/process")({
  head: () => seo("Our Process | From Concept to Completion — CREATOV", "Consult, plan, design, estimate, approve and execute — one clear construction journey with CREATOV Engineering Consultancy."),
  component: Process,
});

function Process() {
  return (
    <>
      <PageHero eyebrow="Our Process" image={images.construction} title="From Concept to Completion." intro="Your Project. One Clear Journey." />
      <section className="relative bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <ProcessTimeline />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
