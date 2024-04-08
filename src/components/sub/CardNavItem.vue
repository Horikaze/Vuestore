<script setup lang="ts">
import { useCartStore } from '@/stores/pinia'
import type { Product } from '@/types'
defineProps<{
  product: Product
}>()
const { removeFromCart } = useCartStore()
</script>

<template>
  <div class="flex border-2 p-2 rounded-md leading-4 text-sm h-24 w-full gap-x-1">
    <div class="relative w-24">
      <img :src="product.image" :alt="product.title" class="size-full object-contain" />
    </div>
    <div class="flex flex-1 flex-col font-semibold">
      <span class="line-clamp-2">{{ product.title }}</span>
      <div class="flex justify-between items-center w-full mt-auto">
        <span class="ml-1">{{ product.price }}$</span>
        <div
          @click="removeFromCart(product)"
          class="text-red-500 cursor-pointer border-2 rounded-md border-red-500 px-1 py-0.5 hover:bg-red-500 transition-all hover:text-white"
        >
          Remove
        </div>
      </div>
    </div>
  </div>
</template>
