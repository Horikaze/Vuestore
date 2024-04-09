<script setup lang="ts">
import { useCartStore, useFavStore } from '@/stores/pinia'
import type { Product } from '@/types'
import { FaRegHeart } from '@kalimahapps/vue-icons'
import { FaHeart } from '@kalimahapps/vue-icons'
import { FaCartPlus } from '@kalimahapps/vue-icons'
import { useRouter } from 'vue-router'
import StarRating from './StarRating.vue'
defineProps<{
  product: Product
}>()
const router = useRouter()
const { addToCart } = useCartStore()
const { addToFav, fav } = useFavStore()
</script>
<template>
  <div @click="router.push(`/product/${product.id}`)"
    class="w-full h-[420px] flex flex-col items-center justify-center bg-white p-3 border-2 rounded-md hover:drop-shadow-md transition-all cursor-pointer group font-semibold">
    <div class="flex w-full text-red-500 items-center justify-between">
      <StarRating :product="product" />
      <div @click.stop="addToFav(product)"
        class="rounded-full flex items-center justify-center hover:bg-gray-200 bg-white size-10 transition-all">
        <FaHeart v-if="fav.find((ele) => ele.id === product.id)" class="size-6" />
        <FaRegHeart v-else class="size-6" />
      </div>
    </div>
    <RouterLink :to="`/product/${product.id}`" class="w-full h-56 rounded-md relative overflow-hidden select-none">
      <img :src="product.image" :alt="product.title" class="object-contain size-full" />
    </RouterLink>
    <RouterLink :to="`/product/${product.id}`" class="grow flex items-end w-full leading-5"><span>{{ product.title
        }}</span></RouterLink>
    <div class="mt-4 text-xl w-full flex items-center justify-between">
      <span>{{ product.price }} $</span>
      <div @click.stop="addToCart(product)"
        class="text-accent w-14 border border-white group-hover:border-accent hover:bg-accent hover:text-white flex items-center justify-center rounded-lg bg-white size-10 transition-all opacity-0 group-hover:opacity-100">
        <FaCartPlus class="size-6" />
      </div>
    </div>
  </div>
</template>
