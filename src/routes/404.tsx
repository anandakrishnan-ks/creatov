import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/site/NotFoundPage";
import { notFoundSeo } from "@/lib/seo";

export const Route = createFileRoute("/404")({
  head: notFoundSeo,
  component: NotFoundPage,
});
