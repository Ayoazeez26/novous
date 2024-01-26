<script setup lang="ts"></script>
<template>
  <div
    class="shadow bg-blue-11 flex items-center rounded-lg justify-between flex-wrap mb-[48px] p-10 lg:my-[120px] mx-auto w-full max-w-[1240px]"
  >
    <div class="flex gap-4 items-center">
      <div class="bg-blue-9 p-1 rounded">
        <img src="/svg/support.svg" alt="support icon">
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-grey-10 font-bold leading-[120%]">Customer Support 24/7</p>
        <p class="text-grey-11 text-sm leading-[150%]">Instant access to Support</p>
      </div>
    </div>
    <div class="flex gap-4 items-center">
      <div class="bg-blue-9 p-1 rounded">
        <img src="/svg/secure.svg" alt="secure icon">
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-grey-10 font-bold leading-[120%]">100% Secure Payment</p>
        <p class="text-grey-11 text-sm leading-[150%]">We ensure your money is safe</p>
      </div>
    </div>
    <div class="flex gap-4 items-center">
      <div class="bg-blue-9 p-1 rounded">
        <img src="/svg/money.svg" alt="money icon">
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-grey-10 font-bold leading-[120%]">Money-Back Guarantee</p>
        <p class="text-grey-11 text-sm leading-[150%]">30Days Money-Back Guarantee</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow {
  box-shadow: 0px 8px 40px 0px rgba(0, 38, 3, 0.08);
}
</style>
