<script setup>
import { RouterLink } from 'vue-router'
import { useProgressStore } from '../stores/progress'
import Badge from '../components/Badge.vue'
import ProgressBar from '../components/ProgressBar.vue'

const props = defineProps({
  course: { type: Object, required: true },
})

const progressStore = useProgressStore()
</script>

<template>
  <RouterLink :to="`/courses/${course.slug}`" class="course-card">
    <div class="course-card__header">
      <Badge variant="primary" size="sm">{{ course.category }}</Badge>
      <span class="course-card__meta">{{ course.durationMinutes }} min · {{ course.level }}</span>
    </div>

    <h3 class="course-card__title">{{ course.title }}</h3>
    <p class="course-card__summary muted">{{ course.summary }}</p>

    <div class="course-card__footer">
      <template v-if="progressStore.courseStatus(course) === 'completed'">
        <Badge variant="success" size="sm">Completed</Badge>
      </template>
      <template v-else-if="progressStore.courseStatus(course) === 'in-progress'">
        <ProgressBar :value="progressStore.percentFor(course)" :show-value="true" />
      </template>
      <template v-else>
        <span class="muted course-card__not-started">Not started</span>
      </template>
    </div>
  </RouterLink>
</template>

<style scoped>
.course-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
  text-decoration: none;
  color: inherit;
  transition:
    box-shadow var(--dur-base) var(--ease-out),
    transform var(--dur-base) var(--ease-out);
}

.course-card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px);
}

.course-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.course-card__meta {
  font-size: var(--fs-xs);
  color: var(--color-text-muted);
  white-space: nowrap;
}

.course-card__title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  color: var(--color-text);
  margin-top: var(--space-3);
  margin-bottom: var(--space-2);
}

.course-card__summary {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--space-5);
}

.course-card__footer {
  margin-top: auto;
}

.course-card__not-started {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
}
</style>
