import type { ImageKey } from "@/lib/images";

export const insights = [
  {
    c: "Planning",
    t: "Before You Build: 10 Things to Know",
    img: "insightPlanning",
    alt: "Concept floor plan with numbered planning checkpoints",
  },
  {
    c: "Cost",
    t: "How Much Does It Cost to Build a House?",
    img: "insightCost",
    alt: "Residential elevation beside a project cost breakdown",
  },
  {
    c: "Estimation",
    t: "Why BOQ Is Important Before Construction",
    img: "insightBoq",
    alt: "Itemized quantities for concrete, reinforcement, masonry and finishes",
  },
  {
    c: "Design",
    t: "Architectural Design vs Structural Design",
    img: "insightDesign",
    alt: "Architectural floor plan coordinated with a structural frame",
  },
  {
    c: "Cost",
    t: "How to Plan Your Construction Budget",
    img: "insightBudget",
    alt: "Budget allocation diagram for structure, services, finishes and contingency",
  },
  {
    c: "Approvals",
    t: "Building Approval Process",
    img: "insightApprovals",
    alt: "Coordinated drawings and documents with a review checkmark",
  },
  {
    c: "Visualization",
    t: "How 3D Visualization Helps Before Construction",
    img: "insightVisualization",
    alt: "Exploded axonometric drawing connecting a floor plan with building volume",
  },
  {
    c: "Execution",
    t: "Common Construction Mistakes to Avoid",
    img: "insightExecution",
    alt: "Building frame with a highlighted coordination checkpoint",
  },
] as const satisfies readonly { c: string; t: string; img: ImageKey; alt: string }[];
