import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./Home.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('./User.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router