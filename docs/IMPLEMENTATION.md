# AweEscapes first local implementation

The complete planning document informed this implementation. The user's explicit route list and local-content requirement define this phase. No Sanity or CMS is installed.

## Design and content

- Warm paper, forest text, serif headings, generous spacing, and all four supplied brand accent colors.
- Original local SVG mountain artwork and CSS city, lake, and forest illustrations. These are illustrations, not documentary Nepal photography.
- Four typed experience concepts, four destinations, two editorial samples, three planning guides, and five FAQs in `src/data/content.ts`.
- Stories and guides are complete HTML-readable articles on their index pages, with crawlable fragment links. Separate article routes are deferred.
- No prices, permits, ratings, awards, memberships, guide credentials, or traveler quotations are invented.
- Placeholder business facts use neutral wording. Reviews explain why verified feedback is absent.

## Rendering and accessibility

All public content is server-rendered; known detail slugs are statically generated. Unknown detail slugs return 404. Only mobile navigation, form submission, and a small CTA animation wrapper require client components. FAQs use native details/summary and contain their answers in HTML.

The header includes a skip link, desktop navigation, and a non-modal mobile disclosure with Escape support. Focus indicators, persistent field labels, error alerts, and reduced-motion CSS are included. Motion uses LazyMotion and a brief CTA fade-up without hiding initial content. Cards use CSS feedback. No autoplay, WebGL, external widgets, or continuous effects.

## Local inquiry behavior

The editable experience name is passed to the planning form. Name, email, and trip ideas are required. Submission validates on both client and server, checks same origin, includes a honeypot, and saves a UUID-named JSON file in `.local/inquiries/`. A retry with the same ID and payload uses the existing record. A changed payload with that ID returns a conflict. Success appears only after storage completes. Failures preserve form entries.

This is local test storage. It sends no email, acknowledgment, or team notification. Use sample personal details. `.local/` is Git-ignored and sits outside public assets. Production-mode saving is disabled unless `ENABLE_LOCAL_INQUIRIES=true` is explicitly set for a local production test. Local files are not a production database; launch needs durable managed storage, rate limiting, approved data handling and retention, notifications, and a follow-up owner.

## SEO

Major pages have titles, descriptions, canonical links, and Open Graph metadata. Breadcrumb JSON-LD reflects visible navigation. No review or rating schema is generated. Sample pages default to noindex with follow enabled. Crawlers are allowed to read that directive. A sitemap lists canonical routes only when `NEXT_PUBLIC_INDEXABLE=true`. Set the correct `NEXT_PUBLIC_SITE_URL` and approve all content before indexing.

## Deferred until verified

Photography and rights, final brand assets, actual inventory and operating details, team/contact information, review permissions, legal policies, production inquiry delivery, analytics, real-device accessibility, browser screenshots, and measured performance budgets.
