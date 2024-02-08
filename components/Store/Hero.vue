<script setup lang="ts">
const { $gsap, $ScrollTrigger, $TweenMax } = useNuxtApp();

const mm = $gsap.matchMedia();

const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});

let slides;

onMounted(() => {
  slides = Array.from(document.querySelectorAll(".slide"));
});

let index = 0;

const animRight = () => {
  const TLRight = $gsap.timeline();

  TLRight.to(slides[index], { duration: 0.6, x: 0 });
};

const animLeft = () => {
  const TLLeft = $gsap.timeline();

  TLLeft.to(slides[index], { duration: 0.6, x: "-110%" });
};

const handleDirection = (direction: string) => {
  if (direction === "next") {
    if (index === slides.length - 1) {
      return;
    }
    index++;
    animRight();
  } else {
    if (index === 0) {
      return;
    }
    animLeft();
    index--;
  }
};
</script>
<template>
  <div class="bg-blue-7 pt-20 md:pt-28 w-full">
    <div
      class="w-full max-w-[1240px] flex md:flex-row flex-col h-full items-center pt-[140px] px-4 md:px-6 xl:px-0 mx-auto"
    >
      <div
        class="bg-blue-8/20 px-[38px] pt-[99px] pb-[94px] relative text-whiter md:w-[410px] w-full h-[507px]"
      >
        <img class="absolute top-0 right-0" src="/svg/fold.svg" alt="folded" />
        <p class="text-xl">
          Sale up to
          <span
            class="bg-blue-9 text-base text-blue-10 rounded-md px-[17px] py-[5.76px] ml-3"
            >95% off</span
          >
        </p>
        <h1 class="leading-[45px] mt-6 mb-[33px] text-4xl text-white">
          Explore Our Latest Books on Social Care Excellence!
        </h1>
        <nuxt-link
          to=""
          class="bg-whiter text-blue-4 text-xl font-bold rounded w-full flex h-[76px] items-center justify-center"
        >
          Shop Now
          <Icon class="ml-1" name="mdi:arrow-right" size="24" />
        </nuxt-link>
      </div>
      <div class="relative">
        <img
          @click="handleDirection('prev')"
          class="absolute top-48 cursor-pointer z-[2]"
          src="/img/left-arrow.png"
          alt="left arrow"
        />
        <img
          @click="handleDirection('next')"
          class="absolute top-48 right-0 cursor-pointer z-[2]"
          src="/img/right-arrow.png"
          alt="right arrow"
        />

        <div
          class="flex items-center justify-between overflow-hidden relative px-7 h-[480px] w-[890px]"
        >
          <div class="images w-full h-full overflow-hidden absolute">
            <img
              class="slide absolute w-[837px]"
              src="/img/bridging.png"
              alt="bridging the gap"
            />
            <img
              class="slide absolute w-[837px] -translate-x-[100%]"
              src="/img/tender-slide.png"
              alt="bridging the gap"
            />
            <img
              class="slide absolute w-[837px] -translate-x-[100%]"
              src="/img/care-slide.png"
              alt="bridging the gap"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
