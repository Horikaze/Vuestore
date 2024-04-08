<script setup lang="ts">
import { FaRegFaceSmileBeam } from '@kalimahapps/vue-icons'
</script>
<template>
  <div class="flex flex-col items-center justify-center mt-52 gap-y-4">
    <h2 class="text-3xl font-semibold">Thank you for your purchase.</h2>
    <FaRegFaceSmileBeam class="size-12" />
    <p>We have sent confirmation to your email address.</p>
    <RouterLink to="/" class="underline">Return to home page</RouterLink>
  </div>
</template>
