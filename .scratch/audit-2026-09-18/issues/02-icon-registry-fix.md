# 02: Fix broken icon registry (uninstalled collections)

**What to build:** Every icon a visitor can see — project tech badges, skill grids, journey tags, facts, header, and contact areas — renders from an installed icon collection, with no silently missing glyphs anywhere on the page.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] Every icon name used on the site audited against installed collections; missing collections added or names remapped to installed equivalents (note: similarly-named collections are not interchangeable)
- [ ] Projects, skills, journey, about-facts, and contact sections visually verified with all icons rendering in both light and dark mode
- [ ] Icon-name typing (or an equivalent guard) covers the names actually used, so a future typo or uninstalled collection fails fast instead of rendering blank
