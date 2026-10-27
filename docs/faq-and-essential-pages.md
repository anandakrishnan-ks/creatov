# FAQs and essential website pages

Implemented on 27 October 2026 within the existing CREATOV design system. The navy, signal red, paper, Archivo headings and DM Sans body text are retained. No application dependencies were added.

## FAQ coverage

- Home includes six practical getting-started questions before the Contact section.
- All nine service detail pages include five questions tailored to that service: 45 service-specific answers.
- `/faq` brings the same 51 questions together with topic links, question/answer search, a live result count, clear/reset controls and a useful empty state.
- The shared Radix accordion opens one answer at a time, allows all answers to close, exposes expanded/control relationships, supports keyboard navigation and respects reduced motion. It uses numbered rules and a red plus/minus treatment consistent with the website.
- Home FAQ data is kept separate from the full service collection. The dedicated FAQ page and service collection load through route splitting.

## Added pages

| Address                 | Purpose                                                                         |
| ----------------------- | ------------------------------------------------------------------------------- |
| `/faq`                  | Searchable general and service FAQs                                             |
| `/terms-and-conditions` | Website use and the distinction between enquiries and a professional engagement |
| `/privacy-policy`       | Actual form, email, browser storage and external service behavior               |
| `/cookie-policy`        | Current navigation session storage, external font requests and browser controls |
| `/accessibility`        | Implemented features, limitations and a barrier-reporting contact route         |
| `/disclaimer`           | General website information, generated imagery and project-specific advice      |
| `/sitemap`              | Human-readable directory of the main pages, services, FAQs and policies         |
| `/404`                  | Designed missing-page recovery screen                                           |

The public catch-all route also displays the missing-page screen for unknown addresses. Unknown service slugs use the same recovery screen. Missing pages carry `noindex, follow`; navigating back to a valid page removes that metadata. Home, Services, FAQs and Contact recovery links are provided.

The existing static SPA hosting configuration continues to serve its application shell with HTTP 200 for unknown paths. This work supplies the client-side 404 screen and indexing metadata; it does not change hosting response rules. The site map is an HTML directory, rather than an XML sitemap containing an unconfirmed production domain.

## Legal content and navigation

The five policy pages use a readable shared layout with a table of contents, update date, related policies and current office/contact data. Privacy is also linked next to the enquiry form. The Footer links FAQs under Navigate and includes a compact row for policies and the site map.

Policy navigation and metadata are kept in a lightweight module; full legal text loads on the policy routes. These pages reflect the actual email-draft enquiry flow and do not invent a checkout, account system, analytics provider, response deadline, refund rule or company certification. Official sources and operational assumptions are recorded in [legal content notes](legal-content-notes.md).

## Verification

- Production build, TypeScript, scoped ESLint and `git diff --check` pass.
- Ten Vitest tests pass, covering existing routing/loading behavior, the new routes, unknown-route matching, FAQ toggle/focus behavior and service FAQ coverage.
- Browser checks cover all new pages at 320, 390, 768, 1280 and 1440 pixels, including policy anchors, Footer links and the narrow cookie table.
- Home and service accordion checks cover pointer, Enter, Space, Arrow keys, Home/End, single-open/collapse behavior and ARIA relationships. Normal and reduced-motion behavior were checked.
- Search, no-results, reset, all nine service groups, cross-policy links and actual Footer FAQ navigation pass.
- Unknown-page and recovery checks cover four missing-page paths at all five widths. Titles, `noindex` and valid-page recovery are correct.
- Accessibility scans and targeted contrast reruns pass. Screenshots were reviewed for the Home/service FAQ sections, FAQ page, policies, Footer and 404 page.

Local development: <http://127.0.0.1:5173/>. Production preview: <http://127.0.0.1:5180/>. Changes remain in the local working tree.
