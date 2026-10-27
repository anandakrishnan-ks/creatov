import { policyReferences } from "@/lib/policy-links";
export { policyLinks } from "@/lib/policy-links";

export type PolicyReference = { label: string; to: string };

export type PolicySection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  links?: readonly PolicyReference[];
  table?: {
    caption: string;
    headings: readonly string[];
    rows: readonly (readonly string[])[];
  };
};

export type PolicyDocument = {
  path: string;
  title: string;
  description: string;
  intro: string;
  sections: readonly PolicySection[];
  contactHeading?: string;
  contactDescription?: string;
  emailSubject?: string;
};

export const policyUpdated = "27 October 2026";
export const policyUpdatedISO = "2026-10-27";

export const policies = {
  terms: {
    path: policyReferences.terms.to,
    title: policyReferences.terms.label,
    description: policyReferences.terms.description,
    intro: "Clear terms for exploring our website and starting a conversation about your project.",
    sections: [
      {
        id: "about-these-terms",
        title: "About these terms",
        paragraphs: [
          "This website is provided by CREATOV Engineering Consultancy Pvt. Ltd., an engineering and construction consultancy with offices in Kochi and Kollam, Kerala. These terms apply to your use of this website.",
          "The website introduces our services and approach. It does not provide an online checkout, paid booking service or client account. A separate written engagement sets out the terms of any professional work we agree to undertake.",
        ],
      },
      {
        id: "using-the-website",
        title: "Using the website",
        paragraphs: [
          "You may browse the website, share links and use its information to explore a potential project. Please use the website lawfully and provide accurate information when contacting us.",
        ],
        bullets: [
          "Do not attempt to gain unauthorised access, interfere with the website or introduce harmful software.",
          "Do not impersonate another person or send misleading, abusive or unlawful enquiries.",
          "Do not present website content or illustrative imagery as your own work or as a project endorsement.",
        ],
      },
      {
        id: "enquiries-and-communication",
        title: "Enquiries and communication",
        paragraphs: [
          "The enquiry form checks your entries in your browser, then prepares a message in your own email app. It does not submit an enquiry to a website server. You need to review and send that email yourself; opening the draft alone does not contact CREATOV.",
          "An enquiry, call or message begins a discussion. It does not by itself confirm an appointment, reserve a service, create a professional appointment or commit either party to a fee or timetable.",
        ],
      },
      {
        id: "professional-engagements",
        title: "Professional engagements",
        paragraphs: [
          "A project requires its own review of the site, brief, drawings, budget and relevant requirements. The agreed scope, fees, deliverables, programme and responsibilities should be recorded in a written engagement before professional work begins.",
          "Any construction, approval or procurement decision should rely on the applicable project documents and professional advice. Website descriptions do not replace that process or the requirements of the relevant authority.",
        ],
      },
      {
        id: "content-and-permissions",
        title: "Content and permissions",
        paragraphs: [
          "The CREATOV name and logo, original website materials and third-party content remain subject to their respective ownership and permissions. Please request permission before commercially reproducing our branding, written material or drawings, except where the law permits the use.",
          "Some visuals are generated or conceptual illustrations of our services. Their appearance on this website does not grant permission to use them as evidence of an actual building, team member or completed project.",
        ],
        links: [{ label: "Read the website disclaimer", to: "/disclaimer" }],
      },
      {
        id: "information-and-links",
        title: "Information and external links",
        paragraphs: [
          "We aim to keep the website useful and accurate, but services, information and availability may change. Please confirm information that matters to your project directly with us before relying on it.",
          "Links to maps, messaging services and other websites are provided for convenience. Those services operate under their own terms and privacy practices. Our Privacy Policy explains the current website's contact and data flows.",
        ],
        links: [{ label: "Read the Privacy Policy", to: "/privacy-policy" }],
      },
      {
        id: "updates-and-questions",
        title: "Updates and questions",
        paragraphs: [
          "The date above identifies this version of the website terms. We may update them as the website changes. Changes to these website terms do not replace an existing written project agreement.",
          "These terms do not exclude rights or obligations that cannot be excluded under applicable law. For a question about the website or a proposed engagement, use the contact details below.",
        ],
      },
    ],
  },
  privacy: {
    path: policyReferences.privacy.to,
    title: policyReferences.privacy.label,
    description: policyReferences.privacy.description,
    intro: "How information moves when you browse our website or get in touch with our team.",
    contactHeading: "Have a privacy question?",
    contactDescription:
      "Email us about an enquiry, a correction or a concern about your information. Include enough detail for us to identify the conversation.",
    emailSubject: "Privacy enquiry",
    sections: [
      {
        id: "scope",
        title: "Who this policy covers",
        paragraphs: [
          "This policy describes the current CREATOV Engineering Consultancy Pvt. Ltd. website and the ways it helps you contact our team in Kochi and Kollam. Project work may require additional information and project-specific arrangements.",
          "The website has no account registration, online payment collection or advertising profile feature. Please share only the information needed for an initial project discussion.",
        ],
      },
      {
        id: "enquiry-form",
        title: "What happens to an enquiry form",
        paragraphs: [
          "The form asks for your name, phone number, email address and project type. You may also include a location, approximate budget and message. These entries are checked in your browser.",
          "Selecting Start Your Project prepares an email draft in your own email app using the details you entered. The form does not send those entries to a website submission server or save them in the website's browser storage. You decide whether to send the email. Your browser, email app and email provider may handle the draft under their own settings and policies.",
          "CREATOV receives your enquiry when you send the email or contact us directly. If an email app does not open, you can email or call us using the details below.",
        ],
      },
      {
        id: "contacting-our-team",
        title: "When you contact our team",
        paragraphs: [
          "If you email, call or message us, we receive the contact details and project information you choose to share through that channel. We use the conversation to understand your request, respond, arrange a discussion and consider an appropriate proposal or service.",
          "Please avoid sending identity documents, financial account details or sensitive personal information in an initial enquiry. If project documents are needed, discuss an appropriate way to share them with our team.",
        ],
      },
      {
        id: "technical-information",
        title: "Information needed to load the website",
        paragraphs: [
          "Serving a website involves connection information such as your IP address, the pages or assets requested and browser-related details. Hosting and network services may process operational logs to deliver and protect the website. This policy does not set a retention period for those providers' logs.",
          "The current website does not configure audience analytics, advertising trackers or marketing sign-up forms. It uses limited session storage to restore your position when navigating between pages.",
        ],
        links: [{ label: "See browser storage details", to: "/cookie-policy" }],
      },
      {
        id: "external-services",
        title: "Fonts, maps and messaging services",
        paragraphs: [
          "Our fonts are loaded from Google Fonts, so your browser requests a stylesheet and font files from Google when a page loads. Those requests involve connection and browser information. Google's privacy information explains its handling of information.",
          "Directions links open Google Maps, and the chat link opens WhatsApp. These are links rather than embedded maps or chat widgets. If you choose to use them, the provider's own privacy terms and your account or device settings also apply. Telephone and email links use the apps configured on your device.",
        ],
        links: [
          { label: "Google Privacy Policy", to: "https://policies.google.com/privacy" },
          { label: "WhatsApp Privacy Policy", to: "https://www.whatsapp.com/legal/privacy-policy" },
        ],
      },
      {
        id: "records-and-protection",
        title: "Correspondence and project records",
        paragraphs: [
          "An email or message you send becomes correspondence handled through that communication service. Records needed for a project are separate from this website's form and browser storage. How long a particular record is needed depends on the enquiry, any professional engagement and applicable record-keeping requirements.",
          "For confidential project material, agree a suitable sharing method with our team before sending it by email or messaging.",
        ],
      },
      {
        id: "questions-and-requests",
        title: "Your questions and choices",
        paragraphs: [
          "You can choose not to complete the form, decide not to send the prepared email, clear the website's browser storage or contact us by another channel.",
          "Contact us if you want to correct details you have sent, stop a conversation, or ask us to review information connected with an enquiry. We may need enough information to locate the record and confirm the request. We review requests in light of applicable law and any record-keeping obligations, and may need to retain records that are still required.",
        ],
      },
      {
        id: "policy-updates",
        title: "Changes to this policy",
        paragraphs: [
          "We may update this page when website features or information flows change. The date above shows the latest update. Any future analytics, online submission or account feature would need to be reflected in this policy.",
        ],
      },
    ],
  },
  cookies: {
    path: policyReferences.cookies.to,
    title: policyReferences.cookies.label,
    description: policyReferences.cookies.description,
    intro:
      "A straightforward explanation of browser storage and the services used to load this website.",
    sections: [
      {
        id: "current-use",
        title: "What the current website uses",
        paragraphs: [
          "The current website does not configure advertising, audience-analytics or social-media tracking cookies. It does use a small amount of session storage for navigation. Session storage is a browser storage mechanism separate from cookies.",
          "This page describes features used by this website. Your browser, extensions and any external services you choose to open may have their own storage practices.",
        ],
      },
      {
        id: "navigation-storage",
        title: "Essential navigation storage",
        paragraphs: [
          "Navigation storage lets the website remember where you were on a page when you move back or forward. It contains page-navigation identifiers and scroll positions, not the text entered in your enquiry form.",
        ],
        table: {
          caption: "Browser storage used by site navigation",
          headings: ["Item", "Purpose and duration"],
          rows: [
            [
              "tsr-scroll-restoration-v1_3",
              "Session storage for restoring page scroll positions. It normally lasts for the current browser tab's session and is managed by your browser.",
            ],
          ],
        },
      },
      {
        id: "external-requests",
        title: "Google Fonts and links to other services",
        paragraphs: [
          "The website loads typefaces from Google Fonts. Your browser connects to Google to retrieve the font stylesheet and files. This is an external request made while a page loads, rather than an optional analytics feature controlled by a cookie setting on this site.",
          "Opening a directions link or the WhatsApp chat link takes you to another service. Any cookies or storage used there are governed by that provider's own policies and settings. No Google Maps or WhatsApp widget is embedded in the current pages.",
        ],
        links: [
          {
            label: "Read about external services in our Privacy Policy",
            to: "/privacy-policy#external-services",
          },
        ],
      },
      {
        id: "your-browser-controls",
        title: "Your browser controls",
        paragraphs: [
          "You can clear site data or restrict browser storage through your browser's privacy settings. Clearing or blocking session storage may prevent a previous scroll position from being restored, but it does not send an enquiry or change information you have already emailed to us.",
          "There is no optional tracking category to switch on through this website at present. If optional storage or analytics is introduced later, this explanation and the relevant controls will need to be updated.",
        ],
      },
      {
        id: "storage-questions",
        title: "Questions about storage",
        paragraphs: [
          "Contact us if you have a question about the website's storage or external requests. For information you have sent through email, phone or messaging, please also read our Privacy Policy.",
        ],
        links: [{ label: "Read the Privacy Policy", to: "/privacy-policy" }],
      },
    ],
  },
  accessibility: {
    path: policyReferences.accessibility.to,
    title: policyReferences.accessibility.label,
    description: policyReferences.accessibility.description,
    intro: "We want more people to be able to explore our services and get in touch comfortably.",
    contactHeading: "Report an accessibility barrier",
    contactDescription:
      "Tell us the page address, what you were trying to do and what went wrong. Include your browser, device or assistive technology if helpful, and let us know how you prefer to be contacted.",
    emailSubject: "Website accessibility feedback",
    sections: [
      {
        id: "our-approach",
        title: "Our approach",
        paragraphs: [
          "We aim to make the website readable, navigable and usable across different devices and ways of browsing. WCAG 2.2 is a reference for accessibility improvements. This statement describes current features and ways to get help; it is not a claim of independently verified conformance or certification.",
        ],
        links: [{ label: "About WCAG 2.2", to: "https://www.w3.org/TR/WCAG22/" }],
      },
      {
        id: "features",
        title: "Features to support access",
        paragraphs: ["The current website includes the following features:"],
        bullets: [
          "A Skip to content link, page headings and named navigation areas to help you find your way.",
          "Keyboard-operable links and form controls, visible focus indicators, and a mobile menu that closes with Escape.",
          "Text descriptions for meaningful images, with decorative imagery hidden from assistive technology where appropriate.",
          "Form labels, text validation messages and focus moved to the first field that needs attention.",
          "Layouts that adapt to smaller screens, and animations that respect your device's reduced-motion preference.",
        ],
      },
      {
        id: "preferences",
        title: "Reading and motion preferences",
        paragraphs: [
          "You can use your browser's zoom and text settings to adjust the page. If motion is uncomfortable, turn on Reduce motion or the equivalent accessibility setting on your device. The website uses that preference to reduce transitions, smooth scrolling and parallax effects.",
          "You do not need to interact with a picture, animation or parallax effect to read service information or contact the team.",
        ],
      },
      {
        id: "limitations",
        title: "Current limitations and alternatives",
        paragraphs: [
          "Interactive navigation, project filters and enquiry validation rely on JavaScript. The enquiry form also needs an email app or handler configured on your device to open its draft. It does not send a message automatically.",
          "Google Maps, WhatsApp and your email or phone app are separate services with their own interfaces. If a link or form is difficult to use, you can copy our email address, call the team or ask us for the information in another practical format.",
          "Browser checks and automated checks do not cover every combination of assistive technology and device. Please report a barrier so we can understand the problem and consider an appropriate improvement.",
        ],
      },
      {
        id: "feedback",
        title: "Feedback and assistance",
        paragraphs: [
          "Use the contact details below to tell us about an accessibility problem or request help with service information. You do not need to disclose a disability or share sensitive information to ask for assistance.",
          "We will review the issue with the relevant page or feature in mind. If you need a project discussion by phone or in person, let us know your preferred contact method.",
        ],
      },
    ],
  },
  disclaimer: {
    path: policyReferences.disclaimer.to,
    title: policyReferences.disclaimer.label,
    description: policyReferences.disclaimer.description,
    intro:
      "A little context for the service information, imagery and guidance shared on our website.",
    sections: [
      {
        id: "general-information",
        title: "General information, specific projects",
        paragraphs: [
          "This website introduces the services and approach of CREATOV Engineering Consultancy Pvt. Ltd. Its articles, service descriptions and process explanations are general information, not a site-specific engineering assessment, structural design, approval opinion or construction instruction.",
          "A building or development decision needs a review of the actual site, drawings, requirements and relevant rules by the appropriate professionals. Please contact us to discuss the scope of advice your project needs.",
        ],
      },
      {
        id: "illustrative-imagery",
        title: "Illustrative and generated imagery",
        paragraphs: [
          "Some photographs and visual assets on the website are AI-generated or conceptual illustrations of architecture, services and workflows. They are used to explain the kind of work discussed on a page.",
          "An illustrative scene does not identify an actual CREATOV team member, office, client, completed project or approved design. Images and scale models should not be relied on as construction drawings or evidence of a project's delivery.",
        ],
      },
      {
        id: "costs-and-outcomes",
        title: "Costs, programmes and approvals",
        paragraphs: [
          "Costs, quantities, schedules and design outcomes depend on the project's scope, site conditions, current drawings, materials, procurement and other project-specific factors. An initial discussion or general website statement is not a fixed quotation or guarantee.",
          "Building permission and other statutory decisions remain with the relevant authority. Consultancy or approval support does not guarantee an approval. Project-specific commitments are set out in the applicable written engagement.",
        ],
      },
      {
        id: "external-information",
        title: "External services and changing information",
        paragraphs: [
          "Maps, directions and messaging links are provided for convenience. External services maintain their own information and interfaces. A map result is not a survey, a legal description of land or a confirmation of access rights.",
          "We aim to keep information clear and current, but errors or changes may occur. Confirm important service or project details with the team, and let us know if you find something that needs correcting.",
        ],
      },
      {
        id: "related-terms",
        title: "Related website policies",
        paragraphs: [
          "The Terms & Conditions explain website use and the difference between an enquiry and an agreed professional engagement. Our Privacy Policy explains what happens when you browse or contact us.",
        ],
        links: [
          { label: "Terms & Conditions", to: "/terms-and-conditions" },
          { label: "Privacy Policy", to: "/privacy-policy" },
        ],
      },
    ],
  },
} as const satisfies Record<string, PolicyDocument>;
