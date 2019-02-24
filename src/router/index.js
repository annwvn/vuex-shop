import Vue from 'vue'
import Router from 'vue-router'
import Home from 'view/home/home'
import Cart from 'view/home/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
