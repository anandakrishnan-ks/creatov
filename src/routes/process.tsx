import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { tagline } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/site/ui";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";

export const Route = createFileRoute("/process")({
  head: () => seo("Our Process | From Concept to Completion — CREATOV", "Consult, plan, design, estimate, approve and execute — one clear construction journey with CREATOV Engineering Consultancy."),
  component: Process,
});

function Process() {
  return (
    <>
      <PageHero eyebrow="Our Process" image={images.construction} title={tagline} intro="Your Project. One Clear Journey." />
      <section className="relative bg-ink text-ink-foreground">
        <div className="mx-auto w-full max-w-6xl px-[clamp(1rem,4vw,2.5rem)] py-[clamp(4rem,8vw,8rem)]">
          <ProcessTimeline />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
