<script setup lang="ts">
import MainNavbar from './components/MainNavbar.vue'
</script>

<template>
  <MainNavbar />
  <main class="max-w-[1400px] mx-auto px-2 mt-20">
    <RouterView />
  </main>
</template>
