import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  },
  {
    path: '/newschange',
    name: 'newschange',
    component: () => import(/* webpackChunkName: "home" */ '@/views/information-changes/index.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import(/* webpackChunkName: "home" */ '@/views/registration-changes/index.vue')
  },
  {
    path: '/stop',
    name: 'stop',
    component: () => import(/* webpackChunkName: "home" */ '@/views/withdraw-application/index.vue')
  },
  // {
  //   path: '/data',
  //   name: 'data',
  //   component: () => import(/* webpackChunkName: "home" */ '../views/data/index.vue')
  // },
  // {
  //   path: '/item',
  //   name: 'item',
  //   component: () => import(/* webpackChunkName: "home" */ '../views/item/index.vue')
  // },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "home" */ '@/views/person-details/index.vue')
  },
  // {
  //   path: '/basic',
  //   name: 'basic',
  //   component: () => import(/* webpackChunkName: "home" */ '@/views/pedetails/components/basic.vue')
  // },
  // {
  //   path: '/bank',
  //   name: 'bank',
  //   component: () => import(/* webpackChunkName: "home" */ '@/views/details/components/bank.vue')
  // },
  // {
  //   path: '/education',
  //   name: 'education',
  //   component: () => import(/* webpackChunkName: "home" */ '../views/details/components/education.vue')
  // },
  // {
  //   path: '/address',
  //   name: 'address',
  //   component: () => import(/* webpackChunkName: "home" */ '../views/details/components/address.vue')
  // },{
  //   path: '/email',
  //   name: 'email',
  //   component: () => import(/* webpackChunkName: "home" */ '../views/details/components/email.vue')
  // },
  {
    path: '/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "home" */ '@/views/person-details/components/edit.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "home" */ '@/views/login/index.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/views/error/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
