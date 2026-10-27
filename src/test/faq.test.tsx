import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FaqAccordion } from "@/components/site/FaqSection";
import { getServiceFaqs, homeFaqs } from "@/lib/faqs";
import { serviceDetails } from "@/lib/service-details";

describe("FAQ accordions", () => {
  it("opens, switches and collapses answers through accessible controls", () => {
    render(<FaqAccordion items={homeFaqs.slice(0, 2)} />);
    const [first, second] = screen.getAllByRole("button");
    expect(first).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(first!);
    expect(first).toHaveAttribute("aria-expanded", "true");
    const firstAnswer = document.getElementById(first!.getAttribute("aria-controls")!);
    expect(firstAnswer).toHaveTextContent(homeFaqs[0].answer);
    fireEvent.click(second!);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(second!);
    expect(second).toHaveAttribute("aria-expanded", "false");
  });

  it("moves keyboard focus between questions with arrow, Home and End keys", () => {
    render(<FaqAccordion items={homeFaqs.slice(0, 3)} />);
    const [first, second, last] = screen.getAllByRole("button");
    first!.focus();
    fireEvent.keyDown(first!, { key: "ArrowDown" });
    expect(second).toHaveFocus();
    fireEvent.keyDown(second!, { key: "End" });
    expect(last).toHaveFocus();
    fireEvent.keyDown(last!, { key: "Home" });
    expect(first).toHaveFocus();
  });

  it("provides answers for every published service and none for an unknown service", () => {
    for (const service of serviceDetails) {
      const items = getServiceFaqs(service.slug);
      expect(items.length, `Missing FAQs for ${service.slug}`).toBeGreaterThan(0);
      expect(items.every((item) => item.question.trim() && item.answer.trim())).toBe(true);
    }
    expect(getServiceFaqs("unknown-service")).toEqual([]);
  });
});
