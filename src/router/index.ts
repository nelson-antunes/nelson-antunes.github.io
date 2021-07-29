import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import('../views/Projects.vue')
    }
  },
  {
    path: '/cv',
    name: 'cv',
    component: function () {
      return import('../views/CV.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
