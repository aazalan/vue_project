import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../components/RegisterComponent.vue'
import LoginView from '../components/LoginComponent.vue'
import TrainComponent from '../components/TrainComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home'
    },
    { path: '/train',
      name: 'train',
      component: TrainComponent
    }
  ]
})

export default router
