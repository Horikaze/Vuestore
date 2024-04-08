<script setup lang="ts">
import { useCartStore } from '@/stores/counter'
import { FaCartShopping } from '@kalimahapps/vue-icons'
import { ref, onMounted, onUnmounted } from 'vue'
import { useClickOutside } from '../hooks/useClickOutside'

const { cart } = useCartStore()
const isOpen = ref(false)

const cartContainerRef = ref<HTMLElement | null>(null)

useClickOutside(cartContainerRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div
    class="font-semibold text-lg hover:bg-gray-300 transition-colors p-2 rounded-md cursor-pointer relative"
  >
    <div @click.stop="isOpen = !isOpen" class="flex items-center justify-center gap-x-2">
      <span>{{ cart.length }}</span>
      <FaCartShopping class="size-6" />
    </div>
    <div
      ref="cartContainerRef"
      v-if="isOpen"
      class="absolute top-0 mt-14 bg-white min-w-[400px] border rounded-md z-20 right-0 flex flex-col p-2"
    >
      <h3 class="font-bold text-center">Cart</h3>
      <div></div>
    </div>
  </div>
</template>
