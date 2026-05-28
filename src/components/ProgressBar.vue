<template>
  <div class="progress-bar">
    <div v-if="label || showValue" class="progress-bar__header">
      <span v-if="label" class="progress-bar__label">{{ label }}</span>
      <span v-if="showValue" class="progress-bar__value">{{ Math.round(clampedValue) }}%</span>
    </div>
    <div
      class="progress-bar__track"
      role="progressbar"
      :aria-valuenow="Math.round(clampedValue)"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="label || 'Progress'"
    >
      <div class="progress-bar__fill" :style="{ width: `${clampedValue}%` }"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  showValue: {
    type: Boolean,
    default: true,
  },
})

const clampedValue = computed(() => {
  return Math.max(0, Math.min(100, props.value))
})
</script>

<style scoped>
.progress-bar {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.progress-bar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-sm);
}

.progress-bar__label {
  color: var(--color-text-muted);
  font-weight: var(--fw-medium);
}

.progress-bar__value {
  color: var(--color-text-muted);
  font-weight: var(--fw-medium);
}

.progress-bar__track {
  height: 6px;
  background-color: var(--color-surface-muted);
  border-radius: var(--radius-pill);
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  background-color: var(--color-accent);
  transition: width 250ms var(--ease-out);
}
</style>
