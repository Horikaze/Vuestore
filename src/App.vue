<script setup lang="ts">
import MainNavbar from './components/MainNavbar.vue'
import { FaHeart, FaBandsVuejs, FaBandsGithub } from "@kalimahapps/vue-icons";
</script>

<template>
  <MainNavbar />
  <main class="max-w-[1400px] mx-auto px-2 mt-20 mb-5 min-h-screen">
    <RouterView />
  </main>
  <footer class="flex flex-col gap-y-2 w-full items-center justify-center font-semibold mb-5 border-t-2 pt-5">
    <div class="flex items-center justify-center gap-x-1">
      <FaBandsGithub class="size-6" /> <a href="https://github.com/Horikaze/Vuestore" class="underline"
        target="_blank">https://github.com/Horikaze/Vuestore</a>
    </div>
    <div class="flex items-center">Made with
      <FaHeart class="text-red-500 mx-1 size-5" />by<a href="https://github.com/Horikaze" target="_blank"
        class="underline ml-1">Horikaze</a>
    </div>
    <div class="flex items-center justify-center">Using
      <FaBandsVuejs class="size-8" />
    </div>
  </footer>
</template>
