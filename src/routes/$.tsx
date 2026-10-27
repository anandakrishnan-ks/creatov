import { createFileRoute, notFound } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/site/NotFoundPage";
import { notFoundSeo } from "@/lib/seo";

export const Route = createFileRoute("/$")({
  loader: () => {
    throw notFound();
  },
  head: notFoundSeo,
  notFoundComponent: NotFoundPage,
});
