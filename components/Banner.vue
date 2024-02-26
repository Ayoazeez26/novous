<template>
  <section
    v-if="showBanner"
    class="flex items-center justify-center h-16 bg-[#253A89] text-white md:text-base text-xs relative"
  >
    <div class="flex items-center md:space-x-5 space-x-3">
      <img src="/svg/star.svg" alt="" />
      <div class="flex space-x-3 items-center">
        <p class="">Stay Compliant with our Free MEQC Tools...</p>
        <button
          class="bg-[#699BF7B2] hover:border-[#699BF7B2] hover:text-[#699BF7B2] hover:bg-white transition-all duration-300 md:px-5 md:py-2 px-3 py-1 rounded-full shadow-sm"
        >
          Download <span class="md:inline hidden">Now!</span>
        </button>
      </div>
      <img src="/svg/star.svg" alt="" />
    </div>
    <button class="md:inline hidden absolute right-10" @click="hideBanner">
      <Icon name="material-symbols:close" size="24" color="#FFFFFF" />
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showBanner: true,
    };
  },
  methods: {
    hideBanner() {
      this.showBanner = false;
    },
  },
};
</script>

<style></style>
