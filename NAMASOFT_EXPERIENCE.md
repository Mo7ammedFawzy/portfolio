# Namasoft Experience — Evidence-Based Contribution Report

Generated from the Git history of the **Nama ERP** repository (`origin: https://github.com/ahmedqasid/namaerp.git`).
Every claim below is traceable to a commit hash. Anything not directly provable is explicitly labelled.

---

## 1. Executive Summary

Between **27 Jan 2025 and 13 Aug 2026** you authored **377 commits** to Nama ERP, a large multi-module
Java + Vue enterprise ERP product. Your work is concentrated in the **new Vue 3 web client (`infra/gui2`)**
but reaches deep into the **Java backend** — domain entities, JPA/Criteria query building, web-service
contracts, servlets, screen-layout metadata, and HR/CRM business logic.

You were not a "frontend-only" contributor. The history shows a repeating full-stack pattern: a business
requirement arrives as a ticket, and you deliver the JPA entity + DTO + web-service contract + servlet
endpoint + Vue UI + Arabic/English translations in a single coherent change.

**Headline evidence:**

| Metric | Value |
|---|---|
| Commits authored | **377** |
| Active period | 2025-01-27 → 2026-08-13 (~19 months) |
| Distinct requirement tickets referenced | **99** |
| Distinct files touched | **2,685** |
| File-level changes | 4,396 |
| Files created (all) | 1,913 |
| Files created (excluding bulk icon assets) | **401** |
| New Vue components/views created | **57** |
| New TypeScript modules created | **26** |
| New hand-written Java files created | **168** |
| New top-level JPA entities designed | **10** |
| New web-service contracts + implementations | **10 + 10** |
| New server operations/endpoints added | **4** (plus a list-timeline endpoint) |
| Modules of the monorepo contributed to | **23** |

> **Line-count caveat (be honest about this in interviews):** raw diff totals are `+86,638 / −23,113`
> lines, but ~1,512 of the created files are auto-downloaded SVG icon components, and several large Java
> diffs (e.g. `GenericRepoImpl.java` in `b309c6da18a`, 519 added / 519 removed) are pure line-ending
> normalisation. Do **not** quote raw line counts on a CV. The 401 non-icon files created and the
> 99 requirement tickets are the defensible numbers.

---

## 2. Namasoft Employment Period

| | |
|---|---|
| First commit | `0d385e5ecab` — **2025-01-27** — "UI: about dialog + few fixes in utils" |
| Last commit in history | `0c1cce3dd1d` — **2026-08-13** — `https://namasoft.com/reqs/SRDRQ06497` |
| Gaps | No gap longer than ~3 weeks; continuous activity every single month |

**Evidence this is Namasoft work (not unrelated work in the same repo):**

* 130 of your commit messages are literally Namasoft internal requirement URLs
  (`https://namasoft.com/reqs/<TICKET>`), spanning 5 ticket prefixes: `ECDR` (40), `SRDRQ` (33),
  `ECPADR` (17), `KKDRQ` (8), `SVDR` (1).
* The repository is the Nama ERP product itself; other committers use `@namasoft.com` addresses
  (`root@namasoft.com`, `nama.ksa.git@namasoft.com`, `mohamdmaher1998@namasoft.com`).
* Your very first commit builds `AboutNamaDialog.vue` — a product "About Nama" screen.

**Conclusion:** the entire 2025-01-27 → 2026-08-13 range is Namasoft work. There is no pre-Namasoft
activity by your identities in this repository, so "started around January 2025" is confirmed by the
history rather than assumed.

---

## 3. Git Identity Used

Five author/committer spellings, all resolving to two email addresses:

| Author string | Email | Commits |
|---|---|---|
| `Mo7ammedFawzy` | `devfawzey@gmail.com` | 228 |
| `Mohammed Fawzey` | `139973567+devfawzey@users.noreply.github.com` | 73 |
| `Mo7ammedFawzy` | `139973567+devfawzey@users.noreply.github.com` | 67 |
| `devfawzey` | `devfawzey@gmail.com` | 8 |
| `Mo7hammedFawzy` (typo) | `devfawzey@gmail.com` | 1 |

* **GitHub user ID:** `139973567`, username `devfawzey`.
* Author and committer are **identical on all 377 commits** — nobody rebased, squashed, or merged your
  work on your behalf, and you never committed someone else's patch.
* Current repo config: `user.name = Mo7ammedFawzy`, `user.email = devfawzey@gmail.com`.

> ⚠️ **Verify this before using the report.** The session environment reports the user email as
> `magd@namasoft.com`, which does **not** appear anywhere in this repository's history. This report
> analyses the `devfawzey` / *Mohammed Fawzy* identity, which is the identity configured in this
> working copy. If that is not you, the entire report describes someone else's work.

---

## 4. Repository Overview

Nama ERP is a **Java 21 multi-module monorepo** (`maven.compiler.source = 21`) with:

* `infra/` — the platform: `domain-base` (entities, JPA/Criteria persistence, metadata, screen-layout
  engine), `nama-common` (shared constants, layout DTOs, i18n `.properties`), `contracts-base`,
  `service-base`, `gui-base`/`gui-core` (legacy JavaFX/GWT-era GUI), and **`gui2`** (the modern
  Vue 3 + Quasar SPA plus its Jakarta servlets).
* `modules/` — business domains: `basic`, `accounting`, `crm`, `hr`, `supplychain`, `manufacturing`,
  `contracting`, `fixedassets`, `srvcenter`, `magento`, …
* Each business entity exists as a *quartet*: a DSL declaration → a generated `Generated*` base class →
  a hand-written domain entity → a `DTO*` contract + `*WS` web-service interface + `*WSImpl`.
* **100 distinct author identities** (fewer real people — several developers use 2–3 spellings, as you do); the top author has 8,495 commits. History on `master` is **linear/trunk-based**
  — developers commit directly to `master`.

**Your footprint by area** (file-change counts):

| Area | Changes |
|---|---|
| `infra/gui2` (Vue SPA + servlets) | 3,170 |
| `infra/domain-base` (entities, persistence, metadata) | 307 |
| `infra/nama-common` (contracts, layout, i18n) | 245 |
| `modules/basic/*` (services, DSL, contracts) | 290 |
| `modules/crm/*` | 141 |
| `modules/hr/*` | 48 |
| `infra/contracts-base`, `service-base`, `gui-base`, `gui-core` | 103 |
| other business modules | ~30 |

**By file type:** 2,423 `.vue`, 1,118 `.java`, 667 `.ts`, 116 `.properties` (i18n), 42 `.scss`, 20 `.js`.

---

## 5. Contribution Summary

Grouping 377 commits into coherent bodies of work (not counting one feature as N achievements):

* **~18 substantial features** delivered end-to-end (entity → API → UI → i18n).
* **~45 meaningful bug fixes** with identifiable root causes (excluding trivial style/typo commits).
* **~8 meaningful refactors** (type-safety, deduplication, inheritance extraction, component extraction).
* **10 new persisted top-level entities** + ~21 new detail-line entities + 10 new enums/primitives.
* **57 new Vue components/views**, **26 new TypeScript modules**.
* **99 distinct business requirement tickets** closed.

---

## 6. Top Contributions (overview)

1. Technician Appointment & Booking module (CRM) — new sub-system, full stack
2. Quick Filter framework — new list-view filtering system, full stack, incl. SQL `GROUP BY` support
3. Bulk Edit framework — configurable multi-record editing with cancellable server task
4. Icon & theming system (`NamaIcon`) — DB-driven icon/colour overrides + external-API icon pipeline
5. In-browser SQL Runner + Monaco editor family (SQL / XML / Tempo)
6. Dashboard widget suite — Metrics Card, Timeline, Card Menu, Recent Visits, Pivot, AG Charts
7. Timeline framework — reusable across list view, edit view, and approval workflow
8. HR weekend/attendance refactor + `WeekendDoc` document + versioned SQL data migrator
9. Contextual Help Message mechanism — field/error-level help, full stack
10. AG Grid platform ownership — version upgrades, custom editors/renderers, export, server-side filters

Each is expanded in §20 with commit hashes.

---

## 7. Features Implemented

### 7.1 Technician Appointment & Booking Module (CRM) — *built from scratch*
**Commits:** `0c1cce3dd1d` (2026-08-13, ~7,000 lines changed, largest single feature commit)

**What it does:** a technician/crew scheduling sub-system: an organisation defines *procedures*,
*services*, *crews* and *booking settings* per department section; users then book appointments on an
interactive calendar that only permits slots the configuration actually allows.

**What I built:**
* **7 new JPA entities:** `TechnicianAppointment`, `TechnicianBookingSettings`, `TechnicianCrew`,
  `TechnicianProcedure`, `TechnicianService`, `TechnicianServiceDistribution`, `TechnicianTransfer`,
  plus **9 detail-line entities** (crew schedule lines, procedure→service lines,
  procedure→department-section lines, booking-settings lines and secondary-document lines, …).
* **`TechnicianAppointmentStatus`** enum/primitive with its JAXB adapter.
* **7 `*WS` web-service contracts + 7 `*WSImpl`** implementations, plus generated `DTO*` transfer
  objects for every entity and line type.
* **4 post-action classes** (`TechnicianAppointmentPostActions`, `TechnicianCrewPostActions`,
  `TechnicianServiceDistributionPostActions`, `TechnicianTransferPostActions`).
* Extended the existing HR `DepartmentSection` entity with a `technicianBookingSetting` reference and a
  `showInAppointmentsScreen` flag, plus a new `TechnicianBookingSettingsRef` external reference type.
* Registered the sub-module in `DefaultMenuCreator` and `SubModuleNames`, and added **39 new
  Arabic + 39 English** translation keys.

**Business logic (in `TechnicianAppointment.updateCalculatedFields()`):**
* `updateBasedOnDoc()` — resolves the originating document through a `GenericReference` and propagates
  its own source document.
* `updateFromAndToDateTime()` — composes each schedule line's `day` + `fromTime`/`toTime` into proper
  `DateTimeDF` values, nulling them when no day is set.
* `updateBookAndDimensionsIfNeeded()` — pulls booking settings from the appointment's department
  section and applies them.
