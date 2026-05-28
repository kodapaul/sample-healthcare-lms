<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useProfileStore } from '../stores/profile'
import { useProgressStore } from '../stores/progress'
import { useCatalogStore } from '../stores/catalog'
import CourseCard from '../components/CourseCard.vue'
import EmptyState from '../components/EmptyState.vue'
import Badge from '../components/Badge.vue'
import LandingView from './LandingView.vue'

const auth = useAuthStore()
const profile = useProfileStore()
const progress = useProgressStore()
const catalog = useCatalogStore()

const isLoggedIn = computed(() => auth.isLoggedIn)
const stats = computed(() => progress.overallStats)

// Auth is the source of truth for identity; fall back to the profile mirror.
const firstName = computed(() => {
  const full = auth.currentUser?.name || profile.name || ''
  return full.trim().split(/\s+/)[0] || 'there'
})
const userRole = computed(() => auth.currentUser?.role || profile.role || '')

const greetingSub = computed(() => {
  if (progress.completedCourses.length > 0 && progress.inProgressCourses.length === 0) {
    return 'Great work so far. Ready for your next course?'
  }
  if (progress.inProgressCourses.length > 0) {
    return 'Pick up right where you left off.'
  }
  return "Let's get your training started."
})

const recommended = computed(() =>
  catalog.courses.filter((c) => progress.courseStatus(c) === 'not-started').slice(0, 3),
)

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="home-root">
    <!-- Logged-out marketing landing -->
    <LandingView v-if="!isLoggedIn" />

    <!-- Logged-in dashboard -->
    <section v-else class="dashboard">
      <div class="greeting">
        <h1>Welcome back, {{ firstName }}</h1>
        <p class="muted greeting__sub">
          {{ greetingSub }}<template v-if="userRole"> · {{ userRole }}</template>
        </p>
      </div>

      <!-- Stat row -->
      <div class="stat-grid">
        <div class="stat-card">
          <span class="stat-icon stat-icon--primary">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </span>
          <span class="stat-number">{{ stats.inProgress }}</span>
          <span class="stat-label">In progress</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon stat-icon--accent">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>
          </span>
          <span class="stat-number">{{ stats.completed }}</span>
          <span class="stat-label">Completed</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon stat-icon--warning">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </span>
          <span class="stat-number">{{ stats.minutes }}</span>
          <span class="stat-label">Minutes learned</span>
        </div>
      </div>

      <!-- Continue learning -->
      <div v-if="progress.inProgressCourses.length > 0" class="section">
        <div class="section-header">
          <h2>Continue learning</h2>
          <RouterLink to="/catalog" class="see-all-link">Browse catalog →</RouterLink>
        </div>
        <div class="course-grid">
          <CourseCard
            v-for="c in progress.inProgressCourses"
            :key="c.slug"
            :course="c"
          />
        </div>
      </div>

      <!-- Recommended -->
      <div v-if="recommended.length > 0" class="section">
        <div class="section-header">
          <h2>{{ progress.inProgressCourses.length > 0 ? 'Recommended for you' : 'Start here' }}</h2>
          <RouterLink to="/catalog" class="see-all-link">View all →</RouterLink>
        </div>
        <div class="course-grid">
          <CourseCard v-for="c in recommended" :key="c.slug" :course="c" />
        </div>
      </div>

      <!-- Completed -->
      <div class="section">
        <h2 class="section-solo-head">Completed</h2>
        <div v-if="progress.completedCourses.length > 0" class="course-grid">
          <RouterLink
            v-for="entry in progress.completedCourses"
            :key="entry.course.slug"
            :to="`/courses/${entry.course.slug}`"
            class="completed-card"
          >
            <div class="check-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 class="completed-title">{{ entry.course.title }}</h3>
            <p class="muted completed-date">Completed {{ formatDate(entry.completedAt) }}</p>
            <Badge variant="success" size="sm">Certificate</Badge>
          </RouterLink>
        </div>
        <EmptyState
          v-else
          icon="check"
          title="No completed courses yet"
          description="Pass a course quiz to earn your first certificate."
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard {
  padding: var(--space-2) 0;
}

.greeting {
  margin-bottom: var(--space-8);
}
.greeting h1 {
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  color: var(--color-text);
  margin: 0 0 var(--space-2);
}
.greeting__sub {
  font-size: var(--fs-base);
  margin: 0;
}

/* Stat grid */
.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  margin-bottom: var(--space-10);
}
.stat-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
}
.stat-icon {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
}
.stat-icon--primary { background: var(--color-primary-soft); color: var(--color-primary); }
.stat-icon--accent { background: var(--color-accent-soft); color: var(--color-accent); }
.stat-icon--warning { background: var(--color-warning-soft); color: var(--color-warning); }
.stat-number {
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  color: var(--color-text);
  line-height: 1;
}
.stat-label {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  margin-top: var(--space-2);
}

/* Sections */
.section { margin-bottom: var(--space-10); }
.section:last-child { margin-bottom: 0; }
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--space-4);
}
.section-header h2 { margin: 0; }
.section-solo-head { margin-bottom: var(--space-4); }
.see-all-link {
  font-size: var(--fs-sm);
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease-out);
}
.see-all-link:hover { color: var(--color-primary-hover); }

/* Course grid */
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-5);
}

/* Completed cards */
.completed-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
  text-decoration: none;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.completed-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}
.check-circle {
  width: 32px;
  height: 32px;
  background: var(--color-accent-soft);
  color: var(--color-accent);
  border-radius: var(--radius-pill);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.completed-title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  margin: var(--space-3) 0 var(--space-2);
  line-height: 1.3;
}
.completed-date {
  font-size: var(--fs-sm);
  margin: 0 0 var(--space-3);
}

.muted { color: var(--color-text-muted); }

@media (max-width: 640px) {
  .stat-grid { grid-template-columns: 1fr; }
}
</style>
