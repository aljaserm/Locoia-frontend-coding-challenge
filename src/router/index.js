import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Winners from '@/views/Winners.vue';

// Define routes for the application
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/winners',
    name: 'Winners',
    component: Winners
  }
]

// Create and configure the router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
