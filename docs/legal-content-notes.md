# Legal and essential page content notes

Content reviewed against the repository on 27 October 2026 (Asia/Kolkata). The website pages are written for the current public marketing site, not an unimplemented client portal or ecommerce service. They do not claim a compliance certification or replace project-specific written engagements.

## Pages and shared implementation

- `/terms-and-conditions`: website use, enquiries, written professional engagements, content permissions and external links.
- `/privacy-policy`: actual form/email flow, direct correspondence, delivery information, fonts, links, storage and contact requests.
- `/cookie-policy`: current storage inventory and practical browser controls.
- `/accessibility`: implemented features, known dependencies, alternatives and a feedback route.
- `/disclaimer`: general information, AI-generated/conceptual imagery, project-specific advice and approvals.

`src/lib/policies.ts` centralizes content and links. `src/components/site/PolicyLayout.tsx` supplies the breadcrumb header, table of contents, readable content column, policy links and a contact panel. Company, telephone, email and office addresses come from `src/lib/site.ts`; no separate legal-page address copies are maintained. The visible update date is 27 October 2026.

## Repository facts checked

- `src/components/site/ContactForm.tsx` validates locally, creates a `mailto:` draft, and relies on the visitor's own email app and decision to send. There is no form POST or enquiry storage endpoint in the current application. Required fields are name, phone, email and project type; location, budget and message are optional. Browser/email-provider behavior may still retain a draft or form entries under the visitor's settings.
- `src/router.tsx` enables scroll restoration. The installed `@tanstack/router-core/src/scroll-restoration.ts` stores navigation identifiers and scroll positions in session storage under `tsr-scroll-restoration-v1_3`; it persists the cache on `pagehide`. This is not an enquiry store.
- The public site has no configured analytics, advertising tracker, account, online checkout or payment collection. The unused generic sidebar component contains a cookie setter, but no public page imports or renders that component. Its implementation is therefore not represented as an active site cookie.
- `index.html` loads Google Fonts using external stylesheet/font requests. The official font API documentation describes the stylesheet request and subsequent font-file download. [Google Fonts technical documentation](https://developers.google.com/fonts/docs/technical_considerations)
- `src/routes/__root.tsx` links to WhatsApp. Office directions link out to Google Maps. The current public pages do not embed a Maps or WhatsApp widget. External providers govern their own services and settings. [Google Privacy Policy](https://policies.google.com/privacy), [WhatsApp Privacy Policy](https://www.whatsapp.com/legal/privacy-policy)
- Source includes a skip link, labelled menus and form controls, validation error text, focus handling for the mobile menu and invalid fields, image alternatives and reduced-motion behavior. These implementation features are described without turning automated/browser checks into a claim of full assistive-technology compatibility.
- The current service/process/banner set includes generated photographic scenes. `docs/generated-process-images.md` and the corresponding image provenance files describe their origin. The disclaimer avoids describing illustrative people, offices or structures as actual CREATOV staff or completed projects.

## Official legal and accessibility grounding

India's Digital Personal Data Protection framework has phased commencement. The official G.S.R. 843(E) notification schedules core processing duties and the individual-rights sections for eighteen months after the November 2025 publication, rather than bringing all provisions into effect immediately. Accordingly, the pages do not assert that all DPDP duties or individual-rights procedures are already operative on the review date, or promise an invented statutory response deadline. [MeitY official commencement notification, G.S.R. 843(E)](https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf), [MeitY official DPDP rules and notification library](https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025)

The accessibility statement follows W3C's recommendation to explain practical features, limitations and ways to seek help in plain language. WCAG 2.2 is a reference for improvements; the page makes no independently verified conformance-level or certification claim. [W3C guidance on accessibility statements](https://www.w3.org/WAI/planning/statements/), [W3C understanding of conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance)

## Deliberate limits and maintenance assumptions

- No company registration number, named grievance/data-protection officer, exclusive court jurisdiction, dispute-arbitration clause, payment/refund rule, fixed retention period, confidentiality guarantee or service-level deadline was invented.
- Hosting logs, internal email access, record retention, offline workflows and provider agreements cannot be determined from the frontend repository. The policy describes delivery information and correspondence at an appropriate general level without claiming a verified provider log schedule or legal certification.
- This is website-use and privacy information grounded in the visible implementation. Broader statutory applicability, actual office record practices and contractual wording require the company's operational facts; no statement implies those have been independently audited.
- Revisit these pages when adding server-side enquiry submission, analytics, advertising, accounts, payment features, additional browser storage, embedded third-party services or a document portal. A completed-project portfolio or changed imagery should retain clear labels about what is an actual project.
- Policies remain accessible without optional animations and contain no added tracking or consent-management dependency.