* `TechnicianBookingSettings.updateCalculatedFields()` cascades the header `attendanceShift` down into
  all detail lines.

**Frontend:** `TechnicianAppointmentCreator.vue` (**972 lines**) — a FullCalendar-based booking screen —
backed by `TechnicianAppointmentUtils.ts` (**440 lines**) which implements:
* A **booking-constraint engine** (`BookingRule`, `ShiftDay`, `WorkRange`, `BookingConstraints`,
  `CalendarConstraints`) that converts HR `AttendanceShift` day/range definitions into FullCalendar
  `validRange`, `slotDuration`, `slotMinTime`/`slotMaxTime` and `businessHours`.
* Robust date/time normalisation between the ERP's wire formats and the calendar
  (`combineDayTime`, `encodeDay`, `encodeTime`, `parseTimeHHmm`, `minutesToHHmm`).
* Dynamic server-side filtering via `CriteriaBuilder` — e.g. procedures are restricted to those valid
  for the selected department section (`departmentSections.departmentSection.id = X OR IS NULL`), and
  only committed crews are loaded.
* Deterministic per-crew colour assignment with a fallback palette, and CSS-variable theming of
  FullCalendar to match the ERP's light/dark theme.

**Why it's CV-gold:** one commit that spans DSL → JPA entity → SOAP/REST contract → servlet-consumed
DTO → 1,400 lines of typed Vue/TS → bilingual i18n, with genuine scheduling domain logic.

---

### 7.2 Quick Filter Framework — *built from scratch*
**Commits:** `b309c6da18a` (2025-09-15, core), `e8c6dbf8356`, `dd83a63134f`, `55ae509092f`,
`b833ecfece7`, `ba1c0b3bcfb`, `7d82df215e2`, `60eb6dc24ff`

**Problem:** list screens had only a full criteria editor. Users wanted one-click "chips" — *Status =
Open (42)*, *This Month*, *Unassigned* — configurable per screen without code changes.

**What I built — backend:**
* New entity **`QuickFilterCriteria`** + `QuickFilterCriteriaLine`, and new detail types on
  `ScreenModifier`: `ScreenModifierListQuickFilter`, later generalised into
  `AbsScreenModifierListQuickFilter` + `ScreenModifierSearchListQuickFilter` (`dd83a63134f`) so the
  same quick filters work on both list screens and reference-searcher screens.
* New layout contracts in `nama-common`: `ListViewQuickFilterDef`, `ListViewQuickFilterCriteriaDef`,
  `ListViewQuickFilterGroupVal`, `ListViewQuickFilterButtonVal`, `ListViewQuickFilterSelectedValues`
  — JAXB-serialisable, supporting per-group title, `showCount`, `maxButtonCount`,
  `countDependOnOtherQuickFilters`, and multi-column groups.
* **New server operation `fetchQuickFilterValues`** (`GUI2Operations.OP_FETCH_QUICK_FILTER_VALUES`,
  routed via `CRUDServlet`) implemented as `Lister.findLayoutQuickFilterValues(...)`.
* **Real query work:** to produce the per-button counts, the request is rewritten to select
  `[column, count(id)]`. That required teaching `SearchQueryUtils` to emit **JPA Criteria `GROUP BY`**:
  `convertColumnsToSelectionsAndAddJoins(...)` gained a `forGroupBy` flag so aggregate columns are
  skipped and non-aggregate columns become the group-by list — previously the query builder could only
  produce flat projections.
* `ListLayoutUtil` now resolves metadata for quick-filter columns that aren't among the displayed
  columns (`quickFilterFieldsMetadata`), so a filter can target a hidden field.
* A **cartesian-product generator** so a multi-column group (e.g. Status × Branch) produces the full
  button matrix.
* `addQuickFilters(...)` translates the user's selected buttons into `Criteria` expressions ORed
  together and appended to the list request.

**What I built — frontend:**
* `QuickFilterUtils.ts` — renders a button label for **every** field type (enum, boolean, date,
  date-time, time, decimal, integer/long, reference, generic-reference, text), computes each button's
  share as a percentage of its group, and derives its colour/icon from the enum-constant icon registry.
* `QuickFilterGroups.vue` — the chip/dropdown UI.
* `QuickFilterURLSerializer.ts` — quick-filter state is encoded into the URL so filtered lists are
  shareable/bookmarkable.

**Notable follow-up fixes:**
* `b833ecfece7` — textual criteria stored on a quick-filter button were deserialised with a `null`
  entity class, so field paths could not be resolved. Fixed by resolving the entity class from the
  request's `entityType`, with a fallback to `SimpleEntitiesRepository` for simple entities.
* `ba1c0b3bcfb` — all group dropdowns shared a single `qMenuModel` boolean, so opening one opened all.
  Replaced with a keyed `Record<string, boolean>` and a capture-phase document click handler; also made
  chip text colour contrast-aware (`ColorUtils.isDarkColor`).

---

### 7.3 Bulk Edit Framework — *built from scratch*
**Commits:** `14567e7c8b6`, `a91023afceb` (2025-11-23), `32774b22366`

* New entity **`BulkEditConfig`** with `BulkEditConfigField` (which fields may be bulk-edited) and
  `BulkEditConfigAllowFor` (who/what it applies to); wired into `ScreenModifier` and the screen-action
  metadata (`CustomizedGUIActionInfo`).
* New DTO `DTOBulkEditField`; new `BasicUtilityWS.fetchBulkEditFields`.
* **Two new endpoints** on `EntitiesServlet`: `fetchBulkEditFields` and `bulkEditAndSave`.
* `bulkEditAndSave` is the interesting one:
  * A **custom Jackson deserializer** (`MultiValueRequestDeserializer`) resolves the polymorphic
    `record` payload to the concrete DTO class via `DTOClassCalculator.getDTOClassFor(entityType)`,
    alongside `selectedRowIds` and `editedFields` arrays.
  * The operation registers a **`DTOGUITask`** so it appears in the task monitor, reports
    `"Record i of n"` progress, and **honours cancellation** (`task.isMarkedForKill()` →
    `NaMaServiceExcepption.markedForKill()`), with `TaskTracker.removeTask` in a `finally`.
  * Each record is loaded via `findByID`, patched **reflectively** for only the edited fields
    (`ReflectionUtils.setProperty`), then `saveAndCommit`-ed — so all domain validation, calculated
    fields and approval rules still run per record instead of a blind SQL `UPDATE`.
  * Guarded by `CRUDServlet.fromVue(req)` and an entity-type check.
* Frontend `BulkEditDialog.vue` + `ListViewPerformer`/`ActionHandler` integration.

---

### 7.4 Icon, Colour & Theming System
**Commits:** `6b1cff35549`, `b1dbc811b7e`, `0451d281f01`, `169cef38a19`, `b341a33728e`,
`c55506fae69`, `79fe244d7b5`, `5295af2f821`, `3c0de5196c7`, `15f072ffcef`, `12bc050812f`,
`ff8f743d5af`, `dbb9ad8f953`, `a5c9c3e3fb8`, `d48d3502afb`

**Problem:** the ERP had thousands of entities, enum constants and fields with no visual identity, and
customers wanted to override icons/colours per installation without a rebuild.

**What I built:**
* **`NamaIcon.vue`** — the single icon component for the whole application, resolving an icon from a
  priority chain (explicit name → field override → enum-constant override → entity override → default),
  with async component loading and theme-aware colour handling. Supported by `NamaIconUtils.ts` and
  the `NamaIconList.ts` registry (34 commits touching it).
* **DB-driven overrides:** new detail entities `EntityIconLine`, `EnumConstantIconLine`,
  `FieldIconLine`, `IconOverrideLine` on `ScreenModifier`, plus resolution and caching inside
  `GenericRefOverriderFromDBUtil` (the platform's `ConcurrentHashMap`-backed customisation-metadata
  cache) — 14 commits to that file. `5295af2f821` added **colour** to the same mechanism.
* **`FlatIconIconDownloader.java`** — a build-time tool that reads an "Entity List" spreadsheet with
  **Apache POI**, extracts Flaticon IDs by regex, calls the **Freepik REST API**
  (`api.freepik.com/v1/icons/{id}/download?format=svg`) with **Apache HttpClient 5**, and code-generates
  one Vue SFC per icon plus a `DownloadedIcons.java` registry (1,342 lines) mapping entity → icon.
  This produced ~1,500 icon components across `79fe244d7b5` and `dbb9ad8f953`.
* **Theme correctness work:** `ThemeColor` type; string colour codes resolved for both light and dark
  themes (`ff8f743d5af`); white spinners in dark mode (`00db1911466`, `e773f25ff4b`); lightened
  reference-cell rendering in dark mode (`151cd8b1075`); status icons/colours for record state
  (`3c0de5196c7`, `c219b867d9c`, `12bc050812f`).
* **Bundle-size follow-up** (`a5c9c3e3fb8`, `d48d3502afb`, `5196559fb31`): removed eagerly-imported
  icons and unused entries from `NamaIconList` in favour of the shared component
  (also `55ff12cf327` — "remove eager + add await").

---

### 7.5 In-Browser SQL Runner and Monaco Editor Family
**Commits:** `717d1b8b96b` (SQL Runner), `57cab28d738` (SQL Editor widget + schema API),
`9a0c71aed80` (XML + Tempo editors), `3d3d47c04f9`, `9b072f7832b`, `b59d858da0d`, `8e9cf0a9235`

* **`UtilsSQLRunner.vue`** (435 lines) — an admin SQL console: **Monaco Editor** integration
  (`@guolao/vue-monaco-editor`) with a custom **SQL completion provider** (keywords, snippet functions,
  and live table/column names) and a **hover provider**, results rendered in AG Grid.
* Added Monaco worker pre-bundling to the **Vite/Quasar build config** (`quasar.config.ts`) so the
  language workers resolve correctly.
* **Backend schema introspection:** new operation `fetchTableAndColumnNames` on `CRUDServlet` →
  `BasicUtilityWSImpl.fetchTableAndColumnNames`, which runs an `INFORMATION_SCHEMA.TABLES` ∪
  `INFORMATION_SCHEMA.COLUMNS` JDBC query and de-duplicates into a `Set`. Result is **cached in a
  static field** on the servlet so the (expensive) introspection runs once per JVM.
