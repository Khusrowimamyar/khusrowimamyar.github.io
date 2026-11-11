# Quality report

Updated November 9, 2026 (Vancouver), after the animated project-grid refresh.

## Completed checks

- npm dependencies installed from the existing lockfile; no runtime dependency added for the card refresh.
- `npm run check`: ESLint, TypeScript, four Vitest/jsdom interaction tests and the production static build passed.
- The project filter regression covers all ten entries, category counts, all five filter choices, reset, result announcements and a new case-study link. Navigation and theme regressions remain passing.
- Ten case-study routes generated statically from the shared project dataset.
- Root export: 357 local links/assets resolve across fourteen HTML files. All ten project cards are present in exported HTML without JavaScript.
- The résumé source was read from both PDF pages with PDFKit. Added entries describe only documented scope. The public PDF was not changed.

## Browser verification

Local Chrome was driven with temporary Playwright tooling installed under `/tmp/khusrow-portfolio-browser`; it was not added to the portfolio dependencies.

Verified ten rendered cards, all category filters and reset, desktop/mobile layouts at 390, 600, 768 and 1440 CSS pixels, no page-level horizontal overflow, light/dark theme switching, reduced-motion filtering and new case-study navigation. Browser verification captures screenshots under `/tmp/khusrow-portfolio-*.png`.

A pre-existing mobile hero grid expanded to its illustration's intrinsic width. Using a zero-minimum grid track fixed the observed phone overflow. The project grid switches to one column below 700px.

Review identified hover transforms that still changed positions under reduced motion. A browser regression reproduced this and was used to verify that stack tiles and pre-rotated illustrations preserve their resting positions after the correction.

## Limits and deployment

This is a local preview and static build; no public deployment or repository push was performed. Live external project website availability was not audited. Public links use addresses documented in the résumé. The current sites may have changed since the original work.

Lighthouse and a complete assistive-technology audit were not run. The older `/portfolio` base-path export was verified before this refresh; this refresh's export verification covers the root configuration.

The installed Node 25 version produced engine-range warnings during dependency installation, although all current checks passed. The original install reported seven moderate dependency advisories; a subsequent detailed audit could not reach the npm registry. Dependency remediation was outside this card-design change.
