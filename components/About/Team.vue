<script setup lang="ts">
import { ref } from "vue";
const prevClicked = ref(false);
const nextClicked = ref(false);

const services = ref([
  {
    name: "Moses Tule",
    title: "Chairman",
    image: "team-member-1",
  },
  {
    name: "Pat Goja",
    title: "CEO & Managing Director",
    image: "team-member-2",
  },
  {
    name: "Raymond Asemakaha",
    title: "Non-Executive Director",
    image: "team-member-3",
  },
  {
    name: "Michael Oglegba",
    title: "Member",
    image: "team-member-4",
  },
]);

</script>
<template>
  <div class="py-14 lg:py-[120px] w-full">
    <div
      class="flex flex-col mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1340px]"
    >
      <div class="flex lg:items-center justify-center w-full mb-10">
        <div class="text-center">
          <p class="pre-header">Our Board of Directors</p>
          <h2
            class="font-medium leading-[36px] md:leading-[48px] lg:leading-[44px] tracking-[-0.72px] text-2xl md:text-[32px] mt-2 lg:text-[36px]"
          >
            Meet the minds behind Novus Microfinance Bank
          </h2>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row justify-center flex-wrap gap-7">
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
      <div class="flex mt-10 justify-center">
        <nuxt-link
          to="/about#team"
          class="text-blue-4 blue-btn rounded py-4 px-8"
        >
          See More
          <Icon
            class="ml-2 hovered"
            name="mdi:arrow-right"
            size="18px"
            color="#0073FF"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
