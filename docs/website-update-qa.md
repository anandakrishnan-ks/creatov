# Website update verification

Verified 26–27 October 2026 against the existing React, Vite and TanStack Router application. The navy, red, paper and blueprint design language, routes, service content, project filtering, email enquiry flow and WhatsApp link are retained. No application dependencies were added or changed.

## Changes

- Shared official Kochi and Kollam office information across Home, Contact and Footer; Kochi is marked as the main office. Structured business metadata includes both offices.
- Dedicated Home Contact section with a compact navy/paper layout, grouped contact details, stacked office rows, a project enquiry CTA and address-specific directions links.
- DM Sans body typography, retained Archivo headings, the original banner title sizes and a distinct “From concept to completion” tagline.
- Compact brown/red brick wall loader: one second initially, 760 milliseconds for route transitions. Navigation begins immediately; reduced motion skips the loader.
- Fixed image reveals that previously remained fully clipped, shortened reveal delays and improved process scroll updates.
- Restrained parallax on selected photos and blueprint backgrounds, staggered service reveals and a thin header scroll indicator. One shared passive scroll listener updates transforms through animation frames; mobile travel is reduced and reduced motion restores static image frames.
- Tighter section and card spacing across the site, including the Home Contact section, Contact page and Footer.
- Accessible mobile menu focus handling, skip link, form labels and validation feedback.
- Route-specific titles and descriptions now render without duplicate metadata. Route components are split into separate bundles and SVG images remain independently cacheable.
- Cinematic service and process photography, dedicated wide page banners, accessible breadcrumbs and configurable desktop/mobile image focal points. Production WebP delivery reduces the generated image set by 57.3% compared with its JPEG intermediates.
- [Image organization, reuse exceptions and generation prompt](image-audit.md). The dedicated generated Home About asset is [about-studio.jpg](../src/assets/images/home/about-studio.jpg).

## Checks

| Check                                                  | Result                                                                                                                                                          |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run build`                                        | Passed                                                                                                                                                          |
| `npx tsc --noEmit`                                     | Passed                                                                                                                                                          |
| `npm test`                                             | Five tests passed, including routing, immediate navigation and reduced-motion loader behavior                                                                   |
| ESLint on changed TypeScript files and site components | Passed with no errors or warnings                                                                                                                               |
| `git diff --check`                                     | Passed                                                                                                                                                          |
| Chrome viewport checks                                 | All 17 routes at 320, 360, 390, 768, 1280 and 1440 pixels; 102 combinations passed                                                                              |
| Image audit                                            | 55 distinct image files, including 22 new cinematic WebPs; no duplicate bytes; all 22 retained SVGs parse correctly                                             |
| Desktop/mobile screenshots                             | 18 page screenshots reviewed; no broken images or horizontal overflow                                                                                           |
| Automated accessibility                                | Home, About, Contact, Process and Insights at desktop/mobile widths; all ten axe WCAG A/AA scans have no reported violations                                    |
| Interaction checks                                     | Mobile menu focus trap, Escape/return focus, scroll locking, form invalid-field focus, smooth contact anchor, client navigation and browser back/forward passed |
| Reduced motion                                         | No loader or running animations; content remains visible and scrolling uses the native immediate behavior                                                       |
| SEO                                                    | One title, description and H1 per route; office JSON-LD parses successfully                                                                                     |

Browser checks used desktop Chrome with viewport emulation. The enquiry form continues to prepare an email in the visitor's email application; no enquiry was sent during verification. The existing curated portfolio and forthcoming article content remain as supplied.

## 27 October refinement checks

- Original Home banner scale restored: `clamp(3rem, 10vw, 9.5rem)` with its original line height and tracking. Other page banners use the original `clamp(2.5rem, 8vw, 6rem)`.
- All 17 routes checked at 320, 390, 768, 1280 and 1440 pixels: 85 combinations without overflow, rendering errors or duplicate metadata.
- Six axe scans across Home, About and Contact at desktop/mobile sizes reported no violations.
- Parallax frames checked at two scroll positions; image layers cover their frames throughout. Reduced motion produces no moving image transforms or running animations.
- The header scroll indicator matches document scroll progress. Full office addresses, main-office emphasis and directions remain available on both layouts.

## Cinematic photography verification

- Delivered 22 independently generated photographs: nine service images, six process images and seven dedicated page banners. Exact prompts, saved paths and generation provenance are linked from the [image audit](image-audit.md).
- Production WebPs total 4,884,828 bytes, compared with 11,442,741 bytes for the JPEG intermediates: a 57.3% reduction. Original PNGs remain outside the project; duplicate intermediate JPEGs were removed.
- All seven main banners are 1920 × 800 pixels. Service photographs are 1536 × 1024; process photographs are 1400 × 933. Image frames remain covered at the top of each page and while scrolling.
- All 17 routes passed checks at 320, 390, 768, 1280 and 1440 pixels. Desktop and mobile page reviews covered 34 route/viewport combinations, including lazy-loaded service and process photos.
- Breadcrumbs share the heading container, wrap on mobile and mark only the current page. The existing main banner font sizes are preserved; Contact retains its smaller original heading scale and line height.
- Twenty desktop/mobile axe scans were completed. Contrast issues in decorative benefit numbers and service step labels were corrected; affected scans were repeated successfully. Photo-backed text contrast was also reviewed visually.
- Every service keeps its own photograph across its banner, overview and related-service links as an intentional visual identity. No unrelated section borrows that photograph.

Local development preview: <http://127.0.0.1:5173/>. Production preview: <http://127.0.0.1:5180/>. The update remains in the local working tree.
