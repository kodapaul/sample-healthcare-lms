const NAMESPACE = 'lms:'
const SCHEMA_VERSION = 2

const KEYS = {
  meta: `${NAMESPACE}meta`,
  profile: `${NAMESPACE}profile`,
  progress: `${NAMESPACE}progress`,
  users: `${NAMESPACE}users`,
  session: `${NAMESPACE}session`,
}

function safeParse(raw, fallback) {
  if (raw == null) return fallback
  try {
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

function read(key, fallback) {
  if (typeof window === 'undefined' || !window.localStorage) return fallback
  return safeParse(window.localStorage.getItem(key), fallback)
}

function write(key, value) {
  if (typeof window === 'undefined' || !window.localStorage) return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Quota exceeded or storage disabled — silently no-op in demo.
  }
}

function remove(key) {
  if (typeof window === 'undefined' || !window.localStorage) return
  window.localStorage.removeItem(key)
}

function ensureSchema() {
  const meta = read(KEYS.meta, null)
  if (!meta || meta.schemaVersion !== SCHEMA_VERSION) {
    write(KEYS.meta, { schemaVersion: SCHEMA_VERSION })
  }
}

ensureSchema()

export const storage = {
  loadProfile() {
    return read(KEYS.profile, { name: '', role: '' })
  },
  saveProfile(profile) {
    write(KEYS.profile, profile)
  },
  loadProgress() {
    return read(KEYS.progress, {})
  },
  saveProgress(progress) {
    write(KEYS.progress, progress)
  },
  loadUsers() {
    return read(KEYS.users, [])
  },
  saveUsers(users) {
    write(KEYS.users, users)
  },
  loadSession() {
    return read(KEYS.session, null)
  },
  saveSession(session) {
    if (session == null) remove(KEYS.session)
    else write(KEYS.session, session)
  },
  reset() {
    if (typeof window === 'undefined' || !window.localStorage) return
    remove(KEYS.profile)
    remove(KEYS.progress)
    remove(KEYS.users)
    remove(KEYS.session)
    write(KEYS.meta, { schemaVersion: SCHEMA_VERSION })
  },
}
