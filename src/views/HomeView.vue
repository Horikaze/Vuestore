<script setup lang="ts">
import LoadingState from '@/components/LoadingState.vue'
import { useFetch } from '@vueuse/core'
import ProductCard from '@/components/ProductCard.vue'
const { isFetching, error, data } = useFetch('https://api.escuelajs.co/api/v1/products?limit=12')
</script>

<template>
  <div class="flex justify-center flex-wrap gap-10">
    <LoadingState v-if="isFetching" />
    <p v-else-if="error">{{ error.message }}</p>
    <ProductCard
      v-else
      v-for="(product, index) in JSON.parse(data as string)"
      :key="index"
      :product="product"
    />
  </div>
</template>
