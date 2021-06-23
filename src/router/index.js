import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Connection from '../views/Connection/Connection.vue'
import AddBoat from '../views/AddBoat/AddBoat.vue'
import Help from '../views/Help/Help.vue'
import FavoriteDestination from '../views/Destinations/FavoriteDestination/FavoriteDestination.vue'

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
    //  fD: favorite destination name
    path: '/destination-a-la-une/:fD',
    name: 'FavoriteDestination',
    component: FavoriteDestination
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
