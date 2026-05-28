import { defineStore } from 'pinia'
import { storage } from '../lib/storage'
import { useProfileStore } from './profile'
import demoUsers from '../data/demoUsers'

function normalizeEmail(e) {
  return (e ?? '').trim().toLowerCase()
}

// On first load (or after a reset), seed the demo accounts so reviewers can
// sign in without creating one. Never clobbers user-created accounts.
function initUsers() {
  const existing = storage.loadUsers()
  if (existing && existing.length > 0) return existing
  const seeded = demoUsers.map((u) => ({ ...u }))
  storage.saveUsers(seeded)
  return seeded
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: initUsers(),
    sessionEmail: storage.loadSession()?.email ?? null,
  }),
  getters: {
    isLoggedIn: (state) => Boolean(state.sessionEmail),
    currentUser: (state) =>
      state.users.find((u) => u.email === state.sessionEmail) ?? null,
  },
  actions: {
    _persistUsers() {
      storage.saveUsers(this.users)
    },
    _persistSession() {
      storage.saveSession(this.sessionEmail ? { email: this.sessionEmail } : null)
    },

    /**
     * Demo auth. If the email already exists, any password works (we ignore the
     * supplied password). If the email is new, the user is created on the spot
     * with whatever name/password they entered.
     *
     * Returns { ok: true, mode: 'login' | 'signup' } on success,
     * { ok: false, error: '...' } on validation failure.
     */
    signIn({ email, password, name, role }) {
      const e = normalizeEmail(email)
      if (!e) return { ok: false, error: 'Email is required.' }
      if (!password) return { ok: false, error: 'Password is required.' }

      const existing = this.users.find((u) => u.email === e)
      let mode = 'login'

      if (existing) {
        // any password works; optionally update name/role if provided
        if (name && name.trim()) existing.name = name.trim()
        if (role && role.trim()) existing.role = role.trim()
        this._persistUsers()
      } else {
        if (!name || !name.trim()) {
          return { ok: false, error: 'Please enter your name to create an account.' }
        }
        mode = 'signup'
        this.users = [
          ...this.users,
          {
            email: e,
            name: name.trim(),
            role: (role ?? '').trim(),
            password, // demo only — never do this in real apps
            createdAt: new Date().toISOString(),
          },
        ]
        this._persistUsers()
      }

      this.sessionEmail = e
      this._persistSession()

      // Mirror name/role into profile so existing views keep working unchanged.
      const u = this.currentUser
      if (u) {
        const profile = useProfileStore()
        profile.setProfile({ name: u.name, role: u.role })
      }

      return { ok: true, mode }
    },

    /**
     * Update the current user's name/role and mirror to profile store.
     */
    updateCurrentUser({ name, role }) {
      if (!this.isLoggedIn) return
      this.users = this.users.map((u) =>
        u.email === this.sessionEmail
          ? { ...u, name: (name ?? u.name).trim(), role: (role ?? u.role).trim() }
          : u,
      )
      this._persistUsers()
      const u = this.currentUser
      if (u) {
        const profile = useProfileStore()
        profile.setProfile({ name: u.name, role: u.role })
      }
    },

    signOut() {
      this.sessionEmail = null
      this._persistSession()
      const profile = useProfileStore()
      profile.clear()
    },

    /**
     * Demo reset — wipes users, session, profile. Caller is responsible for
     * also resetting progress if desired.
     */
    resetAuth() {
      this.users = []
      this.sessionEmail = null
      this._persistUsers()
      this._persistSession()
    },
  },
})
