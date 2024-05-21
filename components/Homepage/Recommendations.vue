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
    image: "side",
  },
  {
    name: "Personal Banking",
    image: "personal",
  },
  {
    name: "Business Banking",
    image: "business",
  },
  {
    name: "nMSMSEs",
    image: "nmsmse",
  },
  {
    name: "Cooperatives",
    image: "cooperatives",
  },
  {
    name: "Agro based finance Product",
    image: "agro",
  },
  // {
  //   name: "Arindam Das",
  //   title: "SENIOR STRATEGY CONSULTANT",
  //   image: "das",
  // },
  // {
  //   name: "Nick",
  //   title: "OPERATIONS & BUSINESS DEVELOPMENT LEADER",
  //   image: "nick",
  // },
]);

const memberInfo = ref([
  {
    name: "Edwina",
    image: "smce",
    about:
      "Edwina Nwaogu is a dedicated professional with a passion for safety and quality. She is a certified auditor and holds an MBA and GradIOSH qualification. She is an expert in creating safe and productive work environments.",
    capabilities: [
      "Health and Safety Management",
      "Preventive",
      "Risk Assessment",
      "Training and Development",
      "Efficient",
      "Strategic",
      "Dedication",
      "Excellence",
      "Inclusive",
      "Exceptional",
    ],
  },
  {
    name: "Peju",
    image: "peju",
    about:
      "Peju Akinlude is a mental health and social care legislation consultant with over 20 years of experience. She is an expert in safeguarding and best interests. She uses her expertise to enable vulnerable individuals and organizations have access to excellent services.",
    capabilities: [
      "Safeguarding",
      "Best Interests",
      "Understanding",
      "Compliance",
      "Protection",
      "Inclusion",
      "Application",
      "Representation",
      "Navigation",
      "Empowerment",
    ],
  },
  {
    name: "Dudley",
    image: "dudley",
    about:
      "Dudley Sawyer is a DEI expert who creates inclusive workplaces. He works with organizations within the NHS to create cultures, policies, and practices that welcome and value everyone.",
    capabilities: [
      "Cultural competence",
      "Inclusive leadership",
      "Equity frameworks",
      "Awareness",
      "DEI training",
      "Policy development",
    ],
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
              <img class="w-full" :src="`/img/${member.image}.webp`" />
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
        to=""
        class="bg-secondary text-white max-w-fit flex items-center gap-2 font-medium self-center px-8 md:px-12 py-5 md:py-6 rounded-lg"
      >
        View All
        <Icon name="mdi:arrow-right" size="24" />
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
