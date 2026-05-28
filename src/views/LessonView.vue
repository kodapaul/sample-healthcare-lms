<script setup>
import { computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useCatalogStore } from '../stores/catalog'
import { useProgressStore } from '../stores/progress'
import Badge from '../components/Badge.vue'

const props = defineProps({
  slug: { type: String, required: true },
  lessonId: { type: String, required: true },
})

const catalog = useCatalogStore()
const progress = useProgressStore()
const router = useRouter()

const course = computed(() => catalog.bySlug(props.slug))
const lesson = computed(() => course.value ? catalog.lessonInCourse(props.slug, props.lessonId) : null)
const index = computed(() => course.value ? course.value.lessons.findIndex(l => l.id === props.lessonId) : -1)
const prevLesson = computed(() => index.value > 0 ? course.value.lessons[index.value - 1] : null)
const nextLesson = computed(() => index.value >= 0 && index.value < course.value.lessons.length - 1 ? course.value.lessons[index.value + 1] : null)
const complete = computed(() => progress.isLessonComplete(props.slug, props.lessonId))
const paragraphs = computed(() => lesson.value ? lesson.value.body.split('\n\n').filter(p => p.trim()) : [])

function handleMarkComplete() {
  progress.markLessonComplete(props.slug, props.lessonId)
  if (nextLesson.value) {
    router.push(`/courses/${props.slug}/lessons/${nextLesson.value.id}`)
  } else {
    router.push(`/courses/${props.slug}`)
  }
}
</script>

<template>
  <div v-if="!course || !lesson" class="not-found">
    <p>Lesson not found.</p>
    <RouterLink to="/catalog" class="back-link">← Back to catalog</RouterLink>
  </div>

  <div v-else class="lesson-view">
    <nav class="breadcrumb">
      <RouterLink :to="`/courses/${slug}`" class="breadcrumb-link">← {{ course.title }}</RouterLink>
    </nav>

    <header class="lesson-header">
      <p class="muted lesson-position">Lesson {{ index + 1 }} of {{ course.lessons.length }} · {{ lesson.durationMinutes }} min</p>
      <h1>{{ lesson.title }}</h1>
    </header>

    <div class="body-card">
      <p v-for="(para, i) in paragraphs" :key="i" class="body-para" :class="{ 'last-para': i === paragraphs.length - 1 }">{{ para }}</p>
    </div>

    <div v-if="lesson.keyPoints && lesson.keyPoints.length" class="key-points">
      <h3 class="key-points-heading">Key points</h3>
      <ul class="key-points-list">
        <li v-for="(point, i) in lesson.keyPoints" :key="i" class="key-point-item">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="check-icon" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
          <span>{{ point }}</span>
        </li>
      </ul>
    </div>

    <footer class="lesson-footer">
      <RouterLink
        v-if="prevLesson"
        :to="`/courses/${slug}/lessons/${prevLesson.id}`"
        class="btn btn-secondary"
      >← Previous</RouterLink>
      <span v-else class="btn btn-secondary btn-disabled">← Previous</span>

      <div class="completion-center">
        <Badge v-if="complete" variant="success" size="md">
          <span class="badge-inner">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            Completed
          </span>
        </Badge>
        <button v-else class="btn btn-primary" @click="handleMarkComplete">Mark as complete</button>
      </div>

      <div class="next-region">
        <RouterLink
          v-if="nextLesson"
          :to="`/courses/${slug}/lessons/${nextLesson.id}`"
          class="btn btn-secondary"
        >Next →</RouterLink>
        <RouterLink
          v-else-if="progress.allLessonsComplete(course)"
          :to="`/courses/${slug}/quiz`"
          class="btn btn-secondary"
        >Take quiz →</RouterLink>
        <span v-else class="btn btn-secondary btn-disabled">Next →</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.not-found {
  padding: var(--space-8);
  color: var(--color-text-muted);
  font-size: var(--fs-base);
}

.back-link {
  color: var(--color-primary);
  text-decoration: none;
  font-size: var(--fs-sm);
}

.back-link:hover {
  text-decoration: underline;
}

.lesson-view {
  max-width: 760px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-4);
}

.breadcrumb {
  margin-bottom: var(--space-6);
}

.breadcrumb-link {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease-out);
}

.breadcrumb-link:hover {
  color: var(--color-text);
}

.lesson-header {
  margin-bottom: var(--space-6);
}

.lesson-position {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  margin: 0 0 var(--space-2) 0;
}

.lesson-header h1 {
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  color: var(--color-text);
  margin: var(--space-2) 0 var(--space-6) 0;
  line-height: 1.2;
}

.body-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-card);
}

.body-para {
  font-size: var(--fs-base);
  color: var(--color-text);
  max-width: 68ch;
  margin-bottom: var(--space-4);
  line-height: 1.7;
}

.body-para.last-para {
  margin-bottom: 0;
}

.key-points {
  background: var(--color-primary-soft);
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-6);
  margin-top: var(--space-6);
}

.key-points-heading {
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--color-primary);
  margin: 0 0 var(--space-3) 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.key-points-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.key-point-item {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
  font-size: var(--fs-sm);
  color: var(--color-text);
}

.check-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.lesson-footer {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-8);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-5);
}

.completion-center {
  margin: 0 auto;
}

.next-region {
  margin-left: auto;
}

.badge-inner {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.btn {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-md);
  padding: 10px 18px;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  cursor: pointer;
  text-decoration: none;
  border: none;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
  white-space: nowrap;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
}

.btn-secondary {
  background: var(--color-surface);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text);
}

.btn-secondary:hover {
  background: var(--color-surface-muted);
}

.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
