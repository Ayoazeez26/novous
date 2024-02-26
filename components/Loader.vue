<template>
  <div class="h-screen w-full custom_bg flex items-center justify-center">
    <div
      class="flex flex-col gap-[20px] items-center bg-black py-[80px] px-[40px] rounded-full"
    >
      <div>
        <img src="/svg/ocmc-logo-large.svg" />
      </div>
      <div class="cirlces flex gap-[20px]">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom_bg {
  background: rgba(0, 0, 0, 0.9);
  z-index: 8000;
}
.circle {
  height: 20px;
  visibility: hidden;
  width: 20px;
  background: white;
  border-radius: 100%;
}
</style>
<script>
import gsap from "gsap";

export default {
  mounted() {
    gsap.from(".circle", {
      autoAlpha: 0,
      y: -20,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "bounce",
      stagger: 0.2,
    });
  },
};
</script>