* `9b072f7832b` — the completion fetch blocked the editor on slow networks; changed to a silent
  background fetch.
* Generalised `SQLEditor.vue` → **`EditorWidget.vue`**, then built `XMLEditorWidget`,
  `TempoEditorWidget`, and AG-Grid cell editors `AGSQLEditor`, `AGXMLEditor`, `AGTempoEditor` on top —
  plus a new backend datatype **`TempoDF`** with its JAXB adapter (`TempoDFAdapter`) and `FieldSubType`
  metadata so the platform can declare a field as SQL/XML/Tempo and get the right editor automatically.

---

### 7.6 Dashboard Widget Suite
**Commits:** `99c3d870c50` (Metrics Card), `f8c417d425c` + `40ee30cae0a` (Card Menu),
`34c9fcf2143` (Timeline widget), `b873bbb4236` (Recent Visits), `794e6e6638f` (AG Charts in table
widget), `52f83a5e420` + `cced231ebf4` (Pivot mode), `75b6db28d07` (refresh button),
`fc6abeecebf`, `35eeb25ca13`, `60eb6dc24ff`

* **Metrics Card** — new `MetricsCardConfig` value object (+ DTO + factory), `DTOMetricsCardLine`,
  a `DashBoardElementType` enum constant, and `MetricsCardDashboardWidget.vue`; added a decimal
  formatter to `DecimalDF` and extended `ComplexRenderer`. GSAP added for the count-up animation.
* **Timeline widget** — new `TimeLineConfig` value object + `DTOTimelineData` (111 lines) +
  `NamaTimeLine.vue`.
* **Recent Visits widget** — `RecentVisitsDashboardWidget.vue` plus visit-tracking helpers in
  `GUIUtilities.ts`; later hardened to drop entries the user is no longer authorised to open
  (`70e1e55a0ac`) and missing records (`f7a3b8e99fa`).
* **Pivot mode** — new `PivotColumnType` primitive (101 lines) + adapter, wired through
  `DashBoardWidgetWizard` so a wizard-built widget can declare row/column/value roles, and enabled in
  AG Grid (`AGGridUtils`, `TableDashboardWidget`). Deliberately **off by default** (`59476ae385e`).
* **AG Charts** — `AGGridUtils.java` (new, 83 lines, server side) + client-side chart config so a table
  widget can render as a chart.
* Performance fix `7a05b8c4324`: `EditScreenDashBoard.vue` fetched the dashboard multiple times per
  render; removed 33 lines of redundant fetch/watch logic.

---

### 7.7 Timeline Framework (List View, Edit View, Approvals)
**Commits:** `34c9fcf2143`, `f2b037f8f58`, `f186758a8f5`, `3ec6c68ef8d`, `304d956f9a6`,
`6a2c2d35b84`, `62b0f28f414`, `d3bbae2b9fa`, `d556d1f613b`

* Backend: `ListTimelineResult`, `ListScreenToTimelineConfig`, `AGGridGetRowsRequest` extensions, an
  `EntityService` method and a new branch in `EntitiesServlet` so any list screen can be rendered as a
  timeline; `TabularResult` extended to carry the extra fields.
* Frontend: `NamaTimelineBox.vue`, `NamaTimelineWrapper.vue`, `TimelineDashboardWidget.vue`,
  responsive pagination in list view (`b010aefa300`, which also introduced the reusable
  `useNamaBreakpoints.ts` composable).
* **Approval-workflow timeline** (`6a2c2d35b84`): `ApprovalCaseTimeline.vue` +
  `ApprovalCaseBadges.vue` (192 lines) showing each approval step and the **next candidate approvers** —
  which required extending `ApprovalCaseFactory` and `ApprovalCaseStepCandidateFactory` on the server
  to expose candidate data on `DTOApprovalCase`.
* `d556d1f613b` — fixed a timeline crash on `AuditTrial` records.

---

### 7.8 HR: `WeekendDoc` + Attendance Weekend Refactor
**Commits:** `8f1d82b109b`, `d491616f2b0`, `b9a9c2538da` (2026-06), `d6d2b5914b8` (2026-07)

**Problem:** weekend days were only definable inside an `AttendancePlan`. Customers needed to issue
weekends as standalone, approvable documents.

**What I did:**
* **Extracted an abstract superclass** `AbsAttendanceWeekendLine` from the existing
  `AttendancePlanWeekendLine` (with `IdsOfAbsAttendanceWeekendLine`, DSL and DTO counterparts).
* Created the new document entity **`WeekendDoc`** + `WeekendDocLine` + `DTOWeekendDoc` +
  `WeekendDocWS`/`WeekendDocWSImpl`, with header→line propagation of plan/department/section/
  job-position/employee/date range in `updateCalculatedFields()` and commit-time validation.
* Added an `HRConfiguration` flag `takeWeekendsFromWeekendDocNotAttPlan`.
* **Made attendance calculation polymorphic:** replaced the hard-coded
  `Persister.listPageMatching(AttendancePlanWeekendLine.class, …)` with a generic
  `fetchWeekendLines(employee, infoMap, Class<T extends AbsAttendanceWeekendLine>)`, so
  `AttendanceCalcContext`, `AttendanceCalculationUtils` and `EmpAttendanceSysLine` now work against the
  abstraction and the source is chosen by configuration. Also added a
  `commitedBefore = TRUE` predicate so uncommitted documents no longer affect payroll/attendance.
* Fixed a long-standing typo in a public API: `findOrCreateEmpAttendnceSysLineFor` →
  `findOrCreateEmpAttendanceSysLineFor`.
* **Wrote a versioned data migrator** — `HRMigrateAttendanceWeekendCommitedBefore extends MigratorBase`
  (`getFromVersion() = 149`, scoped to `ModuleNames.HR`) executing two native T-SQL
  `UPDATE … FROM … LEFT JOIN` statements to backfill `commitedBefore` from the header onto existing
  `AttendancePlanWeekendLine` and `WeekendDocLine` rows, so the new predicate doesn't silently drop
  historical data.

---

### 7.9 Contextual Help Message Mechanism
**Commits:** `4b6728178be`, `e76c39763fa`, `45fe40510f2`, `5bc41215704`, `fa55347313b`,
`46a3659c14f`, `8be9a32391e`

* New DTOs `DTOHelpMessage`, `DTOFieldHelpMessage`, `DTOFieldsHelpMessagesResponse`,
  `DTOHelpMessagesForFieldsRequest`; new `CoreUtilitiesWS` method; new **`HelpMessageContentType`**
  primitive (99 lines) with adapter; extended `EntityHelpLine`, `ErrorMsgHelpLine` and
  `IHasHelpMessages`.
* New endpoint `searchForFieldsHelpMsgs` on `FieldsManipulationServlet`.
* `HelpMessage.vue` (150 lines) rendering help anchored to a field, a grid header
  (`AgCustomInnerHeader.vue`), or an error toast; kept correctly positioned during horizontal grid
  scroll (`5bc41215704`); de-duplicated by id (`e76c39763fa`); extended to composite fields
  (`fa55347313b`); light-mode styling (`45fe40510f2`).
* Also updated the **legacy** GUI (`ErrorViewImpl`, `NotificationView`, `TwoColumnsGroup`) so both
  clients share the mechanism.

---

### 7.10 Date Range Presets
**Commits:** `7c176adce91` (2026-05-03)

* New **`DateRangePreset`** primitive (219 lines) with 14 presets (Today, Yesterday, This/Previous
  Week/Month/Quarter/Year, Last 7/30/90/365) + adapter + DSL + JS/TS constant mirrors.
* **`DateRangeResolver`** — a stateless utility using `java.time` records, switch expressions and
  `TemporalAdjusters` to resolve a preset into a concrete `DateRange` (including correct quarter
  boundary maths).
* `DateRangeFieldWidget.vue` (513 lines) — the picker UI.
* Wired into `FilterField`, `BICrossFilter`, the report wizard (`ReportBuilderFromWizard`,
  `QuestionFieldsUtil`) and **JasperReports** (`JasperReportCompiler`,
  `JasperNamaSystemParameters`) so reports and BI cross-filters accept relative date ranges.

---

### 7.11 Other Notable Features

| Feature | Commits | Notes |
|---|---|---|
| Grid export to PDF/Excel | `5d0794888cc` | `GridExporter.ts` (243 lines) using **pdfmake**, singleton, landscape layout, custom table layouts, and **Cairo Arabic font** registration |
| QR-code login | `971ccf47eb7`, `35129d2f1a4` | `LoginByQRDialog.vue` + `qrcode` lib + `Alt+F12` shortcut |
| Forced password change on first login | `b9edf0fea15` | `DialogUtils.ts` (82 lines) + `LoginUtils` hook |
| Server log viewer | `007b6c3ed47` | `ServerLogDialog.vue` with download-to-file |
| WebSocket session monitor | `de3a6e33b1a` | `UtilsWebsocketSessions.vue` (233 lines) + `DTOWebSocketSessionInfo` |
| Field-info inspector | `de3a6e33b1a`, `3c32c4302b2`, `850fee05aae`, `ee6c61deef3`, `ae7fbe300ad` | `ShowFieldInfoDialog.vue` + `FieldInfoUtils.ts`; exposes field id, table name, allowed values, enum type — a developer/support tool |
| Speech-to-text input | `84214133854`, `50e9317f7d4`, `5532859aa88`, `301a2675fb4` | `useSpeechRecognition` (VueUse) with mic-permission handling, per-language selection, new `AudioSpeechLanguages` / `AudioSpeechContextLanguage` backend primitives + global config |
| Quick-edit reference dialog | `3ba6278563f`, `6ed1b1784d7`, `aee283481f2`, `23274ffac6d` | `QuickEditReferenceDialog.vue` — edit a referenced record inline |
| Keyboard focus / navigation system | `8c35f7d0a0b`, `08aeeee63ba`, `e85c7c3312b`, `e21fbbdbb8d`, `945d0380470`, `a0ef2ae38ed`, `35483d9c299` | `FieldToFocusUtils.ts` (14 commits) — "jump to field" search incl. fuzzy matching for mistyped names, grid-column awareness, hidden-column exclusion |
| Sidebar redesign | `02ea21ab7b6`, `4d06f06e591`, `9206e5a7952`, `5295af2f821` | tree/breadcrumb/focused-tree modes, search, pin behaviour, coloured icons |
| Respond.io WhatsApp provider | `cb74845b02c` | see §13 |
| Screen-element property editor | `1c3b4f2e4e1` | `EditUIElementPropertiesDialog.vue` — in-app screen customisation entry point |

