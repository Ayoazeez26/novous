<script setup lang="ts">
import { ref } from "vue";
const prevClicked = ref(false);
const nextClicked = ref(false);
const modInfo = ref({});

const modValClicked = (item: number) => {
  modInfo.value = memberInfo.value[item - 1];
};

const clickedOutside = () => {
  modInfo.value = {};
  console.log(modInfo);
};

const members = ref([
  {
    name: "Side Hustle",
    image: "https://res.cloudinary.com/detusbs5y/image/upload/v1719944330/novus/ll3xntc0uab8oaiqqbkb.webp",
  },
  {
    name: "Personal Banking",
    image: "https://res.cloudinary.com/detusbs5y/image/upload/v1719944330/novus/mgerrvxucdevyd4dtgbj.webp",
  },
  {
    name: "Business Banking",
    image: "https://res.cloudinary.com/detusbs5y/image/upload/v1719944330/novus/jdqrltwul1z8yx3tp7ax.webp",
  },
  {
    name: "nMSMSEs",
    image: "https://res.cloudinary.com/detusbs5y/image/upload/v1719944331/novus/cx1y6xoyu6qcdxr5mrz4.webp",
  },
  {
    name: "Cooperatives",
    image: "https://res.cloudinary.com/detusbs5y/image/upload/v1719944331/novus/cx1y6xoyu6qcdxr5mrz4.webp",
  },
  {
    name: "Agro based finance Product",
    image: "https://res.cloudinary.com/detusbs5y/image/upload/v1719944331/novus/gmxuaxrrmaxnxs2jjjqc.webp",
  },
]);

</script>
<template>
  <div id="team" class="bg-grey-3 py-14 lg:py-[100px] w-full">
    <div
      class="flex flex-col mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]"
    >
      <div class="flex lg:items-center justify-center w-full mb-10">
        <div class="text-center">
          <h2
            class="md:font-semibold leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] capitalize"
          >
            Recommended for You
          </h2>
          <p class="mt-2 md:text-lg w-full max-w-[523px]">
            Check out our latest products and services
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center mb-16">
        <div class="flex flex-col md:flex-row justify-center flex-wrap gap-6">
          <div
            v-for="(member, idx) in members"
            :key="idx"
            class="flex flex-col w-full md:w-[384px]"
          >
            <div
              class="flex flex-col items-start p-3 md:p-4 border h-[] bg-white border-grey-4 rounded-2xl"
            >
              <img class="w-full" :src="member.image" />
              <div class="flex flex-col justify-between mt-2 w-full h-full">
                <div class="flex flex-col">
                  <h3 class="font-semibold text-2xl">
                    {{ member.name }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="location" />
      </div>

      <nuxt-link
        to="/services#recommendations"
        class="bg-secondary text-white max-w-fit flex items-center gap-2 font-medium self-center px-8 md:px-12 py-5 md:py-6 rounded-lg"
      >
        View All
        <Icon name="mdi:arrow-right" size="24" />
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
