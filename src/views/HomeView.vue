<script setup lang="ts">
import LoadingState from '@/components/LoadingState.vue'
import { useFetch } from '@vueuse/core'

const { isFetching, error, data } = useFetch('https://fakestoreapi.com/products')
</script>

<template>
  <div>
    <LoadingState />
  </div>
</template>
