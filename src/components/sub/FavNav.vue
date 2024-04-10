<script setup lang="ts">
import { useFavStore } from '@/stores/pinia'
import { FaHeart, FaHeartCrack } from '@kalimahapps/vue-icons'
import { ref } from 'vue'
import { useClickOutside } from '../hooks/useClickOutside'
import CardFav from './CardFav.vue'
const { fav } = useFavStore()
const isOpen = ref(false)

const cartContainerRef = ref<HTMLElement | null>(null)

useClickOutside(cartContainerRef, () => {
    isOpen.value = false
})

</script>

<template>
    <div class="relative h-full border-y-4 border-white">
        <div @click.stop="isOpen = !isOpen" :class="[
            'flex items-center justify-center gap-x-1 size-full cursor-pointer font-semibold hover:bg-gray-300 transition-colors h-full rounded-md select-none px-2',
            isOpen ? 'bg-gray-300' : ''
        ]">
            <p class="text-lg">Favorites</p>
            <div class="size-6 relative flex items-center justify-center">
                <FaHeart class="size-full text-red-500" />
                <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-sm">{{
                    fav.length
                    }}</span>

            </div>
        </div>
        <div ref="cartContainerRef" v-if="isOpen"
            class="absolute top-0 mt-14 bg-white min-w-[400px] border rounded-md z-20 right-0 p-2">
            <h3 class="font-bold text-center text-xl">Favorites</h3>
            <div v-if="fav.length > 0" class="space-y-1 mt-2 overflow-y-scroll h-[350px] [&::-webkit-scrollbar]:hidden">
                <CardFav v-for="(item, index) in fav" :key="index" :product="item" />
            </div>
            <div v-else class="size-full gap-y-1 flex flex-col items-center justify-center h-[350px]">
                <span class="font-semibold text-2xl text-center">You don't have any favorite products.</span>
                <FaHeartCrack class="size-8" />
            </div>
        </div>
    </div>
</template>
