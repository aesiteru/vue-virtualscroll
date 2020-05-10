import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    meta: {
      layout: 'default'
    },
    component: () => import('@/views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router