<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCatalogStore } from '../stores/catalog'
import { useProgressStore, QUIZ_PASS_THRESHOLD } from '../stores/progress'
import Badge from '../components/Badge.vue'

const props = defineProps({ slug: { type: String, required: true } })

const catalog = useCatalogStore()
const progress = useProgressStore()

const course = computed(() => catalog.bySlug(props.slug))
const total = computed(() => course.value?.quiz?.length ?? 0)

const selections = ref({})
const submitted = ref(false)
const score = ref(0)
const passed = ref(false)

const answeredCount = computed(() =>
  Object.values(selections.value).filter(v => typeof v === 'number').length
)

function handleSubmit() {
  if (answeredCount.value !== total.value) return
  const correct = course.value.quiz.filter(
    q => q.answerIndex === selections.value[q.id]
  ).length
  score.value = Math.round((correct / total.value) * 100)
  submitted.value = true
  passed.value = progress.submitQuiz(props.slug, score.value)
}

function retryQuiz() {
  selections.value = {}
  submitted.value = false
  score.value = 0
  passed.value = false
}

function isUserChoice(q, ci) {
  return selections.value[q.id] === ci
}

function isCorrect(q, ci) {
  return q.answerIndex === ci
}
</script>

<template>
  <section class="quiz-wrap" v-if="course">
    <RouterLink :to="`/courses/${slug}`" class="breadcrumb">← {{ course.title }}</RouterLink>
    <h1 class="page-title">Course assessment</h1>
    <p class="muted subtitle">
      Answer all {{ total }} questions to complete this course. A score of {{ QUIZ_PASS_THRESHOLD }}% or higher is required to pass.
    </p>

    <!-- Pre-submit -->
    <template v-if="!submitted">
      <div
        v-for="(q, i) in course.quiz"
        :key="q.id"
        class="card question-card"
      >
        <Badge variant="neutral" size="sm">Question {{ i + 1 }} of {{ total }}</Badge>
        <h3 class="prompt">{{ q.prompt }}</h3>
        <div class="choices">
          <label
            v-for="(choice, ci) in q.choices"
            :key="ci"
            class="choice"
            :class="{ 'choice--selected': selections[q.id] === ci }"
          >
            <input
              type="radio"
              :name="`q${q.id}`"
              :value="ci"
              :checked="selections[q.id] === ci"
              @change="selections[q.id] = ci"
              class="radio-native"
            />
            <span class="radio-visual" :class="{ 'radio-visual--checked': selections[q.id] === ci }">
              <span v-if="selections[q.id] === ci" class="radio-dot"></span>
            </span>
            <span class="choice-text">{{ choice }}</span>
          </label>
        </div>
      </div>

      <div class="submit-row">
        <span class="muted">{{ answeredCount }} of {{ total }} answered</span>
        <button
          class="btn-primary"
          :disabled="answeredCount !== total"
          @click="handleSubmit"
        >
          Submit answers
        </button>
      </div>
    </template>

    <!-- Post-submit -->
    <template v-else>
      <div class="card result-card">
        <!-- Pass -->
        <template v-if="passed">
          <div class="result-icon result-icon--pass">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h2 class="result-heading">Course completed</h2>
          <p class="muted">You scored {{ score }}%. A record has been added to your dashboard.</p>
          <div class="result-actions">
            <RouterLink to="/" class="btn-secondary">Go to dashboard</RouterLink>
            <RouterLink :to="`/courses/${slug}`" class="btn-secondary">Back to course</RouterLink>
          </div>
        </template>

        <!-- Fail -->
        <template v-else>
          <div class="result-icon result-icon--fail">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-warning)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 9v4"/>
              <path d="M12 17h.01"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <h2 class="result-heading">Not quite there</h2>
          <p class="muted">You scored {{ score }}%. You need at least {{ QUIZ_PASS_THRESHOLD }}% to pass. Review the lessons and try again.</p>
          <div class="result-actions">
            <button class="btn-primary" @click="retryQuiz">Retry quiz</button>
            <RouterLink :to="`/courses/${slug}`" class="btn-secondary">Review lessons</RouterLink>
          </div>
        </template>
      </div>

      <!-- Review section -->
      <div class="review-section">
        <h2 class="review-heading">Review</h2>
        <div
          v-for="q in course.quiz"
          :key="q.id"
          class="card review-card"
        >
          <p class="review-prompt">{{ q.prompt }}</p>
          <div class="choices">
            <div
              v-for="(choice, ci) in q.choices"
              :key="ci"
              class="review-choice"
              :class="{
                'review-choice--correct': isCorrect(q, ci),
                'review-choice--wrong-pick': isUserChoice(q, ci) && !isCorrect(q, ci)
              }"
            >
              <span class="choice-text">{{ choice }}</span>
              <Badge
                v-if="isUserChoice(q, ci) && isCorrect(q, ci)"
                variant="success"
                size="sm"
              >Your answer</Badge>
              <Badge
                v-else-if="isUserChoice(q, ci) && !isCorrect(q, ci)"
                variant="danger"
                size="sm"
              >Your answer</Badge>
              <Badge
                v-else-if="!isUserChoice(q, ci) && isCorrect(q, ci)"
                variant="success"
                size="sm"
              >Correct</Badge>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>

  <!-- Fallback -->
  <section v-else class="quiz-wrap not-available">
    <p class="muted">Quiz not available.</p>
    <RouterLink to="/catalog" class="btn-primary">Go to catalog</RouterLink>
  </section>