---

## 8. Important Bug Fixes

Prioritised by substance; all verified against the diff.

1. **AG Grid "Row id (x) is not found"** — `2d85e52910a`, `b422193d853`, `c8ce6216e01` (2025-09-29)
   *Root cause:* `EditScreenGrid.vue` bound `:rowData` **and** mutated a local `rowData` ref **and**
   called `applyTransaction({update})`. With `getRowId` in play, the reactive prop and the transaction
   raced, leaving AG Grid with stale row ids.
   *Fix:* removed the `:rowData` binding entirely and drove the grid exclusively through
   `gridApi.setGridOption("rowData", …)` + `refreshCells({force:true})` — single source of truth.

2. **Quick-filter textual criteria could not resolve fields** — `b833ecfece7`
   `ValueObjectCriteriaFactory.instance((Class) null)` meant field paths in a stored criteria string had
   no entity context. Fixed by resolving the class from the request `entityType` via `EntityTypeUtil`,
   falling back to `SimpleEntitiesRepository` for simple entities.

3. **Duplicate error toasts across grid rows** — `9eb2a02cda1`
   Error de-duplication in the Pinia store compared only the Arabic/English message text, so the same
   validation error on 10 different rows collapsed into one. Added `row` and `ownerId` to the identity
   comparison.

4. **All quick-filter dropdowns opened together** — `ba1c0b3bcfb` (shared boolean → keyed map; see §7.2).

5. **Record deletable despite an open approval** — `31225fb4c68`
   Added `ApprovalInitiators` awareness in `EntityMediator` (server) and reworked
   `EditViewUtils`/`EditPresenter`/`ApprovalUtils` (client) so the delete path is blocked and the user
   gets a proper message. Cross-cutting fix spanning domain layer + UI.

6. **AG setter values lost after post-actions** — `924308e3cfb`; **cell post-action fired on mount**
   — `5a1ea8d9bdc`; **boolean cell change-detection** — `3aaeeff4896`. A cluster of grid
   edit-lifecycle correctness fixes.

7. **Reference & date-time column filters broken** — `48aa1f7116b` (ApprovalCase),
   `bbc069e8cd9` (list view), `c70c3260d60` (edit view + `AGDateTime`) — all in
   `ColumnFiltrationFactory` / `ColumnFiltrationServerSideFactory`, i.e. the server-side filter model.

8. **Numbers exported to Excel as text** — `2f42bfe06fe` — added an explicit `cellDataType` on
   `AGGridColumn` and export-time value handling in `AGGridUtils.ts`.

9. **Invalid date rendering in ReportViewer** — `84d2c1b9160`; **printing ignored current language** —
   `0c38dc3e32e` (`NamaPrinting.ts`, `ReportViewerPresenter.ts`).

10. **Facebook lead-gen integration broken** — `7311180fd43`, `dd56771a840`
    *Root cause:* `SocialMediaAPI` took `resData.get(0)` — the **first** page returned by the Graph API —
    as the page access token, which is wrong for accounts managing multiple pages; and `leadgen_id` was
    cast directly to `Long`, throwing on string payloads.
    *Fix:* filter the account list for the actual `pageId`, safe-parse via `ObjectChecker.tryParseLong`,
    and upgrade Graph API `v14.0` → `v25.0`.

11. **Criteria tree not rebuilt after sort-field change** — `d5e5a59e182`;
    **empty preferences crashed the list-view cache** — `9a6385866dc`;
    **infinite loading state in `EditScreenGrid`** — `6135aaa9050`;
    **unsaved changes lost in the big-text cell editor** — `ad03c3694ce`;
    **nested grid ids containing a dot mis-parsed** — `8ed9d5a338e`;
    **synchronous generated-id call replaced with async** — `2bd6d9e8897`.

12. **Missing reports in sidebar** — `9206e5a7952`; **report link broken in list view** — `30ab9c34086`;
    **link cell renderer text/href resolution** — `f72aef49b19`, `be03157c221`.

---

## 9. Refactoring

| Refactor | Commit(s) | Before → After |
|---|---|---|
| **Inheritance extraction (HR)** | `8f1d82b109b` | `AttendancePlanWeekendLine` hard-coded throughout attendance calculation → abstract `AbsAttendanceWeekendLine` with a generic, config-driven `fetchWeekendLines(…, Class<T>)`; a second source (`WeekendDocLine`) plugs in with no further changes |
| **Type safety** | `818be2348c8` | `EditScreenBlock` / `EditScreenField` reworked as proper TypeScript types; `08aeeee63ba` did the same for the field-to-focus model |
| **Editor generalisation** | `9a0c71aed80` | `SQLEditor.vue` → generic `EditorWidget.vue`; XML and Tempo editors derived from it instead of copy-paste (also removed ~68 lines of duplication in the widget) |
| **Quick-filter generalisation** | `dd83a63134f` | `ScreenModifierListQuickFilter` → `AbsScreenModifierListQuickFilter` + list/search subclasses; extracted `QuickFilterGroups.vue` and `NamaResizer.vue` out of `ListView.vue` / `EditViewBlock.vue` (ListView shed 50 lines) |
| **Component extraction** | `007b6c3ed47` | `EditView.vue` reduced by ~136 lines by extracting `BlockUtils.ts` and moving focus logic into `FieldToFocusUtils.ts` |
| **Icon refactor** | `c55506fae69`, `0bae9e6a9f6`, `8e1273164db`, `9a1a0584317` | Folder restructure; ad-hoc icon components replaced by the single `NamaIcon`; `winCloseIcon` and the sort icon consolidated |
| **Dead code / redundancy** | `e6594622727`, `0a00b06a067`, `6db6d586569`, `1f0ccb21694` (`map`→`forEach`), `7616faf9e71` | Small but consistent hygiene |
| **Module hygiene** | `4b6728178be`, `7c176adce91` | Correct `module-info.java` `requires` / `exports` declarations for new packages (JPMS) |

---

## 10. Backend Contributions

* **Domain modelling (JPA/Hibernate):** 10 new top-level `@Entity` classes and ~21 detail-line entities,
  each with `@ValidationClass`, `updateCalculatedFields()`, `isValidForCommit()`, XML adapters and
  `GenerateIDs` where appropriate. Entities designed: `TechnicianAppointment`,
  `TechnicianBookingSettings`, `TechnicianCrew`, `TechnicianProcedure`, `TechnicianService`,
  `TechnicianServiceDistribution`, `TechnicianTransfer`, `WeekendDoc`, `QuickFilterCriteria`,
  `BulkEditConfig`.
* **Value objects & primitives:** `MetricsCardConfig`, `TimeLineConfig`, `BulkEditConfigAllowFor`,
  `DateRangePreset`, `HelpMessageContentType`, `PivotColumnType`, `ListDisplayType`,
  `ScreenQuickFilterEffect`, `AudioSpeechLanguages`, `AudioSpeechContextLanguage`,
  `TechnicianAppointmentStatus`, `ThemeColor`, `FieldSubType`, `TempoDF` (+ JAXB adapters).
* **Service layer:** 10 new `*WS` contracts and 10 `*WSImpl` implementations; extensions to
  `CoreUtilitiesWS`/`CoreUtilitiesWSImpl` (9 commits), `BasicUtilityWS`/`BasicUtilityWSImpl`,
  `ReportingWSImpl`, `CoreWSImplementor`, `BIPeriodComparisonExecutor`.
* **Query/persistence layer:** `SearchQueryUtils` `GROUP BY` support (§7.2); `Lister` extensions
  (9 commits) for quick-filter values and criteria translation; `ListLayoutUtil` metadata resolution;
  `TabularResult` and `TabularResultFactory` wire-value handling; JDBC schema introspection.
* **Post-actions / business hooks:** `BulkEditConfigPostActions`, `QuickFilterPostActions`,
  `TechnicianAppointmentPostActions`, `TechnicianCrewPostActions`,
  `TechnicianServiceDistributionPostActions`, `TechnicianTransferPostActions`.
* **Screen-layout metadata DSL:** 33 commits to `BasicModuleDefaultUI.java`, defining default edit and
  list screens in Java (pages, groups, grids, columns, quick-filter groups) for every entity you added.
* **Servlets:** `CRUDServlet` (5), `EntitiesServlet` (4), `FieldsManipulationServlet` (2),
  `LoginServlet2` (2), `GCTestServlet`, `FacebookEventsServlet`.
* **Validation & error handling:** `NaMaFailureResultException` on invalid quick-filter configuration;
  `NaMaServiceExcepption.markedForKill()` for cancelled bulk edits; accumulating `Result` validation in
  `WeekendDoc`; `NaMaServiceExcepption` message improvements in `14567e7c8b6`.
* **i18n:** 116 changes across `cmn-ar*.properties` / `cmn-en*.properties` — every feature shipped
  bilingual (Arabic + English), including RTL-aware UI work.

---

## 11. Frontend Contributions

