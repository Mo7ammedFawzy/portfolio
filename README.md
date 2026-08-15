# Mohammed Fawzey — Portfolio

Personal portfolio website for **Mohammed Fawzey**, a software developer who builds modern frontends with Vue and scalable backends with Spring Boot.

🌐 **Live site:** [mohammedfawzey-portfolio.vercel.app](https://mohammedfawzey-portfolio.vercel.app/)

---

## Tech Stack

- **Vue 3** (`^3.5`) with `<script setup>` SFCs
- **Vite 7** build tooling
- **Nuxt UI v4** for UI components (`UButton`, `UBadge`, `UIcon`, `UApp`, ...)
- **Tailwind CSS v4** (CSS-first configuration, no `tailwind.config.ts`)
- **TypeScript**
- **GSAP** for page-transition and header animations
- **VueUse** for utilities
- **Iconify** icons (collections declared in `package.json`)
- **Google Fonts** via `@fontsource/poppins`
- Deployed to **Vercel** as a static SPA

## Getting Started

```bash
# install dependencies
pnpm install

# start the dev server
pnpm dev

# typecheck
pnpm typecheck

# production build (vite build + vue-tsc)
pnpm build

# preview the production build
pnpm preview
```

> Use `pnpm` — the repo pins `packageManager: "pnpm@11.21.0"`.

## Project Structure

```
src/
├── App.vue                  # Root component: loader, header, sections
├── main.ts                  # Vue bootstrap + Nuxt UI plugin
├── assets/css/main.css      # Tailwind 4 theme (colors, Poppins, dark variant)
├── components/
│   ├── App/                 # Header (GSAP nav) and Footer (Resume button)
│   ├── Base/                # Loader and content Wrapper
│   └── Home/                # Landing, Projects, Tech, Tools sections
├── composables/
│   └── useGsap.ts           # GSAP page-enter + header nav indicator
└── constants/
    └── index.ts             # ALL site content (contacts, projects, stack, tools, links)
```

## Updating Content

**All site content lives in `src/constants/index.ts`.** There is no backend or database.

| What | Where |
|---|---|
| Contacts / social links | `CONTACT` |
| Project cards | `PROJECTS` |
| Tech stack section | `STACKS` |
| Tools section | `TOOLS` |
| Header navigation | `HEADERLINKS` |

### Add / hide a project

```ts
{
  title: "My Project",
  type: "fullstack",
  grid: "x-large",
  techs: [{ icon: "devicon:spring", title: "Spring" }],
  tags: [{ title: "Java", color: "rgb(107 114 128)" }],
  src: "my-project",            // -> /compressed/my-project.png
  link: "https://demo.example.com",
  githubLink: "https://github.com/you/my-project"
}
```

- Set `show: false` to hide a project.
- Card images load from `/public/compressed/<src>.png`. For a remote image, set `src` to a full `http(s)` URL (e.g. a `raw.githubusercontent.com` link).
- Icons are Iconify names used via `<UIcon>` — only use collections already in `package.json`.

## Theming

- Primary color: `indigo` (configured in `vite.config.ts`).
- Custom colors `main` / `shark` and the Poppins font are defined in `src/assets/css/main.css` via Tailwind 4 `@theme`.
- The site is always-dark (`class="dark"` on `<html>` in `index.html`).

## Animations

- Page-enter loader runs from `onMounted` in `src/App.vue`.
- `[fade-scroll]` elements fade in via IntersectionObserver (adds the `.appear` class).
- Header nav is GSAP-driven: section ids (`home-page`, `projects`, `techs`, `tools`) and header links' `data-section` / `data-index` attributes must stay in sync with `HEADERLINKS`.

## License

© Mohammed Fawzey. All rights reserved.
