<template>
  <section class="h-screen relative md:flex hidden justify-center">
    <div>
      <Vue3Lottie ref="heroAnim" :animationData="hero" />
    </div>
    <div class="md:max-w-xl mx-auto pt-36 text-center absolute top-0">
      <transition name="fade" mode="out-in">
        <h2
          :key="currentIndex"
          class="sans font-bold text-center text-5xl text-blue-4 leading-snug h-[128px] flex items-center justify-center"
        >
          {{ content[currentIndex] }}
        </h2>
      </transition>
      <button
        class="text-[#ddd] bg-blue-4 hover:bg-[#e5f6ff] hover:text-blue-4 hover:border-blue-4 transition-all duration-300 rounded-2xl border-2 border-[#023C82] px-14 py-3 text-2xl mt-5"
      >
        Lets Talk
      </button>
    </div>
  </section>
  <section class="mobile-h-screen md:hidden mobile-hero px-3">
    <div class="md:max-w-xl mx-auto pt-36 text-center">
      <transition name="fade" mode="out-in">
        <h2
          :key="currentIndex"
          class="sans font-bold text-center md:text-5xl text-3xl text-blue-4 leading-snug md:px-0 px-5 h-[68px] flex items-center justify-center"
        >
          {{ content[currentIndex] }}
        </h2>
      </transition>
      <button
        class="text-[#ddd] bg-blue-4 hover:bg-[#e5f6ff] hover:text-blue-4 hover:border-blue-4 transition-all duration-300 rounded-2xl border-2 border-[#023C82] px-14 py-3 md:text-2xl mt-5"
      >
        Lets Talk
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import hero from "~/assets/hero2.json";

const content = [
  "Secure and Maintain Public Contracts",
  "Conduct Comprehensive Audits",
  "Compliance Simplified",
];

const currentIndex = ref(0);

const changeContent = () => {
  currentIndex.value = (currentIndex.value + 1) % content.length;
};

onMounted(() => {
  setInterval(changeContent, 5000);
});

onUnmounted(() => {
  clearInterval(changeContent);
});
</script>

<style scoped>
.mobile-hero {
  background: url("/img/home-bg.png"), linear-gradient(#e5f6ff, #fff9f0);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.h-screen {
  height: 150vh;
}

.mobile-h-screen {
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
