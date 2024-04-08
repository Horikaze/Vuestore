<script setup lang="ts">
import { useCartStore } from '@/stores/pinia'
import { FaCartShopping } from '@kalimahapps/vue-icons'
import { computed, ref } from 'vue'
import { useClickOutside } from '../hooks/useClickOutside'
import CardNavItem from './CardNavItem.vue'

const { cart } = useCartStore()
const isOpen = ref(true)

const cartContainerRef = ref<HTMLElement | null>(null)

useClickOutside(cartContainerRef, () => {
  isOpen.value = false
})

const totalPrice = computed(() => {
  return cart.reduce((total, curr) => total + curr.price, 0)
})
</script>

<template>
  <div class="relative">
    <div
      @click.stop="isOpen = !isOpen"
      :class="[
        'flex items-center justify-center gap-x-2 size-full cursor-pointer font-semibold hover:bg-gray-300 transition-colors p-2 rounded-md select-none',
        isOpen ? 'bg-gray-300' : ''
      ]"
    >
      <span class="text-lg">{{ cart.length }}</span>
      <FaCartShopping class="size-6" />
    </div>
    <div
      ref="cartContainerRef"
      v-if="isOpen"
      class="absolute top-0 mt-14 bg-white min-w-[400px] border rounded-md z-20 right-0 p-2"
    >
      <h3 class="font-bold text-center text-xl">Cart</h3>
      <div class="space-y-1 mt-2 overflow-y-scroll h-[350px] [&::-webkit-scrollbar]:hidden">
        <CardNavItem v-for="(item, index) in cart" :key="index" :product="item" />
      </div>
      <p>
        Total: <span class="font-semibold">{{ totalPrice }}$</span>
      </p>
      <div
        class="h-10 flex items-center justify-center font-semibold border-2 border-accent mx-10 mt-2 rounded-md cursor-pointer hover:bg-accent transition-colors hover:text-white"
      >
        <span>Checkout</span>
      </div>
    </div>
  </div>
</template>
