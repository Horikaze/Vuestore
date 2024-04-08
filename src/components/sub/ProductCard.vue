<script setup lang="ts">
import { useCartStore, useFavStore } from '@/stores/pinia'
import type { Product } from '@/types'
import { FaRegHeart } from '@kalimahapps/vue-icons'
import { FaHeart } from '@kalimahapps/vue-icons'
import { FaCartPlus } from '@kalimahapps/vue-icons'
defineProps<{
  product: Product
}>()
const { addToCart } = useCartStore()
const { addToFav, fav } = useFavStore()
</script>
<template>
  <div
    class="w-full h-[420px] flex flex-col items-center justify-center bg-white p-3 border-2 rounded-md hover:drop-shadow-md transition-all cursor-pointer group font-semibold"
  >
    <div
      @click="addToFav(product)"
      class="ml-auto flex text-red-500 items-center justify-center rounded-full hover:bg-gray-200 bg-white size-10 transition-all opacity-0 group-hover:opacity-100"
    >
      <FaHeart v-if="fav.includes(product)" class="size-6" />
      <FaRegHeart v-else class="size-6" />
    </div>
    <div class="w-full h-56 rounded-md relative overflow-hidden select-none">
      <img :src="product.image" :alt="product.title" class="object-contain size-full" />
    </div>
    <p class="mt-auto w-full leading-5">{{ product.title }}</p>
    <div class="mt-4 text-xl w-full flex items-center justify-between">
      <span>{{ product.price }} $</span>
      <div
        @click="addToCart(product)"
        class="text-accent border border-white group-hover:border-accent hover:bg-accent hover:text-white flex items-center justify-center rounded-lg bg-white size-10 transition-all opacity-0 group-hover:opacity-100"
      >
        <FaCartPlus class="size-6" />
      </div>
    </div>
  </div>
</template>
