<script setup>
import { useCatalogStore } from '../stores/catalog'
import CourseCard from '../components/CourseCard.vue'
import EmptyState from '../components/EmptyState.vue'

const catalog = useCatalogStore()
</script>

<template>
  <section>
    <header class="page-header">
      <h1>Course Catalog</h1>
      <p class="muted page-header__sub">Browse healthcare training. Search by topic or filter by category.</p>
    </header>

    <div class="toolbar">
      <input
        type="search"
        class="search-input"
        placeholder="Search courses…"
        :value="catalog.search"
        @input="catalog.setSearch($event.target.value)"
      />
    </div>

    <div class="chips">
      <button
        v-for="cat in catalog.categories"
        :key="cat"
        class="chip"
        :class="{ 'chip--active': catalog.category === cat }"
        @click="catalog.setCategory(cat)"
      >
        {{ cat }}
      </button>
    </div>

    <div v-if="catalog.filtered.length > 0" class="course-grid">
      <CourseCard v-for="c in catalog.filtered" :key="c.slug" :course="c" />
    </div>

    <EmptyState
      v-else
      icon="search"
      title="No courses match"
      description="Try a different keyword or category."
    >
      <button class="btn-secondary" @click="catalog.resetFilters()">Reset filters</button>
    </EmptyState>
  </section>
</template>

<style scoped>
.page-header {
  margin-bottom: var(--space-8);
}

.page-header__sub {
  margin-top: var(--space-2);
  color: var(--color-text-muted);
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.search-input {
  width: 320px;
  max-width: 100%;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: var(--fs-sm);
  color: var(--color-text);
  font-family: inherit;
  transition: border-color var(--dur-fast) var(--ease-out);
}

.search-input:focus-visible {
  outline: none;
  border-color: var(--color-primary);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.chip {
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  font-size: var(--fs-sm);
  cursor: pointer;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-muted);
  font-family: inherit;
  transition:
    background var(--dur-fast) var(--ease-out),
    color var(--dur-fast) var(--ease-out);
}

.chip:hover {
  border-color: var(--color-border-strong);
  color: var(--color-text);
}

.chip--active {
  background: var(--color-primary-soft);
  color: var(--color-primary);
  font-weight: var(--fw-semibold);
  border-color: var(--color-primary-soft);
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-5);
}

.btn-secondary {
  background: var(--color-surface);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text);
  border-radius: var(--radius-md);
  padding: 10px 18px;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  font-family: inherit;
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-out);
}

.btn-secondary:hover {
  background: var(--color-surface-muted);
}
</style>
