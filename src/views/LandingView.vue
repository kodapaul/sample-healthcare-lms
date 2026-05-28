<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCatalogStore } from '../stores/catalog'

const catalog = useCatalogStore()

const featured = computed(() => catalog.courses.slice(0, 3))

const totalLessons = computed(() =>
  catalog.courses.reduce((sum, c) => sum + c.lessons.length, 0),
)

const categoryMeta = {
  'Infection Control': 'shield',
  'Medication Safety': 'pill',
  'Patient Care': 'heart',
  'Mental Health': 'brain',
  'Compliance': 'doc',
  'Emergency Care': 'pulse',
}

const categories = computed(() =>
  catalog.categories
    .filter((c) => c !== 'All')
    .map((name) => ({
      name,
      icon: categoryMeta[name] ?? 'book',
      count: catalog.courses.filter((c) => c.category === name).length,
    })),
)

const features = [
  {
    icon: 'book',
    title: 'Evidence-based content',
    body: 'Lessons aligned to recognized standards — WHO hand-hygiene moments, the HIPAA Privacy Rule, AHA basic life support, and more.',
  },
  {
    icon: 'chart',
    title: 'Track your progress',
    body: 'Pick up exactly where you left off. Every lesson and quiz is saved automatically as you go.',
  },
  {
    icon: 'award',
    title: 'Earn certificates',
    body: 'Pass the end-of-course assessment to mark a course complete and add a certificate to your dashboard.',
  },
]
</script>

<template>
  <div class="landing">
    <!-- Hero -->
    <section class="hero">
      <div class="hero__content">
        <span class="eyebrow">Healthcare training platform</span>
        <h1 class="hero__title">Clinical skills training, ready when your shift is.</h1>
        <p class="hero__lead">
          A focused learning experience for nurses, caregivers, and allied health staff.
          Short, practical courses on the things that keep patients safe — completed at your own pace.
        </p>
        <div class="hero__cta">
          <RouterLink to="/login" class="btn btn--primary btn--lg">Get started</RouterLink>
          <RouterLink :to="{ path: '/login', query: { mode: 'signin' } }" class="btn btn--ghost btn--lg">
            I already have an account
          </RouterLink>
        </div>
        <p class="hero__note">Demo environment · no credit card · data stays in your browser</p>
      </div>

      <!-- Product preview -->
      <div class="hero__preview" aria-hidden="true">
        <div class="preview-card preview-card--front">
          <div class="preview-card__top">
            <span class="preview-badge">Infection Control</span>
            <span class="preview-meta">20 min</span>
          </div>
          <h3 class="preview-card__title">Hand Hygiene &amp; Infection Prevention</h3>
          <div class="preview-progress">
            <div class="preview-progress__label">
              <span>Course progress</span><span>75%</span>
            </div>
            <div class="preview-progress__track"><div class="preview-progress__fill"></div></div>
          </div>
          <div class="preview-lessons">
            <div class="preview-lesson preview-lesson--done">
              <span class="preview-check">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              The Chain of Infection
            </div>
            <div class="preview-lesson preview-lesson--done">
              <span class="preview-check">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              WHO 5 Moments for Hand Hygiene
            </div>
            <div class="preview-lesson">
              <span class="preview-num">3</span>
              Handwashing vs. Alcohol Rub
            </div>
          </div>
        </div>
        <div class="preview-card preview-card--stat">
          <span class="preview-stat__num">2</span>
          <span class="preview-stat__label">courses completed</span>
        </div>
      </div>
    </section>

    <!-- Trust band -->
    <section class="trust">
      <div class="trust__item">
        <span class="trust__num">{{ catalog.courses.length }}</span>
        <span class="trust__label">Courses</span>
      </div>
      <div class="trust__divider" aria-hidden="true"></div>
      <div class="trust__item">
        <span class="trust__num">{{ totalLessons }}</span>
        <span class="trust__label">Lessons</span>
      </div>
      <div class="trust__divider" aria-hidden="true"></div>
      <div class="trust__item">
        <span class="trust__num">{{ categories.length }}</span>
        <span class="trust__label">Specialties</span>
      </div>
      <div class="trust__divider" aria-hidden="true"></div>
      <div class="trust__item">
        <span class="trust__num">100%</span>
        <span class="trust__label">In-browser</span>
      </div>
    </section>

    <!-- Features -->
    <section class="section">
      <header class="section__head">
        <h2 class="section__title">Built for busy clinical teams</h2>
        <p class="section__sub">Everything you need to keep skills current, nothing you don't.</p>
      </header>
      <div class="feature-grid">
        <article v-for="f in features" :key="f.title" class="feature">
          <span class="feature__icon">
            <svg v-if="f.icon === 'book'" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            <svg v-else-if="f.icon === 'chart'" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/></svg>
            <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>
          </span>
          <h3 class="feature__title">{{ f.title }}</h3>
          <p class="feature__body">{{ f.body }}</p>
        </article>
      </div>
    </section>

    <!-- Categories -->
    <section class="section">
      <header class="section__head">
        <h2 class="section__title">Explore by specialty</h2>
        <p class="section__sub">Curated tracks across the areas that matter most at the bedside.</p>
      </header>
      <div class="cat-grid">
        <RouterLink
          v-for="cat in categories"
          :key="cat.name"
          to="/login"
          class="cat"
        >
          <span class="cat__icon">
            <svg v-if="cat.icon === 'shield'" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <svg v-else-if="cat.icon === 'pill'" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5-7-7a4.95 4.95 0 0 1 7-7l7 7a4.95 4.95 0 0 1-7 7z"/><path d="m8.5 8.5 7 7"/></svg>
            <svg v-else-if="cat.icon === 'heart'" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>
            <svg v-else-if="cat.icon === 'brain'" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>
            <svg v-else-if="cat.icon === 'doc'" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>
            <svg v-else viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </span>
          <span class="cat__text">
            <span class="cat__name">{{ cat.name }}</span>
            <span class="cat__count">{{ cat.count }} {{ cat.count === 1 ? 'course' : 'courses' }}</span>
          </span>
        </RouterLink>
      </div>
    </section>

    <!-- Featured courses -->
    <section class="section">
      <header class="section__head section__head--row">
        <div>
          <h2 class="section__title">Featured courses</h2>
          <p class="section__sub">A sample of what's inside.</p>
        </div>
        <RouterLink to="/login" class="section__link">View all →</RouterLink>
      </header>
      <div class="course-preview-grid">
        <RouterLink
          v-for="c in featured"
          :key="c.slug"
          to="/login"
          class="cp-card"
        >
          <div class="cp-card__top">
            <span class="cp-badge">{{ c.category }}</span>
            <span class="cp-meta">{{ c.durationMinutes }} min · {{ c.level }}</span>
          </div>
          <h3 class="cp-card__title">{{ c.title }}</h3>
          <p class="cp-card__summary">{{ c.summary }}</p>
          <span class="cp-card__cta">Start learning →</span>
        </RouterLink>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="cta-band">
      <h2 class="cta-band__title">Ready to start training?</h2>
      <p class="cta-band__sub">Create a free demo account and explore the full catalog in seconds.</p>
      <RouterLink to="/login" class="btn btn--primary btn--lg">Create your account</RouterLink>
    </section>
  </div>
