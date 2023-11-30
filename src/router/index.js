import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/LoginView.vue'
import AccueilView from '../views/AccueilView.vue'
import medecinView from '../views/MedecinView.vue'
import rapportsView from '../views/RapportsView.vue'

const routes = [  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/medecin',
    name: 'medecin',
    component: medecinView
  },
  {
  path: '/rapports',
  name: 'rapports',
  component: rapportsView
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router