import type { ImageKey } from "@/lib/images";

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  n: string;
  slug: string;
  t: string;
  d: string;
  img: ImageKey;
  imageAlt: string;
  bannerPosition?: string;
  overview: readonly string[];
  deliverables: readonly string[];
  process: readonly ServiceStep[];
  idealFor: readonly string[];
  outcomes: readonly string[];
};

export const serviceDetails = [
  {
    n: "01",
    slug: "residential-projects",
    t: "Residential Projects",
    d: "From compact homes to luxury residences, we create designs around your lifestyle, site and budget.",
    img: "residential",
    imageAlt:
      "Contemporary Kerala residence with laterite walls, timber screens and tropical landscaping",
    overview: [
      "A successful home begins with a clear understanding of the people who will live in it. We study your plot, family requirements, lifestyle, priorities and budget before developing the design.",
      "CREATOV coordinates planning, architecture, structural inputs, estimation and construction guidance so that decisions made on paper remain practical when work begins on site.",
    ],
    deliverables: [
      "Site-responsive space planning and floor plans",
      "Architectural elevations and design development",
      "Structural and technical coordination",
      "Preliminary quantities and budget guidance",
      "Approval and construction-stage support",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We discuss your family, plot, room requirements, style preferences and investment range.",
      },
      {
        title: "Plan",
        description:
          "We organize spaces around circulation, daylight, ventilation, privacy and future needs.",
      },
      {
        title: "Coordinate",
        description:
          "Architecture, structure, services and cost considerations are reviewed together.",
      },
      {
        title: "Support",
        description:
          "We assist through approvals and provide technical guidance as construction progresses.",
      },
    ],
    idealFor: [
      "New individual homes",
      "Villas and premium residences",
      "Compact homes on challenging plots",
    ],
    outcomes: [
      "A home planned around daily life",
      "Better clarity before construction",
      "Coordinated drawings and technical decisions",
    ],
  },
  {
    n: "02",
    slug: "commercial-projects",
    t: "Commercial Projects",
    d: "Functional and efficient solutions for offices, shops, institutions and other commercial spaces.",
    img: "commercial",
    imageAlt: "Contemporary commercial building with shaded glazing and a precise concrete facade",
    overview: [
      "Commercial buildings need to work for customers, staff, operations and long-term business goals. We balance identity and appearance with efficient planning, circulation and usable floor area.",
      "Our team considers site access, parking, services, structural requirements and regulatory coordination early, helping clients make informed decisions before committing to construction.",
    ],
    deliverables: [
      "Commercial space planning and area studies",
      "Facade and architectural design development",
      "Structural and building-services coordination",
      "Parking, access and circulation planning",
      "Cost planning and execution support",
    ],
    process: [
      {
        title: "Define",
        description:
          "We establish the business use, occupancy, operational needs and project priorities.",
      },
      {
        title: "Evaluate",
        description:
          "We review the site, access, buildable potential, parking and approval considerations.",
      },
      {
        title: "Develop",
        description:
          "Plans and elevations are refined with structure, services and commercial efficiency in mind.",
      },
      {
        title: "Deliver",
        description:
          "Coordinated documentation and technical support help the project move into execution.",
      },
    ],
    idealFor: [
      "Retail and office buildings",
      "Clinics, institutions and hospitality spaces",
      "Mixed-use and rental developments",
    ],
    outcomes: [
      "Efficient use of valuable floor area",
      "Clear movement for users and operations",
      "A professional, business-ready identity",
    ],
  },
  {
    n: "03",
    slug: "architectural-design",
    t: "Architectural Design",
    d: "Architectural planning, floor plans, elevations and detailed design solutions.",
    img: "drawings",
    imageAlt: "Architectural plans, drafting tools and a building model on a sunlit studio table",
    overview: [
      "Architectural design connects your requirements with the realities of the site. We develop spaces that are functional, comfortable and visually coherent rather than treating plans and elevations as separate exercises.",
      "Each proposal is reviewed for circulation, climate response, proportions, material intent and constructability, giving the project a strong foundation for engineering and execution.",
    ],
    deliverables: [
      "Site study and requirement analysis",
      "Concept plans and space-program development",
      "Floor plans, elevations and sections",
      "Material and architectural-detail direction",
      "Coordination inputs for structure and services",
    ],
    process: [
      {
        title: "Brief",
        description:
          "We translate your needs, preferences, budget and site constraints into a clear design brief.",
      },
      {
        title: "Concept",
        description:
          "Alternative planning ideas are tested for space, light, circulation and visual character.",
      },
      {
        title: "Develop",
        description:
          "The selected direction is refined into coordinated plans, elevations and sections.",
      },
      {
        title: "Detail",
        description:
          "Technical inputs and key architectural details prepare the design for execution.",
      },
    ],
    idealFor: [
      "Homes and villas",
      "Commercial and institutional buildings",
      "Renovations, extensions and developments",
    ],
    outcomes: [
      "Spaces tailored to the site and users",
      "A consistent architectural language",
      "Practical drawings for informed execution",
    ],
  },
  {
    n: "04",
    slug: "structural-engineering",
    t: "Structural Engineering",
    d: "Structural planning and engineering solutions focused on safety, durability and efficiency.",
    img: "structural",
    imageAlt:
      "Reinforced concrete columns, beams and steel reinforcement on an orderly construction site",
    overview: [
      "Structural engineering turns architectural intent into a safe and buildable system. We review the building configuration, loading requirements, spans, materials and site conditions before developing the structural approach.",
      "Close coordination with the architectural design helps reduce avoidable clashes, oversized elements and site changes while maintaining the required performance and durability.",
    ],
    deliverables: [
      "Structural scheme and framing coordination",
      "Foundation, column, beam and slab design inputs",
      "Structural drawings and reinforcement details",
      "Design coordination with architectural plans",
      "Technical clarification during construction",
    ],
    process: [
      {
        title: "Review",
        description:
          "We study architectural drawings, site information, spans and loading requirements.",
      },
      {
        title: "Analyse",
        description:
          "The structural system is evaluated for stability, performance and material efficiency.",
      },
      {
        title: "Document",
        description:
          "Coordinated structural drawings communicate dimensions, members and reinforcement.",
      },
      {
        title: "Clarify",
        description:
          "We support the site team with technical responses during critical construction stages.",
      },
    ],
    idealFor: [
      "New residential and commercial buildings",
      "Industrial and larger-span structures",
      "Extensions and structural modifications",
    ],
    outcomes: [
      "A safe and coordinated structural system",
      "Reduced drawing conflicts on site",
      "Efficient use of structural materials",
    ],
  },
  {
    n: "05",
    slug: "estimation-and-boq",
    t: "Estimation & BOQ",
    d: "Detailed quantity calculations, BOQs and project cost estimation to help clients plan their investment.",
    img: "estimationBoq",
    imageAlt: "Measured quantities, a calculator and material samples beside construction drawings",
    overview: [
      "A detailed estimate gives you a clearer view of where project money is expected to go. We measure quantities from available drawings and organize work items into a practical Bill of Quantities.",
      "The resulting information supports budgeting, contractor comparison, procurement planning and cost discussions. Estimates are updated when the design or project scope changes.",
    ],
    deliverables: [
      "Quantity take-offs from coordinated drawings",
      "Item-wise Bill of Quantities",
      "Preliminary and detailed cost estimates",
      "Material quantity summaries",
      "Tender and quotation comparison support",
    ],
    process: [
      {
        title: "Collect",
        description:
          "We review the latest drawings, specifications, scope and available project information.",
      },
      {
        title: "Measure",
        description:
          "Work items and material quantities are calculated systematically from the documents.",
      },
      {
        title: "Price",
        description:
          "Quantities are organized with appropriate rates and assumptions for cost planning.",
      },
      {
        title: "Review",
        description:
          "The estimate is discussed with you and revised when scope or design decisions change.",
      },
    ],
    idealFor: [
      "Owners planning a construction budget",
      "Projects preparing for contractor quotations",
      "Builders tracking quantities and cost",
    ],
    outcomes: [
      "Better visibility of expected costs",
      "A structured basis for contractor comparison",
      "More informed material and scope decisions",
    ],
  },
  {
    n: "06",
    slug: "building-approvals",
    t: "Building Approvals",
    d: "Support and coordination for building permit and approval requirements.",
    img: "buildingApprovals",
    imageAlt: "Building plans and site boundary drawings arranged for a documentation review",
    overview: [
      "Approval requirements can influence setbacks, coverage, access, parking and the information shown in drawings. We consider these constraints during planning instead of treating approvals as a final-stage formality.",
      "CREATOV assists with drawing preparation, documentation coordination and responses connected with the applicable local authority process. Final approval remains subject to authority review and statutory requirements.",
    ],
    deliverables: [
      "Initial review of available property documents",
      "Approval-oriented plans and drawing coordination",
      "Setback, access and basic compliance review",
      "Document checklist and submission support",
      "Coordination for authority comments or revisions",
    ],
    process: [
      {
        title: "Check",
        description:
          "We review available land records, project information and the intended building use.",
      },
      {
        title: "Coordinate",
        description:
          "The design is checked against the key planning parameters relevant to the proposal.",
      },
      {
        title: "Prepare",
        description:
          "Required drawings and supporting information are organized for the submission process.",
      },
      {
        title: "Assist",
        description:
          "We help coordinate clarifications and drawing revisions requested during review.",
      },
    ],
    idealFor: [
      "New residential buildings",
      "Commercial and mixed-use proposals",
      "Extensions, alterations and regularization support",
    ],
    outcomes: [
      "Approval needs considered earlier",
      "Clearer documentation coordination",
      "Fewer avoidable drawing revisions",
    ],
  },
  {
    n: "07",
    slug: "construction-consultancy",
    t: "Construction Consultancy",
    d: "Technical guidance and professional consultancy throughout construction.",
    img: "consultancy",
    bannerPosition: "center 20%",
    imageAlt: "Construction consultants reviewing drawings together on a building site",
    overview: [
      "Construction involves continuous decisions about drawings, materials, workmanship, sequencing and cost. Our consultancy service gives owners a professional technical reference throughout the building process.",
      "The level of involvement can be tailored to the project, from milestone reviews and clarifications to broader coordination support. Our role is to improve visibility and help teams act on coordinated information.",
    ],
    deliverables: [
      "Pre-construction drawing and scope review",
      "Technical clarifications for owners and contractors",
      "Milestone-based site review support",
      "Material and workmanship observations",
      "Coordination of design changes and decisions",
    ],
    process: [
      {
        title: "Set Up",
        description:
          "We define the project scope, available drawings, responsibilities and review milestones.",
      },
      {
        title: "Coordinate",
        description:
          "Technical information is clarified before and during relevant stages of work.",
      },
      {
        title: "Review",
        description:
          "Site progress and key decisions are reviewed against the available project documents.",
      },
      {
        title: "Report",
        description:
          "Observations and required actions are communicated clearly to the responsible parties.",
      },
    ],
    idealFor: [
      "Owners building with an independent contractor",
      "Projects needing periodic technical review",
      "Clients managing work from outside the location",
    ],
    outcomes: [
      "Professional support for site decisions",
      "Earlier identification of coordination issues",
      "Clearer communication among project teams",
    ],
  },
  {
    n: "08",
    slug: "renovation-and-modification",
    t: "Renovation & Modification",
    d: "Practical redesign, extension and renovation solutions for existing buildings.",
    img: "renovation",
    imageAlt:
      "Thoughtfully renovated Kerala interior combining retained character with modern details",
    overview: [
      "Renovation requires a careful balance between what should be retained, repaired, removed or added. We begin by understanding the existing building and the problems the new work must solve.",
      "Design options are developed with attention to structure, services, circulation, light and the realities of working within an occupied or constrained property.",
    ],
    deliverables: [
      "Existing-condition and requirement review",
      "Replanning, extension and facade concepts",
      "Structural and services coordination inputs",
      "Phasing and practical execution considerations",
      "Drawings for the agreed renovation scope",
    ],
    process: [
      {
        title: "Assess",
        description:
          "We document the current building, pain points, desired changes and visible constraints.",
      },
      {
        title: "Prioritize",
        description:
          "Essential repairs, spatial improvements and optional upgrades are organized by need.",
      },
      {
        title: "Redesign",
        description:
          "Practical concepts are developed around the retained structure and available budget.",
      },
      {
        title: "Coordinate",
        description:
          "The selected work is detailed with the structural and service changes it requires.",
      },
    ],
    idealFor: [
      "Older homes needing modernization",
      "Extensions and additional floors",
      "Commercial interior or facade upgrades",
    ],
    outcomes: [
      "Better use of an existing property",
      "A clear scope before demolition begins",
      "Design decisions aligned with current constraints",
    ],
  },
  {
    n: "09",
    slug: "development-projects",
    t: "Development Projects",
    d: "Consultancy support for property development, residential projects and larger construction requirements.",
    img: "developmentPlanning",
    imageAlt:
      "Aerial view of a tropical residential development with tree-lined roads and coordinated homes",
    overview: [
      "Development projects need early decisions about land potential, product mix, phasing, infrastructure and investment. We help owners convert an initial opportunity into a coordinated development direction.",
      "Our approach connects feasibility thinking with planning, design, engineering, cost and execution considerations, allowing key risks and priorities to be discussed before the project advances.",
    ],
    deliverables: [
      "Site potential and development concept studies",
      "Unit mix, area and planning coordination",
      "Architecture and engineering integration",
      "Preliminary cost and phasing inputs",
      "Consultant and execution coordination support",
    ],
    process: [
      {
        title: "Explore",
        description:
          "We review the site, intended market, development goals and available information.",
      },
      {
        title: "Test",
        description:
          "Planning options are compared for area efficiency, access, phasing and project fit.",
      },
      {
        title: "Integrate",
        description:
          "Architecture, engineering, approvals and cost inputs are brought into one direction.",
      },
      {
        title: "Advance",
        description:
          "The chosen concept is developed into coordinated information for the next project stage.",
      },
    ],
    idealFor: [
      "Residential layouts and villa developments",
      "Apartment and mixed-use concepts",
      "Landowners and development investors",
    ],
    outcomes: [
      "A clearer view of development potential",
      "Coordinated early-stage decisions",
      "A practical foundation for project planning",
    ],
  },
] as const satisfies readonly ServiceDetail[];

export type ServiceSlug = (typeof serviceDetails)[number]["slug"];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
