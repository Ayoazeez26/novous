<template>
  <div class="h-screen w-full custom_bg flex items-center justify-center">
    <img src="/svg/loader.svg" alt="loader" class="image-spin">
    <!-- <div
      class="flex items-center justify-center h-64 w-64 rounded-full bg-secondary/80"
    >
      <div class="flex flex-col gap-[20px] items-center">
        <div>
          <img src="/img/logo.png" class="w-24" />
        </div>
        <div class="cirlces flex gap-[20px]">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.custom_bg {
  background: #fff;
  z-index: 8000;
}
.circle {
  height: 20px;
  visibility: hidden;
  width: 20px;
  background: white;
  border-radius: 100%;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Apply the animation to the image */
.image-spin {
  animation: spin 2s linear infinite;
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
