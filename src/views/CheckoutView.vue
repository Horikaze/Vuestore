<script setup lang="ts">
import CardNavItem from '@/components/sub/CardItem.vue'
import { useCartStore } from '@/stores/pinia'
import { toast } from 'vue3-toastify'
import { FaRegFaceSadTear } from '@kalimahapps/vue-icons'
const { cart } = useCartStore()

const inputs = [
  'Name',
  'Street and number of house / flat',
  'Postcode',
  'City',
  'Phone number',
  'E-mail'
]

const completePayment = async () => {
  const promi = new Promise((resolve) => setTimeout(resolve, 3000))
  await toast.promise(
    promi,
    {
      pending: 'Payment processing…',
      success: 'Success'
    },
    {
      position: 'top-center'
    }
  )
}
</script>

<template>
  <div class="flex items-center flex-col md:flex-row justify-center w-full gap-2 md:h-[700px]">
    <div class="flex flex-col size-full gap-y-2">
      <h2 class="font-bold text-center text-2xl">Products</h2>
      <div
        v-if="cart.length > 0"
        class="space-y-1 overflow-y-scroll md:h-full h-[400px] [&::-webkit-scrollbar]:hidden border-y-2 shadow-inner rounded-md p-2"
      >
        <CardNavItem v-for="(item, index) in cart" :key="index" :product="item" />
      </div>
      <div v-else class="size-full gap-y-1 flex flex-col items-center justify-center w-full p-2">
        <span class="font-semibold text-2xl">Your cart is empty</span>
        <FaRegFaceSadTear class="size-8" />
      </div>
    </div>
    <div class="h-1 w-full md:w-1 md:h-full bg-gray-300 rounded-full" />

    <div class="flex flex-col size-full gap-y-2">
      <h2 class="font-bold text-center text-2xl">Delivery and payment</h2>
      <div class="flex flex-col border-2 rounded-md p-2 gap-y-2 h-full">
        <div v-for="(item, index) in inputs" :key="index" class="flex flex-col gap-y-0.5">
          <p class="font-semibold">{{ item }}</p>
          <input
            :placeholder="item"
            type="text"
            class="focus:outline-none border-2 border-gray-400 px-2 py-1 rounded-md"
          />
        </div>
        <div class="w-full h-1 bg-gray-300 rounded-full" />
        <div class="flex flex-col gap-y-2">
          <div class="flex w-full flex-col gap-y-0.5">
            <p class="font-semibold">Card number</p>
            <input
              placeholder="Card number"
              type="text"
              class="focus:outline-none border-2 border-gray-400 px-2 py-1 rounded-sm"
            />
          </div>
          <div class="flex justify-between items-center">
            <div>
              <p class="font-semibold">Card expiry date</p>
              <input
                placeholder="Card expiry date"
                type="date"
                class="focus:outline-none border-2 border-gray-400 px-2 py-1 rounded-sm"
              />
            </div>
            <div>
              <p class="font-semibold">CVC2 Code</p>
              <input
                placeholder="CVC2"
                type="text"
                class="focus:outline-none border-2 border-gray-400 px-2 py-1 rounded-sm"
              />
            </div>
          </div>
        </div>
        <div
          @click="completePayment"
          class="h-10 flex items-center justify-center font-semibold border-2 border-accent mx-10 mt-auto rounded-md cursor-pointer hover:bg-accent transition-colors hover:text-white"
        >
          <span>Complete payment</span>
        </div>
      </div>
    </div>
  </div>
</template>
