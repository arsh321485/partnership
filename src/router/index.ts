import Login from '@/components/Login.vue'
import Sidebar from '@/components/Sidebar.vue'
import Signup from '@/components/Signup.vue'
import DashboardView from '@/views/DashboardView.vue'
import DealsView from '@/views/DealsView.vue'
import LeadsView from '@/views/LeadsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'signup',
      component: Signup,
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
    },

     {
      path: '/sidebar',
      name: 'sidebar',
      component: Sidebar,
    },


      {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },

     {
      path: '/deals',
      name: 'deals',
      component: DealsView,
    },


     {
      path: '/leads',
      name: 'leads',
      component: LeadsView,
    },

    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },





    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },


  ],
})

export default router
