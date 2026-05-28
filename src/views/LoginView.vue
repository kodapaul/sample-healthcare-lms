<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import demoUsers from '../data/demoUsers'

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

function useDemoAccount(account) {
  mode.value = 'signin'
  email.value = account.email
  password.value = 'demo'
  errorMsg.value = ''
}

// 'signup' = create account, 'signin' = returning user.
// Honor ?mode=signin (e.g. from the landing "I already have an account" link).
const mode = ref(route.query.mode === 'signin' ? 'signin' : 'signup')

const email = ref('')
const password = ref('')
const name = ref('')
const role = ref('')
const errorMsg = ref('')
const submitting = ref(false)

const isSignup = computed(() => mode.value === 'signup')

function switchMode(next) {
  mode.value = next
  errorMsg.value = ''
}

function handleSubmit() {
  errorMsg.value = ''
  const e = email.value.trim().toLowerCase()

  // In sign-in mode, the account must already exist.
  if (!isSignup.value) {
    const existing = auth.users.find((u) => u.email === e)
    if (!existing) {
      errorMsg.value = 'No account found with that email. Create one instead.'
      return
    }
  }

  submitting.value = true
  const result = auth.signIn({
    email: email.value,
    password: password.value,
    name: name.value,
    role: role.value,
  })
  submitting.value = false

  if (!result.ok) {
    errorMsg.value = result.error
    return
  }
  const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/'
  router.replace(redirect)
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <div class="brand-row">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
        <span class="brand-name">Sample Healthcare LMS</span>
      </div>

      <h1 class="login-title">{{ isSignup ? 'Create your account' : 'Welcome back' }}</h1>
      <p class="login-sub">
        {{ isSignup
          ? 'This is a demo — any password works. Your data stays on this device.'
          : 'Sign in to continue your training.' }}
      </p>

      <form class="login-form" @submit.prevent="handleSubmit" novalidate>
        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            autocomplete="email"
            v-model="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div v-if="isSignup" class="field">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            autocomplete="name"
            v-model="name"
            placeholder="e.g., Maria Santos"
          />
        </div>

        <div v-if="isSignup" class="field">
          <label for="role">
            Role <span class="optional">(optional)</span>
          </label>
          <input
            id="role"
            type="text"
            v-model="role"
            placeholder="e.g., Registered Nurse, Caregiver"
          />
        </div>

        <div class="field">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            autocomplete="current-password"
            v-model="password"
            placeholder="Any password works"
            required
          />
          <p class="hint">Demo only — passwords are not validated.</p>
        </div>

        <p v-if="errorMsg" class="error-msg" role="alert">{{ errorMsg }}</p>

        <button type="submit" class="submit-btn" :disabled="submitting">
          {{ isSignup ? 'Create account' : 'Sign in' }}
        </button>
      </form>

      <p class="footer-line">
        <template v-if="isSignup">
          <span class="muted">Already have an account?</span>
          <button type="button" class="footer-link" @click="switchMode('signin')">Sign in</button>
        </template>
        <template v-else>
          <span class="muted">Don't have an account?</span>
          <button type="button" class="footer-link" @click="switchMode('signup')">Create one</button>
        </template>
      </p>
    </div>

    <div class="demo-panel">
      <div class="demo-panel__head">
        <span class="demo-panel__title">Demo accounts</span>
        <span class="demo-panel__hint">any password works</span>
      </div>
      <ul class="demo-list">
        <li v-for="acct in demoUsers" :key="acct.email">
          <button type="button" class="demo-acct" @click="useDemoAccount(acct)">
            <span class="demo-acct__avatar" aria-hidden="true">{{ acct.name.split(' ').map(p => p[0]).join('') }}</span>
            <span class="demo-acct__text">
              <span class="demo-acct__name">{{ acct.name }} <span class="demo-acct__role">· {{ acct.role }}</span></span>
              <span class="demo-acct__email">{{ acct.email }}</span>
            </span>
            <span class="demo-acct__use">Use →</span>
          </button>
        </li>
      </ul>
    </div>

    <p class="legal subtle">Sample Healthcare LMS · for demonstration only</p>
  </div>
</template>

<style scoped>
.login-page {
  min-height: calc(100vh - var(--header-h) - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-8) var(--space-4);
  gap: var(--space-6);
}

.login-card {
  width: 100%;
  max-width: 420px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: var(--space-8);
}

.brand-row {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}
.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: #fff;
}
.brand-name {
  font-weight: var(--fw-semibold);
  font-size: var(--fs-base);
  letter-spacing: -0.01em;
}

.login-title {
  font-size: var(--fs-2xl);
  margin: 0 0 var(--space-2);
}
.login-sub {
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
  margin: 0 0 var(--space-6);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.field label {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--color-text);
}
.optional {
  color: var(--color-text-subtle);
  font-weight: var(--fw-regular);
}
.field input {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: var(--fs-base);
  color: var(--color-text);
  transition: border-color var(--dur-fast) var(--ease-out);
}
.field input:focus {
  border-color: var(--color-primary);
  outline: none;
}
.field input::placeholder {
  color: var(--color-text-subtle);
}
.hint {
  font-size: var(--fs-xs);
  color: var(--color-text-subtle);
  margin: 0;
}

.error-msg {
  background: var(--color-danger-soft);
  color: var(--color-danger);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--fs-sm);
  margin: 0;
}

.submit-btn {
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  padding: 12px 18px;
  font-size: var(--fs-base);
  font-weight: var(--fw-semibold);
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-out);
  margin-top: var(--space-2);
}
.submit-btn:hover { background: var(--color-primary-hover); }
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.footer-line {
  margin: var(--space-6) 0 0;
  font-size: var(--fs-sm);
  display: flex;
  gap: var(--space-2);
  align-items: center;
  flex-wrap: wrap;
}
.footer-link {
  font-weight: var(--fw-semibold);
  color: var(--color-primary);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: var(--fs-sm);
}
.footer-link:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

.legal {
  font-size: var(--fs-xs);
}

/* Demo accounts panel */
.demo-panel {
  width: 100%;
  max-width: 420px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: var(--space-5) var(--space-6);
}
.demo-panel__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--space-3);
}
.demo-panel__title {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--color-text);
}
.demo-panel__hint {
  font-size: var(--fs-xs);
  color: var(--color-accent);
  background: var(--color-accent-soft);
  padding: 2px 8px;
  border-radius: var(--radius-pill);
  font-weight: var(--fw-medium);
}
.demo-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.demo-acct {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-2);
  border-radius: var(--radius-md);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background var(--dur-fast) var(--ease-out);
}
.demo-acct:hover { background: var(--color-surface-muted); }
.demo-acct:hover .demo-acct__use { color: var(--color-primary); }
.demo-acct__avatar {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: var(--radius-pill);
  background: var(--color-primary-soft);
  color: var(--color-primary);
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  flex-shrink: 0;
}
.demo-acct__text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}
.demo-acct__name {
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--color-text);
}
.demo-acct__role {
  color: var(--color-text-muted);
  font-weight: var(--fw-regular);
}
.demo-acct__email {
  font-size: var(--fs-xs);
  color: var(--color-text-subtle);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.demo-acct__use {
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--color-text-subtle);
  white-space: nowrap;
  transition: color var(--dur-fast) var(--ease-out);
}
</style>
