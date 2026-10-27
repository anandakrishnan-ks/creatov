import { homeFaqs } from "@/lib/home-faqs";
import { serviceDetails, type ServiceSlug } from "@/lib/service-details";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export { homeFaqs } from "@/lib/home-faqs";

export const serviceFaqs = {
  "residential-projects": [
    {
      id: "residential-small-plot",
      question: "Can you plan a home on a small or awkwardly shaped plot?",
      answer:
        "We begin with the plot dimensions, access, orientation and your room requirements. Layout options can then be tested for circulation, daylight, privacy and usable space. What is feasible depends on the site conditions and the planning requirements relevant to your property.",
    },
    {
      id: "residential-budget",
      question: "Can the home be designed around my budget?",
      answer:
        "Your budget is an important part of the brief. We can review the area, specifications and priorities together, then use cost inputs to guide choices. Estimates depend on the agreed scope and market assumptions; they are reviewed as the design becomes more detailed.",
    },
    {
      id: "residential-future-floor",
      question: "What if I want to add another floor in the future?",
      answer:
        "Tell us at the start so future access, services and structural requirements can be considered. Provision for another floor needs engineering review and suitable design from the outset. It cannot be assumed from the appearance or size of the current building.",
    },
    {
      id: "residential-lifestyle",
      question: "Can the plan reflect how my family actually lives?",
      answer:
        "That is where the design discussion starts. We look at daily routines, room relationships, privacy, storage, accessibility and any work-from-home or future family needs. These priorities help shape a home suited to your household and site.",
    },
    {
      id: "residential-support",
      question: "Does residential design include support during construction?",
      answer:
        "Construction-stage clarification and technical guidance can be included in the agreed scope. The frequency of site reviews, drawing deliverables and coordination responsibilities should be confirmed before work starts. Design consultancy does not automatically mean full-time site supervision or a construction contract.",
    },
  ],
  "commercial-projects": [
    {
      id: "commercial-business-use",
      question: "Do you plan the building around my business needs?",
      answer:
        "We discuss the intended use, number of users, customer movement, staff needs and daily operations before developing the layout. Access, circulation, services and usable floor area are considered alongside the building's identity and appearance.",
    },
    {
      id: "commercial-parking",
      question: "When should parking and access be considered?",
      answer:
        "At the beginning. Site access, vehicle movement, pedestrian entry and parking can significantly shape a commercial proposal. Reviewing these alongside the intended use helps avoid developing a layout that later needs major changes.",
    },
    {
      id: "commercial-tenants",
      question: "Can a building be planned for different future tenants?",
      answer:
        "We can explore adaptable layouts, circulation and service arrangements around the uses you expect. Flexibility still depends on the building's structure, site and applicable requirements. Share likely tenant types early so the design can consider them.",
    },
    {
      id: "commercial-team",
      question: "How do architecture, structure and building services fit together?",
      answer:
        "The planning process coordinates space needs with structural layouts and service routes. Reviewing these inputs together helps identify clashes before site work. The consultants involved and the level of coordination are defined for your project.",
    },
    {
      id: "commercial-cost-check",
      question: "Can I review project costs before committing to construction?",
      answer:
        "Preliminary cost planning can help compare options while the proposal develops. More detailed estimates need coordinated drawings and specifications. These inputs support investment decisions, but the final cost depends on the selected scope, quotations and conditions during execution.",
    },
  ],
  "architectural-design": [
    {
      id: "architecture-own-ideas",
      question: "Can I share my own layout ideas or reference images?",
      answer:
        "Yes. Your ideas help explain the spaces and character you want. We review them against the actual site, room relationships, daylight, ventilation and practical construction needs, then develop a design suited to your project rather than copying a reference unchanged.",
    },
    {
      id: "architecture-drawings",
      question: "What is the difference between a concept plan and detailed drawings?",
      answer:
        "A concept plan tests the main arrangement of spaces and design direction. Detailed drawings develop the selected approach with dimensions, sections and technical information for the agreed stage. The drawing package you need depends on whether you are exploring options, seeking approvals or preparing to build.",
    },
    {
      id: "architecture-climate",
      question: "Will the design consider Kerala's climate?",
      answer:
        "We consider orientation, natural light, ventilation, shade and the relationship between indoor and outdoor spaces. These decisions are balanced with privacy, site constraints, material choices and your preferences as the architectural design develops.",
    },
    {
      id: "architecture-revisions",
      question: "Can the design be revised after the first concept?",
      answer:
        "Design development includes discussing your feedback and refining the chosen direction. Review stages and included revisions should be agreed in the scope. A major change to the brief or to an approved stage may require additional work and revised fees.",
    },
    {
      id: "architecture-structure-approvals",
      question: "Are structural design and approval drawings included automatically?",
      answer:
        "The architectural package and any structural, approval or other technical services should be listed separately in the agreed scope. We can coordinate these inputs, but it is useful to confirm exactly which drawings and services are included before proceeding.",
    },
  ],
  "structural-engineering": [
    {
      id: "structural-start",
      question: "When should structural design start?",
      answer:
        "Structural input is most useful while the architectural layout is still being developed. Early discussion of spans, column positions, loading and the structural system helps align the design before drawings are finalized or work begins on site.",
    },
    {
      id: "structural-inputs",
      question: "What information does the structural engineer need?",
      answer:
        "Available architectural drawings, the intended building use, site information and relevant ground investigation details are starting points. The engineer will identify any missing inputs or further investigation needed for the proposal rather than relying on assumptions about the site.",
    },
    {
      id: "structural-existing-building",
      question: "Can you check whether an existing building can support an extension?",
      answer:
        "An extension needs a review of the existing structure, available records and proposed loads. Site assessment, investigation or testing may be needed before a suitable approach can be advised. A building's capacity cannot be confirmed from photographs alone.",
    },
    {
      id: "structural-changes",
      question: "Can column positions or beam sizes be changed on site?",
      answer:
        "Proposed structural changes should be reviewed by the responsible engineer before the work is carried out. Even a small change can affect load paths and connected elements. Revised instructions or drawings may be needed so the site team works from coordinated information.",
    },
    {
      id: "structural-site-clarifications",
      question: "Do you help the contractor understand reinforcement drawings?",
      answer:
        "Technical clarification during relevant construction stages can form part of the service. The scope should confirm how queries, site reviews and any drawing revisions are handled. Contractors still need to follow the issued drawings and agreed construction responsibilities.",
    },
  ],
  "estimation-and-boq": [
    {
      id: "boq-meaning",
      question: "What is a BOQ, and why would I need one?",
      answer:
        "A Bill of Quantities organizes measured construction work into item-wise quantities. It helps you understand the scope, compare contractor quotations on a clearer basis and plan materials. Its usefulness depends on the quality and completeness of the drawings and specifications behind it.",
    },
    {
      id: "boq-drawings",
      question: "Can you prepare an estimate before all drawings are ready?",
      answer:
        "A preliminary estimate can support early budget discussions using the information available. A detailed BOQ needs more complete, coordinated drawings and specifications. Any assumptions or items that cannot yet be measured should be made clear.",
    },
    {
      id: "boq-fixed-price",
      question: "Does an estimate guarantee the final construction cost?",
      answer:
        "An estimate is a cost-planning tool based on stated quantities, specifications, rates and assumptions at a point in time. Design changes, market prices, contractor quotations and site conditions can affect the final cost. Keep the estimate aligned with the latest project information.",
    },
    {
      id: "boq-quotation-comparison",
      question: "Can a BOQ help me compare contractor quotes?",
      answer:
        "Yes. Giving contractors a consistent item-wise scope makes differences easier to review. We can discuss quotation comparison support to identify exclusions, differing specifications or quantities that need clarification before you select a contractor.",
    },
    {
      id: "boq-design-change",
      question: "What happens to the estimate if the design changes?",
      answer:
        "Changed drawings, materials or scope may require the quantities and rates to be reviewed. Keep a clear record of the drawing revision used for each estimate. Updates and their extent should be agreed as part of the estimation service.",
    },
  ],
  "building-approvals": [
    {
      id: "approvals-start",
      question: "Should I think about approvals before the design is finished?",
      answer:
        "Yes. Access, setbacks, coverage, parking and the intended use can influence what can be planned. Considering the relevant approval requirements early helps the design develop around the site's constraints instead of treating documentation as a final step.",
    },
    {
      id: "approvals-documents",
      question: "Which documents should I share for an initial review?",
      answer:
        "Share the property records, survey information, site location and drawings you already have, along with the intended building use. The team can identify the documentation relevant to your proposal. The exact checklist depends on the property and the authority handling the application.",
    },
    {
      id: "approvals-guarantee",
      question: "Can you guarantee a permit or a fixed approval date?",
      answer:
        "We assist with drawing preparation, documentation coordination and responses to review comments. The decision and review schedule remain with the relevant authority. Missing information, requested revisions and project-specific requirements can affect the process.",
    },
    {
      id: "approvals-revisions",
      question: "What if the authority asks for changes?",
      answer:
        "We can help review the comments and coordinate the required drawing or document revisions within the agreed scope. Some comments may affect the proposal itself, so changes should be discussed with you and the relevant consultants before resubmission.",
    },
    {
      id: "approvals-extension",
      question: "Can you help with an existing building or a proposed extension?",
      answer:
        "We can discuss the available records, current building and proposed changes to understand what support is needed. An existing building may need additional assessment or documentation. The available approval route and outcome depend on the property's circumstances and authority review.",
    },
  ],
  "construction-consultancy": [
    {
      id: "consultancy-contractor",
      question: "How is a construction consultant different from my contractor?",
      answer:
        "The contractor carries out the construction work under their agreement. A consultant provides the technical review, clarification and coordination defined in a separate scope. Clear responsibilities help you understand who handles execution, decisions, inspections and day-to-day site management.",
    },
    {
      id: "consultancy-frequency",
      question: "Will someone from CREATOV be on site every day?",
      answer:
        "The level of site involvement is agreed for each project. It may include milestone-based reviews and technical clarifications rather than daily supervision. Review frequency, reporting and any additional attendance should be confirmed in writing before the service begins.",
    },
    {
      id: "consultancy-started-project",
      question: "Can you get involved after construction has already started?",
      answer:
        "We can review the current stage, available drawings and the concerns you want to address, then discuss a suitable role. Work already completed may need separate assessment. The first step is establishing what information is reliable and which decisions are still open.",
    },
    {
      id: "consultancy-away",
      question: "Can you support me if I live away from the project?",
      answer:
        "A defined review and reporting arrangement can help you understand site progress and technical decisions from a distance. We can discuss communication channels, review milestones and responsibilities with your local team. The arrangement should match the level of support your project needs.",
    },
    {
      id: "consultancy-quality",
      question: "What kind of issues can a site review help identify?",
      answer:
        "A review may identify drawing discrepancies, coordination questions and visible material or workmanship concerns within the agreed scope. Observations are communicated so the responsible parties can take action. Periodic reviews do not replace the contractor's execution duties or continuous site supervision.",
    },
  ],
  "renovation-and-modification": [
    {
      id: "renovation-feasibility",
      question: "How do I know whether renovation is practical for my building?",
      answer:
        "We start with the existing condition, the changes you need and the information available about the structure and services. This helps separate useful improvements from work that may be difficult or costly. Further investigation may be needed before the scope can be finalized.",
    },
    {
      id: "renovation-remove-wall",
      question: "Can I remove a wall or add another room?",
      answer:
        "The existing structure and service routes need to be understood before demolition or an extension is planned. A wall may have a structural role that is not obvious from its finish. Have the proposed change reviewed before any work is carried out.",
    },
    {
      id: "renovation-retain-character",
      question: "Can the renovation keep the character of the original building?",
      answer:
        "Yes, retaining useful elements can be part of the brief. We can explore how existing spaces, materials and features work with improved circulation, daylight or new requirements. Decisions about what to retain, repair or replace depend on condition and the agreed priorities.",
    },
    {
      id: "renovation-occupied",
      question: "Can renovation be planned while the property is still occupied?",
      answer:
        "Phasing can be explored around access, noise, dust, services and the type of work involved. Some stages may make continued occupation impractical. The design and execution team should agree a workable sequence and any temporary arrangements before work begins.",
    },
    {
      id: "renovation-unexpected-work",
      question: "What if hidden problems are found after work starts?",
      answer:
        "Opening up an existing building can reveal conditions that were not visible during the initial review. Those findings may require further assessment, revised details or a change in scope and budget. Agree how unexpected work will be reviewed and authorized before committing to it.",
    },
  ],
  "development-projects": [
    {
      id: "development-land-potential",
      question: "I own land. Can you help me understand its development potential?",
      answer:
        "We can review the site, access, intended users and your goals, then explore suitable planning directions. Early studies bring area, infrastructure, approval and cost considerations together. They help inform a decision rather than guarantee that a particular development is feasible.",
    },
    {
      id: "development-options",
      question: "Can I compare different layouts or development options?",
      answer:
        "Concept studies can test alternatives for unit mix, usable area, circulation, open space and phasing. The options to be studied and the depth of comparison should be agreed in advance so the work answers the investment and planning questions that matter to you.",
    },
    {
      id: "development-phases",
      question: "Can a larger development be planned in phases?",
      answer:
        "Phasing can be considered alongside access, shared infrastructure, construction sequencing and the overall design. Early coordination helps identify how one phase might affect the next. The suitable approach depends on the site, project goals and approval requirements.",
    },
    {
      id: "development-existing-consultants",
      question: "Can you coordinate with consultants already appointed to the project?",
      answer:
        "We can discuss a coordination role alongside your existing architects, engineers and other advisers. Agreeing responsibilities, drawing exchanges and review milestones helps the team work towards one development direction. The consultancy scope should make those interfaces clear.",
    },
    {
      id: "development-investment",
      question: "Will an early study confirm sales returns or a final project cost?",
      answer:
        "Early studies support planning with the information and assumptions available at that stage. They do not guarantee market demand, returns, approvals or final execution cost. More detailed design, cost inputs and appropriate commercial advice may be needed before an investment decision.",
    },
  ],
} as const satisfies Record<ServiceSlug, readonly FaqItem[]>;

export type FaqGroup = {
  id: string;
  title: string;
  items: readonly FaqItem[];
  serviceSlug?: ServiceSlug;
};

export const faqGroups: readonly FaqGroup[] = [
  { id: "getting-started", title: "Getting started", items: homeFaqs },
  ...serviceDetails.map((service) => ({
    id: service.slug,
    title: service.t,
    serviceSlug: service.slug,
    items: serviceFaqs[service.slug],
  })),
];

/** Also accepts route data whose slug is typed as a general string. */
export function getServiceFaqs(slug: string): readonly FaqItem[] {
  return Object.hasOwn(serviceFaqs, slug) ? serviceFaqs[slug as ServiceSlug] : [];
}
