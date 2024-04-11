<script setup lang="ts">
import CardNavItem from '@/components/sub/CardItem.vue'
import { useCartStore } from '@/stores/pinia'
import { FaRegFaceSadTear, FaSpinner, FaCheck } from '@kalimahapps/vue-icons'
import router from '@/router'
import { computed, ref } from 'vue'
import { toast } from 'vue3-toastify'
const { cart, clearCart } = useCartStore()
const buttonText = ref('Complete payment')
const inputs = [
  'Name',
  'Street and number of house / flat',
  'Postcode',
  'City',
  'Phone number',
  'E-mail'
]

const completePayment = async () => {
  if (cart.length <= 0) {
    toast('Your cart is empty.', {
      type: 'error',
      hideProgressBar: true,
      transition: 'slide',
      dangerouslyHTMLString: true,
      position: 'top-left'
    })
    return
  }
  buttonText.value = 'Payment processing…'
  await new Promise((resolve) => setTimeout(resolve, 4000))
  buttonText.value = 'Success!'
  await new Promise((resolve) => setTimeout(resolve, 1000))
  clearCart()
  router.push('/thankyou')
}

const totalPrice = computed(() => {
  return cart.reduce((total, curr) => total + curr.price, 0)
})
</script>

<template>
  <div class="flex items-center flex-col md:flex-row justify-center w-full gap-2 md:h-[700px]">
    <div class="flex flex-col size-full gap-y-2">
      <h2 class="font-bold text-center text-2xl">Products</h2>
      <div v-if="cart.length > 0"
        class="space-y-1 overflow-y-scroll md:h-full h-[400px] [&::-webkit-scrollbar]:hidden border-y-2 shadow-inner rounded-md p-2">
        <CardNavItem v-for="(item, index) in cart" :key="index" :product="item" />
      </div>
      <div v-else class="size-full gap-y-1 flex flex-col items-center justify-center w-full p-2 min-h-[300px]">
        <span class="font-semibold text-2xl">Your cart is empty</span>
        <FaRegFaceSadTear class="size-8" />
      </div>
    </div>
    <div class="h-[1px] w-full md:w-[1px] md:h-full bg-gray-300 rounded-full" />

    <div class="flex flex-col size-full gap-y-2">
      <h2 class="font-bold text-center text-2xl">Delivery and payment</h2>
      <div class="flex flex-col border-2 rounded-md p-2 gap-y-2 h-full">
        <div v-for="(item, index) in inputs" :key="index" class="flex flex-col gap-y-0.5">
          <p class="font-semibold">{{ item }}</p>
          <input :placeholder="item" type="text"
            class="focus:outline-none border-2 border-gray-400 px-2 py-1 rounded-md" />
        </div>
        <div class="w-full h-1 bg-gray-300 rounded-full" />
        <div class="flex flex-col gap-y-2">
          <div class="flex w-full flex-col gap-y-0.5">
            <p class="font-semibold">Card number</p>
            <input placeholder="Card number" type="text"
              class="focus:outline-none border-2 border-gray-400 px-2 py-1 rounded-sm" />
          </div>
          <div class="flex justify-between items-center flex-col md:flex-row gap-x-2">
            <div class="w-full">
              <p class="font-semibold">Card expiry date</p>
              <input placeholder="Card expiry date" type="date"
                class="focus:outline-none border-2 border-gray-400 px-2 py-1 rounded-sm w-full" />
            </div>
            <div class="w-full">
              <p class="font-semibold">CVC2 Code</p>
              <input placeholder="CVC2" type="text"
                class="focus:outline-none border-2 border-gray-400 px-2 py-1 rounded-sm w-full" />
            </div>
          </div>
        </div>
        <p class="ml-auto">
          Total: <span class="font-semibold"> {{ totalPrice.toFixed(2) }}$</span>
        </p>

        <div @click="completePayment"
          class="h-10 flex items-center gap-x-1 justify-center font-semibold border-2 border-accent mx-10 mt-auto rounded-md cursor-pointer hover:bg-accent transition-colors hover:text-white">
          <FaSpinner v-if="buttonText == 'Payment processing…'" class="animate-spin" />
          <FaCheck v-if="buttonText == 'Success!'" class="text-accent" />
          <span>{{ buttonText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
