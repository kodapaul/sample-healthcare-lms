# Sample Healthcare LMS

A simple, client-facing demo of a Learning Management System for healthcare training. Built as a pure Vue 3 single-page application with **no backend** — all state lives in `localStorage`. The purpose is to showcase UX, flows, and visual polish to the client before any real infrastructure is built.

---

## 1. Goals

- Demonstrate a credible healthcare-training LMS experience end-to-end.
- Run entirely in the browser — no server, no API, no database.
- Look professional: clean typography, restrained color palette, medical/clinical tone.
- Be small enough to read in one sitting and easy to evolve once the client gives direction.

## 2. Non-Goals

- Real authentication, multi-user accounts, or role management.
- Real content authoring tools (admin CMS, video upload, SCORM, etc.).
- Persistence beyond a single browser profile.
- Accessibility / i18n / responsive breakpoints beyond a reasonable baseline.
- Production-grade test coverage.

## 3. Target Users (in the demo)

- **Learner** — a healthcare worker (nurse, allied-health, caregiver) browsing the catalog, taking courses, tracking progress.
- **Reviewer (the client)** — clicks through the demo to evaluate look-and-feel and core flows.

There is no admin role in this demo. Course content is seeded from a static JSON file.

## 4. Feature Scope

### 4.1 Catalog
- Grid of healthcare course cards: title, short description, duration, level, category tag, thumbnail color.
- Filter by category (e.g., *Patient Care*, *Infection Control*, *Medication Safety*, *Mental Health*, *Compliance*).
- Search by title.

### 4.2 Course Detail
- Course overview, learning objectives, module list.
- Progress bar (computed from completed lessons).
- "Start" / "Resume" / "Review" CTA based on state.

### 4.3 Lesson Viewer
- Linear lesson list inside a course.
- Each lesson is markdown-style text content (seeded) with an optional key-points summary.
- "Mark as complete" advances progress and unlocks the next lesson.

### 4.4 Assessment
- One short multiple-choice quiz per course (5–10 questions).
- Pass threshold (e.g., 80%) marks the course as **Completed**.
- Failed attempts can be retried.

### 4.5 Dashboard
- "My Learning": in-progress courses with progress bars.
- "Completed": finished courses with a faux certificate badge (date + course name).
- Simple stats: courses in progress, courses completed, total minutes learned.

### 4.6 Profile (lightweight)
- First name + role (free text), stored locally. Used to personalize the dashboard ("Welcome back, Maria").
- No password, no email verification — this is a demo.

## 5. Healthcare Course Seed (planned)

Six seeded courses, enough to populate filters and show variety:

1. **Hand Hygiene & Infection Prevention** — Infection Control
2. **Medication Administration Safety** — Medication Safety
3. **Patient Communication Essentials** — Patient Care
4. **Recognizing & Responding to Mental Health Crises** — Mental Health
5. **HIPAA & Patient Privacy Fundamentals** — Compliance
6. **Basic Life Support (BLS) Refresher** — Emergency Care

Each course: 3–5 lessons, 1 quiz, ~15–30 minutes of content.

## 6. Tech Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite** for dev/build
- **Vue Router** for navigation
- **Pinia** for state (course catalog, learner profile, progress)
- **Plain CSS** with CSS custom properties for the design tokens — no UI library, to keep the look custom and the bundle small.
- **localStorage** as the only persistence layer, wrapped behind a small `storage` module so it can later be swapped for an API.

No backend. No build-time secrets. No analytics.

## 7. Architecture

```
src/
  main.js              # app bootstrap, router + pinia
  App.vue              # shell: top nav, route outlet
  router/
    index.js
  stores/
    catalog.js         # static course data (loaded from data/courses.js)
    progress.js        # per-learner progress, persisted to localStorage
    profile.js         # learner name/role, persisted to localStorage
  data/
    courses.js         # seeded healthcare course content
  views/
    HomeView.vue       # dashboard
    CatalogView.vue    # browse courses
    CourseView.vue     # course detail + module list
    LessonView.vue     # single lesson + mark-complete
    QuizView.vue       # course assessment
    ProfileView.vue    # set name/role, reset progress
  components/
    AppHeader.vue
    CourseCard.vue
    ProgressBar.vue
    Badge.vue
    EmptyState.vue
  styles/
    tokens.css         # design tokens (color, type, spacing)
    base.css           # element resets + base typography
```

### Persistence Contract
A single `storage` helper namespaces all keys under `lms:` so nothing collides with other apps on `localhost`. Three buckets:
- `lms:profile` → `{ name, role }`
- `lms:progress` → `{ [courseId]: { lessonsCompleted: string[], quizScore: number|null, completedAt: string|null } }`
- `lms:meta` → `{ schemaVersion: 1 }` (so future migrations are possible)

Pinia stores hydrate from these on app start and write back on every mutation.

## 8. Design Language

**Tone:** clinical, calm, trustworthy. No playful gradients, no neon. Lots of white space.

**Palette (professional, healthcare-leaning):**

| Token              | Hex      | Use                                  |
| ------------------ | -------- | ------------------------------------ |
| `--color-bg`       | `#F7F9FC`| App background                        |
| `--color-surface`  | `#FFFFFF`| Cards, panels                         |
| `--color-border`   | `#E3E8EF`| Hairline dividers                     |
| `--color-text`     | `#1B2A41`| Primary text (deep navy)              |
| `--color-text-muted`| `#5A6B82`| Secondary text                       |
| `--color-primary`  | `#1E4E8C`| Brand / primary actions (medical navy)|
| `--color-primary-hover`| `#163C6E`| Primary hover                     |
| `--color-accent`   | `#2BA88B`| Success, progress, completion (teal)  |
| `--color-warning`  | `#C77700`| Caution states                        |
| `--color-danger`   | `#B3261E`| Errors, failed quiz                   |

**Type:** system UI stack with `Inter` if available — `font-family: 'Inter', system-ui, -apple-system, Segoe UI, sans-serif;`. Headings use slightly tighter tracking; body stays at 1.6 line-height for readability.

**Radius / elevation:** 8px radius on cards, 12px on the main containers; one subtle shadow level (`0 1px 2px rgba(15, 23, 42, .04), 0 1px 3px rgba(15, 23, 42, .06)`).

## 9. Out of Scope (explicitly)

- Login / signup / SSO
- Server-side persistence or sync across devices
- Real CME credit issuance, audit trails, or regulatory reporting
- Mobile app shells

## 10. How to Run (once implemented)

```bash
npm install
npm run dev
```

Demo seeds itself on first load. To reset the demo, open *Profile → Reset progress*, or clear `localStorage` for the site.
