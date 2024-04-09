<script setup lang="ts">
import type { Product } from '@/types'
import { FaStarHalf, FaRegStar, FaStar } from '@kalimahapps/vue-icons'
defineProps<{ product: Product }>()
</script>
<template>
  <div class="flex items-center">
    <template v-for="n in Math.floor(product.rating.rate)" :key="`star-${n}`">
      <FaStar class="text-accent" />
    </template>
    <template v-if="product.rating.rate % 1 !== 0">
      <FaStarHalf class="text-accent" :key="'half-star'" />
    </template>
    <template v-for="n in Math.floor(5 - product.rating.rate)" :key="`empty-star-${n}`">
      <FaRegStar class="text-white" />
    </template>
    <span class="text-sm font-semibold line-clamp-1 text-black"
      >{{ product.rating.rate }}/5 ({{ product.rating.rate }} ratings)</span
    >
  </div> 
</template>
