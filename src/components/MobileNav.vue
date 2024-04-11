<script setup lang="ts">
import { ref } from 'vue';
import CartNav from './sub/CartNav.vue'
import FavNav from './sub/FavNav.vue';
import { CgMenu } from "@kalimahapps/vue-icons";
import { useClickOutside } from '../hooks/useClickOutside';
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
const isOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)
useClickOutside(navRef, () => {
    isOpen.value = false
})
</script>

<template>
    <header class="w-full h-14 drop-shadow-md bg-white fixed top-0 z-20 font-semibold text-lg">
        <nav class="flex items-center justify-between h-full max-w-[1400px] mx-auto px-2 relative">
            <CgMenu @click.stop="isOpen = !isOpen"
                class="size-10 hover:bg-gray-300 transition-colors rounded-md cursor-pointer" />
            <div class="gap-x-3 flex items-center justify-center h-full">
                <FavNav />
                <CartNav />
            </div>
            <div v-if="isOpen"
                class="absolute top-[60px] w-[calc(100vw-16px)] bg-white drop-shadow-md transition-all z-30 rounded-md p-2 space-y-2"
                ref="navRef">
                <RouterLink v-for="(item, index) in categories" @click="isOpen = false"
                    class="cursor-pointer hover:bg-gray-300 text-center h-16 flex flex-col justify-center transition-all rounded-md px-2"
                    active-class="bg-gray-300" :key="index" :to="item.href"><span>{{ item.title }}</span>
                </RouterLink>
            </div>
        </nav>
    </header>
</template>
