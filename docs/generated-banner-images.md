# Cinematic page banner images

Generated for the website with the built-in `image_gen` tool in generation mode. Seven independent photorealistic images were created; no original client project, CREATOV staff member or actual office is represented by these conceptual scenes. No CLI/API fallback was used.

Final WebP images are saved in `src/assets/images/banners/cinematic/`, normalized to 1920 × 800 pixels (2.4:1) at WebP quality 82, encoded directly from the generated PNGs. Original generated PNGs remain in the Codex generated-image library. Each banner uses an independent photograph.

The shared `PageHero` clips a full-cover background inside its own content-driven frame. Common container padding aligns headings and breadcrumbs. Desktop and mobile focal points are configurable independently; parallax stays within reserved overscan. A directional dark overlay preserves readable HTML text without baking words into photographs.

## Exact prompt set

Every prompt was formed by concatenating the following common prompt, the exact string `Scene:`, and that asset's scene below.

```text
Use case: photorealistic-natural. Asset type: cinematic architectural photograph for a CREATOV engineering consultancy page banner. One continuous ultra-wide 2.4:1 landscape composition, ideally 1920x800. Authentic tropical Kerala setting, exact upright architectural verticals and level horizon, fine tangible material texture, natural light, restrained filmic color with cool navy shadows, warm wood and muted terracotta accents. Compose important subject toward the right half, with quiet shadowed space on the left for HTML headings. Keep important architecture inside the central horizontal band for desktop and mobile cover crops. Real editorial photograph, no CGI, no illustration, no collage, no overlaid text, no readable lettering, no logos, no watermark.
```

### `src/assets/images/banners/cinematic/about.webp`

```text
An unoccupied thoughtful architecture practice seen from across a spacious studio: long timber drafting benches, a few softly lit pinned physical material samples, steel-framed windows opening toward a tropical courtyard. An intimate professional workspace with afternoon light falling diagonally across the right side, dark shelving at the left; no close-up house model, no calculator, no prominent drawings or people.
```

### `src/assets/images/banners/cinematic/services.webp`

```text
A long sheltered verandah of a contemporary tropical civic building with a precise rhythm of exposed concrete columns, terracotta screen blocks and warm timber soffit, dark stone foreground, dense quiet greenery beyond. Low eye-level architectural view looking down the colonnade into warm afternoon light on the right, shaded left side. Show practical engineering and refined material craft through the architecture, no people.
```

### `src/assets/images/banners/cinematic/projects.webp`

```text
A completed contemporary tropical community courtyard in Kerala, generous human-scale two-storey architecture with layered timber fins, warm white plaster and rich laterite, a planted rain garden and perfectly laid dark stone paving, dusk blue sky with subtle amber interior light. Cinematic architectural establishing photograph from under a deeply shadowed left-side overhang toward the refined completed courtyard on the right. Quiet, believable, no people or house model.
```

### `src/assets/images/banners/cinematic/process.webp`

```text
A beautifully ordered Kerala construction site at first golden morning light, wide establishing view across clean foundation work and a coherent low-rise reinforced-concrete frame. On the distant right, two small professional South Indian engineers in hard hats, safety vests and work boots review progress, never close-up. Foreground has neatly stacked masonry and accurate structural geometry; quieter shaded site boundary on left. Show the real journey of building, no towers or dramatic industrial cranes.
```

### `src/assets/images/banners/cinematic/why-creatov.webp`

```text
A precise architectural detail of a beautifully constructed exposed concrete staircase and deep tropical veranda, refined brass handrail, warm teak screens, perfect shadow lines and restrained terracotta inset wall, late afternoon sunlight catching edges on the right. View from a cool shadowed landing at the left toward the ascending staircase on the right. A real built environment communicating care, coordination and engineering quality, not a close-up tool or a complete house.
```

### `src/assets/images/banners/cinematic/insights.webp`

```text
A cinematic quiet architecture research library table beside a large shaded tropical window, an open architectural monograph with unlettered sketch-like linework and a dark neutral closed book, a few material reference samples, book spines facing away and unmarked dark shelves. Low horizontal view with the open book in the right foreground, rich shadows to the left and soft golden window light. No laptop, calculator, house model, people, visible writing or branded book cover.
```

### `src/assets/images/banners/cinematic/contact.webp`

```text
A welcoming contemporary Kerala architecture studio entrance seen from a shaded threshold, warm timber door opened toward a sunlit consultation room with a simple table and a few empty chairs on the right, tropical courtyard greenery visible through refined glazing, quiet plaster and terracotta walls. The left entrance wall stays darker with negative space; no reception counter branding or signage, no people, no actual company office claim.
```