* **57 new Vue 3 components/views**, all in `<script setup>` + TypeScript. Highlights:
  * **Views:** `TechnicianAppointmentCreator.vue` (972 lines), `UtilsSQLRunner.vue` (435),
    `UtilsWebsocketSessions.vue` (233).
  * **Dashboard widgets:** `MetricsCardDashboardWidget`, `TimelineDashboardWidget`,
    `CardMenuDashboardWidget`, `RecentVisitsDashboardWidget`.
  * **AG Grid ecosystem (13 components):** `AGGridBigTextCellEditor`, `AGGridIconCellEditor/Renderer`,
    `AGGridColorPickerCellRenderer`, `AGGridAttachmentCellRenderer`, `AGGridLinkCellRenderer`,
    `AGGridEnumRenderer`, `AGGridEmailRenderer`, `AGGridPhoneNumberRenderer`,
    `AGGridMultiChoiceRenderer`, `AGSQLEditor`, `AGXMLEditor`, `AGTempoEditor`,
    `AGGridSettingsPanel`.
  * **Dialogs:** `BulkEditDialog`, `ShowFieldInfoDialog`, `ServerLogDialog`, `LoginByQRDialog`,
    `QRInfoDialog`, `AboutNamaDialog`, `ControlAGSortColumnsDialog`, `GenTranslationsDialog`,
    `EditUIElementPropertiesDialog`, `QuickEditReferenceDialog`.
  * **Structural:** `NamaIcon`, `NamaTimeLine`, `NamaTimelineBox`, `NamaTimelineWrapper`,
    `NamaResizer`, `HelpMessage`, `QuickFilterGroups`, `ApprovalCaseBadges`, `ApprovalCaseTimeline`,
    three sidebar modes, four question-field widgets.
* **26 new TypeScript utility modules**, including `QuickFilterUtils`, `TechnicianAppointmentUtils`,
  `GridExporter`, `NamaIconUtils`, `FieldToFocusUtils`, `FieldInfoUtils`, `DialogUtils`,
  `BlockUtils`, `MonacoEditorUtils`, `QuickFilterURLSerializer`, `AgShowFieldInfoContextMenu`,
  and the `useNamaBreakpoints` / `useQuestionList` composables.
* **State management:** Pinia stores — `ToastDataStore` (error de-duplication logic),
  `nama-flags-store` (12 commits), `loginInfo`.
* **Client-side caching:** `ClientCache.ts` (9 commits), `CacheUtil.ts`, `MetaData.ts`, and list-view
  preference caching hardened in `9a6385866dc`.
* **Routing:** new routes for SQL Runner, WebSocket sessions, server log, technician appointments;
  route-guard hardening in `f64c4a2377e` (see §12).
* **Responsive / mobile:** `useNamaBreakpoints`, mobile column widths (`15bbacaf65b`), centred
  notifications/approvals (`5e5022b1cf0`), mobile block resizer (`48d10ba24a0`), responsive timeline
  pagination (`b010aefa300`), dashboard refresh overflow fixes (`7d94bcc33a5`, `9637029e887`).
* **Theming:** 42 commits to `app.scss`; systematic dark-mode correctness work.
* **Accessibility/UX:** full keyboard shortcut system (`ShortCutsUtil.ts`), focus management,
  `Alt+Ctrl+I`/`Alt+Ctrl+X`/`F7`/`Alt+F12` handlers, infinite navigation in the navbar searcher.

---

## 12. Security & Authorization Contributions

*Modest but real — describe precisely, don't overstate.*

* `f64c4a2377e` — **"Secure UtilsView"**: reworked `routes.ts` and `Utils.vue` so administrative utility
  pages (task monitor, WebSocket sessions) are gated rather than reachable by URL.
* `70e1e55a0ac` — recent-visit entries are removed when the user is **not authorised** to open the
  target record in list view.
* `b9edf0fea15` — **forced password change on first login** (client-side enforcement of the
  must-change-password flow).
* `971ccf47eb7` — QR-based login flow (`LoginByQRDialog.vue`, `LoginUtils`, `LoginPresenter`,
  `LoginViewImpl`).
* `7875a4cd9ed` — show/hide password affordance on Sign-In and Change-Password pages.
* `31225fb4c68` — approval-state guard preventing deletion of records with active approvals
  (server-side `EntityMediator` + client).
* `14567e7c8b6` — bulk-edit endpoints guarded by `CRUDServlet.fromVue(req)` and entity-type validation.
* `cb74845b02c` — Bearer-token auth against the Respond.io API using credentials resolved from a
  configuration entity (no hard-coded secrets); `FlatIconIconDownloader` takes its API key from
  `args[0]` rather than embedding it.

---

## 13. API / Integration Contributions

**New server operations (all four defined by you in `GUI2Operations` and routed in a servlet):**

| Operation | Servlet | Backing service | Commit |
|---|---|---|---|
| `fetchQuickFilterValues` | `CRUDServlet` | `Lister.findLayoutQuickFilterValues` | `b309c6da18a` |
| `fetchBulkEditFields` | `EntitiesServlet` | `BasicUtilityWS.fetchBulkEditFields` | `14567e7c8b6` |
| `bulkEditAndSave` | `EntitiesServlet` | `EntityService.findByID` + `saveAndCommit` | `14567e7c8b6` |
| `fetchTableAndColumnNames` | `CRUDServlet` | `BasicUtilityWSImpl` (JDBC `INFORMATION_SCHEMA`) | `57cab28d738` |
| `searchForFieldsHelpMsgs` | `FieldsManipulationServlet` | `CoreUtilitiesWS` | `4b6728178be` |
| list-as-timeline | `EntitiesServlet` | `EntityService` + `ListTimelineResult` | `f2b037f8f58` |

**Contract/DTO design:** `DTOTimelineData`, `DTOMetricsCardLine`, `DTOBulkEditField`,
`DTOHelpMessage`(+3 related), `QuickFilterValuesRequest`, `ListTimelineResult`,
`AGGridGetRowsRequest` extensions, `DTOWebSocketSessionInfo`, `DTODashboardValue`, plus every
`DTOTechnician*`, `DTOWeekendDoc*`, `DTOBulkEditConfig*`, `DTOQuickFilterCriteria*`.

**Third-party integrations:**
* **Respond.io (WhatsApp Business)** — `cb74845b02c`: new `RespondIoMessage` (127 lines) posting to
  `https://api.respond.io/v2/contact/phone:{phone}/message` with Bearer auth, channel id resolution
  from a `WhatsAppMessageConfiguration`, message-id persistence on success and structured error
  propagation on failure; registered as a new `WhatsAppMessageServiceProvider` alongside the existing
  providers.
* **Meta / Facebook Graph API** — `7311180fd43`, `dd56771a840`: lead-generation ingestion fixes and
  API version upgrade (see §8.10).
* **Freepik / Flaticon API** — `79fe244d7b5`: bulk icon retrieval pipeline (Apache HttpClient 5 +
  Apache POI).
* **Browser Web Speech API** — via VueUse `useSpeechRecognition`, with `navigator.permissions` /
  `getUserMedia` permission handling and language selection.

---

## 14. Database Contributions

* **Entity/schema design:** 10 new top-level entities + ~21 detail-line entities, with references
  (`TechnicianBookingSettingsRef`), generic references (`GenericReference` resolution in
  `TechnicianAppointment.updateBasedOnDoc`), one-to-many detail collections, and enum-backed columns.
  Schema DDL is generated by the platform's ORM layer from these classes.
* **Data migration:** `HRMigrateAttendanceWeekendCommitedBefore` (`d6d2b5914b8`) — a versioned
  `MigratorBase` running native **T-SQL** `UPDATE … FROM … LEFT JOIN` statements to backfill
  `commitedBefore` on two tables. Also bumped `ApplicationVersion` in the same commit.
* **Query engine work:** JPA **Criteria API `GROUP BY`** support with aggregate/non-aggregate column
  separation in `SearchQueryUtils` (`b309c6da18a`); aggregate alias handling for `avg`/`min`/`max`.
* **Criteria/expression building:** `Criteria`, `TextDF`, `CriteriaBuilder` extensions; server-side
  criteria construction from UI filter state (`addQuickFilters`, `toCriteria`).
* **Query correctness in HR:** added the `commitedBefore = TRUE` predicate and a shared, parameterised
  criteria builder for weekend lines across two entity types.
* **Schema introspection:** `INFORMATION_SCHEMA.TABLES ∪ INFORMATION_SCHEMA.COLUMNS` JDBC query for
  SQL editor autocomplete, cached in a static field.
* **Metadata caching:** contributions to `GenericRefOverriderFromDBUtil` (14 commits), the platform's
  `ConcurrentHashMap`-based cache of DB-driven customisation metadata (icons, colours, formats,
  descriptors).

**Database engine:** SQL Server — inferred from T-SQL-only `UPDATE … FROM … JOIN` syntax and
`INFORMATION_SCHEMA` usage. *(Label this "SQL Server / T-SQL" rather than naming a version.)*

---

## 15. Testing Contributions

**None found.** This is a factual finding, not an oversight in the analysis:

* **Zero** `.test.ts` / `.spec.ts` files exist anywhere in the repository.
* You created or modified **no** files under `src/test/java` (the repo contains 23 such files total,
  none touched by you).
* `GCTestServlet.java` and `test.html` are production diagnostic utilities, not test code.

**Implication:** do **not** put unit/integration/E2E testing on your CV based on this repository. If you
have testing experience, it must come from elsewhere. See §25.

---

## 16. Performance Contributions

Supported by evidence, all frontend/client-side:

| Work | Commit | What changed |
|---|---|---|
| Eliminated duplicate dashboard fetches | `7a05b8c4324` | `EditScreenDashBoard.vue`: removed 33 lines of redundant fetch/watch logic causing repeated network calls per render |
| Non-blocking autocomplete fetch | `9b072f7832b` | SQL Runner completion data fetched silently in the background instead of blocking the editor on slow networks |
| Icon bundle reduction | `55ff12cf327`, `a5c9c3e3fb8`, `d48d3502afb`, `5196559fb31` | Replaced eager icon imports with `await`ed async components; removed unused registry entries and per-dialog icon imports across ~30 files |
| Server-side introspection caching | `57cab28d738` | `INFORMATION_SCHEMA` result cached in a static field — introspection runs once per JVM, not per request |
| Grid render correctness/efficiency | `2d85e52910a` | Replaced dual-binding + `applyTransaction` with a single `setGridOption` path, removing redundant re-renders |
| Server-side row model & filtering | `d13b7f90a43`, `c70c3260d60`, `48aa1f7116b` | Work in `ColumnFiltrationServerSideFactory` — filtering/paging pushed to the server rather than loading full datasets |
| Query counting via SQL aggregation | `b309c6da18a` | Quick-filter counts computed with `count(id)` + `GROUP BY` in the database instead of fetching rows to count client-side; page size capped at 25 buttons |

