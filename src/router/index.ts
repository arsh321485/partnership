import ForgotPasswordPage from '@/components/ForgotPasswordPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import MainSigninPage from '@/components/MainSigninPage.vue'
import SidebarPage from '@/components/SidebarPage.vue'
import SignupPage from '@/components/SignupPage.vue'
import DashboardView from '@/views/DashboardView.vue'
import DealsView from '@/views/DealsView.vue'
import LeadsView from '@/views/LeadsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ProposalView from '@/views/ProposalView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

     {
      path: '/',
      name: 'Signin',
      component: MainSigninPage,
    },

    {
      path: '/signup',
      name: 'signup',
      component: SignupPage,
    },

    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },

    
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordPage,
    },

     {
      path: '/sidebar',
      name: 'sidebar',
      component: SidebarPage,
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
      path: '/proposal',
      name: 'proposal',
      component: ProposalView,
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
