# AweEscapes SEO guidance

Source: [website plan](AWESCAPES_WEBSITE_PLAN.md), especially sections 3, 8, 9, 13, and 17. Updated: 2026-10-09. This document organizes the supplied plan; it is not a keyword study, crawl audit, or report of rankings.

## Objective and page ownership

Connect useful traveler questions with destinations and verified experiences. Measure qualified inquiries and booking outcomes alongside search discovery. Proposed content clusters have not been validated for demand or competition; do not attach invented volume, difficulty, traffic, or ranking estimates.

| Visitor intent | Page owner | Planned route |
| --- | --- | --- |
| Evaluate a specific journey | Experience detail | /experiences/[slug] |
| Browse a type of available travel | Experience collection | /experiences/[collection-slug] |
| Understand a place | Destination | /destinations/nepal or /destinations/nepal/[slug] |
| Answer a planning question | Guide | /guides/nepal/[slug] |
| Read a personal or local perspective | Story | /stories/[slug] |
| Understand or contact the business | About / Contact | /about or /contact |

Maintain one purpose and canonical home per page. Reserve collection slugs to avoid collisions with experience details. Publish useful collections, not empty taxonomy pages. Current stories and guides live on their index pages with fragment links; their separate detail routes and Nepal guide hub remain planned work.

## Content priorities from the plan

Suggested hubs are Nepal travel planning, trekking, culture and local life, nature and wildlife, and individual destinations. Start with topics connected to verified offerings: planning a first Nepal trip, choosing a suitable trek, combining Kathmandu and Pokhara, accommodation expectations, packing, and seasonal tradeoffs.

Write original, specific content. Distinguish commercial experiences, destination orientation, practical guides, and narrative stories. Record author or owner, reviewer, authoritative sources where needed, and meaningful review dates. Verify health, permit, visa, fee, regulation, and other time-sensitive information before publishing. Do not update dates without substantive review.

Link experiences to their destinations, preparation guides, and suitable alternatives. Link guides to their parent hub, related guidance, and relevant experiences. Use descriptive anchors, crawlable links, breadcrumbs, and accessible pagination.

## Technical requirements

- Deliver essential headings, text, links, itineraries, and metadata in initial HTML.
- Provide a unique title, useful description, one clear H1, and logical heading order.
- Use stable canonicals with the real site origin and a consistent trailing-slash policy; the current implementation uses paths without trailing slashes.
- Return real 404 responses for unknown content and use intentional redirects when URLs change.
- Include only canonical, indexable, published pages in the XML sitemap.
- Exclude drafts, inquiry confirmations, and filter parameters from sitemaps and apply appropriate indexing rules.
- Allow crawlers to access pages whose noindex directives they need to read; robots blocking is not a replacement for noindex.
- Add only applicable structured data matching visible content: Organization, BreadcrumbList, Article, and supported business details.
- Never fabricate ratings or promise enhanced search results. FAQ markup is optional.

## Current preview safeguards

The existing metadata helper uses NEXT_PUBLIC_SITE_URL with a localhost fallback. NEXT_PUBLIC_INDEXABLE must equal true to enable indexing; the preview otherwise defaults to noindex and an empty sitemap. Existing documentation records titles, descriptions, canonicals, Open Graph metadata, and breadcrumb structured data.

Keep the preview safeguards until content is approved and the real domain is configured. Review sitemap eligibility page by page before enabling the flag: the current sitemap implementation lists the existing route inventory when enabled and does not establish that each page is ready for publication. Placeholder reviews and concept offerings must not become indexable merely because the flag changes.

## Launch verification

Inspect representative initial HTML, metadata, canonical URLs, internal links, structured data, unknown-slug behavior, robots directives, and sitemap output. Confirm previews and inquiry confirmations remain excluded. Verify applicable social previews and measure mobile performance against DESIGN.md.

After authorized launch, verify the sitemap and indexing in Search Console, monitor real search queries, and use evidence to refine the page map and content priorities. Keep personal names, emails, phone numbers, and inquiry messages out of analytics events and URLs. Count successful inquiries only after confirmed storage; contact clicks are separate events.