**No measured before/after numbers exist in the repository.** Describe these as engineering changes,
never as "improved performance by X%".

---

## 17. Architecture Contributions

* **New vertical sub-module:** the Technician Appointment domain (entities → contracts → services →
  post-actions → menu registration → UI route), added following the platform's existing layering rather
  than bypassing it.
* **Reusable frameworks, not one-off screens** — each of Quick Filter, Bulk Edit, Help Messages,
  Timeline, Icons and Date-Range Presets is **configuration-driven from the database**
  (`ScreenModifier` / dedicated config entities) so behaviour can change per customer without a code
  change. This is the strongest architectural signal in your history.
* **Abstraction extraction:** `AbsAttendanceWeekendLine`, `AbsScreenModifierListQuickFilter`,
  `EditorWidget` — each introduced to admit a second implementation without duplicating logic.
* **Design patterns evidenced:** Factory (`*Factory`, `ColumnFiltrationServerSideFactory`,
  `AGGridColumnFactory`), Singleton (`GridExporter.getInstance()`), Adapter (JAXB `*Adapter` classes),
  Builder (`CriteriaBuilder` usage and extension), Template Method (`MigratorBase`,
  `AbsAGGridEditViewColumn`), Registry (`NamaIconList`, `DownloadedIcons`), Presenter
  (`ListPresenter`/`EditPresenter`/`SearcherViewPresenter`, 60+ commits).
* **Code generation as architecture:** you both consumed and extended the codegen layer —
  `GenJSConstantFiles`, `GenJSTypeInterfaces`, `GenNamaIcons` in `all-mods-generator` — so Java enums
  and DTOs stay in sync with their TypeScript declarations (`namatypedefs.d.ts`, 30 commits).
* **Cross-client consistency:** several features (help messages, icons) were implemented in **both**
  the new Vue client and the legacy `gui-base`/`gui-core` client.
* **JPMS discipline:** correct `module-info.java` `requires`/`exports` for new packages.

---

## 18. Technologies Actually Used

*(Every item below is backed by a commit where you wrote code using it.)*

### Languages
* **Java 21** — records (`DateRangeResolver.DateRange`, `EmployeeAttendancePlanData`), switch
  expressions with `yield`, text blocks (SQL), generics (`<T extends AbsAttendanceWeekendLine>`),
  streams, `java.time`.
* **TypeScript** — 667 file-changes; typed interfaces, generics, discriminated unions across 26 new modules.
* **JavaScript** — generated constant files, legacy `infra/gui2/src/main/js`.
* **SQL / T-SQL** — migration statements, `INFORMATION_SCHEMA` introspection, JDBC queries.
* **SCSS/CSS** — 42 commits to `app.scss`, CSS custom properties, theme variables.
* **HTML**, **XML/JAXB** (annotations, adapters, XML editor support).

### Frameworks & Libraries
* **Vue 3** (Composition API, `<script setup>`, composables), **Quasar**, **Pinia**, **Vue Router**,
  **VueUse**, **Vite** (build config).
* **AG Grid Enterprise** + **AG Charts Enterprise** — deep usage; you performed the
  **v33 → v34 upgrade** (`a856534a4a0`, `2c185029b7d`).
* **FullCalendar** — technician appointment scheduler.
* **Monaco Editor** — completion + hover providers, worker bundling.
* **pdfmake**, **dayjs**, **GSAP**, **qrcode**.
* **Jakarta EE** — Servlets, JAXB (`jakarta.xml.bind`), JPA (`jakarta.persistence`).
* **JPA / Hibernate** — entities, `CriteriaBuilder`/`CriteriaQuery`, `Root`, `Selection`, joins,
  group-by, native queries.
* **Jackson** — custom `JsonDeserializer` for polymorphic request payloads.
* **JasperReports** — `JasperReportCompiler`, report wizard parameters.
* **Apache POI**, **Apache HttpClient 5**.
* Nama's internal DSL / code-generation framework.

### Databases
* **SQL Server** (T-SQL, `INFORMATION_SCHEMA`) via JPA/Hibernate and raw JDBC.

### Tools & Platforms
* **Git** (trunk-based workflow on `master`), **Java Platform Module System**, **Quasar/Vite** build
  configuration, **Web Speech API**, **Freepik**, **Meta Graph API**, **Respond.io** APIs.

---

## 19. Engineering Practices Demonstrated

Supported by evidence:

* **Full-stack feature delivery** — entity → contract → endpoint → UI → i18n in single coherent commits.
* **Layered architecture** — you consistently work *with* the domain/contract/service/presentation
  separation rather than shortcutting it.
* **Configuration-driven / metadata-driven design** — new behaviour surfaced through `ScreenModifier`
  and config entities instead of hard-coding.
* **REST/HTTP endpoint development** — servlet-based operations with JSON request/response handling.
* **Domain modelling & ORM** — entity design, relationships, calculated fields, commit validation.
* **Database query engineering** — Criteria API, aggregation, group-by, native SQL, migration.
* **Third-party API integration** — three external APIs with auth, error handling and version handling.
* **Internationalisation & RTL** — every feature shipped Arabic + English.
* **Debugging & root-cause analysis** — see §8; several fixes identify a genuine race, a null context,
  or a wrong identity comparison rather than patching symptoms.
* **Refactoring for extensibility** — abstraction extraction driven by a concrete second use case.
* **Backward-compatible change management** — versioned data migrator accompanying a behaviour change.
* **Long-running task UX** — progress reporting and cancellation for bulk operations.
* **Cross-client consistency** — parallel implementations in the legacy and modern GUIs.
* **Working in a large shared codebase** — 2,685 files across 23 modules, alongside ~100 author identities.

---

## 20. Top 10 CV-Worthy Contributions

---

### #1 — Technician Appointment & Booking Module (CRM)
**What I did:** Designed and built an entire technician/crew scheduling sub-system for the ERP's CRM
module, from database entities through to an interactive booking calendar.
**Technical detail:** 7 JPA entities + 9 detail-line entities + a status enum; 7 web-service contracts
and implementations; 4 post-action classes; DTO layer; menu/sub-module registration; 78 bilingual
translation keys. Frontend: a 972-line FullCalendar booking view driven by a 440-line
constraint-resolution utility that converts HR attendance-shift definitions into calendar
`validRange`/`slotDuration`/`businessHours`, applies dynamic server-side reference filtering via
`CriteriaBuilder`, and assigns deterministic per-crew colours.
**Problem context:** field-service organisations needed to book technician crews against procedures and
services, constrained by department-level booking rules and working shifts.
**Evidence:** `0c1cce3dd1d` (2026-08-13).
**Tech:** Java 21, JPA/Hibernate, JAXB, Vue 3, TypeScript, FullCalendar, Quasar.
**Why it's valuable:** the single clearest demonstration of independent full-stack ownership of a
non-trivial domain — scheduling, constraints, and a real UI.

---

### #2 — Quick Filter Framework (with SQL aggregation support)
**What I did:** Built a configurable one-click filtering system for every list screen in the ERP,
including live per-filter record counts.
**Technical detail:** new `QuickFilterCriteria` entity and `ScreenModifier` detail types; five new
JAXB layout contracts; a new `fetchQuickFilterValues` server operation; **extended the platform's JPA
Criteria query builder to emit `GROUP BY`** so counts are computed by the database rather than in
application code; cartesian-product generation for multi-column filter groups; metadata resolution for
filter columns not present in the display columns; a TypeScript renderer covering all 10+ field types;
URL serialisation so filtered views are shareable.
**Problem context:** users had only a full criteria editor — too heavy for the everyday "show me open
items" case.
**Evidence:** `b309c6da18a`, `dd83a63134f`, `e8c6dbf8356`, `b833ecfece7`, `ba1c0b3bcfb`.
**Tech:** Java, JPA Criteria API, SQL aggregation, JAXB, Vue 3, TypeScript, Pinia.
**Why it's valuable:** shows you can change a shared query engine safely — the highest-risk kind of
platform work — and pair it with a polished UI.

---

### #3 — Bulk Edit Framework
**What I did:** Built configurable multi-record editing: an administrator declares which fields are
bulk-editable per screen, and users apply one edit to many selected rows.
**Technical detail:** `BulkEditConfig` entity with field/applicability detail lines; two new servlet
endpoints; a **custom Jackson deserializer** resolving the polymorphic payload to the concrete DTO type
at runtime; execution as a **tracked, progress-reporting, cancellable server task**; reflective
per-field patching followed by `saveAndCommit` per record so all domain validation, calculated fields
and approval rules still execute.
**Problem context:** users had to open and re-save records one at a time for routine mass changes.
**Evidence:** `14567e7c8b6`, `a91023afceb`.
**Tech:** Java, Jakarta Servlets, Jackson, Java reflection, JPA, Vue 3.
**Why it's valuable:** deliberately chose correctness (per-record domain rules) over the easy path
(bulk SQL), and handled long-running-operation UX properly.

---

### #4 — HR Attendance Weekend Refactor + `WeekendDoc` + Data Migration
**What I did:** Introduced standalone, approvable weekend documents into HR attendance, without
breaking the existing plan-based mechanism or historical data.
**Technical detail:** extracted `AbsAttendanceWeekendLine` as an abstract superclass; created the
`WeekendDoc` document entity, lines, DTOs and web service; replaced hard-coded repository lookups with
a generic `fetchWeekendLines(…, Class<T extends AbsAttendanceWeekendLine>)` selected by an
`HRConfiguration` flag; added a `commitedBefore` predicate so draft documents no longer affect
attendance; wrote a **versioned `MigratorBase` migration** executing native T-SQL `UPDATE … FROM … JOIN`
statements to backfill the new column on existing rows.
**Problem context:** weekends could only be defined inside an attendance plan; customers needed them as
documents that go through approval.
**Evidence:** `8f1d82b109b`, `d491616f2b0`, `b9a9c2538da`, `d6d2b5914b8`.
**Tech:** Java generics, JPA, T-SQL, schema/data migration, HR domain logic.
**Why it's valuable:** textbook open/closed refactor on live payroll-adjacent logic, plus the
discipline to ship a migration alongside the behaviour change.

