import CategoryView from '@/views/CategoryView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import ThankyouView from '@/views/ThankYouView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHashHistory(),
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
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView
    }
  ]
})

export default router
