import { createRouter, createWebHistory } from 'vue-router'
import MainRoutes from './MainRoutes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    MainRoutes
  ]
})


export default router