---

### #5 — Icon, Colour & Theming System (incl. external-API asset pipeline)
**What I did:** Gave the entire ERP a coherent, customer-overridable visual identity.
**Technical detail:** a single `NamaIcon` component resolving icons through a priority chain with async
loading; DB-driven overrides at entity, enum-constant and field level via new `ScreenModifier` detail
entities, resolved and cached in the platform's metadata cache; a **build-time Java tool** that reads a
spreadsheet with Apache POI, calls the Freepik REST API with Apache HttpClient 5, and code-generates
~1,500 Vue SFC icon components plus a Java registry; systematic light/dark colour correctness.
**Problem context:** thousands of entities with no visual identity, and per-customer branding
requirements that could not require a rebuild.
**Evidence:** `6b1cff35549`, `0451d281f01`, `79fe244d7b5`, `5295af2f821`, `ff8f743d5af`, `dbb9ad8f953`.
**Tech:** Vue 3, TypeScript, SCSS, Java, Apache POI, Apache HttpClient 5, REST, code generation.
**Why it's valuable:** rare combination of design-system thinking, backend metadata modelling, and
automation of a task nobody wanted to do by hand.

---

### #6 — In-Browser SQL Runner & Monaco Editor Platform
**What I did:** Built an admin SQL console with intelligent editing, then generalised it into a reusable
code-editor capability across the product.
**Technical detail:** Monaco Editor with custom SQL **completion** and **hover** providers fed by live
schema metadata; a backend `fetchTableAndColumnNames` operation querying `INFORMATION_SCHEMA` over JDBC
and caching the result per JVM; Vite worker pre-bundling configuration; results in AG Grid with correct
cell data types; generalisation of `SQLEditor` → `EditorWidget`, yielding XML and Tempo editors plus
three AG Grid cell editors, backed by a new `TempoDF` datatype + JAXB adapter and `FieldSubType`
metadata so the platform picks the right editor automatically.
**Evidence:** `717d1b8b96b`, `57cab28d738`, `9a0c71aed80`, `3d3d47c04f9`, `9b072f7832b`.
**Tech:** Monaco Editor, TypeScript, Vue 3, Vite, Java, JDBC, SQL.
**Why it's valuable:** developer-tooling instinct plus the follow-through to turn one screen into a
reusable capability.

---

### #7 — AG Grid Platform Ownership
**What I did:** Owned the data-grid layer — the most-used component in the product — across two major
version upgrades and dozens of capability and correctness changes.
**Technical detail:** upgraded AG Grid / AG Charts **v33 → v34** across the codebase; built 13 custom
cell renderers/editors (attachment, icon, colour picker, link, enum, email, phone, multi-choice, big
text, SQL/XML/Tempo); implemented row drag with revision-awareness, selected-row totals, autofit,
column-group display types, pivot mode, a sort-columns dialog, a settings panel, and copy/paste handling
for numbers and enums; extended server-side column filtration for reference, date-time and boolean
types; fixed the row-id/transaction race described in §8.1; fixed Excel export number formatting.
**Evidence:** `a856534a4a0`, `2c185029b7d`, `2d85e52910a`, `6514103227e`, `20a6d233c3d`,
`52f83a5e420`, `4c4ead9977d`, `c70c3260d60`, `2f42bfe06fe`, `aec046f8a23`.
**Tech:** AG Grid Enterprise, AG Charts, Vue 3, TypeScript.
**Why it's valuable:** sustained ownership of a critical shared component, including risky
dependency upgrades — a strong senior-engineer signal.

---

### #8 — Timeline Framework Across List View, Edit View and Approvals
**What I did:** Built a reusable timeline visualisation and applied it in three different contexts.
**Technical detail:** backend `ListTimelineResult`, `ListScreenToTimelineConfig`, `DTOTimelineData` and
a new `EntitiesServlet` branch so **any** list screen can render as a timeline; `TimeLineConfig`
value object for dashboards; frontend `NamaTimeLine` / `NamaTimelineBox` / `NamaTimelineWrapper`;
responsive pagination via a new `useNamaBreakpoints` composable; **approval-case timeline** showing
step history *and* next candidate approvers, which required extending `ApprovalCaseFactory` and
`ApprovalCaseStepCandidateFactory` server-side.
**Evidence:** `34c9fcf2143`, `f2b037f8f58`, `f186758a8f5`, `6a2c2d35b84`, `62b0f28f414`.
**Tech:** Java, JPA, Vue 3, TypeScript, responsive design.
**Why it's valuable:** shows generalisation instinct — one mechanism, three consumers — and comfort
inside an approval-workflow engine.

---

### #9 — Contextual Help Message Mechanism
**What I did:** Built an end-to-end system for attaching contextual help to fields, grid headers and
error messages, configurable from the database.
**Technical detail:** four new DTOs, a new `HelpMessageContentType` primitive with JAXB adapter, a new
`CoreUtilitiesWS` method and `searchForFieldsHelpMsgs` endpoint, extensions to `EntityHelpLine` /
`ErrorMsgHelpLine` / `IHasHelpMessages`; a 150-line Vue component handling anchoring, deduplication by
id, horizontal-scroll repositioning, composite fields, and light/dark theming — plus a parallel
implementation in the **legacy** GUI so both clients behaved identically.
**Evidence:** `4b6728178be`, `e76c39763fa`, `5bc41215704`, `fa55347313b`, `45fe40510f2`.
**Tech:** Java, JAXB, Jakarta Servlets, Vue 3, TypeScript.
**Why it's valuable:** demonstrates you can ship a feature across two client architectures and think
about content management, not just UI.

---

### #10 — Dashboard & Reporting Widget Suite
**What I did:** Extended the dashboard/reporting platform with six widget types and relative date-range
support end-to-end.
**Technical detail:** `MetricsCardConfig` and `TimeLineConfig` value objects (+ DTOs + factories), a new
`PivotColumnType` primitive wired into the dashboard wizard, server-side `AGGridUtils.java` for chart
configuration, and Vue widgets for metrics cards, timelines, card menus, recent visits, pivot tables and
AG Charts. Separately, a 219-line `DateRangePreset` primitive with 14 presets and a `java.time`-based
`DateRangeResolver` (records, switch expressions, `TemporalAdjusters`, correct quarter maths), a
513-line picker widget, and integration into BI cross-filters, the report wizard and
**JasperReports**. Added client-side **PDF export** (`GridExporter.ts`, pdfmake, with an Arabic font).
**Evidence:** `99c3d870c50`, `34c9fcf2143`, `b873bbb4236`, `794e6e6638f`, `cced231ebf4`,
`7c176adce91`, `5d0794888cc`.
**Tech:** Java 21 (`java.time`), JasperReports, Vue 3, AG Charts, pdfmake, GSAP.
**Why it's valuable:** breadth across BI/reporting plus a clean, well-factored piece of date logic that
is easy to talk through in an interview.

---

## 21. Suggested Namasoft CV Experience

### Namasoft — Software Engineer
**January 2025 – Present** *(evidence: first commit 2025-01-27, latest 2026-08-13)*
*Nama ERP — a multi-module Java 21 / Vue 3 enterprise resource planning product*

* **Delivered ~18 full-stack features across 99 business requirements** in a Java 21 + Vue 3 ERP
  monorepo, each spanning JPA entity design, web-service contracts, servlet endpoints, typed Vue/
  TypeScript UI, and Arabic/English localisation.

* **Designed and built a technician appointment & booking module for the CRM domain** — 7 JPA entities
  with detail lines, 7 web-service contracts and implementations, and a FullCalendar-based booking
  screen whose constraint engine derives valid slots, business hours and calendar ranges from
  configurable HR shift definitions.

* **Built a configuration-driven Quick Filter framework for every list screen**, adding `GROUP BY`
  support to the platform's shared JPA Criteria query builder so per-filter record counts are computed
  by the database, and implementing multi-column filter matrices, type-aware label rendering and
  URL-serialisable filter state.

* **Implemented a bulk-edit capability for multi-record updates**, using a custom Jackson deserializer
  for polymorphic DTO payloads and executing edits as a cancellable, progress-reporting server task
  that re-runs full domain validation per record rather than issuing bulk SQL.

* **Refactored HR attendance weekend handling** by extracting an abstract line type and making
  attendance calculation source-agnostic behind a configuration flag, introducing a new approvable
  `WeekendDoc` document — and shipped a versioned T-SQL data migration to backfill existing records.

* **Owned the application's AG Grid data-grid layer**, delivering two major version upgrades
  (v33 → v34), 13 custom cell renderers/editors, pivot mode, server-side column filtering, and
  PDF/Excel export — plus diagnosing and fixing a row-id/transaction race that caused intermittent
  grid failures.

* **Built the product's icon and theming system**, including database-driven per-customer icon and
  colour overrides at entity, enum and field level, and a Java tooling pipeline that ingests a
  spreadsheet via Apache POI, retrieves assets from an external REST API, and code-generates ~1,500
  Vue icon components.

* **Integrated three external services** — Respond.io (WhatsApp Business messaging), the Meta Graph API
  (lead-generation ingestion, including a page-token selection bug fix and a v14 → v25 upgrade), and
  the Freepik asset API — with bearer-token authentication and structured error propagation.

> Pick 6 of the 8 bullets depending on the role: for a **backend** role keep 1–5 and 8; for
> **full-stack/frontend** keep 1–4, 6, 7.

---

## 22. Suggested Technical Skills

**Languages:** Java (21), TypeScript, JavaScript, SQL / T-SQL, HTML, SCSS/CSS, XML

**Frameworks & Libraries:** Vue 3 (Composition API), Quasar, Pinia, Vue Router, VueUse, Vite,
AG Grid Enterprise, AG Charts, FullCalendar, Monaco Editor, pdfmake, dayjs, Jakarta EE (Servlets,
JAXB, JPA), Hibernate, Jackson, JasperReports, Apache POI, Apache HttpClient

