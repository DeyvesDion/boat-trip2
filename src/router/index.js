import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Connection from '../views/Connection/Connection.vue'
import AddBoat from '../views/AddBoat/AddBoat.vue'
import Help from '../views/Help/Help.vue'
import FavoriteDestination from '../views/Destinations/FavoriteDestination/FavoriteDestination.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import BookingBoat from '../views/BookingBoat/BookingBoat.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/connexion',
    name: 'connection',
    component: Connection
  },
  {
    path: '/ajouter-un-bateau',
    name: 'AddBoat',
    component: AddBoat
  },
  {
    path: '/aide',
    name: 'Help',
    component: Help
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    //  fD: favorite destination name
    path: '/destination-favorite/:fD',
    name: 'FavoriteDestination',
    component: FavoriteDestination
  },
  {
    //  bT: boat Type
    path: '/location/:fD/:bT',
    name: 'BookingBoat',
    component: BookingBoat
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
