import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/site/PolicyLayout";
import { policies } from "@/lib/policies";
import { policyReferences } from "@/lib/policy-links";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cookie-policy")({
  head: () =>
    seo(
      `${policyReferences.cookies.label} | CREATOV Engineering Consultancy`,
      policyReferences.cookies.description,
    ),
  component: CookiePolicy,
});

function CookiePolicy() {
  return <PolicyLayout policy={policies.cookies} />;
}
