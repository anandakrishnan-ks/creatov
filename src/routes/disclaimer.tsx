import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/site/PolicyLayout";
import { policies } from "@/lib/policies";
import { policyReferences } from "@/lib/policy-links";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/disclaimer")({
  head: () =>
    seo(
      `${policyReferences.disclaimer.label} | CREATOV Engineering Consultancy`,
      policyReferences.disclaimer.description,
    ),
  component: Disclaimer,
});

function Disclaimer() {
  return <PolicyLayout policy={policies.disclaimer} />;
}
