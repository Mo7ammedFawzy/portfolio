# Mohammed Fawzey Portfolio — Business Overview

## What it is
A one-page personal portfolio site for Mohammed Fawzey, a full-stack developer based in Benisuef, Egypt. It is for recruiters, hiring managers and possible clients. It shows his work, experience and skills in one place, and makes it easy to download his CV or email him.

For the full profile (bio, journey, experience, project list), see [CONTEXT.md](CONTEXT.md).

## Users & roles
| Role | Who | Can do | Can't do |
|---|---|---|---|
| Visitor | Recruiters, hiring managers, clients, other developers | Browse all sections, filter projects, preview live projects, download the CV, open GitHub/LinkedIn, start an email, switch light/dark theme | Log in, leave messages on the site, change any content |
| Owner | Mohammed | Change all content (projects, experience, skills, contact details, CV) by updating the site and republishing it | Edit content from a screen on the site (there is no admin area) |

There are no accounts and no stored visitor data. All content is fixed at publish time.

## Core concepts
- **Section** — one block of the single page (Home, Projects, About, Experience, Skills, Contact).
- **Project** — a piece of past work with a title, short description, category, technology badges, a live-site link and sometimes a source-code link.
- **Category** — how projects are grouped: Full-Stack, E-Commerce, Frontend.
- **Featured project** — a project marked with a "Featured" badge.
- **Hidden project** — a project kept in the content but not shown to visitors.
- **Live preview** — a pop-up window that shows a project's real website inside the portfolio.
- **Journey** — the short career timeline on the home section (graduate → frontend roles → full-stack now).

## Main flows
### First visit
1. Visitor lands on Home: name, role ("Fullstack Java Developer"), a one-line pitch and an "Available for meaningful work" note.
2. Visitor picks a next step: **Explore my work**, **Download CV**, or a GitHub / LinkedIn / email icon.
3. Below the hero, the "path so far" timeline shows the career steps, with the current one marked.
4. The top bar stays visible while scrolling and highlights the section on screen. On phones it collapses into a menu.

### Exploring projects
1. Visitor reaches Projects and sees a count of selected projects.
2. Visitor filters by All, Full-Stack, E-Commerce or Frontend. The count updates.
3. On a card the visitor can:
   - **Preview** — opens the live preview window.
   - **Visit site** — opens the real project in a new tab.
   - **Source** icon — opens the code, when the project has a public repository.
4. At the end, a "The rest is on GitHub" card links to his full GitHub profile.

### Live preview
1. The window opens showing the project's site at desktop width.
2. Visitor can switch to tablet or phone width, reload, or open the site in a new tab.
3. If the project's site refuses to be shown inside another page, or hasn't loaded after 8 seconds, the window shows a "Live Preview Restricted" note, a screenshot and a **Launch Live Website** button.
4. Visitor closes with the close button, the Escape key or by clicking outside.

### Learning about him
1. **About** — short bio and quick facts (location, email, education, languages), plus "More About Me", which opens LinkedIn.
2. **Experience** — one card per employer with role, dates and highlights; the current job is tagged "Current".
3. **Skills** — core technologies, then grouped lists (Frontend, Backend, Tools & Databases).

### Getting in touch
1. Visitor reaches Contact ("Have a Project in Mind?") or uses **Let's Talk** in the top bar at any time.
2. **Get In Touch** / **Let's Talk** opens the visitor's own email app with a new message to devfawzey@gmail.com.
3. Other routes: email, GitHub and LinkedIn icons on Home and in the footer; CV download on Home.
4. There is no form on the site. Messages arrive only through email or the external profiles.

## Business rules
- Nine projects are currently shown; four more are hidden.
- Projects appear in a fixed curated order: Library Management, GemyClass E-Learning, eCommerceHope, Traders Academy, Hager UI/UX Portfolio, Tabarak Trading, Grand Restaurant, Pexels Store, and Innovate Agency always last.
- Three projects are Featured: Library Management, GemyClass E-Learning, eCommerceHope.
- The source-code button only appears when the project has a public repository.
- If a project's screenshot is missing, a backup image is shown.
- Theme choice (light/dark) is remembered on the visitor's device for the next visit.
- Visitors who ask their device for reduced motion get no smooth scrolling or entrance animations.
- Any content change (new project, new job, new CV) requires the owner to update and republish the site.

## Pages / screens
Single page, all visitors:
- **Home** — intro, main calls to action, social icons, profile card, career timeline.
- **Projects** — filterable project cards, live preview window, link to GitHub.
- **About** — bio, quick facts, link to LinkedIn.
- **Experience** — employer cards.
- **Skills** — technology overview.
- **Contact** — invitation to reach out and email button.
- **Footer** — short tagline, section links, social icons.
- **Top bar** (always visible) — section links, theme switch, Let's Talk.

## Status
- **Done:** all sections above, project filtering, live preview with fallback, CV download, email contact, light/dark theme, mobile menu, reduced-motion support.
- **Planned (from the September 2026 site audit, all ready to start):**
  - Bring setup and content-editing docs in line with the live site.
  - Fix icons that do not display.
  - Make the top bar, scroll dots and section highlighting agree, including reaching About from the top bar.
  - Make roles, dates and education match across the site, CV and LinkedIn.
  - Better link previews when the site is shared, and better search-engine listing.
  - Keyboard and screen-reader pass, plus a colour-contrast check.
  - Faster first load: remove unused images, lighten scrolling effects.
  - Automatic checks on every change, and removal of unused content lists.

## Open questions
- About has no entry in the top-bar links, though the page tracks it as a section. Should it be added?
- The GemyClass live link on the site differs from the one in the profile notes (gemyclass.com). Which one is correct?
- The profile notes list 13 projects; the site shows 9. Are the 4 hidden ones (Movies Hunter, Commerce-Hope, .Store eCommerce, NIX Landing) retired for good?
- "Available for meaningful work" and "Open to work" are fixed text. Who updates them when his availability changes?
- Contact is email only, with no form. Is that intended, or is a form wanted?
- There is no visit or click tracking. Is there a goal to measure, such as CV downloads or emails started?
- The footer says © 2025. Should it show the current year?
- Are the current-role claims, dates and education on the site the same as in the downloadable CV? (Audit item 04 says this is not yet confirmed.)
