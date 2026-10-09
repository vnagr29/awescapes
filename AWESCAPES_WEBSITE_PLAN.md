# AweEscapes Website Planning Document

**Status:** Planning proposal  
**Date:** 9 October 2026  
**Scope:** Website strategy, architecture, content, design, animation, technology, and delivery  
**Implementation:** No website code written. This document records the planning proposal.

---

## 1. Executive Summary

AweEscapes should be a modern travel website that helps people discover meaningful experiences in Nepal, understand what a journey involves, and inquire with confidence.

The site should combine an editorial lifestyle aesthetic with the practical depth expected from a trustworthy travel operator. Photography, human stories, and thoughtful layouts should inspire visitors; clear itineraries, transparent inclusions, realistic expectations, and accessible inquiry forms should help them act.

### Recommended positioning

**Experience-first Nepal travel, shaped around the traveler.**

This is a proposed positioning direction, subject to confirmation against AweEscapes’ actual services and operating model.

The website should communicate:

- What visitors can experience.
- Who each experience suits.
- What everyday travel will feel like.
- How much time, effort, and budget it requires.
- Who organizes and supports the journey.
- How to request a suitable itinerary.

### Working assumptions

The plan assumes:

- Nepal is the initial destination market.
- English is the initial website language.
- Inquiry generation is the primary conversion.
- AweEscapes offers curated journeys, customization, or both.
- Experiences will only be published when the business can genuinely deliver them.

Suggested destinations and experiences throughout this document are planning examples, not confirmed inventory.

### Primary audiences

| Audience | Main need | Website response |
|---|---|---|
| First-time Nepal visitors | Understand their options | Clear destination guides and approachable experience categories |
| Couples and friends | Find a memorable shared journey | Lifestyle photography, flexible itineraries, comfort details |
| Active travelers | Assess suitability and preparation | Difficulty, daily effort, altitude, logistics, and safety information |
| Culture and slow-travel visitors | Connect with places and people | Local voices, cultural context, thoughtful pacing |
| Travelers requesting customization | Explain their preferences | A short, flexible trip-planning inquiry |

### Business objectives

1. Generate qualified travel inquiries.
2. Build trust before the first conversation.
3. Grow useful organic search entry points.
4. Help visitors choose suitable experiences.
5. Make content easy to maintain as the portfolio grows.

Measure qualified inquiries, inquiry completion, response time, and eventual booking outcomes. Treat traffic and CTA clicks as supporting indicators.

---

## 2. Research Findings

### Research scope

The research reviewed public pages and documentation from the requested references. It did not include a backlink audit, keyword-volume study, private analytics, or a hands-on accessibility audit of the benchmark websites.

The following recommendations are planning judgments informed by those references.

### Ace the Himalaya: Nepal travel structure

