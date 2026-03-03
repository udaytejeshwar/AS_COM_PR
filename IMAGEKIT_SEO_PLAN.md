# ImageKit + SEO Implementation Plan (3 Images per Product)

This plan standardizes product imagery using **three image types per product**:
1. **Spindle image** (primary marketing/visual image)
2. **Drawing image** (technical dimensions/CAD-style drawing)
3. **Graph image** (performance curve/spec chart)

It is designed for the current React + TypeScript codebase and includes SEO-focused recommendations.

---

## 1) Target Architecture

### Source of truth
Store image metadata in product data (or Google Sheet source) using explicit fields:

- `images.spindle`
- `images.drawing`
- `images.graph`

Each image object should include:
- `url` (ImageKit URL)
- `alt` (descriptive alt text)
- `width`
- `height`
- `type` (`spindle` | `drawing` | `graph`)

Example shape:

```ts
images: {
  spindle: { url: string; alt: string; width: number; height: number; type: 'spindle' };
  drawing: { url: string; alt: string; width: number; height: number; type: 'drawing' };
  graph: { url: string; alt: string; width: number; height: number; type: 'graph' };
}
```

### ImageKit folder strategy
Use deterministic paths so URLs are predictable:

```text
/products/{product-id}/spindle.jpg
/products/{product-id}/drawing.jpg
/products/{product-id}/graph.jpg
```

If multiple formats are uploaded, keep canonical names and let ImageKit transforms handle output format.

---

## 2) Data Model & Validation Changes

1. Extend product schema/types to hold `images` object instead of a single `imageUrl`.
2. Keep backwards compatibility temporarily:
   - Continue supporting `imageUrl` during migration.
   - Add a mapper that resolves `primaryImage = images?.spindle?.url ?? imageUrl`.
3. Add validation rules (existing schema layer):
   - All 3 image fields required for new products.
   - `alt` must be non-empty and product-specific.
   - Width/height must be positive integers.

---

## 3) Frontend Rendering Plan

### Product listing cards
- Show only `spindle` image as card thumbnail.
- Use transformed URLs for card size (`w`, `h`, `q`, `f-auto`).
- Add `loading="lazy"` and explicit width/height to reduce CLS.

### Product detail page
Use all three image types with semantic labeling:
- **Main gallery tab 1:** Spindle
- **Tab 2:** Technical Drawing
- **Tab 3:** Performance Graph

UI behavior:
- Spindle remains default selected image.
- Drawing/graph open in lightbox with zoom support (important for technical readability).
- Keep keyboard-accessible tab controls.

---

## 4) ImageKit Optimization Strategy

Use ImageKit transformations via URL parameters:

- `f-auto` for next-gen formats (WebP/AVIF when supported)
- `q-auto` for adaptive quality
- size presets for contexts:
  - Card: `w-480,h-360,c-maintain_ratio`
  - PDP main: `w-1200,h-900,c-at_max`
  - Thumbnail: `w-160,h-120,c-fill`

Recommended helper:
- Add a utility to build ImageKit URLs from a base URL + transform preset so transformation logic is centralized.

---

## 5) SEO Plan (Critical)

### A) Alt text strategy
Define role-specific templates and store final text per product:

- Spindle: `"{Product Name} CNC spindle motor - front view"`
- Drawing: `"{Product Name} spindle technical drawing with dimensions"`
- Graph: `"{Product Name} spindle performance graph (power/torque vs RPM)"`

Rules:
- Keep alt descriptive, not keyword-stuffed.
- Avoid repeating identical alt across all products.

### B) Product structured data
Update JSON-LD Product schema to include image array with all 3 images:

```json
"image": ["<spindle-url>", "<drawing-url>", "<graph-url>"]
```

This helps rich results and image indexing for technical product pages.

### C) Sitemap coverage
- Keep page sitemap as-is.
- Add image sitemap support (or enrich existing sitemap entries with image tags) so Google discovers all three assets per product.

### D) Performance signals
- Preload only the spindle hero image on product detail pages (LCP candidate).
- Lazy-load drawing/graph images below fold.
- Always set width/height to avoid layout shift.

### E) Canonical & duplication control
- Use canonical product page URLs.
- Prevent indexing of transformed variant URLs as separate pages (handled by not exposing variant pages, and by canonical product pages).

---

## 6) Rollout Plan

### Phase 1: Foundations
- Add data model changes and migration fallback.
- Add ImageKit URL helper.
- Upload sample assets for 2–3 products.

### Phase 2: UI integration
- Update product card + product detail page.
- Add tabs/sections for drawing and graph.
- Add robust loading/fallback states.

### Phase 3: SEO integration
- Update structured data image arrays.
- Add/enhance image sitemap generation script.
- Verify with Rich Results Test and Search Console URL Inspection.

### Phase 4: Migration completion
- Backfill all products with 3-image metadata.
- Remove legacy `imageUrl` once complete.
- Add CI validation that rejects products missing any of the 3 image types.

---

## 7) QA Checklist

- Every product has spindle/drawing/graph displayed correctly.
- Mobile and desktop gallery rendering is stable.
- Lighthouse:
  - No major CLS from image loading.
  - LCP image optimized.
- Structured data validates with 3 image URLs.
- Sitemap includes image entries for all products.
- Alt text is meaningful and unique per product.

---

## 8) Suggested Acceptance Criteria

1. Product detail page shows all three image categories for migrated products.
2. Product JSON-LD includes all three image URLs.
3. At least one sitemap output includes image references.
4. No regression in existing product cards.
5. New product ingestion fails validation if any of the three image types are missing.
