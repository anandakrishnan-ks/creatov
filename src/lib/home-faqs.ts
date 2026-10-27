import type { FaqItem } from "@/lib/faqs";

export const homeFaqs = [
  {
    id: "where-to-start",
    question: "I have a plot, but no plan yet. Where do I start?",
    answer:
      "Start with a conversation about your plot, what you want to build and the budget you have in mind. Share any site information you already have. We can help identify the planning, design and technical inputs your project needs before you move towards construction.",
  },
  {
    id: "individual-services",
    question: "Can I approach CREATOV for just one service?",
    answer:
      "Yes. You can discuss a specific requirement such as architectural drawings, structural engineering, estimation or approval support. We will review the information available and agree on the relevant scope, rather than assuming you need every service.",
  },
  {
    id: "existing-team",
    question: "Can you work with my architect or contractor?",
    answer:
      "We can discuss a consultancy role alongside your existing project team. Clear responsibilities, coordinated drawings and agreed points of contact help everyone work from the same information. The extent of our involvement is set out in the project scope.",
  },
  {
    id: "fees-and-scope",
    question: "How are the scope and consultancy fees decided?",
    answer:
      "They depend on the project type, size, current stage and level of support required. After understanding your brief, the proposed work, deliverables, fees and exclusions should be agreed in writing so you know what is included before work begins.",
  },
  {
    id: "first-discussion",
    question: "What should I bring to our first discussion?",
    answer:
      "Bring your site location, any available survey or property information, existing drawings, a rough budget and a short list of what you need. Reference images can help explain your preferences. If you do not have everything yet, tell us what is available and we can discuss the next steps.",
  },
  {
    id: "office-meeting",
    question: "Can I meet the team in Kochi or Kollam?",
    answer:
      "Our main office is in Koonamthai, Edappally, Kochi, near Metro Pillar No. 366. We also have an office at Thattamala, Kollam. Contact the team to arrange a discussion and confirm the office that suits your project.",
  },
] as const satisfies readonly FaqItem[];
