<script setup lang="ts">
import { ref } from "vue";
const prevClicked = ref(false);
const nextClicked = ref(false);

const services = ref([
  {
    name: "I. Afone",
    title: "DIVINE 24/7 RECRUITMENT LTD",
    desc: "“Thinking of applying for a tender, TGPC Health is the go-to. If you require Business Consultation TGPC Health has the solution. If you require strategic business advice, go to TGPC Health any time any day, and they will deliver. This has been my experience.”",
    image: "divine-recruitment",
  },
  {
    name: "J. Katsande",
    title: "Company Director of Haven Healthcare Services",
    desc: "TGPC Health has been absolutely helpful in the process of being awarded our tender. Oby especially has also offered invaluable support and key information for business sustainability. Excellent service!”",
    image: "haven",
  },
  {
    name: "Chris Dube",
    title: "Executive Director of Relief Professionals Group",
    desc: "“I don’t hesitate to recommend anyone to TGPC Health. They are the best tender writers I have worked with so far. They made everything very easy for us. We have commissioned the writing of another 3, after winning 2.”",
    image: "relief",
  },
]);

const getSlidesPerView = computed(() => {
  if (window.innerWidth <= 768) {
    return 1;
  } else if (window.innerWidth <= 1190) {
    return 2;
  } else {
    return 3;
  }
});

const getSpaceBetween = computed(() => {
  if (window.innerWidth >= 768) {
    return 30;
  } else {
    return undefined;
  }
});

const resetBtnValues = () => {
  prevClicked.value = false;
  nextClicked.value = false;
};
</script>
<template>
  <div class="py-16 lg:py-[120px] w-full bg-grey-2">
    <div
      class="flex flex-col items-center mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]"
    >
      <div class="flex lg:items-center justify-center w-full mb-10">
        <div class="text-center">
          <h2
            class="font-bold leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] capitalize"
          >
            our client's experiences
          </h2>
          <!-- <p class="mt-2 md:text-lg leading-[26px] w-full max-w-[523px]">Praise for TGPC Health's exceptional service and successful outcomes. Hear from our best clients.</p> -->
        </div>
        <!-- <div class="hidden md:flex">
          <button @click="prevClicked = true" class="flex min-w-max gap-2 items-center self-start mt-2">
            <Icon name="ic:baseline-arrow-back-ios" size="24px" color="#03989E" />
          </button>
          <button @click="nextClicked = true" class="flex min-w-max gap-2 items-center self-start mt-2">
            <Icon
              name="ic:baseline-arrow-forward-ios"
              size="24px"
              color="#03989E"
            />
          </button>
        </div> -->
      </div>
      <!-- <Swiper
        :modules="[SwiperFreeMode]"
        :height="400"
        :loop="true"
        :effect="'freemode'"
        :slides-per-view="getSlidesPerView"
        :space-between="getSpaceBetween"
      >
        <SwiperSlide
          :style="'font-size: 16px'"
        > -->
      <div class="flex flex-col lg:flex-row justify-center items-stretch gap-3">
        <div
          v-for="(service, idx) in services"
          :key="idx"
          class="bg-whiter card flex flex-col justify-between rounded-lg p-6 w-full md:w-[403px]"
        >
          <p class="text-center text-lg">{{ service.desc }}</p>
          <div class="bg-blue-4 w-full h-px my-[22px]" />
          <div class="flex items-center">
            <img
              class="w-[100px]"
              :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${service.image}.${idx === 2 ? 'jpg' : 'png'}`"
            />
            <div class="w-px h-[76px] bg-blue-4 mx-3" />
            <div class="flex flex-col">
              <p class="font-semibold">
                {{ service.name }}
              </p>
              <p class="text-sm font-medium">
                {{ service.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-10">
        <nuxt-link to="/about" class="blue-btn text-blue-4 rounded py-4 px-8">
          See more
          <Icon class="hovered ml-4" name="mdi:arrow-right" size="18px" />
        </nuxt-link>
      </div>
      <!-- </SwiperSlide>
        <SwiperControls class="md:hidden" :clickPrev="prevClicked" :clickNext="nextClicked" @resetBtnValues="resetBtnValues" />
      </Swiper> -->
      <!-- <div
        class="flex justify-center md:justify-start flex-wrap gap-[22px] mt-11"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="border-2 border-light-green flex flex-col justify-between rounded-lg px-6 py-11 w-[380px] h-[399px]"
        >
          <p class="text-center text-grey-4/80 mb-6">{{ service.desc }}</p>
          <div class="flex items-center gap-3">
            <img class="w-[100px]" :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${service.image}.jpg`" />
            <div class="flex flex-col">
              <p class="text-xl font-semibold text-primary">{{ service.name }}</p>
              <p class="text-sm font-medium text-black/80 uppercase">
                {{ service.title }}
              </p>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);
}
</style>
