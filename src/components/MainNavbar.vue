<script setup lang="ts">
const categories = [
  {
    title: 'All products',
    href: '/'
  },
  {
    title: 'All products',
    href: '/'
  },
  {
    title: 'All products',
    href: '/'
  }
]
</script>

<template>
  <header class="w-full h-14 drop-shadow-md bg-white fixed top-0 z-20">
    <nav class="flex items-center justify-end h-full max-w-[1000px] mx-auto px-2">
      <RouterLink to="/">Go to Home</RouterLink>
    </nav>
  </header>
</template>
