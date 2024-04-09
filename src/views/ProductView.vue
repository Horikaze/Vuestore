<script setup lang="ts">
import type { Product } from '@/types'
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { FaRegStar } from '@kalimahapps/vue-icons'
import StarRating from '@/components/sub/StarRating.vue'
const route = useRoute()
console.log(route.params.id)

const { data, isFetching, error } = useFetch(
  `https://fakestoreapi.com/products/${route.params.id}`
).json<Product>()
</script>

<template>
  <div class="flex flex-col md:flex-row justify-center w-full gap-2 md:h-[700px]">
    <div class="flex w-full flex-col items-center justify-center">
      <div class="w-full bg-gray-300 aspect-square">
        <!-- <img :src="data?.image" alt="" /> -->
      </div>
    </div>
    <div class="h-1 w-full md:w-1 md:h-full bg-gray-300 rounded-full" />
    <div class="w-full flex flex-col gap-y-1">
      <h2 class="font-semibold text-2xl leading-7 line-clamp-2">
        {{ data?.title }}
      </h2>
      <StarRating :product="data!" />
    </div>
  </div>
</template>
