# AweEscapes design guidance

Source: [website plan](AWESCAPES_WEBSITE_PLAN.md), sections 4-8 and 10-13. Existing implementation context: [design upgrade](docs/DESIGN_UPGRADE.md). Updated: 2026-10-09.

## Direction

Create an editorial Nepal travel experience with practical information and a clear inquiry path. Use warm paper surfaces, forest text, generous spacing, characterful serif headings, and readable body text. Photography should show landscapes, people, food, accommodation, and everyday travel with accurate context.

The current local preview uses original SVG/CSS illustrations and system fonts. Keep illustrations identified as illustrations until authorized photography is available. The plan's example inventory, slogans, and service claims require business verification before publication.

## Existing visual foundations

The following values reflect the later editorial overrides in src/app/globals.css. They document the existing implementation rather than introducing a new palette.

| Role | Current value |
| --- | --- |
| Paper | #f8f5ee |
| Forest ink | #24352f |
| Muted text | #626a61 |
| Rules and borders | #dedfd4 |
| Editorial accent | #b52044 |
| Brand details | Pink #FF2C5A, amber #FF9515, blue #2E97FF, orange #FF5B00 |
| Display typography | Georgia / Times New Roman / serif |
| Body typography | Segoe UI / Arial / Helvetica / sans-serif |

Use brand colors selectively and check contrast for their actual use. Maintain semantic tokens for color, spacing, widths, type, borders, shadows, image ratios, focus, motion, and layering. Test long titles and variable content before fixing component dimensions.

## Homepage and navigation

Keep this sequence: header, hero, verified service cues, experience categories, featured experiences, destinations, AweEscapes approach, editorial feature, genuine traveler feedback when available, practical guides, inquiry invitation, footer.

Use one static hero image with immediately visible heading and actions. Primary action: **Explore experiences**. Secondary action: **Plan your trip**. Use four to six featured experience cards with name, place, duration, suitability, short description, and verified price only when available.

Primary navigation: Experiences, Destinations, Stories, Travel Guides, About; maintain access to Plan your trip. Top-level navigation links should lead to real pages. Mobile controls need clear labels, accurate expanded state, keyboard support, and appropriate Escape and focus behavior. Apply modal focus management only if the menu becomes modal.

## Page patterns

- Experience detail: introduction, gallery, key facts, price or quote context, highlights, suitability, full itinerary, accommodation, inclusions/exclusions, season, preparation, team, genuine reviews, FAQs, related content, and inquiry.
- Destination: character and context, places and available experiences, time needed, season, access, accommodation, practical considerations, related reading, FAQs, and inquiry.
- Story: author, dates, original narrative, captions and credits, relevant links, biography, related reading, and contextual action.
- Guide: answer one practical question with reviewed information, useful headings, and links to its hub and suitable experiences.

Keep essential itineraries, facts, and article text in HTML even when using disclosures. Desktop inquiry panels may be sticky; mobile fixed actions need safe-area spacing and enough padding to avoid obscuring content.

## Inquiry and trust

Require name, email, and trip ideas. Dates, group size, duration, budget, destination, experience, and phone are optional. Do not request passport or sensitive medical details in the initial form.

Design empty, partial, validating, submitting, saved, failed, and retry states. Keep labels visible, announce errors and status, retain values after failure, and show success only after durable storage. Explain privacy and next steps using confirmed operating details.

Use real team details, attributable feedback, and evidenced practices. Do not invent prices, ratings, credentials, availability, or response promises.

## Accessibility and motion

Target WCAG 2.2 AA as specified by the plan. Include visible focus, logical reading order, adequate contrast, readable zoomed layouts, and primary touch targets of at least 44 by 44 CSS pixels. Avoid hover-only information, nested clickable controls, and decorative icons that imply nonexistent actions.

Use CSS for simple feedback and small Motion for React boundaries for interactions that benefit from it. Prefer transform and opacity, LazyMotion, and the needed feature set only. Keep content visible on initial render and useful when JavaScript fails.

Plan timing ranges: buttons 120-180 ms, cards 150-220 ms, navigation 180-240 ms, mobile menu 200-280 ms, optional reveals 250-400 ms, gallery 180-250 ms. Respect reduced motion by removing positional/scale effects and animated scrolling; disclosures should change immediately.

Exclude scroll hijacking, custom cursors, autoplay hero video, continuous animation, text-splitting effects, parallax, 3D, full-page overlays, and automatically rotating carousels from launch.

## Performance targets and review

These are targets from the plan, not measured results:

| Measure | Target |
| --- | --- |
| LCP at the 75th percentile | At most 2.5 seconds |
| INP at the 75th percentile | At most 200 ms |
| CLS at the 75th percentile | At most 0.1 |
| Mobile hero image | Approximately 150-250 KB |
| Initially requested compressed homepage JavaScript | Aim for at most 180 KB |
| Initial mobile transfer | Aim for at most 1 MB |
| Fonts | At most two families; prefer two to four optimized files if using web fonts |

Use responsive images with reserved dimensions, prioritize the actual hero only, and lazy-load lower images. Keep static content server-rendered and client boundaries small. Load maps/video on request and avoid heavy review or chat widgets.

Review homepage, listings, experience, destination, article, and inquiry layouts on mobile and desktop. Record actual browser, accessibility, and lab measurements; assess field performance after launch. Passing a build alone does not validate visual quality or accessibility.
