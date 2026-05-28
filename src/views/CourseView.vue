<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCatalogStore } from '../stores/catalog'
import { useProgressStore } from '../stores/progress'
import Badge from '../components/Badge.vue'
import ProgressBar from '../components/ProgressBar.vue'

const props = defineProps({ slug: { type: String, required: true } })

const catalog = useCatalogStore()
const progress = useProgressStore()

const course = computed(() => catalog.bySlug(props.slug))
const percent = computed(() => course.value ? progress.percentFor(course.value) : 0)
const status = computed(() => course.value ? progress.courseStatus(course.value) : 'not-started')

const nextLessonId = computed(() => {
  if (!course.value) return null
  const completed = progress.progressFor(props.slug).lessonsCompleted
  const next = course.value.lessons.find((l) => !completed.includes(l.id))
  return next ? next.id : course.value.lessons[0].id
})

const ctaTarget = computed(() => {
  if (!course.value) return '/catalog'
  const firstId = course.value.lessons[0].id
  if (status.value === 'in-progress') return `/courses/${props.slug}/lessons/${nextLessonId.value}`
  return `/courses/${props.slug}/lessons/${firstId}`
})

const ctaLabel = computed(() => {
  if (status.value === 'in-progress') return 'Resume'
  if (status.value === 'completed') return 'Review course'
  return 'Start course'
})
</script>

<template>
  <div v-if="!course" class="not-found">
    <p>Course not found.</p>
    <RouterLink to="/catalog">← Back to catalog</RouterLink>
  </div>

  <div v-else class="course-page">
    <RouterLink to="/catalog" class="breadcrumb">← Back to catalog</RouterLink>

    <div class="hero-card">
      <div class="hero-meta">
        <Badge variant="primary" size="sm">{{ course.category }}</Badge>
        <Badge variant="neutral" size="sm">{{ course.level }}</Badge>
        <span class="duration-label">{{ course.durationMinutes }} min</span>
      </div>

      <h1 class="hero-title">{{ course.title }}</h1>
      <p class="hero-summary">{{ course.summary }}</p>

      <div v-if="status !== 'not-started'" class="hero-progress">
        <ProgressBar :value="percent" label="Course progress" :show-value="true" />
      </div>

      <div class="hero-actions">
        <RouterLink :to="ctaTarget" class="btn-primary">{{ ctaLabel }}</RouterLink>

        <template v-if="status === 'completed'">
          <Badge variant="success" size="md">Completed</Badge>
          <RouterLink :to="`/courses/${slug}/quiz`" class="btn-secondary">Retake quiz</RouterLink>
        </template>
        <template v-else-if="progress.allLessonsComplete(course)">
          <RouterLink :to="`/courses/${slug}/quiz`" class="btn-secondary">Take quiz</RouterLink>
        </template>
      </div>
    </div>

    <div class="two-col">
      <div class="card objectives-card">
        <h2 class="card-heading">Learning objectives</h2>
        <ul class="objectives-list">
          <li v-for="(obj, i) in course.objectives" :key="i" class="objective-item">
            <span class="check-icon">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span>{{ obj }}</span>
          </li>
        </ul>
      </div>

      <div class="card lessons-card">
        <h2 class="card-heading">Lessons</h2>
        <ol class="lesson-list">
          <li
            v-for="(lesson, index) in course.lessons"
            :key="lesson.id"
            class="lesson-item"
            :class="{ 'lesson-item--last': index === course.lessons.length - 1 }"
          >
            <RouterLink :to="`/courses/${slug}/lessons/${lesson.id}`" class="lesson-row">
              <span class="lesson-number" :class="{ 'lesson-number--complete': progress.isLessonComplete(slug, lesson.id) }">
                <template v-if="progress.isLessonComplete(slug, lesson.id)">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </template>
                <template v-else>{{ index + 1 }}</template>
              </span>
              <span class="lesson-info">
                <span class="lesson-title">{{ lesson.title }}</span>
                <span class="lesson-duration">{{ lesson.durationMinutes }} min</span>
              </span>
              <span class="lesson-chevron">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </RouterLink>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  font-size: var(--fs-base);
  color: var(--color-text-muted);
}

.not-found a {
  color: var(--color-primary);
  font-size: var(--fs-sm);
  text-decoration: none;
}

.course-page {
  display: flex;
  flex-direction: column;
}

.breadcrumb {
  display: inline-block;
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  text-decoration: none;
  margin-bottom: var(--space-5);
  transition: color var(--dur-fast) var(--ease-out);
}

.breadcrumb:hover {
  color: var(--color-text);
}

.hero-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
  margin-bottom: var(--space-8);
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
}

.duration-label {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
}

.hero-title {
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  color: var(--color-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-3);
  line-height: 1.2;
}

.hero-summary {
  color: var(--color-text-muted);
  font-size: var(--fs-base);
  line-height: 1.6;
  max-width: 64ch;
  margin: 0;
}

.hero-progress {
  margin-top: var(--space-5);
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-5);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius-md);
  padding: 10px 18px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-base);
  text-decoration: none;
  transition: background var(--dur-fast) var(--ease-out);
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  padding: 10px 18px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-base);
  text-decoration: none;
  transition: background var(--dur-fast) var(--ease-out);
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--color-surface-muted);
}

.two-col {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 900px) {
  .two-col {
    grid-template-columns: 1fr 2fr;
  }
}

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
}

.card-heading {
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  color: var(--color-text);
  margin: 0 0 var(--space-5) 0;
}

.objectives-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.objective-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--fs-base);
  color: var(--color-text);
  line-height: 1.5;
}

.check-icon {
  flex-shrink: 0;
  color: var(--color-accent);
  margin-top: 2px;
}

.lesson-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lesson-item {
  border-bottom: 1px solid var(--color-border);
}

.lesson-item--last {
  border-bottom: none;
}

.lesson-row {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) 0;
  text-decoration: none;
  color: inherit;
  border-radius: var(--radius-sm);
  transition: background 120ms var(--ease-out);
}

.lesson-row:hover {
  background: var(--color-surface-muted);
  padding-left: var(--space-2);
  padding-right: var(--space-2);
  margin-left: calc(-1 * var(--space-2));
  margin-right: calc(-1 * var(--space-2));
}

.lesson-number {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-surface-muted);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
}

.lesson-number--complete {
  background: var(--color-accent);
  color: #fff;
}

.lesson-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.lesson-title {
  font-size: var(--fs-base);
  font-weight: var(--fw-medium);
  color: var(--color-text);
}

.lesson-duration {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
}

.lesson-chevron {
  flex-shrink: 0;
  color: var(--color-text-muted);
}
</style>
