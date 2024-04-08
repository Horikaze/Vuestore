<script setup lang="ts">
import type { Product } from '@/types'
import LoadingState from '@/components/LoadingState.vue'
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import ProductCard from '@/components/sub/ProductCard.vue'

const route = useRoute()
const url = computed(() => `https://fakestoreapi.com/products/category/${route.params.category}`)
const { isFetching, error, data } = useFetch(url, { refetch: true }).json<Product[]>()
</script>

<template>
  <LoadingState v-if="isFetching" />
  <p v-else-if="error">{{ error.message }}</p>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
    <ProductCard v-for="(product, index) in data" :key="index" :product="product" />
  </div>
</template>
