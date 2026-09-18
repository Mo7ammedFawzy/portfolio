# 07: Load and asset hygiene

**What to build:** A first visit on mid-tier mobile feels instant: only the images the site actually shows are shipped, they load lazily without layout shift, and scrolling costs no always-on background work.

**Blocked by:** 05 (SEO and link-preview slice — keeps the chosen preview/social assets, then cleans everything else).

**Status:** ready-for-agent

- [ ] Unused public assets (stale landing/dots/preview variants) removed; remaining images compressed and lazy-loaded below the fold with explicit dimensions
- [ ] Scroll progress and indicator work without an always-on animation-frame loop; scroll listeners are passive
- [ ] Project thumbnails degrade gracefully: the declared fallback path is either populated for real or deliberately removed with a placeholder strategy instead
- [ ] Production build measured with Lighthouse (performance, accessibility, best practices) and regressions noted or fixed
