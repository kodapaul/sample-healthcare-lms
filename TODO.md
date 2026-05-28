# Sample Healthcare LMS — Build TODO

Status: **complete** ✓ — all phases landed and verified.

---

## Phase 0 — Project Setup
- [x] Scaffold Vite + Vue 3 project (`npm create vite@latest . -- --template vue`).
- [x] Install dependencies: `vue-router`, `pinia`.
- [x] Clean out Vite starter boilerplate.
- [x] Wire `pinia` and `vue-router` into `main.js` with stub routes.
- [x] Verify dev server boots clean.

## Phase 1 — Design Tokens & Shell
- [x] `src/styles/tokens.css` with palette + spacing/type variables.
- [x] `src/styles/base.css` with element resets + base typography.
- [x] Import both globally in `main.js`.
- [x] AppHeader inline in App.vue with brand mark, nav, sticky behavior.
- [x] App shell with header + `<router-view>` + footer + page transitions.

## Phase 2 — Data Layer
- [x] `src/data/courses.js` — 6 seeded healthcare courses, 28 lessons, 30 quiz questions (clinically accurate: WHO 5 Moments, ABHR, SBAR, HIPAA Privacy Rule, AHA BLS).
- [x] `src/lib/storage.js` — namespaced `lms:` localStorage wrapper with schema version.
- [x] `stores/catalog.js` — filter/search getters.
- [x] `stores/profile.js` — name/role, hydrated + persisted.
- [x] `stores/progress.js` — per-course state, lesson completion, quiz scoring (80% pass), overall stats.

## Phase 3 — Routing
- [x] All 6 routes registered, props-driven, with not-found fallback.

## Phase 4 — Views
- [x] **CatalogView** — search + chips + grid + EmptyState fallback.
- [x] **CourseCard** — clickable card with category badge, status footer (progress / completed / not-started).
- [x] **CourseView** — hero, objectives, lesson list with completion checkmarks, status-aware CTAs.
- [x] **LessonView** — paragraphs, key-points callout, prev/next nav, mark-complete with auto-advance.
- [x] **QuizView** — 5 MCQs, gated submit, pass/fail result card, review section with correct/incorrect tinting, retry.
- [x] **HomeView (Dashboard)** — first-run profile prompt, greeting, stat row, in-progress + completed sections.
- [x] **ProfileView** — edit name/role, save flash, danger-zone reset with confirm.

## Phase 5 — Shared Components
- [x] `ProgressBar.vue` — accessible (role=progressbar, aria-*), animated fill.
- [x] `Badge.vue` — 5 variants, 2 sizes.
- [x] `EmptyState.vue` — 4 icons, slot for CTA.

## Phase 6 — Polish
- [x] First-run profile prompt on dashboard.
- [x] Route fade transitions.
- [x] Hover/focus states, visible focus rings.
- [x] Empty states for catalog (no matches) and dashboard (nothing started / nothing completed).
- [x] Fix: HomeView single-root wrap so route transition doesn't strand v-if/v-else in opacity 0.
- [x] Fix: Badge inline (not stretched) inside dashboard course cards via `:deep()`.
- [x] Fix: EmptyState SVG uses `v-if` chain instead of runtime template compilation (so production build works).

## Phase 7 — QA
- [x] Golden path: first-run → name → catalog → course → lesson → quiz → dashboard completion. Verified via Claude Preview screenshots.
- [x] Failure path: failed quiz shows warning result + retry; review section tints user's wrong answer.
- [x] Persistence: refresh mid-course keeps progress (localStorage).
- [x] Reset flow: confirm → wipe → first-run welcome reappears.
- [x] Production build: `npm run build` succeeds in 494ms, 55 modules, all routes code-split.
- [x] No console errors during interactive walkthrough.

---

## Open Questions for the Client (capture during demo)
- Downloadable PDF certificates?
- Admin authoring tools, or content imported from elsewhere?
- Multi-tenant (org accounts) or single-tenant?
- Required integrations: HRIS, SSO, CME credit reporting?
- Mobile-first or desktop-first priority?
