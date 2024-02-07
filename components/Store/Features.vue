<script setup lang="ts">
const features = ref([
  {
    name: "Customer Support 24/7",
    desc: "Instant access to Support",
    img: "support",
  },
  {
    name: "100% Secure Payment",
    desc: "We ensure your money is safe",
    img: "secure",
  },
  {
    name: "Money-Back Guarantee",
    desc: "30 Days Money-Back Guarantee",
    img: "money",
  },
]);
</script>
<template>
  <div
    class="shadow bg-blue-11 flex items-center rounded-lg justify-between flex-wrap mb-[48px] p-10 lg:my-[120px] mx-auto w-full max-w-[1240px] md:space-y-0 space-y-5"
  >
    <div
      v-for="(feature, index) in features"
      :key="index"
      class="flex gap-4 items-center"
    >
      <div class="bg-blue-9 p-1 rounded">
        <img :src="`/svg/${feature.img}.svg`" alt="support icon" />
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-grey-10 font-bold leading-[120%]">{{ feature.name }}</p>
        <p class="text-grey-11 text-sm leading-[150%]">{{ feature.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow {
  box-shadow: 0px 8px 40px 0px rgba(0, 38, 3, 0.08);
}
</style>