</template>

<style scoped>
.landing {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  font-weight: var(--fw-semibold);
  text-decoration: none;
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
}
.btn--lg { padding: 13px 22px; font-size: var(--fs-base); }
.btn--primary { background: var(--color-primary); color: #fff; border: 1px solid var(--color-primary); }
.btn--primary:hover { background: var(--color-primary-hover); border-color: var(--color-primary-hover); }
.btn--ghost { background: transparent; color: var(--color-text); border: 1px solid var(--color-border-strong); }
.btn--ghost:hover { background: var(--color-surface); border-color: var(--color-text-muted); }

/* Hero */
.hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--space-12);
  align-items: center;
  padding-top: var(--space-6);
}
.eyebrow {
  display: inline-block;
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: var(--color-primary-soft);
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  margin-bottom: var(--space-5);
}
.hero__title {
  font-size: var(--fs-4xl);
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin: 0 0 var(--space-5);
  max-width: 18ch;
}
.hero__lead {
  font-size: var(--fs-lg);
  color: var(--color-text-muted);
  line-height: var(--lh-base);
  max-width: 52ch;
  margin: 0 0 var(--space-8);
}
.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}
.hero__note {
  font-size: var(--fs-sm);
  color: var(--color-text-subtle);
  margin: 0;
}

/* Hero preview */
.hero__preview {
  position: relative;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.preview-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.10), 0 2px 8px rgba(15, 23, 42, 0.05);
}
.preview-card--front {
  width: 100%;
  max-width: 380px;
  padding: var(--space-6);
}
.preview-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}
.preview-badge {
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--color-primary);
  background: var(--color-primary-soft);
  padding: 3px 10px;
  border-radius: var(--radius-pill);
}
.preview-meta { font-size: var(--fs-xs); color: var(--color-text-muted); }
.preview-card__title {
  font-size: var(--fs-lg);
  margin: 0 0 var(--space-5);
  line-height: 1.3;
}
.preview-progress__label {
  display: flex;
  justify-content: space-between;
  font-size: var(--fs-xs);
  color: var(--color-text-muted);
  font-weight: var(--fw-medium);
  margin-bottom: var(--space-2);
}
.preview-progress__track {
  height: 6px;
  background: var(--color-surface-muted);
  border-radius: var(--radius-pill);
  overflow: hidden;
  margin-bottom: var(--space-5);
}
.preview-progress__fill {
  width: 75%;
  height: 100%;
  background: var(--color-accent);
  border-radius: var(--radius-pill);
}
.preview-lessons { display: flex; flex-direction: column; gap: var(--space-2); }
.preview-lesson {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--fs-sm);
  color: var(--color-text);
  padding: var(--space-2) 0;
}
.preview-check, .preview-num {
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: var(--radius-pill);
  flex-shrink: 0;
}
.preview-check { background: var(--color-accent); color: #fff; }
.preview-num {
  background: var(--color-surface-muted);
  color: var(--color-text-muted);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
}
.preview-lesson--done { color: var(--color-text-muted); }
.preview-card--stat {
  position: absolute;
  right: -6px;
  bottom: 6px;
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  text-align: center;
}
.preview-stat__num {
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  color: var(--color-accent);
  line-height: 1;
}
.preview-stat__label { font-size: var(--fs-xs); color: var(--color-text-muted); margin-top: 2px; }

/* Trust band */
.trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  flex-wrap: wrap;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6) var(--space-8);
  box-shadow: var(--shadow-card);
}
.trust__item { display: flex; flex-direction: column; align-items: center; }
.trust__num { font-size: var(--fs-2xl); font-weight: var(--fw-bold); color: var(--color-text); line-height: 1; }
.trust__label { font-size: var(--fs-sm); color: var(--color-text-muted); margin-top: var(--space-1); }
.trust__divider { width: 1px; height: 36px; background: var(--color-border); }

