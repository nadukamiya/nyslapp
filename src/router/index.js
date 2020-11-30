import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/calendar',
    name: 'Date',
    component: () => import ('../views/Date.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import ('../views/User.vue')
  },
  {
  path: '/location',
  name: 'Location',
  component: () => import ('../views/Location.vue')
},
{
  path: '/profile',
  name: 'Profile',
  component: () => import ('../views/Profile.vue')
},
{
  path: '/chatroom/:id',
  name: 'Chatroom',
  component: () => import ('../views/Chatroom.vue')
},

{
  path: '/selectchat',
  name: 'Selectchat',
  component: () => import ('../views/Selectchat.vue')
},




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
