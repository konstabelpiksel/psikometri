import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Disclaimer from '../views/Disclaimer.vue'
import Abstress from '../views/Abstress.vue'
import Mentalage from '../views/Mentalage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/abstress',
    name: 'Abstress',
    component: Abstress
  },
  {
    path: '/mentalage',
    name: 'Mentalage',
    component: Mentalage
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer

  },
  {
    path: '/about',
    name: 'About',
    component: About

  }
]

const router = new VueRouter({
  routes
})

export default router