/* Generic section */
.section__head { margin-bottom: var(--space-8); text-align: center; }
.section__head--row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  text-align: left;
  gap: var(--space-4);
}
.section__title { font-size: var(--fs-2xl); margin: 0 0 var(--space-2); letter-spacing: -0.01em; }
.section__sub { font-size: var(--fs-base); color: var(--color-text-muted); margin: 0; }
.section__link { font-size: var(--fs-sm); font-weight: var(--fw-semibold); white-space: nowrap; }

/* Features */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}
.feature {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
}
.feature__icon {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--color-primary-soft);
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}
.feature__title { font-size: var(--fs-lg); margin: 0 0 var(--space-2); }
.feature__body { font-size: var(--fs-sm); color: var(--color-text-muted); line-height: var(--lh-base); margin: 0; }

/* Categories */
.cat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}
.cat {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--color-text);
  box-shadow: var(--shadow-card);
  transition: transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.cat:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-border-strong);
}
.cat__icon {
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: var(--radius-md);
  background: var(--color-accent-soft);
  color: var(--color-accent);
  flex-shrink: 0;
}
.cat__text { display: flex; flex-direction: column; }
.cat__name { font-weight: var(--fw-semibold); font-size: var(--fs-base); }
.cat__count { font-size: var(--fs-sm); color: var(--color-text-muted); }

/* Featured courses */
.course-preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}
.cp-card {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
  text-decoration: none;
  color: var(--color-text);
  transition: transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.cp-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-card-hover); }
.cp-card__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3); }
.cp-badge {
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--color-primary);
  background: var(--color-primary-soft);
  padding: 3px 10px;
  border-radius: var(--radius-pill);
}
.cp-meta { font-size: var(--fs-xs); color: var(--color-text-muted); }
.cp-card__title { font-size: var(--fs-lg); margin: 0 0 var(--space-2); line-height: 1.3; }
.cp-card__summary {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  line-height: var(--lh-base);
  margin: 0 0 var(--space-5);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.cp-card__cta {
  margin-top: auto;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--color-primary);
}

/* CTA band */
.cta-band {
  text-align: center;
  background: var(--color-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-12) var(--space-8);
  color: #fff;
}
.cta-band__title { font-size: var(--fs-2xl); color: #fff; margin: 0 0 var(--space-2); }
.cta-band__sub { font-size: var(--fs-base); color: rgba(255, 255, 255, 0.82); margin: 0 0 var(--space-6); }
.cta-band .btn--primary {
  background: #fff;
  color: var(--color-primary);
  border-color: #fff;
}
.cta-band .btn--primary:hover { background: var(--color-primary-soft); border-color: var(--color-primary-soft); }

/* Responsive */
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; gap: var(--space-8); }
  .hero__preview { display: none; }
  .feature-grid, .cat-grid, .course-preview-grid { grid-template-columns: 1fr; }
  .hero__title { font-size: var(--fs-3xl); }
}
@media (min-width: 901px) and (max-width: 1100px) {
  .cat-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
