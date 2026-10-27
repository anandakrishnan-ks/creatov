/** Lightweight navigation and head metadata; policy prose loads on its own routes. */
export const policyReferences = {
  terms: {
    to: "/terms-and-conditions",
    label: "Terms & Conditions",
    description:
      "Terms for using the CREATOV Engineering Consultancy website and making an enquiry about our services.",
  },
  privacy: {
    to: "/privacy-policy",
    label: "Privacy Policy",
    description:
      "How the CREATOV website handles enquiry details, email drafts, browser storage and external services.",
  },
  cookies: {
    to: "/cookie-policy",
    label: "Cookie Policy",
    description:
      "Cookies, essential session storage and external font requests on the current CREATOV website.",
  },
  accessibility: {
    to: "/accessibility",
    label: "Accessibility Statement",
    description:
      "Accessibility features on the CREATOV website, current limitations and how to report a barrier or request help.",
  },
  disclaimer: {
    to: "/disclaimer",
    label: "Website Disclaimer",
    description:
      "How to interpret CREATOV's general website information, illustrative images and service descriptions.",
  },
} as const;

export const policyLinks = Object.values(policyReferences);
