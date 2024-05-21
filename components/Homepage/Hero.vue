<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import hero from "~/assets/hero2.json";

const content = [
  'Premier <span class="text-secondary"> Wealth </span> Management',
  'Enjoy An Entire <span class="text-secondary">Novus</span> Banking World',
  '<span class="text-secondary"> Side Hustle </span>- Never Get Worried About Funds',
  ' <span class="text-secondary">Scam</span> Alert',
];

const bgs = [
  "bg-hero-bg-one",
  "bg-hero-bg-two",
  "bg-hero-bg-three",
  "bg-hero-bg-four",
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

<template>
  <section class="h-screen relative flex items-center justify-center">
    <transition name="fade" mode="in-out">
      <div
        class="absolute bg-hero-bg-one bg-no-repeat bg-center bg-cover w-full h-full top-0 left-0 right-0 bottom-0 z-[1]"
        :class="bgs[currentIndex]"
      ></div>
    </transition>
    <div class="mx-auto text-center w-full max-w-[905px] mt-20 z-[2] px-5 xl:px-0">
      <transition name="fade" mode="out-in">
        <div class="flex h-24 md:h-[220px] items-center justify-center">
          <h2
            :key="currentIndex"
            class="sans font-medium md:font-semibold text-center text-4xl lg:text-[80px] text-white tracking-[-2px] leading-[48px] md:leading-snug w-full"
            v-html="content[currentIndex]"
          />
        </div>
      </transition>
      <p class="text-white md:mt-6">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc, litot Europa usa li sam
        vocabular.
      </p>
      <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-2 mt-[28px] md:mt-16">
        <NuxtLink
          to="/"
          class="text-[#ddd] bg-secondary hover:bg-white hover:text-secondary hover:border-white transition-all duration-300 rounded-xl border border-secondary px-8 md:px-12 py-5 md:py-6 min-w-max md:text-2xl"
        >
          Create Account
        </NuxtLink>
        <NuxtLink
          to="/"
          class="text-white bg-transparent flex items-center gap-3 justify-center hover:bg-white hover:text-secondary hover:border-white transition-all duration-300 rounded-xl border border-transparent px-12 py-6 md:text-2xl"
        >
          <Icon name="material-symbols:play-arrow" />
          <span class="min-w-max"> Watch Video </span>
        </NuxtLink>
      </div>
    </div>
  </section>
  <!-- <section class="mobile-h-screen md:hidden mobile-hero px-3">
    <div class="md:max-w-xl mx-auto pt-36 text-center">
      <transition name="fade" mode="out-in">
        <h2
          :key="currentIndex"
          class="sans font-bold text-center md:text-5xl text-3xl text-text leading-snug md:px-0 px-5 h-[68px] flex items-center justify-center"
        >
          {{ content[currentIndex] }}
        </h2>
      </transition>
      <p class="text-text">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
      <button
        class="text-[#ddd] bg-blue-4 hover:bg-[#e5f6ff] hover:text-blue-4 hover:border-blue-4 transition-all duration-300 rounded-2xl border-2 border-[#023C82] px-14 py-3 md:text-2xl mt-5"
      >
        <NuxtLink to="/store">Lets Talk</NuxtLink>Talk
      </button>
    </div>
  </section> -->
</template>

<style scoped>
.mobile-hero {
  /* background: url("/img/home-bg.png"), linear-gradient(#e5f6ff, #fff9f0); */
  /* background-size: contain; */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
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
