import { createRouter, createWebHashHistory } from 'vue-router'
import Raiz from '../views/Raiz.vue'

const routes = [
  {
    path: '/',
    name: 'raiz',
    component: Raiz
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
