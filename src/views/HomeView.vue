<script setup lang="ts">
import LoadingState from '@/components/loadingSates/LoadingState.vue';
import ProductCard from '@/components/sub/ProductCard.vue';
import type { Product } from '@/types';
import { useFetch } from '@vueuse/core';
const { isFetching, error, data } = useFetch('https://fakestoreapi.com/products').json<Product[]>()
</script>

<template>
  <LoadingState v-if="isFetching" />
  <p v-else-if="error">{{ error.message }}</p>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
    <ProductCard v-for="(product, index) in data" :key="index" :product="product" />
  </div>
</template>
