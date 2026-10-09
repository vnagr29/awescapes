# AweEscapes — first local implementation

Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and typed local content. No Sanity/CMS. The full `AWESCAPES_WEBSITE_PLAN.md` was read; the user's requested routes and local-first scope define this phase.

## Run locally

With Node.js 22 or newer installed:

```powershell
cd C:\Projects\awescapes
npm ci
npm run dev
```

Open http://localhost:3000. This workspace also includes a checksum-verified portable Node.js runtime, so it works without a system installation:

```powershell
cd C:\Projects\awescapes
$env:PATH = "$PWD\.tools\node-v22.23.3-win-x64;$env:PATH"
& .\.tools\node-v22.23.3-win-x64\npm.cmd run dev
```

Validation:

```powershell
npm run typecheck
npm run build
```

For local checks against a running production build, enable local inquiry storage in that server's shell:

```powershell
$env:ENABLE_LOCAL_INQUIRIES = "true"
npm start
```

Then, from a second terminal:

```powershell
npm run check:local
```

The smoke check saves one clearly labeled sample inquiry in `.local/inquiries/`. Dependencies are pinned and a lockfile is included. The portable runtime and npm cache are Git-ignored.

## Final folder structure

```text
awescapes/
  AWESCAPES_WEBSITE_PLAN.md
  README.md
  docs/IMPLEMENTATION.md
  public/images/
    nepal-landscape.svg
    README.md
  scripts/check-local.mjs
  src/
    app/
      layout.tsx, page.tsx, globals.css, not-found.tsx
      icon.svg, robots.ts, sitemap.ts
      experiences/page.tsx
      experiences/[slug]/page.tsx
      destinations/page.tsx
      destinations/nepal/page.tsx
      destinations/nepal/[slug]/page.tsx
      stories/page.tsx
      guides/page.tsx
      about/page.tsx
      responsible-travel/page.tsx
      reviews/page.tsx
      plan-your-trip/page.tsx
      contact/page.tsx
      faqs/page.tsx
      api/inquiries/route.ts
    components/
      layout/       Header, Footer, MobileNavigation
      home/         HeroSection, ConfidenceStrip, ExperienceCategories,
                    FeaturedExperiences, DestinationGrid, ApproachSection,
                    EditorialFeature, TravelerFeedback, PlanningGuides, InquiryCTA
      discovery/    ExperienceCard, DestinationCard
      editorial/    EditorialIndex
      ui/           SectionHeading, FAQAccordion, Breadcrumbs,
                    PageIntro, ScenePlaceholder
      forms/        InquiryForm
      motion/       Reveal
    data/content.ts
    lib/seo.ts
    types/content.ts
  .env.example, .gitignore
  package.json, package-lock.json
  next.config.ts, next-env.d.ts, tsconfig.json, postcss.config.mjs
  .tools/           portable Node and npm cache (ignored)
  .local/inquiries/ local test records (ignored)
```

## Routes

All 14 requested route patterns are present: `/`, `/experiences`, `/experiences/[slug]`, `/destinations`, `/destinations/nepal`, `/destinations/nepal/[slug]`, `/stories`, `/guides`, `/about`, `/responsible-travel`, `/reviews`, `/plan-your-trip`, `/contact`, `/faqs`.

Four experience slugs:

- `kathmandu-at-your-pace`
- `pokhara-slow-mornings`
- `annapurna-trail-days`
- `chitwan-nature-pause`

Four Nepal destination slugs: `kathmandu-valley`, `pokhara`, `annapurna-region`, `chitwan`.

This produces 20 concrete public pages. `/api/inquiries`, `/robots.txt`, `/sitemap.xml`, and `/icon.svg` are also implemented. Unknown detail slugs return 404. Stories and guides contain full original samples on the index pages with fragment links; separate article routes are deferred.

## Components and homepage

All 19 requested components exist. The homepage follows all 12 requested sections, with Header and Footer supplied by the shared layout. Additional helpers keep page introductions, editorial rendering, mobile navigation, illustrations, and subtle Motion behavior reusable.

## Assumptions and boundaries

- Nepal and English first. Four journeys are concepts, not confirmed offers.
- No fabricated reviews, prices, permits, credentials, awards, memberships, or booking availability.
- Original SVG/CSS illustrations stand in for approved photography. System fonts avoid external requests.
- The inquiry form saves test records on this computer, with server validation, same-origin checks, a honeypot, and duplicate retry handling. It sends no email or team notifications. Success appears only after storage completes; failure preserves entries.
- Local inquiry storage is enabled during development and requires explicit `ENABLE_LOCAL_INQUIRIES=true` during production-mode local testing. It is not a production lead-capture service.
- Essential content is HTML-rendered. Only mobile navigation, the inquiry form, and the CTA Motion wrapper are client components. Reduced motion is respected.
- Metadata, canonicals, Open Graph tags, and breadcrumb structured data are included. Sample pages default to noindex. The sitemap remains empty until indexing is enabled. Set a real `NEXT_PUBLIC_SITE_URL` and approve content before enabling `NEXT_PUBLIC_INDEXABLE=true`.

## Validation and pending work

Passed: dependency installation, TypeScript compilation, optimized production build, 20 public pages and their internal links, one H1 and metadata per page, detail 404 responses, initial-HTML itinerary content, and inquiry validation/storage/retry checks.

Pending: visual browser and real-device testing, measured performance/accessibility audits, authorized photography, verified inventory/business/contact/team information, genuine reviews, approved policies, production inquiry storage/delivery, analytics, and follow-up ownership. The in-app browser execution tool was unavailable in this session. No deployment was performed.

See `docs/IMPLEMENTATION.md` for decisions and local inquiry details.
