import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types'
import { toast } from 'vue3-toastify'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>([])
  function addToCart(newItem: Product, disableToast?: boolean) {
    if (cart.value.find((ele) => ele.id === newItem.id)) {
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
    if (disableToast) return
    toast(`Item <strong>${newItem.title}</strong> has been added to cart`, {
      type: 'success',
      hideProgressBar: true,
      transition: 'slide',
      dangerouslyHTMLString: true,
      position: 'top-left'
    })
  }
  function removeFromCart(item: Product) {
    const index = cart.value.findIndex((i) => i.id === item.id)
    if (index !== -1) {
      cart.value.splice(index, 1)
    }
  }
  function clearCart() {
    cart.value.splice(0, cart.value.length)
  }

  return { cart, addToCart, removeFromCart, clearCart }
})

export const useFavStore = defineStore('fav', () => {
  const fav = ref<Product[]>([])
  function addToFav(newItem: Product) {
    if (fav.value.find((ele) => ele.id === newItem.id)) {
      removeFromFav(newItem)
      return
    }
    fav.value.push(newItem)
    toast(`Item <strong>${newItem.title}</strong> has been added to favorites`, {
      type: 'success',
      hideProgressBar: true,
      transition: 'slide',
      dangerouslyHTMLString: true,
      position: 'top-left'
    })
  }
  function removeFromFav(item: Product) {
    console.log(fav.value)
    const index = fav.value.findIndex((i) => i.id === item.id)
    if (index !== -1) {
      fav.value.splice(index, 1)
    }
  }

  return { fav, addToFav, removeFromFav }
})
