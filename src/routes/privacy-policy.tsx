import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/site/PolicyLayout";
import { policies } from "@/lib/policies";
import { policyReferences } from "@/lib/policy-links";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    seo(
      `${policyReferences.privacy.label} | CREATOV Engineering Consultancy`,
      policyReferences.privacy.description,
    ),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return <PolicyLayout policy={policies.privacy} />;
}
