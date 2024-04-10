<script setup lang="ts">
import LoadingCard from './LoadingCard.vue';


const myArray = [1, 2, 3, 4, 5]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
    <LoadingCard v-for="item in myArray" :key="item" />
  </div>
</template>
