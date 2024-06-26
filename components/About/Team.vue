<script setup lang="ts">
import { ref } from "vue";
const prevClicked = ref(false);
const nextClicked = ref(false);

const services = ref([
  {
    name: "Dr. Moses Tule",
    title: "Chairman Board of Directors Novus MFB",
    image: "moses",
  },
  {
    name: "Mrs. Patricia Goja",
    title: "Managing Director and Chief Executive Officer Novus MFB",
    image: "goja",
  },
  {
    name: "Dr. Raymond Terfa Asemakaha CFA",
    title: "Board Member Novus MFB",
    image: "terfa",
  },
  {
    name: "Hon. Michael Oglegba",
    title: "Board Member Novus MFB",
    image: "michael",
  },
  {
    name: "Mr. Denen Aondoakaa",
    title: "Board Member, Novus Microfinance Bank Limited",
    image: "denen",
  },
]);

const team = ref([
  {
    name: "Harriet Hembafan Adzuu",
    title: "Chief Finance & Administrative Officer",
    image: "harriet",
  },
  {
    name: "Thomas Tavershima Kaneor",
    title: "Chief Marketing & Business Development Officer.",
    image: "kane",
  },
]);

</script>
<template>
  <div class="py-14 lg:pt-[120px] lg:pb-[213px] w-full">
    <div
      class="flex flex-col mx-auto px-4 md:px-6 xl:px-0 w-full"
    >
      <div class="flex lg:items-center justify-center w-full mb-10 max-w-[1240px] mx-auto">
        <div class="text-center">
          <p class="pre-header">Meet the minds behind Novus Microfinance Bank</p>
          <h2
            class="font-medium leading-[36px] md:leading-[48px] lg:leading-[44px] tracking-[-0.72px] text-2xl md:text-[32px] mt-2 lg:text-[36px]"
          >
            Our Board of Directors
          </h2>
        </div>
      </div>
      <div class="flex justify-center overflow-x-auto pb-10 w-full xl:w-[1456px] mr-auto lg:mr-0 ml-auto">
        <div class="flex flex-col md:flex-row justify-center gap-7 lg:ml-[630px] lg:pr-[300px]">
          <div
            v-for="(service, idx) in services"
            :key="idx"
            class="flex flex-col w-full md:w-[298px]"
          >
            <img
              class="w-full"
              :src="`/img/${service.image}.webp`"
            />
            <div
              class="flex items-center pt-6"
            >
              <div class="flex flex-col w-full">
                <h3 class="leading-[30px] text-xl">
                  {{ service.name }}
                </h3>
                <p class="text-secondary mt-1">
                  {{ service.title }}
                </p>
                <div class="mt-6 flex gap-5 items-center">
                  <img src="/svg/twitter.svg" alt="twitter icon">
                  <img src="/svg/linkedin.svg" alt="linkedin icon">
                  <img src="/svg/web.svg" alt="web icon">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div
      class="flex flex-col mx-auto px-4 md:px-6 mt-20 xl:px-0 w-full"
    >
      <div class="flex lg:items-center justify-center w-full mb-10 max-w-[1240px] mx-auto">
        <div class="text-center">
          <p class="pre-header">Meet our team</p>
          <h2
            class="font-medium leading-[36px] md:leading-[48px] lg:leading-[44px] tracking-[-0.72px] text-2xl md:text-[32px] mt-2 lg:text-[36px]"
          >
            Our Outstanding Leadership
          </h2>
        </div>
      </div>
      <div class="flex justify-center overflow-x-auto pb-10 w-full xl:w-[1240px] mx-auto">
        <div class="flex flex-col md:flex-row justify-center gap-7">
          <div
            v-for="(service, idx) in team"
            :key="idx"
            class="flex flex-col w-full md:w-[298px]"
          >
            <img
              class="w-full"
              :src="`/img/${service.image}.webp`"
            />
            <div
              class="flex items-center pt-6"
            >
              <div class="flex flex-col w-full">
                <h3 class="leading-[30px] text-xl">
                  {{ service.name }}
                </h3>
                <p class="text-secondary mt-1">
                  {{ service.title }}
                </p>
                <div class="mt-6 flex gap-5 items-center">
                  <img src="/svg/twitter.svg" alt="twitter icon">
                  <img src="/svg/linkedin.svg" alt="linkedin icon">
                  <img src="/svg/web.svg" alt="web icon">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
