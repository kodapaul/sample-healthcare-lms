<script setup>
import { computed } from 'vue'
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()
const router = useRouter()

const isLoggedIn = computed(() => auth.isLoggedIn)
const userName = computed(() => auth.currentUser?.name ?? '')
const initials = computed(() => {
  const n = userName.value.trim()
  if (!n) return '?'
  const parts = n.split(/\s+/)
  return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase()
})

function signOut() {
  auth.signOut()
  router.replace('/login')
}
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="app-header__inner container">
        <RouterLink to="/" class="brand">
          <span class="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
          <span class="brand__name">Sample Healthcare LMS</span>
        </RouterLink>

        <nav v-if="isLoggedIn" class="app-nav" aria-label="Primary">
          <RouterLink to="/">Dashboard</RouterLink>
          <RouterLink to="/catalog">Catalog</RouterLink>
          <RouterLink to="/profile">Profile</RouterLink>
        </nav>

        <div v-if="isLoggedIn" class="app-user">
          <span class="app-user__avatar" aria-hidden="true">{{ initials }}</span>
          <span class="app-user__name">{{ userName }}</span>
          <button class="app-user__signout" type="button" @click="signOut">Sign out</button>
        </div>

        <div v-else class="app-guest">
          <RouterLink :to="{ path: '/login', query: { mode: 'signin' } }" class="app-guest__signin">Sign in</RouterLink>
          <RouterLink to="/login" class="app-guest__cta">Get started</RouterLink>
        </div>
      </div>
    </header>
    <main class="app-main container">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <footer class="app-footer">
      <div class="container">
        <span class="subtle">Healthcare training demo · local data only</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.app-header {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 10;
}
.app-header__inner {
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-text);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-base);
  letter-spacing: -0.01em;
  margin-right: auto;
}
.brand:hover { color: var(--color-text); }
.brand__name { white-space: nowrap; }
.brand__mark {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: #fff;
}
.app-nav {
  display: flex;
  gap: var(--space-8);
}
.app-nav a {
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  padding: var(--space-2) 0;
  position: relative;
  transition: color var(--dur-fast) var(--ease-out);
}
.app-nav a:hover { color: var(--color-text); }
.app-nav a.router-link-exact-active {
  color: var(--color-primary);
  font-weight: var(--fw-semibold);
}
.app-nav a.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1.05rem;
  height: 2px;
  background: var(--color-primary);
  border-radius: var(--radius-pill);
}
.app-user {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
}
.app-user__avatar {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: var(--radius-pill);
  background: var(--color-primary-soft);
  color: var(--color-primary);
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
}
.app-user__name {
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--color-text);
  white-space: nowrap;
}
.app-user__signout {
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--color-text-muted);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
}
.app-user__signout:hover {
  background: var(--color-surface-muted);
  color: var(--color-text);
}
.app-guest {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
}
.app-guest__signin {
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--color-text-muted);
  white-space: nowrap;
}
.app-guest__signin:hover { color: var(--color-text); }
.app-guest__cta {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: #fff;
  background: var(--color-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-out);
}
.app-guest__cta:hover { background: var(--color-primary-hover); color: #fff; }
.app-main {
  flex: 1;
  width: 100%;
  padding-top: var(--space-10);
  padding-bottom: var(--space-12);
}
.app-footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-6) 0;
  font-size: var(--fs-sm);
  background: var(--color-surface);
}

@media (max-width: 720px) {
  .brand__name { display: none; }
  .app-user__name { display: none; }
  .app-nav { gap: var(--space-5); }
  .app-header__inner { gap: var(--space-4); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--dur-base) var(--ease-out);
}
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>
