import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Connection from '../views/Connection/Connection.vue'
import AddBoat from '../views/AddBoat/AddBoat.vue'
import Help from '../views/Help/Help.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/connection',
    name: 'Connection',
    component: Connection
  },
  {
    path: '/Addboat',
    name: 'AddBoat',
    component: AddBoat
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
