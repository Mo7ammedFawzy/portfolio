# 01: Refresh onboarding docs to match the shipped site

**What to build:** A new contributor (or agent) reading the README and agent instructions can install, run, typecheck, build, and update site content without hitting stale instructions — every stack fact, section name, command, and content-model claim matches the code that actually ships.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] README stack section matches installed dependencies (no phantom GSAP/Poppins/indigo claims; Lenis, current fonts, Nuxt UI v4, Tailwind v4 all described correctly)
- [ ] README project-structure and content-update guide matches the real sections, components, composables, and the single site-content module (including how to add/hide a project and where its image resolves from)
- [ ] Agent instructions corrected where they drift: section ids (projects vs work), full section list (including contact/about), and actual font/animation stack
- [ ] Docs verified end-to-end: clean install plus dev, typecheck, build, and preview all work following only the written steps
