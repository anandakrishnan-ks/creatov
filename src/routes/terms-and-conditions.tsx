import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/site/PolicyLayout";
import { policies } from "@/lib/policies";
import { policyReferences } from "@/lib/policy-links";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    seo(
      `${policyReferences.terms.label} | CREATOV Engineering Consultancy`,
      policyReferences.terms.description,
    ),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return <PolicyLayout policy={policies.terms} />;
}
