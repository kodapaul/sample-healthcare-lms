import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  { path: '/login', name: 'login', component: () => import('../views/LoginView.vue'), meta: { public: true } },
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue'), meta: { public: true } },
  { path: '/catalog', name: 'catalog', component: () => import('../views/CatalogView.vue') },
  { path: '/courses/:slug', name: 'course', component: () => import('../views/CourseView.vue'), props: true },
  { path: '/courses/:slug/lessons/:lessonId', name: 'lesson', component: () => import('../views/LessonView.vue'), props: true },
  { path: '/courses/:slug/quiz', name: 'quiz', component: () => import('../views/QuizView.vue'), props: true },
  { path: '/profile', name: 'profile', component: () => import('../views/ProfileView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Auth middleware: every route except those marked `public` requires a session.
router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.public) {
    // Already logged in? Skip the login screen.
    if (to.name === 'login' && auth.isLoggedIn) {
      return { path: '/' }
    }
    return true
  }
  if (!auth.isLoggedIn) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  return true
})

export default router
