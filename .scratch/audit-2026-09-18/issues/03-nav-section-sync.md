# 03: Unify section and nav scroll model

**What to build:** Clicking any header link, scroll-indicator dot, or anchor scrolls to the correct section, and the active highlight always matches the section currently on screen — including the about section, which today is tracked inconsistently.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] One source of truth drives header links, scroll-spy tracking, scroll-indicator dots, and section ids (no hardcoded divergent lists that can drift again)
- [ ] About section is reachable and highlightable consistently across header nav, dots, and scroll-spy
- [ ] Experience anchor lands on the right element (no nested/conflicting ids inside another section)
- [ ] Reduced-motion users get native jumps with no smooth-scroll override, and anchor offset accounts for the fixed header
