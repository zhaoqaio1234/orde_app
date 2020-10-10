import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/shop',
    children: [{
      path: '/shop',
      name: 'shop',
      component: () => import('../views/shop/shop.vue')
    }, {
      path: '/evaluation',
      name: 'evaluation',
      component: () => import('../views/evaluation/evaluation.vue')
    }, {
      path: '/merchants',
      name: 'merchants',
      component: () => import('../views/merchants/merchants.vue')

    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
