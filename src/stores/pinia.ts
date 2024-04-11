import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types'
import { toast } from 'vue3-toastify'

const localStorageKeyCart = 'cart'
const localStorageKeyFav = 'fav'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>(JSON.parse(localStorage.getItem(localStorageKeyCart) || '[]'))

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
    if (!disableToast) {
      toast(`Item <strong>${newItem.title}</strong> has been added to cart`, {
        type: 'success',
        hideProgressBar: true,
        transition: 'slide',
        dangerouslyHTMLString: true,
        position: 'top-left'
      })
    }
    saveCartToLocalStorage()
  }

  function removeFromCart(item: Product) {
    const index = cart.value.findIndex((i) => i.id === item.id)
    if (index !== -1) {
      cart.value.splice(index, 1)
      saveCartToLocalStorage()
    }
  }

  function clearCart() {
    cart.value.splice(0, cart.value.length)
    saveCartToLocalStorage()
  }

  function saveCartToLocalStorage() {
    localStorage.setItem(localStorageKeyCart, JSON.stringify(cart.value))
  }

  return { cart, addToCart, removeFromCart, clearCart }
})

export const useFavStore = defineStore('fav', () => {
  const fav = ref<Product[]>(JSON.parse(localStorage.getItem(localStorageKeyFav) || '[]'))

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
    saveFavToLocalStorage()
  }

  function removeFromFav(item: Product) {
    const index = fav.value.findIndex((i) => i.id === item.id)
    if (index !== -1) {
      fav.value.splice(index, 1)
      saveFavToLocalStorage()
    }
  }

  function saveFavToLocalStorage() {
    localStorage.setItem(localStorageKeyFav, JSON.stringify(fav.value))
  }

  return { fav, addToFav, removeFromFav }
})
