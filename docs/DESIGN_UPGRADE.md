# Homepage design review

The homepage keeps the existing App Router routes, local content records, and server-rendered discovery components. No CMS, remote media, font requests, or additional dependencies were introduced.

The visual direction combines warm paper, forest ink, serif display headings, and readable system body typography. Pink, amber, blue, and orange appear as selective brand details rather than competing section backgrounds. The hero uses the requested copy and an immediately visible static illustration. Experience cards expose place, concept duration, description, and suitability. Destinations use taller illustrated tiles; planning guides use numbered editorial cards. The final invitation uses a dark forest panel with warm cream type.

The service cues describe a planning direction and are accompanied by a preview label. Existing concept labels and the honest traveler feedback placeholder remain. All artwork is original vector illustration, visibly identified; none is presented as destination photography.

Cards and actions use short CSS hover transitions. The existing Motion reveal is limited to the final invitation, begins visible, and respects reduced motion. Mobile navigation remains a native, non-modal disclosure, supports Escape with focus return, and dismisses on outside pointer interaction. Responsive layouts stack the hero and experience cards, retain a compact two-column destination grid, and switch to one column on very narrow screens.

## Review

Run `npm.cmd run dev` in PowerShell and visit http://localhost:3000. Review the homepage at desktop, tablet, and phone widths, then follow the experience, destination, guide, and planning links. Tab through navigation and cards, open the mobile menu and press Escape, and enable reduced motion in your device settings.

Checks: `npm.cmd run typecheck`, `npm.cmd run build`, and `npm.cmd run check:local` against a running local server. To exercise local inquiry saving against a production preview, set `$env:ENABLE_LOCAL_INQUIRIES="true"` before `npm.cmd run start`. The inquiry check writes a sample record under `.local/inquiries/`; no notification is sent.
