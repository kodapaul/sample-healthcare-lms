import { defineStore } from 'pinia'
import courses from '../data/courses'

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    courses,
    search: '',
    category: 'All',
  }),
  getters: {
    categories: (state) => {
      const set = new Set(state.courses.map((c) => c.category))
      return ['All', ...Array.from(set)]
    },

    filtered: (state) => {
      const q = state.search.trim().toLowerCase()
      return state.courses.filter((c) => {
        const matchesCategory = state.category === 'All' || c.category === state.category
        if (!matchesCategory) return false
        if (!q) return true
        return (
          c.title.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
        )
      })
    },

    bySlug: (state) => (slug) => state.courses.find((c) => c.slug === slug) ?? null,

    lessonInCourse: (state) => (slug, lessonId) => {
      const course = state.courses.find((c) => c.slug === slug)
      if (!course) return null
      return course.lessons.find((l) => l.id === lessonId) ?? null
    },
  },
  actions: {
    setSearch(s) { this.search = s },
    setCategory(c) { this.category = c },
    resetFilters() { this.search = ''; this.category = 'All' },
  },
})
