import Vue from 'vue'
import VueRouter from 'vue-router'
import {Home, Clients , Dealerships} from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {path: '/clients', name:'Clients', component: Clients},
      {path: '/dealerships', name:'Dealerships', component: Dealerships}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
