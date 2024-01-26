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
    name: "Chinye Okonkwo",
    title: "CEO",
    image: "ceo",
  },
  {
    name: "Edwina Nwaogu",
    title: "SENIOR MANAGEMENT CONSULTANT EXPERTISE",
    image: "smce",
  },
  {
    name: "Peju Akinlude",
    title: "CONSULTING ADVISOR ON MENTAL HEALTH, SPECIALIST TRAINING AN...",
    image: "peju",
  },
  {
    name: "Dudley Sawyerr",
    title: "DIVERSITY, EQUITY, AND INCLUSION EXPERT ADVISOR",
    image: "dudley",
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
  // {
  //   name: "Arindam",
  //   image: "das",
  //   about:
  //     "Arindam is a senior strategy consultant with 11+ years of experience. He drives exceptional business development and leads the strategy service at OCMC. He is passionate about helping clients achieve their goals.",
  //   capabilities: [
  //     "Project management excellence",
  //     "Strategic analysis",
  //     "Business development",
  //     "Consultative leadership",
  //     "Relationship-building",
  //   ],
  // },
  // {
  //   name: "Nick",
  //   image: "nick",
  //   about:
  //     "Nick is a growth-driven leader with a proven track record of success in the healthcare industry. He is passionate about driving revenue and improving patient experiences.",
  //   capabilities: [
  //     "Business Development",
  //     "Sales Enhancement",
  //     "Operations Excellence",
  //     "Client Relations",
  //     "International Strategy",
  //     "Team Leadership",
  //     "Budget Control",
  //     "Customer Focus",
  //     "Exceptional",
  //     "Customer Focus",
  //   ],
  // },
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
  <div id="team" class="py-14 lg:py-[120px] w-full">
    <div
      class="flex flex-col mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]"
    >
      <div class="flex lg:items-center justify-center w-full mb-10">
        <div class="text-center">
          <h2
            class="font-bold leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] capitalize"
          >
            meet our amazing team
          </h2>
          <p class="mt-2 md:text-lg w-full max-w-[523px]">
            We provide you experienced consultants to enable you and your
            company become more successful in the future.
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col md:flex-row justify-center flex-wrap gap-3">
          <div
            v-for="(member, idx) in members"
            :key="idx"
            class="flex flex-col w-full md:w-[298px]"
          >
            <img
              class="w-full"
              :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${member.image}.png`"
            />
            <div
              class="flex items-start px-4 py-8 border h-[242px] text-center border-blue-2"
              :class="idx === 0 ? 'bg-blue-2 text-white' : ''"
            >
              <div class="flex flex-col justify-between w-full h-full">
                <div class="flex flex-col">
                  <h3 class="font-semibold text-2xl">
                    {{ member.name }}
                  </h3>
                  <p class="text-sm font-medium mt-2 px-4">
                    {{ member.title }}
                  </p>
                </div>
                <button
                  @click="modValClicked(idx)"
                  :class="idx === 0 ? 'text-white' : 'text-blue-4'"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="location" />
      </div>
      <div
        v-if="Object.entries(modInfo).length !== 0"
        class="fixed bg-grey/95 flex items-start md:items-center justify-center top-0 left-0 w-screen pt-40 md:w-[calc(100vw-16px)] overflow-hidden h-screen z-50"
      >
        <div
          v-click-outside="clickedOutside"
          class="bg-whiter flex flex-col h-full md:h-auto overflow-y-auto relative xl:flex-row items-start gap-y-10 xl:gap-x-10 rounded-b-none md:rounded-b-2xl rounded-2xl p-6 md:w-[456px] xl:w-[1240px]"
        >
          <img
            class="rounded-xl w-full md:w-[298px]"
            :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${modInfo.image}.png`"
            alt=""
          />
          <div class="flex flex-col gap-y-3">
            <p class="font-semibold text-[22px]">
              A Little About {{ modInfo.name }}
            </p>
            <p class="lg:w-[407px]">{{ modInfo.about }}</p>
          </div>
          <div class="flex flex-col gap-y-4">
            <p class="font-semibold text-[22px]">Capabilities & Achievements</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="(name, index) in modInfo.capabilities"
                :key="index"
                class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px]"
              >
                {{ name }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-24 flex flex-col items center text-center">
        <div class="flex justify-center w-[320px] mx-auto">
          <img
            src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/location.png"
            alt="placeholder"
          />
        </div>
        <h3
          class="font-semibold mt-10 leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] capitalize"
        >
          Our Location
        </h3>
        <p class="text-lg mt-2">London, United Kingdon</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
