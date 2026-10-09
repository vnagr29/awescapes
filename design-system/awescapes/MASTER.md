# AweEscapes design authority

Version: 1.0 | Created: 2026-10-09 | Owner and approver: AweEscapes project owner

**Direction locked by the user: premium photo-led Nepal travel experience brand. Implementation is paused.** This document defines the proposed execution baseline for that direction. Its creation does not constitute approval of its detailed specifications, selection of final assets, or authorization to resume coding. Section 18 records the required approval gates.

## Authority and change control

Read this file before any future visual work, together with [AGENTS.md](../../AGENTS.md), [TASKS.md](../../TASKS.md), [DESIGN.md](../../DESIGN.md), [SEO.md](../../SEO.md), and [WORKLOG.md](../../WORKLOG.md).

- The user's latest explicit instructions govern scope. The current instruction permits this document only; do not modify application code, install dependencies, generate assets, or deploy.
- Once approved, this is the visual source of truth. It resolves visual ambiguity in older briefs, historical screenshots, and existing CSS. Existing implementation is context, not design approval.
- Preserve the operational, content-verification, accessibility, performance, and SEO requirements in the linked project documents. This authority does not authorize route, CMS, inquiry-storage, indexing, or business changes.
- MUST and MUST NOT are requirements. Defaults are binding unless an exception is explicitly described here or approved by the owner.
- A request to polish, improve, modernize, or fix a page authorizes work within this system; it does not authorize a new palette, font pairing, hero pattern, section order, or component language.
- Do not regenerate or overwrite this file with a design-system generator. Do not create a page-level override that silently supersedes it. Any future override must name the exact rule, affected scope, reason, owner approval, and date.
- Before a material departure, prepare a concrete comparison and proposed authority amendment for review. Obtain explicit owner approval before implementing that departure. Routine fixes within an approved specification need no repeated design approval.
- Future implementation records must identify the approved authority version, affected components, checks, and exceptions in WORKLOG.md. Do not mark historical checks as new evidence.

### Inputs and reference boundaries

The local documents and [website plan](../../AWESCAPES_WEBSITE_PLAN.md) establish the traveler journey, section sequence, content integrity, and existing editorial foundation. The [earlier upgrade brief](../../codex-design-upgrade.txt) supplies the current working hero copy; its instruction to implement is superseded by the user's current pause.

| Reference | Permitted influence | Boundary |
| --- | --- | --- |
| UI UX Pro Max | System-level consistency and a pre-delivery review process | Its recommendations do not choose the AweEscapes brand or override this document. |
| 21st.dev | Component finish, alignment, spacing, and state clarity | Do not copy blocks, distinctive compositions, code, imagery, or copy. |
| Motion.dev | Restrained, accessible interaction quality | Do not add animation merely because a library supports it. |
| Ace the Himalaya | Travel information architecture, practical depth, and related content | No visual, layout, wording, image, or branding imitation. |

Source disclosure: the separate uploaded UI UX Pro Max guidance was not located in the accessible project files or by the targeted filename search. This version uses the project's existing summary and the official public [system guidance](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md), [web quick reference](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/references/quick-reference.md), and [pre-delivery guidance](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/references/pro-rules.md), reviewed on 2026-10-09. The latter identifies itself as native/mobile guidance; apply relevant review principles to web CSS pixels and browser behavior, not native units. No generator or local skill search was run. Reconcile the actual uploaded version before implementation approval; do not claim it has been reviewed.

