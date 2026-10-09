# AweEscapes tasks

Source: [AweEscapes website plan](AWESCAPES_WEBSITE_PLAN.md), especially sections 16 and 17. Updated: 2026-10-09.

## Scope and status

Deliver the journey: discover an experience, assess suitability, verify the service, and submit an inquiry. Nepal and English are the initial scope; qualified inquiries are the primary outcome.

An existing local Next.js implementation is documented in [README.md](README.md) and [implementation notes](docs/IMPLEMENTATION.md). It uses typed local content, illustrations, and local test inquiry storage. Sanity is a proposal in the original plan, not an installed dependency or a requirement for this local phase. Existing implementation and prior test results are not evidence of production readiness.

Use unchecked tasks as remaining work or verification needs. Complete tasks only with supporting evidence, and record changes and checks in [WORKLOG.md](WORKLOG.md). This backlog does not authorize deployment or external account changes.

## Documentation baseline

- [x] Read and preserve the existing AGENTS.md instructions.
- [x] Create TASKS.md, DESIGN.md, SEO.md, and WORKLOG.md from the plan and current implementation context.

## 1. Business and content validation

- [ ] Confirm final brand spelling, assets, audience, and service positioning.
- [ ] Verify launch experiences, destinations, durations, suitability, operating limits, and prices or quotation rules.
- [ ] Obtain business identity, contact details, team biographies, credentials, and evidence for operating claims.
- [ ] Confirm photography rights, captions, credits, and review permissions.
- [ ] Assign inquiry follow-up and content maintenance owners; establish a realistic response process.
- [ ] Obtain approved privacy, terms, and booking conditions.

Completion: a verified launch inventory and named owners; concept content is not treated as an available offer.

## 2. Architecture and content model

- [ ] Reconcile existing routes with the plan and map each launch page to one purpose.
- [ ] Reserve experience collection slugs to prevent conflicts with detail slugs.
- [ ] Record relationships among experiences, categories, destinations, stories, and guides.
- [ ] Define content owner, reviewer, review date, publication status, image rights, and operational approval fields.
- [ ] Decide whether and when to move beyond local content; document CMS and hosting decisions before implementation.

Completion: no route collisions or duplicate page purposes; launch and deferred routes are explicit.

## 3. Design and core experience

- [ ] Review existing templates against DESIGN.md using representative real content.
- [ ] Review homepage, listing, detail, editorial, and inquiry layouts at phone, tablet, and desktop widths.
- [ ] Replace illustration placeholders with authorized travel photography when available.
- [ ] Verify navigation, breadcrumbs, section anchors, disclosures, and editable inquiry prefilling.
- [ ] Check keyboard operation, visible focus, zoom, contrast, screen readers, and reduced motion.

Completion: visitors can evaluate a journey and reach the inquiry form comfortably across devices.

## 4. Production inquiry handling

- [ ] Choose and implement durable production storage; keep inquiry data out of public assets and content datasets.
- [ ] Validate server-side and verify spam controls, rate limits, retry behavior, and duplicate protection.
- [ ] Show success only after storage completes; preserve user input after errors.
- [ ] Add team notification, traveler acknowledgment, observable failures, and recovery.
- [ ] Confirm data retention, access, privacy messaging, and follow-up ownership.

Completion: a received inquiry is durably stored and follow-up failures are visible. Current local file storage and ENABLE_LOCAL_INQUIRIES are for testing only.

## 5. Launch content

- [ ] Complete the homepage, experience index, two useful collections, and four to six verified experiences.
- [ ] Complete destination index, Nepal hub, and three destinations linked to real launch inventory.
- [ ] Publish two original stories and three reviewed guides with appropriate indexes and the Nepal guide hub.
- [ ] Add separate article routes when implementing the full plan; current samples live on the story and guide indexes.
- [ ] Complete tailor-made, About, responsible travel, Contact, FAQs, inquiry confirmation, and approved policy pages.
- [ ] Publish genuine reviews only when available; remove empty or placeholder launch pages.

Completion: original reviewed content and authorized imagery. Reduce page count if necessary to maintain quality.

## 6. Validation and launch preparation

- [ ] Run relevant TypeScript, production build, and local smoke checks after implementation changes.
- [ ] Check initial HTML, internal links, unknown-slug 404s, metadata, canonicals, structured data, and sitemap eligibility against SEO.md.
- [ ] Test inquiry success, validation, storage failure, retries, and notification failure with sample data.
- [ ] Measure representative mobile page performance against DESIGN.md budgets.
- [ ] Complete browser, real-device, keyboard, screen-reader, and reduced-motion checks.
- [ ] Configure the real site origin and review all content before enabling indexing.
- [ ] Set up essential analytics without personal data, error monitoring, and field performance monitoring.
- [ ] Confirm hosting, rollback, operations ownership, and launch authorization before publishing.

Completion: all applicable first-build acceptance criteria in plan section 17 have evidence; no fabricated claims or unresolved critical failures remain.

## 7. After launch

- [ ] Verify production inquiry storage and delivery, sitemap availability, and search indexing.
- [ ] Monitor qualified inquiries, completion, response time, booking outcomes, and field performance.
- [ ] Update content using actual traveler questions and search evidence.

## Deferred features

Payments, accounts, live booking inventory, advanced search and filters, saved trips, itinerary builders, multilingual publishing, chatbots, autoplay video, elaborate motion, and 3D effects remain outside the first build.

## Check commands

Use the existing package scripts: `npm run typecheck`, `npm run build`, and `npm run check:local`. The smoke check requires a running local server and writes a sample inquiry under `.local/inquiries/`. See README.md for the portable Node runtime and production-mode local testing setup. Documentation-only changes require document and diff review, not an application build.
