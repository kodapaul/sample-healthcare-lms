<template>
  <span class="badge" :class="`badge--${variant} badge--${size}`">
    <slot></slot>
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'neutral',
    validator: (val) => ['neutral', 'primary', 'success', 'warning', 'danger'].includes(val),
  },
  size: {
    type: String,
    default: 'md',
    validator: (val) => ['sm', 'md'].includes(val),
  },
})
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-pill);
  font-weight: var(--fw-medium);
  letter-spacing: 0.01em;
  border: none;
  box-shadow: none;
}

.badge--sm {
  padding: 2px 8px;
  font-size: var(--fs-xs);
}

.badge--md {
  padding: 4px 10px;
  font-size: var(--fs-sm);
}

.badge--neutral {
  background-color: var(--color-surface-muted);
  color: var(--color-text-muted);
}

.badge--primary {
  background-color: var(--color-primary-soft);
  color: var(--color-primary);
}

.badge--success {
  background-color: var(--color-accent-soft);
  color: var(--color-accent);
}

.badge--warning {
  background-color: var(--color-warning-soft);
  color: var(--color-warning);
}

.badge--danger {
  background-color: var(--color-danger-soft);
  color: var(--color-danger);
}
</style>
