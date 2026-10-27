# CREATOV image audit

The website retains its navy, signal red, brass and paper palette. Services, the six process stages and inner-page banners now use distinct cinematic, photorealistic images created for this update. The images illustrate the consultancy's subjects; they do not document actual CREATOV staff, offices or completed client work.

## Current placements

| Folder                                  | Assets and placement                                                                                                                                                         |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/assets/images/brand/`              | One shared CREATOV logo for navigation and Footer. The original duplicate logo was consolidated.                                                                             |
| `src/assets/images/home/`               | Residence at dusk: Home hero. Site review: Home planning section. Dedicated generated studio still life: Home About section.                                                 |
| `src/assets/images/about/`              | Existing courtyard interior: About background section. The original architectural model image remains available as source material.                                          |
| `src/assets/images/services/cinematic/` | Nine unique WebP service photographs: residential, commercial, architectural design, structural engineering, estimation, approvals, consultancy, renovation and development. |
| `src/assets/images/process/cinematic/`  | Six unique WebP process photographs: consult, plan, design, estimate, approve and execute.                                                                                   |
| `src/assets/images/banners/cinematic/`  | Seven independent ultra-wide WebP banners for About, Services, Projects, Our Process, Why CREATOV, Insights and Contact. Each is 1920 × 800 pixels.                          |
| `src/assets/images/insights/`           | Eight original topic-specific technical SVG diagrams remain on the editorial cards.                                                                                          |

Earlier photos and vector studies remain in the source folders for reference. They are not substituted for the new cinematic images in the active Services, Process or page banner placements. No duplicate JPEG/WebP copies of the newly generated deliverables are kept in the project.

The central registry is `src/lib/images.ts`. Service image descriptions live beside their content in `src/lib/service-details.ts`; process descriptions live in `ProcessTimeline.tsx`.

## Intentional reuse

- The brand logo is shared by navigation and Footer.
- Each service has one canonical photograph. Its listing card, detail-page banner, detail overview and related-service navigation share that identity intentionally. Other service subjects and process stages use independent scenes.
- Main-page banners each use a separate photograph; none borrows a Home or process photograph.
- The Projects page retains its curated-portfolio message. No generated scene was added as a completed CREATOV project or fabricated portfolio entry.

## Banner alignment and crops

- All inner-page banners use the same `PageHero` container, padding, breadcrumb navigation, content alignment and clipping frame.
- Images fill the complete frame with `object-fit: cover`. Banner heights follow their actual content, avoiding empty spacer areas or clipped headings.
- Desktop and mobile focal points can be set separately, preserving relevant architecture within narrow mobile crops.
- The directional navy overlay protects heading contrast while keeping the photograph visible. The original banner font sizes are retained.
- Parallax uses bounded transform overscan; reduced motion restores a static covered frame.

## Provenance and exact prompts

- [Service photographs and their exact generation prompts](generated-service-images.md).
- [Process photographs and their exact generation prompts](generated-process-images.md).
- [Page banner photographs and their exact generation prompts](generated-banner-images.md).
- These 22 images were generated using the built-in `image_gen` tool. Original PNGs remain in the Codex generated-image library. Production WebPs are encoded directly from those PNGs at quality 82; no image API credentials or new application dependencies were introduced.
- Existing repository photos and the logo are retained; original external licensing records were not present in the repository.
- The eight active technical insight diagrams are original code-native SVG assets, without remote image requests or scripts.

The dedicated Home About image was created earlier with the built-in tool and saved at `src/assets/images/home/about-studio.jpg`. Its original prompt is retained below.

> Use case: photorealistic-natural. Asset type: dedicated About section photo for the CREATOV engineering consultancy website, vertical 4:5 editorial architectural studio photograph. Primary request: a carefully composed Kerala architecture and engineering worktable with a detailed small white contemporary tropical house model, technical plans spread neatly beneath it, a scale ruler and a few laterite and warm wood material samples, soft daylight from a shaded window, deep navy cabinetry blurred in the background. Camera at table height, restrained warm neutral tones with subtle brick red materials, realistic precise miniature architecture, tangible paper and wood texture, premium natural photographic quality. No people, no text, no brand logos, no watermark, no collage, no artificial glowing interface. This is a conceptual studio image, not a completed real client project.

## Sizing and loading

- Service photographs: 1536 × 1024; process photographs: 1400 × 933; main banners: 1920 × 800.
- Card and timeline frames reserve consistent aspect ratios. Content imagery loads lazily with asynchronous decoding; visible page banners receive high fetch priority.
- Existing native scrolling, image reveals and reduced-motion support are retained. No additional application dependency is needed for image delivery.