</template>

<style scoped>
.quiz-wrap {
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-4);
}

.breadcrumb {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  text-decoration: none;
}
.breadcrumb:hover {
  color: var(--color-text);
}

.page-title {
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  color: var(--color-text);
  margin-top: var(--space-2);
  margin-bottom: var(--space-2);
}

.subtitle {
  margin-bottom: var(--space-8);
}

.muted {
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
}

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
}

.question-card {
  margin-bottom: var(--space-5);
}

.prompt {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  color: var(--color-text);
  margin-top: var(--space-3);
  margin-bottom: 0;
}

.choices {
  margin-top: var(--space-4);
}

.choice {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-2);
  cursor: pointer;
  background: var(--color-surface);
  transition: background 120ms var(--ease-out);
}

.choice:hover {
  background: var(--color-surface-muted);
}

.choice--selected {
  border-color: var(--color-primary);
  background: var(--color-primary-soft);
}

.radio-native {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.radio-visual {
  width: 16px;
  height: 16px;
  min-width: 16px;
  border: 1.5px solid var(--color-border-strong);
  border-radius: var(--radius-pill);
  display: grid;
  place-items: center;
  background: transparent;
}

.radio-visual--checked {
  border: 2px solid var(--color-primary);
}

.radio-dot {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: var(--radius-pill);
}

.choice-text {
  font-size: var(--fs-base);
  color: var(--color-text);
}

.submit-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-6);
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-border);
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  padding: 10px 18px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-base);
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background var(--dur-fast) var(--ease-out);
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-primary-hover);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background: var(--color-surface);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text);
  border-radius: var(--radius-md);
  padding: 10px 18px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-base);
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background var(--dur-fast) var(--ease-out);
}

.btn-secondary:hover {
  background: var(--color-surface-muted);
}

.result-card {
  text-align: center;
  padding: var(--space-8);
}

.result-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-pill);
  display: grid;
  place-items: center;
  margin: 0 auto var(--space-4);
}

.result-icon--pass {
  background: var(--color-accent);
}

.result-icon--fail {
  background: var(--color-warning-soft);
}

.result-heading {
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.result-actions {
  display: flex;
  gap: var(--space-3);
  justify-content: center;
  margin-top: var(--space-6);
}

.review-section {
  margin-top: var(--space-8);
}

.review-heading {
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.review-card {
  margin-bottom: var(--space-5);
}

.review-prompt {
  font-size: var(--fs-base);
  font-weight: var(--fw-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.review-choice {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-2);
}

.review-choice--correct {
  background: var(--color-accent-soft);
}

.review-choice--wrong-pick {
  background: var(--color-danger-soft);
}

.not-available {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
}
</style>
