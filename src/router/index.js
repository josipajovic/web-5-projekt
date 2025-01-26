import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: () => import('@/views/Catalog.vue'),
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: () => import('@/views/MovieDetail.vue'),
    meta: { title: 'Movie Details' },
    beforeEnter: (to, from, next) => {
      const id = to.params.id
      if (/^\d+$/.test(id)) {
        next()
      } else {
        next({ name: 'NotFound' })
      }
    },
  },
  {
    path: '/watchlist',
    name: 'WatchList',
    component: () => import('@/views/WatchList.vue'),
    meta: { title: 'My Watch List' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: 'Page Not Found' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  const defaultTitle = 'Movies App'
  document.title = to.meta.title || defaultTitle
})

export default router
