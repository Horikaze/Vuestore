<script setup lang="ts">
import CartNav from './sub/CartNav.vue'
import FavNav from './sub/FavNav.vue';
const categories = [
  {
    title: 'All products',
    href: '/'
  },
  {
    title: 'Electronics',
    href: '/category/electronics'
  },
  {
    title: 'Jewelery',
    href: '/category/jewelery'
  },
  {
    title: "Men's clothing",
    href: "/category/men's clothing"
  },
  {
    title: "Women's clothing",
    href: "/category/women's clothing"
  }
]
</script>

<template>
  <header class="w-full h-14 drop-shadow-md bg-white fixed top-0 z-20">
    <nav class="flex items-center justify-between h-full max-w-[1400px] mx-auto px-2">
      <RouterLink to="/" class="flex items-center h-full">
        <span
          class="bg-gradient-to-r from-accent to-pink-500 bg-clip-text text-transparent font-bold text-3xl">SimpleShop</span>
      </RouterLink>
      <div class="gap-x-3 flex items-center justify-center h-full">
        <RouterLink v-for="(item, index) in categories"
          class="cursor-pointer hover:bg-gray-300 h-full px-2 rounded-t-md border-b-4 border-t-4 border-white flex flex-col justify-center transition-all"
          active-class="border-b-accent" :key="index" :to="item.href"><span>{{ item.title }}</span></RouterLink>
        <FavNav />
        <CartNav />
      </div>
    </nav>
  </header>
</template>
http://localhost:5173/