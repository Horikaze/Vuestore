<script setup lang="ts">
import { useCartStore } from '@/stores/pinia'
import type { Product } from '@/types'
import { FaRegTrashCan } from '@kalimahapps/vue-icons'
import { useRouter } from 'vue-router'
defineProps<{
  product: Product
}>()
const { removeFromCart } = useCartStore()
const router = useRouter()
</script>

<template>
  <div
    @click="router.push(`/product/${product.id}`)"
    class="flex border-2 p-2 rounded-md leading-4 h-24 w-full gap-x-1 cursor-pointer"
  >
    <div class="relative w-24">
      <img :src="product.image" :alt="product.title" class="size-full object-contain" />
    </div>
    <div class="flex flex-1 flex-col font-semibold">
      <span class="line-clamp-2 text-sm">{{ product.title }}</span>
      <div class="flex justify-between items-center w-full mt-auto">
        <span class="ml-1">{{ product.price }}$</span>
        <div
          @click.stop="removeFromCart(product)"
          class="text-red-500 z-20 cursor-pointer rounded-md p-1.5 hover:bg-gray-300 transition-all"
        >
          <FaRegTrashCan class="size-5" />
        </div>
      </div>
    </div>
  </div>
</template>
