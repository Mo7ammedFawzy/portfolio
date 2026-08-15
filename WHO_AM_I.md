# Mohammed Fawzy

Frontend Developer (Vue.js) with strong full-stack range across a large production ERP — from JPA entities and Java web services to Vue 3 UI and bilingual (Arabic/English) delivery.

📍 Benisuef, Egypt
📧 devfawzey@gmail.com | 📱 01055865642
🌐 [mohamed-fawzey.vercel.app](https://mohamed-fawzey.vercel.app/) · [linkedin.com/in/mohammed-fawzey](https://linkedin.com/in/mohammed-fawzey) · [github.com/Mo7ammedFawzy](https://github.com/Mo7ammedFawzy)

---

## About

I'm a Frontend Developer skilled in **Vue.js, Nuxt.js, TypeScript, Tailwind CSS, Pinia**, and responsive/accessible design, with real production depth in **AG Grid**, dashboarding, and component architecture. At my current job I regularly work across the whole stack — not just the UI — touching Java/Jakarta EE backend code, JPA entities, and web-service contracts to ship features end-to-end. I'm expanding further into Node.js and backend engineering.

## Current Role

**Frontend Developer (Vue.js) — Namasoft**, Giza, Egypt · *Jan 2025 – Present*

Namasoft builds **Nama ERP**, a large multi-module Java + Vue enterprise ERP product. My work centers on the modern Vue 3/Quasar web client (`gui2`), but regularly reaches into the Java backend — domain entities, JPA/Criteria query building, web-service contracts, servlets, and business logic (HR/CRM).

**Track record (verified against ~19 months of Git history, Jan 2025 – Aug 2026):**

| | |
|---|---|
| Commits authored | 377 |
| Distinct requirement tickets closed | 99 |
| Non-icon files created | 401 |
| New Vue components/views created | 57 |
| New TypeScript modules created | 26 |
| New hand-written Java files created | 168 |
| New top-level JPA entities designed | 10 (+ ~21 detail-line entities) |
| New web-service contracts + implementations | 10 + 10 |
| Modules of the monorepo contributed to | 23 |

**What I actually built there — real, shippable features I own or co-own:**

- **Technician Appointment & Booking module (CRM)** — a scheduling sub-system built from scratch: 7 new JPA entities + 9 detail-line entities, 7 web-service contracts/implementations, a FullCalendar-based booking screen with a custom booking-constraint engine, and full Arabic/English localization.
- **Quick Filter framework** — a configurable one-click filter/"chip" system for list screens, including extending the platform's JPA Criteria query builder to support `GROUP BY` for live per-button counts, plus the full Vue UI and shareable/bookmarkable URL state.
- **Bulk Edit framework** — configurable multi-record editing with a cancellable server-side task.
- **Icon & theming system (`NamaIcon`)** — a DB-driven icon/colour override system plus a build-time pipeline that reads a spreadsheet (Apache POI), calls the Freepik API, and code-generates Vue icon components (~1,500 icons); also led theme correctness work for light/dark mode.
- **In-browser SQL Runner & Monaco editor family** — an admin SQL console with a custom completion/hover provider, backed by schema introspection via `INFORMATION_SCHEMA`, generalized into reusable SQL/XML/Tempo editor widgets and AG Grid cell editors.
- **Dashboard widget suite** — Metrics Card, Timeline, Card Menu, Recent Visits, and Pivot-mode/AG Charts widgets.
- **Timeline framework** — reusable across list views, edit views, and the approval workflow (including next-candidate-approver display).
- **HR weekend/attendance refactor** — extracted a shared abstraction for weekend definitions, added a new approvable `WeekendDoc` entity, made attendance calculation polymorphic, and wrote a versioned SQL data migration to backfill existing records safely.
- **AG Grid platform ownership** — top contributor to the core `EditScreenGrid.vue` component (52 commits vs. 38 for the next-highest contributor); led major-version upgrades, custom cells/renderers, export, row drag, inline editing, and server-side filtering.
- **Voice input** — added multi-language voice input for faster, more accessible data entry.
- **Onboarding flow** — built a guided onboarding experience to ease adoption for new users.
- **Security-adjacent UI work** — route gating, authorization-aware UI cleanup, forced password change, QR login flow, and approval-based delete guards.
- **Third-party integrations** — Respond.io, Meta Graph API, and the Freepik API.

**Tech stack at Namasoft:** Vue 3, Quasar, TypeScript, Pinia, AG Grid Enterprise, AG Charts, FullCalendar, Monaco Editor, SCSS · Java 21, Jakarta EE (Servlets, JAXB, JPA), Hibernate, Jackson, JasperReports, Apache POI, Apache HttpClient · SQL Server (T-SQL, JPA Criteria API) · Git (trunk-based workflow).

> **Note on accuracy:** this role uses **Jakarta EE servlets and a proprietary framework, not Spring/Spring Boot**, and has no automated test suite, CI/CD, containers, or microservices — those skills come from other projects (below), not from Namasoft.

## Personal Projects

**E-commerce Web Application** — *Vue, TypeScript, Pinia, TailwindCSS, Quasar, Node.js*
- Responsive e-commerce app with a dynamic product catalog, filters, and detail pages
- Shopping cart, checkout, and order history functionality
- Backend product management APIs built with **Spring Boot**
- Modular, reusable Vue components and composables for scalability
- Live demo: [ecommercelytics.vercel.app](https://ecommercelytics.vercel.app/)

**Library Management System** — *Spring Boot, SQL Server*
- Standard layered architecture: controller → service → repository → entity → dto → mapper
- Unit tested with JUnit 5 and Mockito (including `MockedStatic` for a static utility class), covering full CRUD operations
- Worked through real-world setup issues: Hibernate DDL permission errors, Spring Security misconfiguration

**Al Rawda (الروضة)** — Vue SPA marketing site for a premium furniture-moving company in Egypt (features, branding, and deployment).

## Education

**Bachelor's Degree in Computer Science** — Beni Suef University, Faculty of Computer and Information Science
*2018 – 2022*

## Skills

**Frontend:** Vue.js, Nuxt.js, TypeScript, Pinia, VueUse, AG Grid, Quasar
**Styling:** TailwindCSS, Nuxt UI, Quasar, Vuetify, SCSS, Bootstrap
**Backend:** Java (Jakarta EE, JPA/Hibernate — production), Spring Boot (personal projects), Node.js, Express
**Databases:** SQL Server (T-SQL), JPA/Hibernate ORM, JPA Criteria API
**Practices:** Full-stack feature delivery, domain-driven entity modelling, REST/SOAP-style service contracts, internationalization (Arabic/English, RTL), responsive UI, design patterns (Factory, Adapter, Builder, Template Method, Singleton, Registry, Presenter), root-cause debugging, working in a large multi-module shared codebase
**Tools:** Git, IntelliJ IDEA, VS Code, Postman, Claude Code

---

*This document combines an earlier CV with an evidence-based analysis of Git history from the Nama ERP repository (377 commits, Jan 2025 – Aug 2026), so the achievements above are traceable to actual commits rather than self-reported summaries alone.*
