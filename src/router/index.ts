import CategoryView from '@/views/CategoryView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import HomeView from '@/views/HomeView.vue'
import ThankyouView from '@/views/ThankYouView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:category',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/thankyou',
      name: 'thankyou',
      component: ThankyouView
    }
  ]
})

export default router
