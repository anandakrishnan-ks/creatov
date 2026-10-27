import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/site/PolicyLayout";
import { policies } from "@/lib/policies";
import { policyReferences } from "@/lib/policy-links";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/accessibility")({
  head: () =>
    seo(
      `${policyReferences.accessibility.label} | CREATOV Engineering Consultancy`,
      policyReferences.accessibility.description,
    ),
  component: Accessibility,
});

function Accessibility() {
  return <PolicyLayout policy={policies.accessibility} />;
}
