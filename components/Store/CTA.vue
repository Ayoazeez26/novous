<script setup lang="ts"></script>
<template>
  <div
    class="blur-bg bg-[#1C3050]/50 bg-bridging-bg bg-contain bg-no-repeat bg-center bg-blend-multiply rounded-lg flex flex-col items-center mb-[60px] mx-auto mt-[90px] lg:mb-[120px] w-full max-w-[1240px]"
  >
    <div
      class="flex items-center flex-col py-[73px] px-10 lg:px-24 justify-between w-full"
    >
      <div class="flex items-center text-whiter mb-6">
        <p>Sale up to</p>
        <div
          class=" bg-blue-4 text-base rounded-md px-[17px] py-[5.76px] max-w-fit ml-3"
        >
          95% off
        </div>
      </div>
      <h2
        class="font-bold leading-[48px] lg:leading-[54px] px-6 md:px-0 tracking-[-1.5px] text-[32px] text-center text-whiter w-full capitalize lg:max-w-[448px]"
      >
        explore our latest publications on social care excellence!
      </h2>
      <div class="mt-[35px] max-w-full w-[367px]">
        <nuxt-link
          class="bg-blue-4 flex h-[76px] items-center justify-center w-full px-10"
          to="/store/id"
        >
          <img class="mr-3" src="/svg/shop.svg" alt="shop icon" />
          <span class="text-white">SHOP NOW</span>
        </nuxt-link>
      </div>
      >
    </div>
  </div>
</template>

<style scoped>
.blur-bg {
  background-color: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
}
</style>
