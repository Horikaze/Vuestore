<script setup lang="ts">
import StarRating from '@/components/sub/StarRating.vue'
import type { Product } from '@/types'
import { useFetch } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'
import { FaCartPlus, FaCartShopping, FaHeart, FaRegHeart } from "@kalimahapps/vue-icons";

import { useCartStore, useFavStore } from '@/stores/pinia';
const route = useRoute()
const router = useRouter()
const { addToCart, cart } = useCartStore()
const { addToFav, fav } = useFavStore()
import { FaCheck } from "@kalimahapps/vue-icons";
import ProductViewLoading from '@/components/sub/ProductViewLoading.vue';
const { data: product, isFetching, error } = useFetch(
  `https://fakestoreapi.com/products/${route.params.id}`
).json<Product>()

const buyNow = () => {
  if (cart.find(i => i.id === product.value!.id)) {
    router.push("/checkout")
    return
  }

  addToCart(product.value!, true)
  router.push("/checkout")
}
</script>

<template>
  <ProductViewLoading v-if="isFetching" />
  <div v-else class="flex flex-col md:flex-row justify-center w-full gap-2 md:h-[600px]">
    <div class="flex w-full flex-col items-center justify-center relative">
      <div @click.stop="addToFav(product!)"
        class="rounded-full absolute right-1 top-1 text-red-500 flex items-center justify-center cursor-pointer hover:bg-gray-200 bg-white size-10 transition-all">
        <FaHeart v-if="fav.find((ele) => ele.id === product!.id)" class="size-6" />
        <FaRegHeart v-else class="size-6" />
      </div>
      <img :src="product?.image" :alt="product?.title" class="size-full object-contain select-none" />
    </div>
    <div class="h-[1px] w-full md:w-[1px] md:h-full bg-gray-300 rounded-full" />
    <div class="w-full flex flex-col min-h-[500px]">
      <h2 class="font-semibold text-2xl leading-7 line-clamp-3">
        {{ product?.title }}
      </h2>
      <StarRating :product="product!" class="mt-2" />
      <p class="mt-2">{{ product?.description }}</p>
      <div class="flex w-full gap-x-3 px-2 mt-auto">
        <div @click="addToCart(product!)"
          class="h-10 flex w-full items-center gap-x-1 justify-center font-semibold border-2 border-accent rounded-md cursor-pointer hover:bg-accent transition-colors hover:text-white">

          <FaCheck v-if="cart.find(i => i.id === product!.id)" />
          <FaCartPlus v-else />
          <span>Add to cart</span>
        </div>
        <div @click="buyNow"
          class="h-10 flex w-full items-center gap-x-1 justify-center font-semibold border-2 border-accent rounded-md cursor-pointer hover:bg-accent transition-colors hover:text-white">
          <FaCartShopping />
          <span>Buy Now</span>
        </div>
      </div>
    </div>
  </div>
</template>