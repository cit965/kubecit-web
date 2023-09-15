import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('@/views/CourseView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
    },
    {
      path: '/course/detail',
      name: 'courseDetail',
      component: () => import('@/views/CourseDetail.vue')
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: () => import('@/views/Challenge.vue')
    }
    ,
    {
      path: '/communicate',
      name: 'communicate',
      component: () => import('@/views/Communicate.vue')
    },
    {
      path: '/policyUserService',
      name: 'policyUserService',
      component: () => import('@/views/PolicyUserService.vue')
    },
    {
      path: '/policyUserPrivate',
      name: 'policyUserPrivate',
      component: () => import('@/views/PolicyUserPrivate.vue')
    }
  ]
})

export default router
