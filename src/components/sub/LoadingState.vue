<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
    <div v-for="i in 5" :key="i" class="w-full h-[420px] flex flex-col justify-center bg-white p-3 border-2 rounded-md">
      <div class="h-[40px]  py-[10px]">
        <div class="bg-gray-300 w-48 h-full animate-pulse rounded-md"></div>
      </div>
      <div class="w-full h-56 bg-gray-300 rounded-md"></div>
      <div class="mt-auto w-full h-5 bg-gray-300 rounded-md"></div>
      <div class="mt-2 w-2/3 self-start h-5 bg-gray-300 rounded-md"></div>
      <div class="mt-4 text-xl w-full flex items-center h-[40px]">
        <div class="bg-gray-300 rounded-md h-8 w-20"></div>
      </div>
    </div>

  </div>
</template>
