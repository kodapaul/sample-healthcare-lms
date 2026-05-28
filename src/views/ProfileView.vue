<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProfileStore } from '../stores/profile'
import { useProgressStore } from '../stores/progress'
import { useAuthStore } from '../stores/auth'

const profile = useProfileStore()
const progress = useProgressStore()
const auth = useAuthStore()
const router = useRouter()

const nameInput = ref(auth.currentUser?.name ?? profile.name)
const roleInput = ref(auth.currentUser?.role ?? profile.role)
const emailDisplay = ref(auth.currentUser?.email ?? '')
const savedFlash = ref(false)
const confirmingReset = ref(false)

function saveProfile() {
  // Update the auth account (source of truth) — it mirrors into the profile store.
  auth.updateCurrentUser({ name: nameInput.value, role: roleInput.value })
  savedFlash.value = true
  setTimeout(() => { savedFlash.value = false }, 1500)
}

function confirmReset() {
  progress.resetAll()
  auth.resetAuth()
  confirmingReset.value = false
  nameInput.value = ''
  roleInput.value = ''
  router.replace('/login')
}
</script>

<template>
  <section class="profile-page">
    <h1>Profile</h1>
    <p class="muted">Personalize your demo experience. All data is stored locally in your browser.</p>

    <div class="card">
      <h2>Your details</h2>
      <div v-if="emailDisplay" class="field-row">
        <label for="email-display">Email</label>
        <input
          id="email-display"
          type="email"
          :value="emailDisplay"
          readonly
          class="readonly-input"
        />
      </div>
      <div class="field-row">
        <label for="name-input">Name</label>
        <input
          id="name-input"
          type="text"
          v-model="nameInput"
        />
      </div>
      <div class="field-row">
        <label for="role-input">Role</label>
        <input
          id="role-input"
          type="text"
          v-model="roleInput"
          placeholder="e.g., Registered Nurse, Caregiver, Allied Health"
        />
      </div>
      <div class="action-row">
        <button class="btn-primary" @click="saveProfile">Save changes</button>
        <span v-if="savedFlash" class="badge-saved">Saved</span>
      </div>
    </div>

    <div class="card danger-card">
      <h2 class="danger-heading">Danger zone</h2>
      <p class="muted">Removes your saved name, role, and all course progress. This cannot be undone.</p>
      <div v-if="!confirmingReset">
        <button class="btn-danger-outline" @click="confirmingReset = true">Reset all progress</button>
      </div>
      <div v-else class="confirm-row">
        <span class="muted">Are you sure? This will clear everything.</span>
        <button class="btn-danger" @click="confirmReset">Yes, reset everything</button>
        <button class="btn-secondary" @click="confirmingReset = false">Cancel</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-page {
  max-width: 600px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-4);
}

h1 {
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  color: var(--color-text);
  margin: 0 0 var(--space-2) 0;
}

.muted {
  font-size: var(--fs-sm);
  color: var(--color-text-muted);
  margin: 0 0 var(--space-8) 0;
}

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
}

.card h2 {
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  color: var(--color-text);
  margin: 0 0 var(--space-5) 0;
}

.danger-card {
  margin-top: var(--space-10);
  border-color: var(--color-danger-soft);
}

.danger-heading {
  color: var(--color-danger) !important;
  margin-bottom: var(--space-2) !important;
}

.danger-card .muted {
  margin-bottom: var(--space-5);
}

.field-row {
  margin-bottom: var(--space-5);
}

.field-row label {
  display: block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.field-row input {
  display: block;
  width: 100%;
  max-width: 380px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: var(--fs-base);
  color: var(--color-text);
  box-sizing: border-box;
  transition: border-color var(--dur-fast) var(--ease-out);
}

.field-row input:focus {
  border-color: var(--color-primary);
  outline: none;
}

.field-row input::placeholder {
  color: var(--color-text-subtle);
}

.readonly-input {
  background: var(--color-surface-muted) !important;
  color: var(--color-text-muted) !important;
  cursor: default;
}

.action-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
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
  transition: background var(--dur-fast) var(--ease-out);
}

.btn-primary:hover {
  background: var(--color-primary-hover);
}

.badge-saved {
  display: inline-block;
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: #fff;
  background: var(--color-accent);
  border-radius: var(--radius-pill);
  padding: 3px 10px;
}

.btn-danger-outline {
  background: var(--color-surface);
  color: var(--color-danger);
  border: 1px solid var(--color-danger);
  border-radius: var(--radius-md);
  padding: 10px 18px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-base);
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-out);
}

.btn-danger-outline:hover {
  background: var(--color-danger-soft);
}

.confirm-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.confirm-row .muted {
  margin: 0;
  flex: 1 1 100%;
}

.btn-danger {
  background: var(--color-danger);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  padding: 10px 18px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-base);
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-out);
}

.btn-danger:hover {
  background: #8E1E18;
}

.btn-secondary {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  padding: 10px 18px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-base);
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-out);
}

.btn-secondary:hover {
  background: var(--color-surface-muted);
}
</style>
