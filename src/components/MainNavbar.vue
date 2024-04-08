<script setup lang="ts">
import CartNav from './sub/CartNav.vue'
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
    <nav class="flex items-center justify-end h-full max-w-[1400px] mx-auto px-2 gap-x-3">
      <RouterLink
        v-for="(item, index) in categories"
        class="cursor-pointer hover:bg-gray-300 h-full px-2 border-b-4 border-t-4 border-white flex flex-col justify-center transition-all"
        active-class="border-b-[#119e00]"
        :key="index"
        :to="item.href"
        ><span>{{ item.title }}</span></RouterLink
      >
      <CartNav />
    </nav>
  </header>
</template>
