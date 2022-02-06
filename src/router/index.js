import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Services',
    name: 'Services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Services')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About')
  },
    {
    path: '/Skills',
    name: 'Skills',
    component: () => import('../views/Skills')
  },
    {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
