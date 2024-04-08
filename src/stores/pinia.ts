import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types'
import { toast } from 'vue3-toastify'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>([])
  function addToCart(newItem: Product) {
    if (cart.value.includes(newItem)) {
      toast('You already have this product in your shopping cart.', {
        type: 'error',
        hideProgressBar: true,
        transition: 'slide',
        dangerouslyHTMLString: true,
        position: 'top-left'
      })
      return
    }
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
    console.log(cart.value)
    const index = cart.value.findIndex((i) => i.id === item.id)
    if (index !== -1) {
      cart.value.splice(index, 1)
    }
  }
  function clearCart() {
    cart.value = []
  }

  return { cart, addToCart, removeFromCart, clearCart }
})
