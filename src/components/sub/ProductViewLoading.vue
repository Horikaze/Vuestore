<script setup lang="ts">
import { FaCartPlus, FaCartShopping } from "@kalimahapps/vue-icons";

</script>

<template>
    <div class="flex flex-col md:flex-row justify-center w-full gap-2 md:h-[600px]">
        <div class="flex w-full flex-col items-center justify-center bg-gray-300 animate-pulse rounded-md min-h-[300px]">
        </div>
        <div class="h-[1px] w-full md:w-[1px] md:h-full bg-gray-300 rounded-full" />
        <div class="w-full flex flex-col min-h-[500px]">
            <div class=" w-full h-7 bg-gray-300 animate-pulse rounded-md"></div>
            <div class=" w-64 h-7 bg-gray-300 animate-pulse rounded-md mt-1"></div>
            <div class="w-48 h-5 bg-gray-300 animate-pulse rounded-md mt-2" />
            <div class="w-full h-5 bg-gray-300 animate-pulse rounded-md mt-2"></div>
            <div v-for="i in 5" :key="i" class="w-full h-5 bg-gray-300 animate-pulse rounded-md mt-1"></div>
            <div class="w-32 h-5 bg-gray-300 animate-pulse rounded-md mt-1"></div>
            <div class="flex w-full gap-x-3 px-2 mt-auto">
                <div
                    class="h-10 flex w-full items-center gap-x-1 justify-center font-semibold border-2 border-accent rounded-md cursor-pointer hover:bg-accent transition-colors hover:text-white">
                    <FaCartPlus />
                    <span>Add to cart</span>
                </div>
                <div
                    class="h-10 flex w-full items-center gap-x-1 justify-center font-semibold border-2 border-accent rounded-md cursor-pointer hover:bg-accent transition-colors hover:text-white">
                    <FaCartShopping />
                    <span>Buy Now</span>
                </div>
            </div>
        </div>
    </div>
</template>