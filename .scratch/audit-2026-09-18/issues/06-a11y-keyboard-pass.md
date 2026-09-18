# 06: Keyboard and assistive-tech pass

**What to build:** A keyboard-only or screen-reader user can navigate every section, filter projects, open and close project previews, toggle the theme, and reach out via contact — with visible focus and sane announcements throughout.

**Blocked by:** 03 (Unify section and nav scroll model — builds on the unified nav controls and dots).

**Status:** ready-for-agent

- [ ] Scroll-indicator dots are real labelled buttons (not generic elements with click handlers) with visible focus rings; all interactive elements show focus
- [ ] Mobile menu and project preview modal trap and return focus and close on Escape
- [ ] Theme toggle, project filters, and icon-only links all expose accessible names; active-section state is announced
- [ ] Text/background contrast meets AA in both light and dark themes, verified by measurement rather than eyeballing
