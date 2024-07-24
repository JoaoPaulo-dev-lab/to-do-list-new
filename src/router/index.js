import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../src/views/HomeView.vue'
import DisplayView from '../../src/views/display/DisplayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/display',
      name: 'display',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DisplayView
    }
  ]
})

export default router