Reference pages reviewed for their limited roles: [21st.dev](https://21st.dev/), [Motion accessibility](https://motion.dev/docs/react-accessibility), and [Ace trip information](https://www.acethehimalaya.com/trip/everest-base-camp-trek/). The specifications below are AweEscapes decisions, not reproduced reference designs.

## 1. Brand design thesis

Make Nepal feel close enough to imagine and clear enough to plan. Lead with real places and human moments, then give travelers the practical information and service evidence needed to inquire confidently.

| Personality | Required expression |
| --- | --- |
| Warm | Paper backgrounds, natural light, approachable language. |
| Human | Named voices, contextual portraits, honest service explanations. |
| Emotional | Images of lived moments and a concise invitation to explore. |
| Modern | Clear navigation, generous spacing, consistent controls. |
| Editorial | Strong image selection, deliberate hierarchy, readable stories. |
| Outdoorsy | Real terrain, weather, movement, and practical suitability. |
| Experience-led | Describe what a traveler will do and feel before selling logistics. |
| Trustworthy | Visible facts, realistic expectations, traceable claims. |

Premium means careful selection, clarity, service, and craft. It does not imply luxury accommodation, exclusivity, or a service level the business has not verified. Nepal and English remain the initial scope; qualified inquiries remain the primary business outcome.

Use specific, welcoming sentences. Avoid breathless superlatives, manufactured urgency, vague transformational promises, and repetitive keyword copy. A visitor should understand the destination, experience offer, and next action within the opening view.

## 2. Landing page pattern

**Fixed pattern: photographic editorial discovery leading to an inquiry.** The reading journey is inspiration → orientation → suitable experiences → proof and human context → planning help → inquiry.

- Use a solid header, one wide photographic hero, and vertically ordered sections within a shared content grid.
- Use warm paper as the main canvas, white for card surfaces, and one forest closing invitation. Use whitespace and fine rules to separate content; do not give every section a colored panel.
- Keep editorial asymmetry limited to the hero composition and one story feature. Discovery grids remain regular and easy to compare.
- Keep primary copy and actionable information in HTML. Images support meaning; they do not contain headings or essential facts.
- No booking-engine search panel, price-comparison dashboard, bento mosaic, floating islands, illustration collage, or carousel as the landing-page structure.
- Inner pages inherit the tokens and controls. Their page purposes remain those in DESIGN.md and SEO.md; do not force the homepage sequence onto every template.

## 3. Homepage section hierarchy

This order is fixed. The conditional omissions below are the only automatic omissions permitted; they do not authorize reordering.

| Order | Section | Content and presentation | Completion rule |
| --- | --- | --- | --- |
| 1 | Header | Wordmark, five navigation links, planning action. | Follow section 9. |
| 2 | Hero | One photograph, Nepal context, H1, short introduction, two actions. | Follow section 4. |
| 3 | Service cues | Up to three short, evidenced service statements in a quiet strip. | Omit at launch if none are verified; never fill with invented statistics. |
| 4 | Experience categories | Four text-led category links with small consistent line icons. | Default categories: Trekking & Hiking; Culture & Local Life; Nature & Wildlife; Slow Travel & Retreats. Display only categories supported by useful content and inventory. |
| 5 | Featured experiences | Four to six image-led cards; two columns on desktop, one on phones. | Fewer verified offerings may be shown honestly; owner approves reduced launch inventory. No duplicate filler. |
| 6 | Destinations | Three or four photo cards with place names and short context below images. | Link to real destination pages connected to relevant experiences. |
| 7 | AweEscapes approach | Short introduction and three concise steps explaining planning and support. | Describe the verified process. No invented operational promises. |
| 8 | Editorial feature | One human story; image and text side by side on desktop, stacked on mobile. | Original reviewed story, accurate attribution, real destination context. |
| 9 | Traveler feedback | One to three attributable quotations in a static layout. | Omit entirely at launch until genuine feedback and permission exist. No empty review section or sample stars. |
| 10 | Practical guides | Three clear guide links with specific planning questions and short summaries. | Helpful reviewed content, accurate destinations and links. |
| 11 | Inquiry invitation | Forest surface, one heading, short next-step explanation, Plan your trip action. | Follow the real service and form behavior. |
| 12 | Footer | Brand, grouped discovery/planning/business links, verified contact and policies. | No keyword dump, fake partner logos, or unsupported contact channels. |

Use one H1 in the hero, H2 for meaningful sections, and H3 for card titles where appropriate. A strip or navigation list does not need an artificial heading for styling. Section headings should orient the traveler without repeating the brand name everywhere.

If essential launch content is missing, keep the work in a clearly labeled private preview and record the dependency. Do not manufacture content or redesign around the gap. Preview labels stay visible until verification; they are not the final visual language.

## 4. Hero design rules

- Desktop/tablet from 768px: one full-width rectangular photographic field below the solid header. Align text to the left edge of the shared container; reserve a calm area of the photograph for it. Target 560–680px height at normal text size; allow growth when content or zoom requires it.
- Phones below 768px: show the photograph at 4:3, followed immediately by the H1, introduction, and actions on paper. This stacked treatment is the approved mobile version, not an alternative design direction. Text must remain readable without image-dependent contrast.
- Desktop text measure: at most 12ch for the display heading and 46ch for supporting copy. Do not force line breaks that create awkward phone wrapping.
- Keep the existing working headline **“Step out. Feel more.”** and introduction **“Curated Nepal escapes shaped around adventure, culture, nature, and meaningful moments.”** as review copy. Add the short context label **“Nepal travel experiences”** so the slogan is not the only explanation. Final wording and the service implication of “curated” require owner approval.
- Primary action: **Explore experiences**, linking to `/experiences`. Secondary: **Plan your trip**, linking to `/plan-your-trip`. These routes are fixed for this design baseline.
- Use a forest scrim behind desktop overlay text, strongest at the text edge and easing toward the image. A starting 70% opacity is a tuning value, not a contrast guarantee. Measure the actual crop. If it fails, strengthen the scrim or select a better crop; do not sacrifice readability.
- Desktop primary button uses white text on the accent fill. The secondary uses forest text on opaque paper so its contrast does not depend on the photograph. Keep the secondary visually subordinate through its border treatment.
- H1, image, and actions must appear immediately. No entrance sequence, video, rotation, animated typing, scroll prompt competing with the CTAs, or embedded inquiry form.
- Do not impose a full-viewport height. At enlarged text sizes, let the hero grow and scroll normally. Reserve image space before loading; keep text usable if the image fails.

## 5. Photography direction

Photography carries the brand. Illustrations may remain labeled in the historical preview until replacement is authorized, but they cannot satisfy final visual acceptance.

- Choose authentic Nepal landscapes with human scale, local life, shared meals, trails, wildlife, accommodation, and quieter travel moments. The homepage must include human context as well as scenery.
- Prefer natural light, believable skin tones, warm neutrals, restrained saturation, and visible texture. Keep skies and vegetation credible; avoid aggressive HDR, orange/teal presets, synthetic haze, and heavy filters.
- Show travelers and local people with dignity and context. Do not stage poverty or cultural practices as decoration. Record consent where appropriate.
- The hero should suggest a specific lived experience with depth and a clear focal point. Do not use an unrelated mountain panorama merely because it is dramatic.
- Use real authorized photography for destination and service representation. Generated imagery, composites, or stock models must not masquerade as actual places, guests, guides, or accommodations.
- Record each asset's source, creator, license/permission, location, caption, alt-text purpose, and approved desktop/mobile focal points. No scraping, hotlinking, competitor imagery, or watermark removal.
- Art-direct crops per image. Never cut through faces or obscure the subject with text. A separate mobile crop of the same photograph is allowed; an unrelated substitute requires approval.
- Fixed ratios: experience images 3:2; destination images 4:3; editorial feature 4:5; mobile hero 4:3. Desktop hero uses its approved responsive field. Within each card family the ratio must match.
- Use responsive modern formats with a suitable fallback, reserved dimensions, and accurate sizes. Prioritize only the actual hero; lazy-load lower photography. Target approximately 150–250 KB for the delivered mobile hero, subject to visible quality review.
- Provide meaningful alt text when an image adds information. Use an empty alternative when it is purely decorative or duplicates adjacent information; keep required credits in visible captions or the approved credit location.

## 6. Color system

These semantic tokens are the approved proposal. Future components must consume shared roles, not introduce independent hex values. Light paper is the sole page theme; the forest invitation is a local inverse surface, not a separate dark mode.

| Token | Value | Permitted role |
| --- | --- | --- |
| `color-paper` | `#F8F5EE` | Main background. |
| `color-surface` | `#FFFFFF` | Cards, fields, primary-button text. |
| `color-surface-soft` | `#EFE9DE` | A quiet approach panel or grouped secondary content. |
| `color-ink` | `#24352F` | Main text, forest panels, photo scrim base. |
| `color-muted` | `#626A61` | Supporting text on light surfaces. |
| `color-rule` | `#DEDFD4` | Decorative separators and card borders only. |
| `color-control-border` | `#7C8478` | Necessary field/control boundaries on light surfaces. |
| `color-accent` | `#B52044` | Primary actions, text links, limited emphasis. |
| `color-accent-hover` | `#941B38` | Primary hover/pressed state. |
| `color-on-forest` | `#F8F5EE` | Text on forest surfaces. |
| `color-focus` | `#B52044` | Focus ring on light surfaces. |
| `color-focus-inverse` | `#F8F5EE` | Focus ring on dark surfaces, with forest separation where needed. |
| `color-success` | `#24352F` | Success text/icon with explicit status wording on paper. |
| `color-error` | `#B52044` | Error text/icon with explicit error wording on paper. |

Existing brand details `#FF2C5A`, `#FF9515`, `#2E97FF`, and `#FF5B00` are reserved for approved brand artwork and tiny nonessential decorative details. They must not become competing CTA fills, body-text colors, category backgrounds, or gradients. The deeper editorial accent supplies the accessible action color.

Keep at least roughly 80% of non-photo page surface area neutral; accent-colored decoration should occupy no more than roughly 5%. This is a visual restraint rule, not a requirement to add decoration.

Reference calculations for opaque token pairs: ink/paper 11.87:1; muted/paper 5.14:1; muted/soft surface 4.63:1; white/accent 6.45:1; accent/paper 5.93:1; control border/paper 3.55:1. These calculations validate the pairs only. Opacity, photographs, state changes, and overlays require separate rendered checks. Decorative rules are not sufficient as required control boundaries.

## 7. Typography system

Lock the existing characterful system pairing for this baseline: display **Georgia, Times New Roman, serif**; body and UI **Segoe UI, Arial, Helvetica, sans-serif**. Do not download or substitute a fashionable font during implementation. A custom pairing requires specimens and explicit approval of an authority revision. Use the approved existing wordmark; do not invent a new logo.

| Role | Phone / tablet / desktop size | Weight | Line height |
| --- | --- | --- | --- |
| Hero display | 40 / 56 / 72px | 400 serif | 1.05–1.1 |
| Section H2 | 32 / 40 / 48px | 400 serif | 1.15 |
| Feature heading | 28 / 32 / 40px | 400 serif | 1.2 |
| Card H3 | 24 / 24 / 28px | 400 serif | 1.25 |
| Introductory text | 18 / 20 / 20px | 400 sans | 1.6 |
| Body | 16 / 18 / 18px | 400 sans | 1.6 |
| Navigation and controls | 16 / 16 / 16px | 600 sans | 1.4 |
| Metadata and captions | 14 / 14 / 14px | 400 sans | 1.5 |
| Eyebrow | 14 / 14 / 14px | 600 sans | 1.4 |

Values describe the default 16px root equivalent; implement with scalable units. Phone is below 768px, tablet 768–1023px, desktop 1024px and above. Fluid interpolation within these bounds is allowed; no unbounded viewport-only type.

Body copy uses normal tracking and a maximum 65ch measure. Hero tracking may tighten to -0.02em; small uppercase eyebrows may use 0.06em. Do not use uppercase paragraphs, tiny labels, repeated italic headings, multicolor headline fragments, or ultra-light weights. Titles and important facts wrap rather than truncate. Leave font fallbacks readable and tolerate their different metrics.

## 8. Spacing system

Use a 4px base and this finite scale: **4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128px**. Assign semantic roles centrally; no local spacing scale per page.

| Role | Phone | Tablet | Desktop |
| --- | --- | --- | --- |
| Page side gutter | 16px | 32px | 48px |
| Content maximum width | Available width | Available width | 1200px |
| Standard section vertical padding | 64px | 80px | 96px |
| Compact service strip vertical padding | 24px | 32px | 32px |
| Section heading to content | 24px | 32px | 40px |
| Grid gap | 24px | 24px | 32px |
| Card body padding | 24px | 24px | 24px |
| Related text gap | 8–16px by role | Same | Same |
| Editorial image/text gap | 24px | 32px | 48px |

Each adjacent section owns its padding; do not add extra arbitrary margins at the boundary. The hero and service strip use their own stated rhythm. Keep headings, card edges, and section actions aligned to the same container. Let the container narrow naturally; never simulate responsiveness with a fixed minimum page width.

Geometry tokens: 8px radius for controls, 12px for cards and photographic frames, square full-width hero. No arches, blob masks, rotated panels, pill-shaped primary buttons, or inconsistent corner families. Use 1px borders. Resting cards have no shadow; an interactive hover may use one shared soft shadow (`0 8px 24px` with forest at 10% opacity). No glow.

Layer roles: content 0; sticky header 20; its mobile disclosure 30; skip-link focus 100. Do not create higher layers to cover a layout defect. A future modal requires an explicitly reviewed layer and interaction specification.

## 9. Header/navigation rules

- One solid paper header in normal layout, sticky at the top with a fine lower rule. Baseline height 64px on phones/tablets and 80px on desktop; allow content growth with text enlargement. No transparent-on-photo or floating pill variant.
- Left: approved AweEscapes wordmark, linked home, with an accessible brand name. Preserve its proportions and clear space. Text treatment is provisional until the brand asset is approved.
- Desktop order: **Experiences, Destinations, Stories, Travel Guides, About**, then **Plan your trip**. Destinations: `/experiences`, `/destinations`, `/stories`, `/guides`, `/about`, `/plan-your-trip` respectively.
- Use compact navigation below 1024px. At larger widths, fall back to the compact version if enlarged text makes the complete row fail; never shrink labels to force them into the row.
- The mobile menu is a labeled, non-modal disclosure below the header. It exposes the same ordered links and planning action. Keep the current native disclosure behavior as the functional starting point.
- The trigger reports its expanded state and controls the menu. Keyboard users can open, navigate, and close it; Escape closes it and returns focus to the trigger. Closed content must not remain tabbable. Do not trap focus in a non-modal menu.
- Current-page treatment uses text/underline or another non-color cue and appropriate current-page semantics. Hover alone must never be required.
- Reserve sticky-header clearance for anchors and focused content. Do not auto-hide the header on scroll. If the open menu exceeds a short viewport, keep every link reachable without trapping page navigation.
- No mega-menu, promotional top bar, search box, currency selector, or new utility icon without an approved need and specification.

## 10. Card system

Every card family uses the shared typography, spacing, colors, and geometry. Use one principal destination per card. Prefer a semantic title link with a clearly labeled related action; never nest links or buttons inside a wrapping link. If the whole surface is interactive, provide only one focus stop and no competing inner controls.

| Family | Required structure | Responsive behavior |
| --- | --- | --- |
| Experience | 3:2 photo; place; title; duration and suitability; short description; View experience action. Verified price/quote context only if available. | One column below 768px, two from 768px. Four to six cards is the default. |
| Destination | 4:3 photo; place name; one short contextual sentence; destination link. | One column below 480px; two from 480px; three or four from 1024px according to approved item count. |
| Category | Small line icon; category label; short clarifier if needed. Light background, no hero illustration. | One column below 480px, two from 480px, four from 1024px. |
| Guide | Topic label; specific title; short description; descriptive link. Optional supporting image only if approved consistently for the family. | Stacked editorial rows below 768px; three columns from 768px. |
| Feedback | Genuine quotation; attribution; verified trip/date context if permitted. | Static stacked layout on phones; up to three columns on desktop. |

- Put practical facts below the photograph, not in a collection of floating badges over it. Price is supporting information, not the dominant typographic element.
- Display effort/suitability as clear words. Do not imply a trip is universally easy or safe through an unexplained colored icon.
- Equalize row alignment through layout, not fixed text heights or clipping. Test long titles and missing optional prices. Mandatory missing facts block publication of the affected offering.
- Hover/focus may strengthen the border or underline the title; optional image zoom is at most 1.02 on hover-capable devices. No tilt, bouncing, moving text, or shifting neighboring cards.
- Show all card content without hover and without animation. A smaller catalog must not become a swipe-only rail.
- Use a single line-icon style: 24px view box, consistent 1.5–2px stroke, 20 or 24px rendered sizes. Icons supplement labels; emoji and decorative icon mixes are prohibited.

## 11. CTA system

| Level | Appearance | Use |
| --- | --- | --- |
| Primary | Accent fill, white text, 8px radius. | One dominant action within a decision area. Hero: Explore experiences. Closing invitation: Plan your trip. |
| Secondary | Paper fill, forest text, control-border outline. | Hero planning action and genuinely secondary choices. |
| Text link | Accent on light surfaces; paper on forest; persistent underline within prose. | Card and editorial navigation; descriptive destination labels. |

- Header Plan your trip is a compact secondary action while the hero primary remains dominant. It keeps the same destination throughout the site.
- Buttons have a 48px minimum height, at least 24px horizontal padding, and 8px minimum separation from adjacent targets. Wrap labels if necessary rather than clipping them. Phone hero actions stack at full available width, primary first.
- Use anchors for navigation and buttons for state changes or form submission. No vague “Click here,” dead buttons, or “Book now” wording where only an inquiry exists.
- Define default, hover, focus-visible, pressed, disabled, and loading states. Hover darkens the primary fill; pressed does not change layout. Focus uses a 3px ring with 3px offset and an appropriate contrasting separation layer on photographs or mixed backgrounds. Never animate focus appearance.
- Loading actions show readable progress text and prevent duplicate submissions. Disabled controls expose disabled semantics and a reason when needed; low opacity alone is insufficient.
- The inquiry flow requires name, email, and trip ideas; other fields remain optional as defined in DESIGN.md. Initial contact must not request passports or sensitive medical information.
- Show validation beside fields and in a linked summary when multiple errors occur. Preserve entries after failure, expose retry, and announce status. Success means confirmed storage; a local-only preview must say so and must not imply team delivery.
- No fixed mobile CTA on the homepage. No competing floating chat, WhatsApp, booking, and inquiry buttons.

## 12. Trust/service cue system

Trust comes from useful evidence near the decision it supports. It is not a decorative badge layer.

- Use up to three concise service cues after the hero, with one short explanatory line each. Existing working labels are Local planning, Flexible journeys, and Experience-first design; even these require operational confirmation before appearing as factual launch claims.
- Pair an operational statement with a real explanation or relevant About/service page. Record claim, evidence, owner, approval date, and review date in the future content record.
- Use verified team names and roles, accurate support arrangements, transparent inclusions/exclusions, and realistic next steps. Show genuine portraits only with permission.
- Reviews require a real source, permission, and accurate attribution. Do not rewrite sentiment, manufacture stars, invent totals, or display an aggregate without supporting data.
- Awards, affiliations, operating licenses, response times, experience counts, prices, and availability must all be evidenced before display. Absence of proof is not permission to substitute vague claims such as “trusted by thousands.”
- Keep concept labels conspicuous in private previews. At launch, omit unsupported optional cues and review blocks; do not leave a visually polished fictional proof section.

## 13. Mobile-first rules

- Design the complete reading journey at 390px, then verify 320, 375, 768, 1024, and 1440px plus phone landscape. The layout must also work between those widths.
- Use the section 8 gutters, section 7 type sizes, and section 10 grid transitions. The 480px threshold is only for small discovery cards; it is not permission to invent another general breakpoint system.
- Preserve desktop content and reading order. Stack the story image before its text and the hero photo before its text. Do not hide suitability, service caveats, prices, or planning facts to simplify a screenshot.
- Aim for generous targets of at least 44 by 44 CSS pixels for navigation and interactive controls; primary buttons remain at least 48px high. Keep adjacent controls separated. Inline prose links remain recognizable text links with comfortable line spacing.
- No horizontal page overflow, swipe-required discovery, hover-only facts, sticky sidebars, or background scroll traps. Long words and URLs wrap safely.
- Respect safe-area insets, device orientation, browser chrome, text enlargement, and the on-screen keyboard. Do not enforce `100vh` content boxes or prevent zoom.
- Keep the first screen calm: one brand, one meaningful image, one clear message. On short screens the actions may follow naturally below the fold; do not shrink essential text to force them into view.

## 14. Motion rules

Motion confirms an interaction; it is not an attraction. Default to static content and short CSS feedback. Motion.dev is an implementation reference, not a required dependency. Respecting reduced motion is supported by its [accessibility guidance](https://motion.dev/docs/react-accessibility).

| Interaction | Fixed duration | Permitted behavior |
| --- | --- | --- |
| Button/link feedback | 160ms | Color/border transition; no spatial movement. |
| Card feedback | 180ms | Border/shadow change; optional image scale up to 1.02. |
| Navigation feedback | 200ms | Underline or state-color transition. |
| Mobile disclosure | 240ms maximum | Optional opacity transition; immediate usable controls. Native instant expansion is acceptable. |
| User-operated gallery on a future detail page | 220ms | Short crossfade after explicit input. |

Use a shared ease-out curve, `cubic-bezier(0.2, 0, 0, 1)`, for permitted movement/opacity. No staggered entrances or section reveals in the homepage baseline, including the existing final-invitation reveal. Content is visible on initial render and remains useful without JavaScript.

Reduced-motion preference removes zoom, positional changes, reveals, animated scrolling, and decorative fades. Menu and disclosure state changes are immediate. Never delay focus, navigation, feedback, or error messages to finish animation.

Prohibited: scroll hijacking, parallax, autoplay video, auto-rotating carousels, infinite marquees, animated counters, text splitting, custom cursors, WebGL, particles, 3D, elastic bounces, and page-transition overlays. Adding a library does not override these exclusions.

## 15. Accessibility checklist

Target WCAG 2.2 AA, retaining the project's stronger 44px control target and visible-focus rules. The [W3C quick reference](https://www.w3.org/WAI/WCAG22/quickref/) is the standards reference; this checklist does not establish conformance by itself.

- [ ] Landmarks, a working skip link, one H1, logical headings, and reading order match the visible structure.
- [ ] Every action is keyboard operable; focus stays visible and unobscured by the header, menu, or other content.
- [ ] Navigation/disclosure labels and states are understandable with a screen reader. Closed content is not reachable accidentally.
- [ ] Normal text reaches 4.5:1 contrast; large text 3:1; meaningful non-text controls and state indicators 3:1. Check actual rendered states and hero crops, not just tokens.
- [ ] Meaningful images have useful alternatives; decorative images/icons are omitted from the accessibility tree appropriately. Link names identify destinations.
- [ ] Labels, errors, selection, and status never depend on color, location, or an icon alone.
- [ ] At 200% text enlargement nothing is clipped. At 400% zoom on a 1280px-wide desktop viewport, content reflows to the equivalent 320px width without two-dimensional scrolling.
- [ ] User text-spacing overrides do not break content. Forms retain visible labels, 16px-or-larger inputs, understandable errors, and preserved values.
- [ ] Targets meet the project sizes; hover and drag are not required. Native zoom and normal scrolling work.
- [ ] Reduced-motion mode removes optional movement. No flashing or automatically moving content is introduced.
- [ ] Test navigation, discovery links, and inquiry states with keyboard plus at least one desktop and one mobile screen-reader/browser pairing. Record versions and unresolved issues.
- [ ] Automated checks are supplemented by manual testing. Missing screen-reader or real-device verification is reported as pending, never inferred from a passing build.

## 16. Anti-patterns to avoid

Reject a proposed change if it introduces any of these:

- A cheap package-catalog identity: discount ribbons, countdowns, price-dominated cards, dense sales grids, or forced urgency.
- A generic AI/SaaS template: gradient blobs, interchangeable bento blocks, giant abstract icons, filler statistics, or feature grids unrelated to travel.
- Flat illustration-led heroes, invented landscapes, or decorative art replacing truthful photography in the final experience.
- Fake luxury: black-and-gold styling, gratuitous script typography, unsupported exclusivity, or hotel imagery unrelated to the offering.
- Clutter: badge piles, multiple competing CTA systems, floating widgets, rainbow categories, or repeated promotional banners.
- Arbitrary redesign: new fonts, local hex values, token overrides, altered card ratios, mixed radii, arches, new section order, or a different hero on each revision.
- Copied competitor layouts, text, branding, assets, or unverified operating facts. References cannot serve as ready-made templates.
- Animation that delays information, hides initial content, intercepts scrolling, or makes the site feel like a demo.
- SEO copy used as visual filler, invisible essential content, inaccessible click targets, or broken links to planned routes.
- Treating a concept preview, historical test pass, or approved visual direction as evidence that the business is ready to launch.

## 17. Homepage acceptance checklist

This is the delivery gate for a future authorized implementation. Leave items unchecked until evidence exists. A screenshot alone cannot pass functional requirements; a build alone cannot pass visual requirements.

### Visual and content evidence

- [ ] Owner-approved authority version and reference mockups are identified in the implementation record.
- [ ] Header, section order, hero composition, mobile stacking, and the two hero destinations match this document.
- [ ] Authorized photography leads the page; crops and human context are reviewed on phone and desktop.
- [ ] Every section uses the defined type, colors, geometry, spacing, and card family. No unexplained one-off style exists.
- [ ] Hero text and actions are immediately visible, readable, and usable with failed image loading and reduced motion.
- [ ] Titles, facts, captions, and controls survive long content, missing optional data, and enlarged text without clipping.
- [ ] Claims, reviews, prices, imagery, and content links have evidence. Conditional omissions follow section 3 and are recorded.
- [ ] Working hero copy, final navigation labels, service cues, and inquiry next-step wording have owner sign-off.
- [ ] Full-page and opening-view captures at 390 and 1440px match the approved composition. Responsive checks cover 320, 375, 768, 1024px and landscape as well.

### Interaction, accessibility, and search

- [ ] All links lead to real destinations; planned routes are not presented as existing. Cards have unambiguous actions.
- [ ] Header/menu operation, focus return, anchor clearance, forms, and error/retry states are tested where affected.
- [ ] Every applicable item in section 15 has evidence; unresolved accessibility failures are recorded and resolved before acceptance.
- [ ] Primary text, facts, and links exist in initial HTML. Metadata, canonicals, and heading hierarchy follow SEO.md.
- [ ] Preview indexing safeguards and accurate concept/local-inquiry notices remain until separately authorized launch conditions are met.

### Performance and completion evidence

- [ ] Images reserve space and use suitable responsive sources; only the hero is prioritized; lower images load lazily.
- [ ] Measure against the existing targets: LCP ≤2.5 seconds, INP ≤200ms, CLS ≤0.1 at the 75th percentile when sufficient field data exists. Before launch, record representative lab results and clearly state that field verification remains pending.
- [ ] Review mobile hero approximately 150–250 KB, initial mobile transfer approximately 1 MB or less, and initially requested compressed homepage JavaScript aiming for 180 KB or less. Record actual sizes and justify any approved exception.
- [ ] No new web fonts are part of this baseline. An approved later font change remains within the existing two-family and two-to-four optimized-file budget.
- [ ] Record browser, device/viewport, network assumptions, test date, screenshots, keyboard/screen-reader findings, and performance limitations.
- [ ] After code changes, run the relevant existing type, build, and local checks according to TASKS.md; record actual results and any local inquiry fixture creation.
- [ ] Compare the final diff with the authorized scope and this authority. Update WORKLOG.md during the future implementation task; do not mark launch approved through a design checklist.

## 18. What must be approved before coding

The user has approved the **brand direction** by explicit instruction. The specific execution rules in this newly written version are a concrete proposal for sign-off. All gates below remain pending; a prior implementation pass or elapsed time cannot supply approval.

| Gate | Concrete review material required | Current status |
| --- | --- | --- |
| Authority baseline | This MASTER.md version, including hero pattern, palette, font stacks, spacing, card geometry, hierarchy, motion, and permitted omissions. | Pending owner approval. |
| Uploaded guidance reconciliation | Identify and read the actual uploaded UI UX Pro Max material; record its version/location and resolve any material difference without silently replacing this authority. | Pending source availability and review. |
| Visual composition | Original static homepage mockups at 390px and 1440px; include the full page, hero crops, header/menu view, representative cards, and closing invitation. Show working content and clearly identify placeholders. | Pending; not produced by this document-only task. |
| Brand and assets | Approved brand spelling/wordmark, selected hero and card/story photography, permissions, credits, and responsive crops. | Pending; existing illustrations do not satisfy this gate. |
| Copy and evidence | Final hero wording, service statements, representative experience facts, CTA destinations, real inquiry expectations, and a recorded plan for unsupported optional content. | Pending business review. |
| States and mobile behavior | Reviewable specifications or frames for menu open/closed, hover/focus/pressed, narrow and long-content cards, reduced motion, and affected inquiry states. | Proposed here; visual/state review pending. |
| Implementation scope | Named pages/components to change, any approved exceptions, acceptance checks, and explicit owner instruction to resume coding against this version. | Paused; no coding authorized. |

Approval must identify the version and scope in the conversation or project decision record. One explicit approval may cover multiple clearly named gates; do not request the same approval again. A request to revise this document permits document revision only. A request to create mockups permits that design work only. Neither automatically resumes application implementation.

After these gates pass, future work must implement the approved design and verify section 17. If a necessary input is still missing, identify the exact dependency and complete independent authorized preparation; do not substitute fabricated assets or a new visual direction.

### Document-only change record

2026-10-09: Created this authority from the user's final direction, the five project guidance files, supporting local design references, and the limited public references disclosed above. This task changes only `design-system/awescapes/MASTER.md`. Existing code and historical project records are not rewritten. Application tests, browser validation, mockups, asset selection, and production approval are outside this document-only delivery.
