import { render, screen } from "@testing-library/react";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { Route as AboutRoute } from "@/routes/about";

describe("About page", () => {
  it("renders the Managing Director section with Mr. Riyas Basheer, credentials, and award details", async () => {
    const rootRoute = createRootRoute();
    const about = createRoute({
      getParentRoute: () => rootRoute,
      path: "/about",
      component: AboutRoute.options.component,
    });
    const routeTree = rootRoute.addChildren([about]);
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/about"] }),
    });

    await router.load();
    render(<RouterProvider router={router} />);

    // Verify Managing Director heading and name
    expect(screen.getByRole("heading", { name: /Driven by Technical Rigor/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Mr\. Riyas Basheer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Managing Director/i).length).toBeGreaterThan(0);

    // Verify the requested content is present
    expect(
      screen.getByText(
        /Mr\. Riyas Basheer is a Structural Engineer with over 12 years of professional experience/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /In addition to his engineering career, he established and managed a construction consultancy in Oman/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Best Consultancy Award in the South Region of Oman \(Jalan Bani Bu Ali\)/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /With his technical expertise, entrepreneurial experience, and visionary leadership/i,
      ),
    ).toBeInTheDocument();

    // Verify both photos are rendered with accurate alt texts
    const mdPhoto = screen.getByAltText(
      /Mr\. Riyas Basheer, Managing Director of CREATOV Engineering Consultancy/i,
    );
    expect(mdPhoto).toBeInTheDocument();

    const awardPhoto = screen.getByAltText(
      /Mr\. Riyas Basheer receiving the Best Consultancy Award in the South Region of Oman/i,
    );
    expect(awardPhoto).toBeInTheDocument();
  });
});
