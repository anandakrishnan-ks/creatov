import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { serviceDetails } from "@/lib/service-details";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches every service detail URL", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    for (const service of serviceDetails) {
      const matches = router.matchRoutes(`/services/${service.slug}`);

      expect(matches.at(-1)?.routeId).toBe("/services/$slug");
      expect(matches.at(-1)?.params).toMatchObject({ slug: service.slug });
    }
  });

  it("matches the FAQ, policy and essential pages", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const path of [
      "/faq",
      "/terms-and-conditions",
      "/privacy-policy",
      "/cookie-policy",
      "/accessibility",
      "/disclaimer",
      "/sitemap",
      "/404",
    ]) {
      expect(router.matchRoutes(path).at(-1)?.routeId).toBe(path);
    }
  });

  it("routes unrecognized addresses through the dedicated not-found handler", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const path of ["/a-page-that-does-not-exist", "/about/missing-page"])
      expect(router.matchRoutes(path).at(-1)?.routeId).toBe("/$");
  });
});
