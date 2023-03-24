// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "home" */ '@/views/blank.vue'),
      },
      {
        path: '/services',
        name: 'services',
        component: () => import(/* webpackChunkName: "home" */ '@/views/blank.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import(/* webpackChunkName: "home" */ '@/views/blank.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
