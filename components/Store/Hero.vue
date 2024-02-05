<script setup lang="ts"></script>
<template>
  <div class="bg-blue-7 py-20 md:py-28 w-full">
    <div
      class="w-full max-w-[1240px] flex h-full items-center pt-[140px] px-4 md:px-6 xl:px-0 mx-auto"
    >
      <div
        class="bg-blue-8/20 px-[38px] pt-[99px] pb-[94px] relative text-whiter w-[410px] h-[507px]"
      >
        <img class="absolute top-0 right-0" src="/svg/fold.svg" alt="folded" />
        <p class="text-xl">
          Sale up to
          <span
            class="bg-blue-9 text-base text-blue-10 rounded-md px-[17px] py-[5.76px] ml-3"
            >95% off</span
          >
        </p>
        <h1 class="leading-[45px] mt-6 mb-[33px] text-4xl text-white">Explore Our Latest Books on Social Care Excellence!</h1>
        <nuxt-link to="" class="bg-whiter text-blue-4 text-xl font-bold rounded w-full flex h-[76px] items-center justify-center">
          Shop Now
          <Icon class="ml-1" name="mdi:arrow-right" size="24" />
        </nuxt-link>
      </div>
      <div class="flex items-center justify-between relative h-[480px] w-[890px]">
        <img class="relative z-[2]" src="/img/left-arrow.png" alt="left arrow">
        <img class="relative z-[2]" src="/img/right-arrow.png" alt="right arrow">
        <div class="images absolute px-7">
          <img src="/img/bridging.png" alt="bridging the gap">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
