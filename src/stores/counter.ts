import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types'
import { toast } from 'vue3-toastify'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>([])
  function addToCart(newItem: Product) {
    if (cart.value.includes(newItem)) return
    cart.value.push(newItem)
    toast(`Item <strong>${newItem.title}</strong> has been added to cart`, {
      type: 'success',
      hideProgressBar: true,
      transition: 'slide',
      dangerouslyHTMLString: true,
      position: 'top-left'
    })
  }
  function removeFromCart(item: Product) {
    cart.value.filter((i) => i != item)
  }
  function clearCart() {
    cart.value = []
  }

  return { cart, addToCart, removeFromCart, clearCart }
})
