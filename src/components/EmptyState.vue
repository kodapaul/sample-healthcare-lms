<template>
  <div class="empty-state">
    <div class="empty-state__icon-container">
      <svg
        class="empty-state__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <template v-if="icon === 'inbox'">
          <path d="M22 12h-6l-2 3h-4l-2-3H2" />
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </template>
        <template v-else-if="icon === 'search'">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </template>
        <template v-else-if="icon === 'check'">
          <path d="M20 6 9 17l-5-5" />
        </template>
        <template v-else-if="icon === 'book'">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </template>
      </svg>
    </div>
    <h3 class="empty-state__title">{{ title }}</h3>
    <p v-if="description" class="empty-state__description">{{ description }}</p>
    <div v-if="$slots.default" class="empty-state__action">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: null },
  icon: {
    type: String,
    default: 'inbox',
    validator: (val) => ['inbox', 'search', 'check', 'book'].includes(val),
  },
})
</script>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-12) var(--space-6);
  text-align: center;
}
.empty-state__icon-container {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-soft);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
}
.empty-state__icon {
  width: 24px;
  height: 24px;
  color: var(--color-primary);
}
.empty-state__title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  color: var(--color-text);
  margin: 0 0 var(--space-2);
}
.empty-state__description {
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
  max-width: 380px;
  margin: 0 0 var(--space-5);
}
.empty-state__action { margin-top: var(--space-2); }
</style>
