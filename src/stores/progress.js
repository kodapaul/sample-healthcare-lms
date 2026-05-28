import { defineStore } from 'pinia'
import { storage } from '../lib/storage'
import { useCatalogStore } from './catalog'

const PASS_THRESHOLD = 80

function emptyEntry() {
  return { lessonsCompleted: [], quizScore: null, completedAt: null }
}

export const useProgressStore = defineStore('progress', {
  state: () => ({
    byCourse: storage.loadProgress(),
  }),
  getters: {
    progressFor: (state) => (courseId) => state.byCourse[courseId] ?? emptyEntry(),

    percentFor() {
      return (course) => {
        if (!course) return 0
        const total = course.lessons.length
        if (total === 0) return 0
        const done = (this.byCourse[course.slug]?.lessonsCompleted ?? []).length
        return Math.round((done / total) * 100)
      }
    },

    isLessonComplete: (state) => (courseId, lessonId) =>
      (state.byCourse[courseId]?.lessonsCompleted ?? []).includes(lessonId),

    allLessonsComplete() {
      return (course) => {
        if (!course) return false
        const done = this.byCourse[course.slug]?.lessonsCompleted ?? []
        return course.lessons.every((l) => done.includes(l.id))
      }
    },

    isCompleted: (state) => (courseId) =>
      Boolean(state.byCourse[courseId]?.completedAt),

    courseStatus() {
      return (course) => {
        if (!course) return 'not-started'
        const entry = this.byCourse[course.slug]
        if (!entry || entry.lessonsCompleted.length === 0) return 'not-started'
        if (entry.completedAt) return 'completed'
        return 'in-progress'
      }
    },

    overallStats(state) {
      const catalog = useCatalogStore()
      let inProgress = 0
      let completed = 0
      let minutes = 0
      for (const course of catalog.courses) {
        const entry = state.byCourse[course.slug]
        if (!entry) continue
        if (entry.completedAt) {
          completed += 1
          minutes += course.durationMinutes
        } else if (entry.lessonsCompleted.length > 0) {
          inProgress += 1
        }
      }
      return { inProgress, completed, minutes }
    },

    inProgressCourses(state) {
      const catalog = useCatalogStore()
      return catalog.courses.filter((c) => {
        const entry = state.byCourse[c.slug]
        return entry && entry.lessonsCompleted.length > 0 && !entry.completedAt
      })
    },

    completedCourses(state) {
      const catalog = useCatalogStore()
      return catalog.courses
        .filter((c) => state.byCourse[c.slug]?.completedAt)
        .map((c) => ({ course: c, completedAt: state.byCourse[c.slug].completedAt }))
    },
  },
  actions: {
    _ensure(courseId) {
      if (!this.byCourse[courseId]) {
        this.byCourse[courseId] = emptyEntry()
      }
      return this.byCourse[courseId]
    },

    _persist() {
      storage.saveProgress(this.byCourse)
    },

    markLessonComplete(courseId, lessonId) {
      const entry = this._ensure(courseId)
      if (!entry.lessonsCompleted.includes(lessonId)) {
        entry.lessonsCompleted = [...entry.lessonsCompleted, lessonId]
        this._persist()
      }
    },

    submitQuiz(courseId, scorePercent) {
      const entry = this._ensure(courseId)
      entry.quizScore = scorePercent
      if (scorePercent >= PASS_THRESHOLD) {
        entry.completedAt = new Date().toISOString()
      }
      this._persist()
      return scorePercent >= PASS_THRESHOLD
    },

    resetAll() {
      this.byCourse = {}
      this._persist()
    },
  },
})

export const QUIZ_PASS_THRESHOLD = PASS_THRESHOLD
