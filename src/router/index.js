import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

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
      component: () => import('@/views/CourseDetail.vue'),
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: () => import('@/views/Challenge.vue'),
    },
    {
      path: '/order',
      name: 'courseOrder',
      component: () => import('@/views/Order.vue'),
    },
    {
      path: '/communicate',
      name: 'communicate',
      component: () => import('@/views/Communicate.vue'),
    },
    {
      path: '/policyUserService',
      name: 'policyUserService',
      component: () => import('@/views/PolicyUserService.vue'),
    },
    {
      path: '/policyUserPrivate',
      name: 'policyUserPrivate',
      component: () => import('@/views/PolicyUserPrivate.vue'),
    },
    {
      path: '/vip',
      name: 'vip',
      component: () => import('@/views/VipView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/PersonCenter',
      name: 'PersonCenter',
      component: () => import('@/views/PersonCenter.vue'),
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('@/views/ContactUs.vue'),
    },
    {
      path: '/teacher/detail',
      name: 'teacherDetail',
      component: () => import('@/views/TeacherDetail.vue'),
    },
    {
      path: '/recruitTeacher',
      name: 'recruitTeacher',
      component: () => import('@/views/RecruitTeacher.vue')
    },
    {
      path: '/course/play',
      name: 'coursePlay',
      component: () => import('@/views/PlayCourse.vue')
    }
  ],
});

export default router;
