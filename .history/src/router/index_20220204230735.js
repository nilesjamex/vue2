import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/details.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
    path: '/details',
    name: 'Details',
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
