import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "" */ '@/views/login/index.vue')
  },
  {
    path: '/newschange',
    name: 'newschange',
    meta:{
      requiresAuth: true
      },
    component: () => import(/* webpackChunkName: "home" */ '@/views/information-changes/index.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta:{
      requiresAuth: true
      },
    component: () => import(/* webpackChunkName: "home" */ '@/views/registration-changes/index.vue')
  },
  {
    path: '/stop',
    name: 'stop',
    meta:{
      requiresAuth: true
      },
    component: () => import(/* webpackChunkName: "home" */ '@/views/withdraw-application/index.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    meta:{
      requiresAuth: true
      },
    component: () => import(/* webpackChunkName: "home" */ '@/views/person-details/index.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    meta:{
      requiresAuth: true
      },
    component: () => import(/* webpackChunkName: "home" */ '@/views/edit/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta:{
      requiresAuth: true
      },
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
  },
  {
    path: '/stock',
    name: 'stock',
    meta:{
      requiresAuth: true
      },
    component: () => import(/* webpackChunkName: "stock" */ '@/views/my-stock/index.vue')
  },
  {
    path: '/item',
    name: 'item',
    meta:{
      requiresAuth: true
      },
    component: () => import(/* webpackChunkName: "item" */ '@/views/join-item/index.vue')
  },

  {
    path:"/:pathMatch(.*)",
    redirect:'/404'
  },
  {
    path: "/404",
    name:'404',
    component: () => import(/* webpackChunkName: "error" */ '@/views/path-error/index.vue')

  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})
router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    console.log(store.state.user)
     if(!store.state.user) {
       return next({path: '/'})
     }
     next()
  } else {
   next()
  }
})
export default router