**Databases:** SQL Server (T-SQL, `INFORMATION_SCHEMA`), JPA/Hibernate ORM, JPA Criteria API,
native SQL, data migrations

**Tools & Platforms:** Git (trunk-based workflow), Java Platform Module System, Vite/Quasar build
tooling, IntelliJ IDEA, REST/HTTP APIs, Web Speech API

**Engineering Practices:** Full-stack feature delivery · Layered/modular architecture ·
Domain-driven entity modelling · REST endpoint development · Database query optimisation and
aggregation · Schema and data migration · Metadata/configuration-driven design · Refactoring for
extensibility · Root-cause debugging · Third-party API integration · Internationalisation (Arabic/
English, RTL) · Responsive UI · Design patterns (Factory, Adapter, Builder, Template Method,
Singleton, Registry, Presenter) · Working in a large multi-module shared codebase

---

## 23. High-Confidence Claims

*Directly provable from commits and code — safe to state as fact.*

1. Contributed 377 commits to a production ERP over ~19 months (2025-01 → 2026-08). *(`git log`)*
2. Closed 99 distinct tracked business requirements. *(commit messages)*
3. Designed 10 top-level JPA entities and ~21 detail-line entities. *(§10)*
4. Created 10 web-service contracts + 10 implementations. *(files added)*
5. Added 4 new server operations/endpoints plus a list-timeline endpoint. *(`GUI2Operations`, servlets)*
6. Created 57 Vue components/views and 26 TypeScript modules. *(diff-filter=A)*
7. Extended the platform's JPA Criteria query builder with `GROUP BY` support. *(`b309c6da18a`)*
8. Wrote a versioned data migration executing native T-SQL. *(`d6d2b5914b8`)*
9. Performed AG Grid / AG Charts major-version upgrades. *(`a856534a4a0`, `2c185029b7d`)*
10. Integrated Respond.io, Meta Graph API and Freepik APIs. *(`cb74845b02c`, `7311180fd43`, `79fe244d7b5`)*
11. Shipped every feature bilingually (Arabic + English). *(116 `.properties` changes)*
12. Built configuration-driven frameworks (Quick Filter, Bulk Edit, Help Messages, Icons). *(§7)*
13. Worked across 23 modules of a monorepo with 100 distinct author identities. *(`git shortlog`)*
14. Are the **top contributor** to `EditScreenGrid.vue` — the core grid component — with 52 commits
    versus 38 for the next-highest contributor. *(`git log --pretty=%an -- <file>`)*
15. Diagnosed and fixed a state-synchronisation race in AG Grid row management. *(`2d85e52910a`)*

---

## 24. Medium-Confidence Claims

*Strongly suggested but not fully provable from this repository alone. Phrase these carefully or
confirm from memory before using.*

1. **"Sole/primary owner of the Quick Filter, Bulk Edit, Icon and Technician Appointment features."**
   You authored the initial and nearly all follow-up commits, which is strong — but the repo cannot
   show whether specs, design or review came from others.
2. **"Responsible for the new Vue GUI's grid and list-view layer."** Supported by commit share on the
   key files, but 3–5 other developers also contribute there.
3. **"Improved application performance."** The changes in §16 are genuinely performance-motivated
   (duplicate fetch removal, eager-import removal, DB-side counting, non-blocking fetch), but **no
   measurements exist**. Say *"eliminated duplicate network requests"*, not *"improved performance"*.
4. **"Worked with Arabic/RTL localisation and accessibility."** i18n is fully proven; RTL/a11y is
   inferred from direction-switching and keyboard-navigation commits.
5. **"Reduced frontend bundle size."** Multiple commits explicitly target icon-loading optimisation,
   but no bundle metrics are recorded.
6. **"Collaborated across teams/modules."** You edited files also owned by many others and followed the
   existing architecture consistently — but this repository records **no code reviews, no pull
   requests, and no merge commits by you** (history is linear; you authored and committed all 377
   commits yourself). Phrase as *"worked in a shared trunk-based codebase alongside ~100 other contributor identities"*.
7. **"Security work."** Real but narrow (§12): route gating, authorisation-aware UI cleanup, forced
   password change, QR login flow, approval-based delete guard, endpoint origin checks. Do **not**
   claim you designed the authentication or authorisation system.

---

## 25. Claims That Should NOT Be Made

*The repository provides no support for any of these. Including them would be a fabrication risk.*

| ❌ Do not claim | Why |
|---|---|
| **Spring / Spring Boot** | Not used anywhere in your work. The stack is Jakarta EE servlets + a proprietary Nama framework + Hibernate/JPA. This is the single most likely accidental CV error — avoid it. |
| **Unit / integration / E2E testing, TDD, test coverage** | **Zero** test files created or modified. No test framework in the frontend at all. |
| **CI/CD, Jenkins, GitHub Actions, Docker, Kubernetes** | No pipeline, container or deployment configuration touched. |
| **Microservices** | The product is a modular monolith with SOAP/RPC-style internal web services. |
| **"Designed the database schema"** (unqualified) | You designed **entities**; DDL is generated by the platform's ORM layer. Say *"designed JPA entities and relationships"*. |
| **Query/performance percentages, latency numbers, load figures** | No benchmarks anywhere in the history. |
| **User counts, revenue impact, cost savings, business KPIs** | Not derivable from the repository. |
| **Team lead, mentoring, onboarding, hiring** | No supporting evidence. |
| **Code review responsibilities / PR approvals** | You authored zero merge commits; no review artefacts exist locally. |
| **Designed the authentication or authorisation system** | You built login-adjacent UI flows and some access gating; the auth backend predates you. |
| **Redis / message queues / Kafka / caching infrastructure** | Only in-process `ConcurrentHashMap`/static caching and browser-side caching. |
| **GraphQL, gRPC, WebSockets (as an implementer)** | You built a WebSocket **session monitoring page**; you did not implement the WebSocket layer. |
| **Cloud (AWS/Azure/GCP)** | No evidence. |
| **AI/LLM feature development** | You made cosmetic changes to an existing `ChatBox` component; you did not build it. |
| **React / Angular / Node.js backend** | Not present in your work. |
| **NoSQL / MongoDB** | Not present. |

---

## 26. Important Git Evidence / Commit References

**Reproduce this analysis:**
```bash
git log --all --author="fawz" --regexp-ignore-case --pretty="%ad %h %s" --date=short --reverse
git shortlog -sne --all | grep -i fawz
git log --all --author="fawz" -i --diff-filter=A --pretty=format: --name-only | sort -u
git log --all --author="fawz" -i --numstat --pretty="COMMIT %h"
```

**Key commits by theme:**

| Theme | Commits |
|---|---|
| Technician Appointments | `0c1cce3dd1d` |
| Quick Filter | `b309c6da18a`, `e8c6dbf8356`, `dd83a63134f`, `55ae509092f`, `b833ecfece7`, `ba1c0b3bcfb`, `7d82df215e2`, `60eb6dc24ff` |
| Bulk Edit | `14567e7c8b6`, `a91023afceb`, `32774b22366` |
| Icons / theming | `6b1cff35549`, `b1dbc811b7e`, `0451d281f01`, `169cef38a19`, `b341a33728e`, `c55506fae69`, `79fe244d7b5`, `5295af2f821`, `ff8f743d5af`, `dbb9ad8f953`, `a5c9c3e3fb8`, `d48d3502afb` |
| SQL Runner / editors | `717d1b8b96b`, `57cab28d738`, `9a0c71aed80`, `3d3d47c04f9`, `9b072f7832b`, `b59d858da0d`, `8e9cf0a9235` |
| Dashboards & widgets | `99c3d870c50`, `f8c417d425c`, `34c9fcf2143`, `b873bbb4236`, `794e6e6638f`, `52f83a5e420`, `cced231ebf4`, `75b6db28d07`, `7a05b8c4324` |
| Timelines | `34c9fcf2143`, `f2b037f8f58`, `f186758a8f5`, `6a2c2d35b84`, `62b0f28f414`, `3ec6c68ef8d`, `304d956f9a6`, `d556d1f613b` |
| HR weekend refactor | `8f1d82b109b`, `d491616f2b0`, `b9a9c2538da`, `d6d2b5914b8` |
| Help messages | `4b6728178be`, `e76c39763fa`, `45fe40510f2`, `5bc41215704`, `fa55347313b`, `46a3659c14f` |
| Date range presets | `7c176adce91` |
| Export (PDF/Excel) | `5d0794888cc`, `2f42bfe06fe` |
| AG Grid upgrades | `a856534a4a0`, `2c185029b7d` |
| Integrations | `cb74845b02c` (Respond.io), `7311180fd43` + `dd56771a840` (Meta Graph), `79fe244d7b5` (Freepik) |
| Security / auth UI | `f64c4a2377e`, `b9edf0fea15`, `971ccf47eb7`, `31225fb4c68`, `70e1e55a0ac`, `7875a4cd9ed` |
| Notable bug fixes | `2d85e52910a`, `9eb2a02cda1`, `b833ecfece7`, `ba1c0b3bcfb`, `31225fb4c68`, `924308e3cfb`, `c70c3260d60`, `2f42bfe06fe`, `7311180fd43`, `6135aaa9050`, `8ed9d5a338e` |
| Refactors | `818be2348c8`, `08aeeee63ba`, `9a0c71aed80`, `dd83a63134f`, `007b6c3ed47`, `c55506fae69`, `8f1d82b109b` |

**Files where your ownership is strongest** (your commit count):
`EditScreenGrid.vue` (52) · `app.scss` (42) · `NamaIconList.ts` (34) · `BasicModuleDefaultUI.java` (33) ·
`namatypedefs.d.ts` (30) · `ListView.vue` (25) · `AGGridUtils.ts` (25) · `EditPresenter.ts` (24) ·
`ListPresenter.ts` (22) · `EditViewBlock.vue` (20) · `GenericRefOverriderFromDBUtil.java` (14) ·
`FieldToFocusUtils.ts` (14) · `NamaTimelineBox.vue` (13)

---

*Report generated 2026-08-15 from local Git history. All commit hashes are abbreviated and verifiable
with `git show <hash>`.*
