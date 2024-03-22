<template>
  <section>
    <form @submit.prevent="pay()">
      <div class="border border-gray-500 p-2 rounded-sm" id="card-element" />

      <p
        id="card-error"
        role="alert"
        class="text-red-700 text-center font-semibold"
      ></p>

      <button
        :disabled="isProcessing"
        type="submit"
        class="mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
        :class="isProcessing ? 'opacity-70' : 'opacity-100'"
        id="processing"
        aria-label="loading"
      >
        <Icon v-if="isProcessing" name="eos-icons:loading" />
        <div v-else>Place order</div>
      </button>
    </form>
  </section>
</template>

<script setup>
import { useDataStore } from "~/stores/data";

const dataStore = useDataStore();
const route = useRoute();

console.log(dataStore.singleProduct);

const imageURL = dataStore.singleProduct.productImages[0].Location;
const title = dataStore.singleProduct.productName;
const price = dataStore.singleProduct.currentPrice;

import { StripeCheckout } from "@vue-stripe/vue-stripe";
</script>

<style></style>
