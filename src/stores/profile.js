import { defineStore } from 'pinia'
import { storage } from '../lib/storage'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    ...storage.loadProfile(),
  }),
  getters: {
    isSet: (state) => Boolean(state.name && state.name.trim()),
    displayName: (state) => (state.name && state.name.trim()) || 'there',
  },
  actions: {
    setProfile({ name, role }) {
      this.name = (name ?? '').trim()
      this.role = (role ?? '').trim()
      storage.saveProfile({ name: this.name, role: this.role })
    },
    clear() {
      this.name = ''
      this.role = ''
      storage.saveProfile({ name: '', role: '' })
    },
  },
})