Ace separates destinations and activities and provides substantial trip information. Its Everest Base Camp page includes itinerary details, inclusions, exclusions, preparation information, FAQs, reviews, and inquiry access. These are useful structural lessons for helping travelers evaluate a journey. [Ace homepage](https://www.acethehimalaya.com/), [Ace trip page](https://www.acethehimalaya.com/trip/everest-base-camp-trek/)

**Application to AweEscapes:**

- Connect destination discovery with experience discovery.
- Give every experience a complete practical information layer.
- Place relevant planning articles near commercial pages.
- Provide inquiry access at moments when visitors have enough information to decide.
- Make long pages easy to navigate with section anchors.

AweEscapes should develop its own information hierarchy, editorial voice, visual system, and content. Benchmark facts about permits, prices, travel rules, or safety should not become AweEscapes operating guidance without independent verification.

### Motion.dev: purposeful animation

Motion provides reduced-motion controls and selective feature loading through LazyMotion. These support a restrained animation approach with smaller interactive boundaries. [Reduced-motion documentation](https://motion.dev/docs/react-use-reduced-motion), [LazyMotion documentation](https://motion.dev/docs/react-lazy-motion)

**Application to AweEscapes:**

- Use animation to clarify state changes and navigation.
- Keep core text and images visible immediately.
- Respect device accessibility preferences.
- Load animation features only where needed.
- Use ordinary CSS for simple visual feedback.

### UUPM / UI UX Pro Max: coherent UI quality

UUPM presents guidance around design systems, typography, palettes, interface styles, accessibility, and UX. It is a useful quality reference for establishing consistent decisions across pages. [UUPM](https://uupm.cc/), [Official repository](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

**Application to AweEscapes:**

- Define design tokens before designing individual pages.
- Use consistent spacing, typography, controls, and states.
- Review mobile usability and accessibility alongside visual quality.
- Choose a travel-specific editorial direction rather than mixing unrelated interface styles.

UUPM is being used here as a research reference; no installation or generated design system is part of this planning task.

### 21st.dev: component inspiration

21st.dev presents interface components and blocks across navigation, cards, galleries, buttons, and marketing sections. It is useful for studying interaction patterns and composition. [21st.dev](https://21st.dev/?tab=home)

**Application to AweEscapes:**

- Explore clear navigation panels, image-led cards, editorial grids, FAQs, and inquiry sections.
- Rebuild the selected patterns around AweEscapes’ own design system.
- Favor lightweight, accessible components.
- Avoid decorative shaders, elaborate effects, and unnecessary dependencies.

This plan proposes original components. If implementation later uses third-party component code, review its applicable license and platform terms first. [21st terms](https://docs.21st.dev/terms)

### Combined direction

**An editorial travel website with clear commercial information and quiet, useful interaction.**

Reference roles remain distinct:

| Reference | Role |
|---|---|
| Ace the Himalaya | Travel information depth and Nepal content relationships |
| Motion.dev | Animation implementation and accessibility |
| UUPM | Design-system consistency and UX quality |
| 21st.dev | Component composition and interaction inspiration |

No benchmark text, imagery, branding, distinctive layouts, or proprietary content should be reproduced.

---

## 3. Final Site Architecture

### Architecture principles

- Organize the primary journey around experiences.
- Support geographic discovery through destinations.
- Separate bookable offerings from inspiration and practical guidance.
- Give each indexable page one clear purpose.
- Keep URLs stable even when categories change.
- Publish useful pages rather than empty taxonomy shells.

### Proposed routes

| Area | Route | Purpose |
|---|---|---|
| Homepage | `/` | Introduce AweEscapes and guide discovery |
| Experience index | `/experiences/` | Browse all available experiences |
| Experience collection | `/experiences/trekking/` | Explore a specific experience type |
| Experience detail | `/experiences/[experience-slug]/` | Evaluate one itinerary or offering |
| Destination index | `/destinations/` | Browse geographic options |
| Nepal hub | `/destinations/nepal/` | Understand travel across Nepal |
| Destination detail | `/destinations/nepal/[place-slug]/` | Explore one place or region |
| Story index | `/stories/` | Browse editorial inspiration |
| Story detail | `/stories/[story-slug]/` | Read one original story |
| Guide index | `/guides/` | Find practical planning information |
| Guide hub | `/guides/nepal/` | Navigate Nepal planning topics |
| Guide detail | `/guides/nepal/[guide-slug]/` | Answer one planning question |
| Custom journey | `/tailor-made/` | Explain customization |
| About | `/about/` | Explain the business and team |
| Responsible travel | `/responsible-travel/` | Describe evidenced operating practices |
| Reviews | `/reviews/` | Present genuine traveler feedback |
| Trip planning | `/plan-your-trip/` | Main inquiry form |
| Contact | `/contact/` | Direct contact and business information |
| FAQ | `/faqs/` | Answer general service questions |
| Legal | `/privacy/`, `/terms/`, `/booking-conditions/` | Explain applicable policies |
| Confirmation | `/inquiry-received/` | Confirm successful inquiry receipt |

Reserve collection slugs so they cannot conflict with experience detail slugs.

### Experience taxonomy

Suggested initial categories:

- Trekking & Hiking
- Culture & Local Life
- Nature & Wildlife
- Slow Travel & Retreats

Add further collections only when supported by enough distinct offerings and useful introductory content.

Traveler preferences such as couples, families, comfort level, and short escapes should initially be filters or curated recommendations. They do not all need indexable landing pages.

### Destination taxonomy

Suggested Nepal structure:

- Kathmandu Valley
- Pokhara
- Annapurna Region
- Everest Region
- Chitwan
- Additional regions as inventory develops

Separate cities and trekking regions when they serve different travel decisions.

### Content relationships

An experience can reference multiple destinations and one primary category. Stories and guides can reference relevant experiences and destinations.

These relationships should generate contextual links, breadcrumbs, and related-content sections without duplicating entire pages.

---

## 4. Homepage Layout

### Visual direction

Aim for an inviting editorial feel:

- Warm neutral backgrounds.
- Deep forest or charcoal text.
- One restrained accent color.
- Large original travel photography.
- A characterful display typeface paired with a highly readable body typeface.
- Generous spacing with a clear reading order.
- A mix of landscapes, people, food, accommodation, and everyday moments.

Use licensed or commissioned imagery with accurate captions and consent where appropriate.

### Proposed layout

| Order | Section | Content and purpose |
|---|---|---|
| 1 | Header | Primary navigation and “Plan your trip” CTA |
| 2 | Hero | One strong photograph, clear H1, brief positioning, two actions |
| 3 | Confidence strip | Verified facts about the service |
| 4 | Experience categories | Help visitors choose how they want to travel |
| 5 | Featured experiences | Present a small, curated selection |
| 6 | Nepal through places | Connect geographic interest with suitable experiences |
| 7 | The AweEscapes approach | Explain how journeys are designed and supported |
| 8 | Editorial feature | Show the human texture of travel |
| 9 | Traveler feedback | Present genuine, attributable reviews |
| 10 | Practical planning | Link to useful guides |
| 11 | Inquiry invitation | Offer a clear next step |
| 12 | Footer | Utility navigation, contact details, and policies |

### Hero requirements

- Use one static image at launch.
- Keep the H1 understandable without relying on a slogan.
- Primary CTA: **Explore experiences**.
- Secondary CTA: **Plan your trip**.
- Keep text legible across image crops and screen sizes.
- Display the image, heading, and CTAs without animation delays.

A proposed message direction is “Thoughtfully planned Nepal experiences.” Final wording should reflect confirmed services.

### Featured experience cards

Include:

- Experience name.
- Place or region.
- Duration.
- One suitability cue.
- Verified price information when available.
- A short, concrete description.

Show four to six cards rather than a large catalog.

### Mobile treatment

- Use a compact header and simple menu.
- Stack primary content in a predictable order.
- Use one-column or two-column grids according to available width.
- Keep essential information outside hover interactions.
- Preserve comfortable reading and tapping space.
- Avoid stacking multiple floating controls over the page.

---

## 5. Navigation Structure

### Desktop navigation

**Experiences · Destinations · Stories · Travel Guides · About**

Persistent action: **Plan your trip**

Use compact dropdowns where necessary. Every top-level destination should also be a real, clickable page.

Suggested dropdowns:

| Navigation item | Links |
|---|---|
| Experiences | All experiences, Trekking & Hiking, Culture & Local Life, Nature & Wildlife, Tailor-made |
| Destinations | Nepal overview, published destination pages |
| About | Our story, Our team, Responsible travel, Reviews |

Keep Stories and Travel Guides as direct links initially.

### Mobile navigation

Use a clearly labeled menu button and expandable groups.

Requirements:

- Correct expanded states.
- Keyboard access.
- Escape-to-close behavior where applicable.
- Focus management for modal menus.
- Focus returned to the trigger after closing.
- Page scrolling restored correctly.
- A visible trip-planning CTA.

### Supporting navigation

- Breadcrumbs on detail pages.
- Section anchors on long experience pages.
- Topic navigation on guide hubs.
- Related links within article content.
- Footer links to contact, FAQs, policies, and main hubs.

Launch with simple browsing. Add site search when the content inventory makes it useful.

---

## 6. Experience Page Structure

An experience page should answer: **“Is this journey right for me, and what happens next?”**

### Recommended sequence

1. Breadcrumbs.
2. Experience name and concise introduction.
3. Hero photograph and gallery access.
4. Key facts.
5. Price or quotation context and inquiry CTA.
6. Highlights.
7. Who it suits.
8. Itinerary.
9. Accommodation and everyday comfort.
10. Inclusions and exclusions.
11. Timing, availability, and seasonal considerations.
12. Preparation, safety, and suitability.
13. Local team or host information.
14. Relevant reviews.
15. Experience-specific FAQs.
16. Related guides and destinations.
17. Inquiry section.

### Key facts

Use structured, comparable information:

| Field | Requirement |
|---|---|
| Duration | Distinguish total trip days from activity days |
| Location | Link to relevant destination pages |
| Start/end | State the actual meeting and finishing locations |
| Activity level | Explain daily effort |
| Highest altitude | Include for relevant itineraries |
| Accommodation | Describe the expected standard |
| Travel style | Private, group, or another confirmed format |
| Group size | Publish only verified limits |
| Season | Describe tradeoffs and operational constraints |
| Price | State currency, basis, conditions, and inclusions |

“Moderate” should be accompanied by concrete expectations such as walking time, terrain, and elevation change.

### Itinerary

Each day should describe:

- Route or location.
- Main activities.
- Travel or walking time.
- Overnight arrangements.
- Meals included.
- Relevant altitude.
- Flexibility or contingencies.

Render the complete itinerary in HTML. Collapsible sections may improve scanning, but should not require a network request to obtain essential text.

### Pricing and availability

Where prices are published, show:

- Per-person or per-group basis.
- Currency.
- Group-size assumptions.
- Accommodation assumptions.
- Validity period.
- Main supplements and exclusions.

Use “Request a quote” when pricing is genuinely bespoke. Publish departures only when operationally maintained.

### Conversion

Desktop: a restrained sticky inquiry panel.  
Mobile: a compact bottom action with sufficient content padding and safe-area spacing.

Pass the experience name into the inquiry form. Allow the traveler to edit it.

---

## 7. Destination Page Structure

A destination page should answer: **“What is this place like, and how might it fit into my trip?”**

### Recommended sections

1. Destination name, introduction, and hero.
2. A concise overview.
3. Character, landscape, and local context.
4. Main places and experiences.
5. Suitable traveler interests.
6. How long to spend.
7. Seasonal considerations.
8. Getting there and onward travel.
9. Accommodation styles.
10. Practical considerations.
11. Experiences available through AweEscapes.
12. Related stories and guides.
13. Destination FAQs.
14. Inquiry CTA.

### Country and regional roles

The Nepal hub should orient visitors across regions, travel styles, and broad logistics.

A regional page should go deeper into local choices and link to the experiences that actually visit that region.

### Editorial requirements

- Include real observations and useful distinctions.
- Explain tradeoffs, including travel time and infrastructure.
- Avoid unsupported claims about authenticity, exclusivity, or sustainability.
- Include a reviewed date for practical information.
- Use accurate place names and appropriate geographic context.
- Keep essential transport information available as text alongside any map.

Use static route illustrations or map images initially. Interactive maps can load on request later.

---

## 8. Story / Blog Structure

Use **Stories** as the public-facing editorial section.

Its purpose is to help visitors imagine the experience of travel through original reporting, photography, and human perspectives.

### Editorial categories

- People & Places
- Food & Culture
- Life on the Trail
- Slow Travel
- Field Notes

Keep categories broad until the publishing volume supports more.

### Story index

- One featured story.
- Clear category navigation.
- A readable card grid.
- Visible pagination.
- Author or contributor attribution where useful.
- A link to Travel Guides for practical planning.

Avoid infinite scrolling as the sole browsing mechanism.

### Article structure

- Breadcrumbs.
- Title and short introduction.
- Author or contributor.
- Publication date and meaningful updated date.
- Lead image and caption.
- Scannable headings.
- Original narrative and reporting.
- Inline photographs with credits.
- Relevant internal links.
- Author biography.
- Related reading.
- A contextually appropriate experience or inquiry CTA.

### Editorial voice

Write with specific detail and respect for local people.

Avoid generic destination praise and treating communities as scenery. Explain the traveler’s role, cultural context, and practical implications.

Practical evergreen articles belong in Guides. Give each article one canonical home.

---

## 9. SEO Content Hub Structure

### SEO objective

Build useful connections between traveler questions, destination choices, and relevant experiences.

Core headings, text, links, and metadata should be present in the initial HTML. Google’s guidance describes the additional rendering stage involved in processing JavaScript content; delivering essential content directly reduces reliance on that stage. [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)

### Proposed hub model

| Hub | Purpose | Supporting topics |
|---|---|---|
| Nepal travel planning | Help visitors plan a complete trip | Timing, trip length, route choices, transport |
| Trekking in Nepal | Explain trekking decisions | Suitability, accommodation, packing, preparation |
| Nepal culture and local life | Support cultural travel | Etiquette, food, heritage, local experiences |
| Nature and wildlife | Support relevant experiences | Seasonal considerations, responsible viewing, expectations |
| Destination hubs | Explain individual places | Time needed, access, activities, onward travel |

These are proposed clusters. Search demand and competitive opportunity remain unvalidated.

### Search-intent ownership

| Query type | Primary page |
|---|---|
| A specific itinerary or package | Experience detail |
| A type of available travel | Experience collection |
| A place to visit | Destination page |
| A planning question | Guide |
| A personal account or local perspective | Story |
| Brand or contact information | About or Contact |

Maintain a query-to-page map so closely related pages have distinct purposes.

### Example content priorities

| Suggested topic | Role | Commercial connection |
|---|---|---|
| Planning your first Nepal trip | Broad orientation | Nepal hub and suitable experiences |
| Choosing the right Nepal trek | Decision support | Trekking collection |
| Kathmandu and Pokhara in one journey | Route planning | Cultural and slow-travel offerings |
| What accommodation on a trek is like | Set expectations | Relevant trekking pages |
| A practical packing guide | Preparation | Relevant experience pages |
| Understanding seasonal tradeoffs | Timing decisions | Destination and experience pages |

Topics involving health, permits, visas, fees, or regulations require current authoritative sources and a named reviewer.

### Internal linking

Each commercial page should link to relevant:

- Destination pages.
- Preparation guides.
- Alternative experiences.

Each guide should link to:

- Its parent hub.
- Closely related guidance.
- Suitable experiences where the connection is useful.

Use descriptive anchor text and avoid repetitive keyword blocks.

### Technical rules

- Unique page titles and meaningful descriptions.
- One clear H1 and logical heading order.
- Stable canonical URLs.
- Consistent trailing-slash policy.
- Crawlable links.
- XML sitemaps containing canonical, indexable pages.
- Proper 404 responses and intentional redirects.
- Accessible pagination.
- Drafts and inquiry confirmations excluded from indexing.
- Filter parameters excluded from sitemaps.
- Index curated collection pages only when they contain distinct value.

Manage filter crawling and indexation deliberately. Do not block URLs in robots.txt when crawlers need to see their `noindex` directive.

### Structured data

Plan for applicable, validated markup:

- Organization.
- BreadcrumbList.
- Article for editorial content.
- Appropriate business information where supported.

Markup must match visible content. Do not promise rich results or add fabricated ratings. FAQ markup is optional and does not guarantee enhanced search appearance.

### Publishing governance

Record a content owner, reviewer, sources, and review date.

Use shorter review intervals for prices, departures, regulations, and logistics. Retire or update stale information rather than automatically changing publication dates.

---

## 10. Trust & Conversion Strategy

### Trust should be evidenced

Publish only verified:

- Business identity and contact details.
- Team names, roles, and biographies.
- Operating experience.
- Registrations and memberships.
- Qualifications.
- Review sources.
- Responsible travel practices.
- Booking and cancellation conditions.

### Trust by placement

| Location | Trust content |
|---|---|
| Homepage | Brief service explanation and verified proof |
| Experience page | Named support, practical details, policies, relevant reviews |
| About | Business story and real team |
| Responsible travel | Specific practices and evidence |
| Inquiry form | Privacy explanation and next steps |
| Footer | Contact information and policy links |

If reviews are unavailable, emphasize transparent operations and real people. Never substitute invented testimonials or statistics.

### Inquiry flow

Use one dependable form across the site with contextual prefilling.

**Required fields:**

- Name.
- Email.
- Short description of the desired trip.

**Optional fields:**

- Experience or destination.
- Approximate travel dates, including “Not sure yet.”
- Number of travelers.
- Preferred duration.
- Budget range.
- Phone or WhatsApp.
- Preferences and questions.

Do not collect passport details or sensitive medical information during the initial inquiry.

### Form states

Design:

- Empty and partially completed states.
- Clear validation messages.
- Submission progress.
- Successful receipt.
- Failure with values preserved.
- Duplicate-submission protection.

Show success only after the inquiry is durably recorded.

### Operational handling

1. Validate the submission on the server.
2. Apply lightweight spam controls.
3. Save the inquiry to a durable store.
4. Notify the responsible team.
5. Send an acknowledgment.
6. Monitor notification failures.
7. Track follow-up and qualified outcomes.

Choose a response-time promise only after staffing and operating hours are confirmed.

### Conversion measurement

Track:

- Inquiry starts.
- Successful submissions.
- Validation and submission failures.
- Experience-to-inquiry progression.
- Email and WhatsApp clicks.
- Qualified leads and resulting bookings.

A contact click is not equivalent to a received inquiry. Keep names, emails, messages, and other personal data out of analytics events and URLs.

---

## 11. Component List

### Design-system foundations

Define:

- Semantic colors.
- Typography and line lengths.
- Spacing scale.
- Content widths.
- Border radii and shadows.
- Buttons and links.
- Focus states.
- Form controls.
- Image ratios.
- Motion settings.
- Layering and sticky offsets.

### Component inventory

| Group | Components |
|---|---|
| Site shell | Header, desktop dropdown, mobile menu, footer, breadcrumbs |
| Discovery | Category card, experience card, destination card, listing grid |
| Editorial | Story card, feature section, article layout, image caption |
| Experience | Facts grid, itinerary section, inclusions list, pricing panel |
| Trust | Team card, review card, policy summary, evidence block |
| Conversion | CTA section, inquiry form, sticky inquiry action, success state |
| Navigation | Section anchors, pagination, topic navigation |
| Media | Responsive image, gallery, static map, optional lightbox |
| Utility | FAQ accordion, empty state, error message, loading indicator |

### UI quality requirements

- Consistent primary and secondary actions.
- Visible keyboard focus.
- Comfortable touch targets; aim for at least 44 × 44 CSS pixels for primary controls.
- Adequate contrast.
- Persistent form labels.
- Status communicated beyond color.
- No hover-only functionality.
- No clickable elements nested inside other clickable elements.
- No decorative icons that imply nonexistent controls.
- Layouts that tolerate long titles and variable content.

Review components with real travel content before finalizing their dimensions.

---

## 12. Animation Strategy Using Motion.dev

### Principle

Animation should explain change and add a small amount of warmth without slowing discovery, reading, or inquiry.

### Proposed motion rules

| Interaction | Approach | Proposed timing |
|---|---|---|
| Button feedback | CSS color or shadow transition | 120–180 ms |
| Card feedback | Small visual change without layout movement | 150–220 ms |
| Navigation panel | Subtle fade and short movement | 180–240 ms |
| Mobile menu | Controlled panel entrance | 200–280 ms |
| Optional section reveal | Short fade with minimal displacement | 250–400 ms |
| Gallery transition | Brief crossfade | 180–250 ms |
| Form feedback | Immediate state change with optional subtle fade | 120–180 ms |

These timings are proposed AweEscapes design tokens, not vendor requirements.

### Motion implementation plan

Use Motion for React in small interactive components.

- Use LazyMotion and the smaller `m` components when appropriate.
- Load only the needed feature set.
- Begin with `domAnimation`.
- Add heavier layout features only for a demonstrated interaction need.
- Keep client boundaries narrow.
- Prefer transform and opacity changes over layout-affecting movement.

Motion documents selective loading through LazyMotion. Actual route bundle sizes must still be measured. [LazyMotion](https://motion.dev/docs/react-lazy-motion)

### Reduced motion

Set the site-wide policy to respect the user’s preference. Use `useReducedMotion` for behavior requiring explicit adaptation, such as replacing positional movement or disabling parallax. [MotionConfig](https://www.motion.dev/docs/react-motion-config), [useReducedMotion](https://motion.dev/docs/react-use-reduced-motion)

For reduced motion:

- Remove positional and scale transitions.
- Avoid animated scrolling.
- Make disclosure changes immediate.
- Preserve full functionality.
- Keep any remaining fades brief.

### Initial content visibility

- Render hero text, key facts, and CTAs visibly.
- Do not make content depend on entering the viewport.
- Preserve useful pages when JavaScript fails.
- Never delay an inquiry action for an entrance animation.

### Excluded from launch

- Scroll hijacking.
- Custom cursors.
- Autoplay hero video.
- Continuous background animation.
- Text-splitting effects.
- Parallax layers.
- 3D scenes.
- Full-page transition overlays.
- Automatically rotating carousels.

---

## 13. Performance Rules

### Core Web Vitals targets

Target the following at the 75th percentile of real visits, assessed separately for mobile and desktop:

| Metric | Target |
|---|---|
| Largest Contentful Paint | ≤ 2.5 seconds |
| Interaction to Next Paint | ≤ 200 milliseconds |
| Cumulative Layout Shift | ≤ 0.1 |

These follow the published “good” thresholds. Lab tests support development; field data establishes real-user performance. [Web Vitals](https://web.dev/articles/vitals)

### Proposed launch budgets

| Resource | Initial budget |
|---|---|
| Mobile hero image | Approximately 150–250 KB |
| Initially requested compressed JavaScript | Aim for ≤ 180 KB on the homepage |
| Total initial mobile transfer | Aim for ≤ 1 MB |
| Font families | Maximum two |
| Font files | Prefer two to four optimized files |
| Autoplay media | None |
| Third-party scripts | Only justified launch essentials |

These are project targets to test against real pages, not guaranteed outcomes.

### Images

- Generate responsive sizes.
- Use modern formats with suitable fallbacks.
- Supply width and height or a stable aspect ratio.
- Prioritize only the actual above-the-fold hero.
- Lazy-load below-the-fold images.
- Reserve gallery space.
- Load full-resolution images on demand.
- Keep photographs useful at mobile sizes.

### Rendering and JavaScript

- Deliver content through static generation or server rendering.
- Use client components only for interactions.
- Avoid hydrating static card grids and article bodies.
- Keep animation wrappers small.
- Cache published content and revalidate after changes.
- Avoid blocking every public visit on a fresh CMS request.

### Fonts and external resources

- Use licensed, optimized font assets.
- Limit font weights.
- Minimize layout shift during font loading.
- Use static reviews rather than heavy review widgets.
- Load maps and video embeds on request.
- Prefer a direct WhatsApp link over a chat widget.

### Accessibility and reliability

Target WCAG 2.2 AA during implementation.

Include keyboard navigation, reduced motion, readable zoomed layouts, screen-reader checks, form recovery, and mobile safe-area handling.

### Verification

Test representative homepage, listing, experience, destination, and article pages using:

- Mobile performance profiling.
- HTML and crawl inspection.
- Image and bundle analysis.
- Keyboard and screen-reader checks.
- Real-device form submission.
- Real-user monitoring after launch.

---

## 14. Recommended Tech Stack

### Recommended foundation

**Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and Sanity.**

This is a proposed implementation stack, not a claim about the existing workspace.

Next.js supports separating server-rendered content from interactive client components, which suits this plan’s content-first approach. [Next.js documentation](https://nextjs.org/docs/app/getting-started/server-and-client-components)

### Stack responsibilities

| Layer | Recommendation | Purpose |
|---|---|---|
| Framework | Next.js App Router | Static/server-rendered pages and inquiry endpoint |
| Language | TypeScript | Consistent content and component contracts |
| Styling | Tailwind CSS with semantic tokens | Maintainable responsive design |
| Animation | Motion for React | Selected interactive transitions |
| CMS | Sanity | Structured editorial and travel content |
| Media | Image processing and CDN delivery | Responsive, optimized photographs |
| Inquiry storage | Managed database or CRM | Durable lead capture |
| Notifications | Transactional email service | Team alerts and acknowledgments |
| Analytics | Minimal event analytics | Measure inquiry behavior |
| Search monitoring | Google Search Console | Observe indexing and search performance |
| Quality checks | Automated checks and manual review | Verify forms, accessibility, and performance |

Tailwind’s theme variables support a token-based design system. Sanity provides documented Next.js integration. [Tailwind theme documentation](https://tailwindcss.com/docs/theme), [Sanity integration](https://www.sanity.io/docs/nextjs)

### CMS models

- Experience.
- Experience category.
- Destination.
- Story.
- Guide.
- Guide hub.
- Team member.
- Review.
- FAQ.
- Site settings.
- Navigation.
- Policy page.

Use references between models rather than repeated text.

Important fields include:

- Stable slug and publication status.
- SEO title and description.
- Structured content.
- Image alt text, credit, rights, and focal point.
- Content owner and review date.
- Operational approval.
- Verified experience facts.

Keep inquiry data outside the public CMS dataset.

### Hosting requirements

Choose hosting during implementation based on compatibility, cost, and team ownership.

Required capabilities:

- CDN delivery.
- Server-side inquiry handling.
- Secure environment variables.
- Preview environments.
- Content revalidation.
- Monitoring and rollback.
- Suitable data storage and retention controls.

Pin supported stable dependency versions when implementation begins.

---

## 15. Folder Structure

The following is a proposed organization, not application files created during this task.

```text
awescapes/
├── docs/
│   ├── planning/
│   ├── design-system/
│   ├── content/
│   └── decisions/
├── public/
│   ├── brand/
│   ├── fonts/
│   └── images/
├── src/
│   ├── app/
│   │   ├── experiences/
│   │   │   └── [slug]/
│   │   ├── destinations/
│   │   │   └── nepal/
│   │   │       └── [slug]/
│   │   ├── stories/
│   │   │   └── [slug]/
│   │   ├── guides/
│   │   │   └── nepal/
│   │   │       └── [slug]/
│   │   ├── tailor-made/
│   │   ├── about/
│   │   ├── responsible-travel/
│   │   ├── reviews/
│   │   ├── plan-your-trip/
│   │   ├── contact/
│   │   ├── faqs/
│   │   ├── inquiry-received/
│   │   ├── privacy/
│   │   ├── terms/
│   │   ├── booking-conditions/
│   │   └── api/
│   │       └── inquiries/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── discovery/
│   │   ├── experiences/
│   │   ├── destinations/
│   │   ├── editorial/
│   │   ├── trust/
│   │   ├── forms/
│   │   └── motion/
│   ├── lib/
│   │   ├── cms/
│   │   ├── seo/
│   │   ├── inquiries/
│   │   ├── analytics/
│   │   └── validation/
│   ├── styles/
│   └── types/
├── sanity/
│   ├── schemas/
│   └── configuration/
└── tests/
    ├── e2e/
    ├── accessibility/
    └── integration/
```

The experience slug resolver can serve both collection and detail content, with reserved collection slugs and a required CMS content type.

### Organization rules

- Keep page composition in route files.
- Group reusable components by responsibility.
- Centralize metadata and structured-data generation.
- Keep credentials and inquiry-processing logic server-side.
- Store content in the CMS.
- Record design decisions in documentation.
- Keep private uploads and inquiry records out of public assets.

---

## 16. Development Phases

| Phase | Main work | Completion criteria |
|---|---|---|
| 1. Business and content validation | Confirm offerings, audiences, destinations, prices, proof, and inquiry ownership | Verified launch inventory and assigned content owners |
| 2. Architecture and content model | Finalize routes, relationships, page briefs, and query ownership | No unresolved route conflicts or duplicate page purposes |
| 3. Design system and wireframes | Define tokens and responsive layouts | Core discovery and inquiry journeys are clear on mobile |
| 4. Visual design | Apply original photography, typography, and components | Representative pages approved with real content |
| 5. Technical foundation | Configure framework, CMS, rendering, media, and preview workflow | Content appears in initial HTML and editorial updates work |
| 6. Core implementation | Build page templates, navigation, inquiries, and restrained motion | Complete journeys work and inquiries are durably captured |
| 7. Content production | Write, source, verify, and publish launch material | No placeholder facts, images, reviews, or policies |
| 8. Validation | Check forms, accessibility, performance, SEO, and browsers | Critical failures resolved and launch criteria met |
| 9. Launch and monitoring | Publish, submit sitemap, monitor leads and errors | Site discoverable, inquiry delivery verified, support owner active |
| 10. Growth | Expand proven clusters and refine conversion | Decisions informed by actual search and inquiry evidence |

### Dependencies

- Confirm offerings before writing experience pages.
- Finalize content models before creating CMS templates.
- Test layouts with real content before polishing motion.
- Confirm inquiry ownership before making response promises.
- Establish indexing rules before adding advanced filtering.

### Required business inputs

Before implementation, confirm:

- Brand assets and final spelling.
- Actual experiences and destinations.
- Prices or quotation rules.
- Team details and operating credentials.
- Photography rights.
- Review permissions.
- Booking conditions.
- Inquiry destination and response process.

These inputs do not prevent completing the planning document; they are implementation dependencies.

---

## 17. First Build Scope

### Objective

Deliver a complete initial journey:

**Discover an experience → understand its suitability → verify the service → submit an inquiry.**

### Proposed launch content

| Area | First-build scope |
|---|---|
| Homepage | One complete editorial homepage |
| Experiences | Index, two useful collections, four to six verified detail pages |
| Destinations | Index, Nepal hub, three destinations tied to launch inventory |
| Stories | Index and two original stories |
| Guides | Index, Nepal hub, three practical guides |
| Tailor-made | One customization page |
| About | Business story and real team information |
| Responsible travel | Verified practices page |
| Reviews | Genuine review content when available |
| Contact and FAQ | Complete service information |
| Inquiry | Main form and confirmation page |
| Policies | Approved privacy, terms, and booking conditions |

Publish fewer pages if necessary to maintain content quality. Do not create empty destinations, categories, or review pages.

### Required functionality

- Responsive navigation.
- Experience and destination browsing.
- HTML-rendered page content.
- Breadcrumbs and section anchors.
- Optimized images.
- Lightweight FAQ and itinerary disclosures.
- Contextual inquiry prefilling.
- Durable submission handling.
- Team notification and acknowledgment.
- Server-confirmed success state.
- Essential analytics.
- Metadata, sitemap, canonical URLs, and appropriate structured data.
- CMS editing and content revalidation.

### Deferred features

- Payment checkout.
- User accounts.
- Live booking inventory.
- Advanced search.
- Complex filters.
- Saved trips.
- Interactive itinerary builders.
- Multilingual publishing.
- Chatbots.
- Autoplay video.
- Elaborate motion and 3D effects.

### Acceptance criteria

The first build is ready when:

1. Launch pages contain original, reviewed content and authorized images.
2. Core information and links appear in initial HTML.
3. Mobile visitors can evaluate experiences and inquire comfortably.
4. Keyboard users can operate navigation and forms.
5. Reduced-motion preferences are respected.
6. Inquiries are saved reliably before success is shown.
7. Notification failures are observable and recoverable.
8. Titles, canonicals, indexing rules, and sitemaps are correct.
9. Representative pages meet agreed lab performance budgets.
10. Field performance monitoring is ready for post-launch validation.
11. No fabricated trust claims, reviews, availability, or prices remain.
12. A named person owns inquiry follow-up and content maintenance.

**Deliverable:** An original, modern AweEscapes website that pairs inspiring travel discovery with practical information, fast mobile performance, and dependable inquiry generation.
