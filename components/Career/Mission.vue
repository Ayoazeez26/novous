<script setup lang="ts"></script>
<template>
  <div
    class="flex flex-col lg:flex-row flex-wrap items-center justify-center lg:items-stretch gap-8 mx-auto mt-12 md:mt-[70px] px-4 xl:px-0 w-full max-w-[1376px]"
  >
    <div
      class="bg-peach rounded-t-3xl flex items-center flex-col gap-6 md:gap-[60px] justify-center text-center w-full md:w-[672px] px-[45px] md:px-[79px] pt-16 md:pt-[141px]"
    >
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center border border-grey-9 rounded-full px-4 py-3.5">
          <h4 class="font-medium ">
            Our Mission
          </h4>
          <Icon name="material-symbols:arrow-forward-ios" />
        </div>
        <p
          class="text-text-2 mt-6 text-xs md:text-base leading-[18px] md:leading-[28px]"
        >
          To empower individuals through the establishment of a more comprehensive and financially inclusive framework, fostering the growth of a prosperous and equitable society.
        </p>
      </div>
      <img src="/img/mission.webp" alt="mission bg" />
    </div>
    <div
      class="bg-teal rounded-t-3xl flex items-center flex-col gap-6 md:gap-[60px] justify-center text-center w-full md:w-[672px] px-[23px] md:px-[79px] pt-16 md:pt-[141px]"
    >
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center border border-grey-9 rounded-full px-4 py-3.5">
          <h4 class="font-medium ">
            Our Vision
          </h4>
          <Icon name="material-symbols:arrow-forward-ios" />
        </div>
        <p
          class="text-text-2 mt-6 text-xs md:text-base leading-[18px] md:leading-[28px]"
        >
          To be the leading provider of financial services to underserved
          communities, empowering them to achieve their full potential and
          contribute to sustainable development
        </p>
      </div>
      <img class="px-[22px] md:px-0" src="/img/vision.webp" alt="vision bg" />
    </div>
  </div>
  <div id="recommendations" />
</template>

<style scoped></style>
