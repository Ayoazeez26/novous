<script lang="ts" setup>
import { gsap } from "gsap";

const LOADING_TIME = 100;

const number_of_assets_loaded = ref(0);
const total_assets = ref(0);
const assets_index = ref(0);

onMounted(() => {
  nextTick(() => {
    setTimeout(async () => {
      await document.fonts.load;

      gsap.to(".preloader__percent", {
        opacity: 1,
        duration: 0.2,
      });

      gsap.set("body", {
        overflow: "hidden",
      });

      loadNextImage();
    }, 0);
  });
});

function setProgress(total: number) {
  number_of_assets_loaded.value++;
  total_assets.value = total;
}

function loadNextImage() {
  const images = document.querySelectorAll("img");

  if (assets_index.value < images.length) {
    const img = images[assets_index.value];
    if (img.complete) {
      setProgress(images.length);
      assets_index.value++;
      setTimeout(loadNextImage, LOADING_TIME);
    } else {
      img.onload = () => {
        setProgress(images.length);
        assets_index.value++;
        setTimeout(loadNextImage, LOADING_TIME);
      };
    }
  }
}

const progress = computed(() => {
  return Math.min(
    Math.floor((number_of_assets_loaded.value / total_assets.value) * 100),
    100
  );
});

watch(
  () => progress.value,
  (number) => {
    if (number === 100) {
      gsap.fromTo(
        ".preloader",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          duration: 0.7,
          onComplete() {
            gsap.set("body", {
              clearProps: "all",
            });
          },
        }
      );
    }
  }
);
</script>
<template>
  <div class="preloader flex flex-col">
    <!-- <img src="/svg/logo.svg" alt="" class="invert absolute w-3/4 opacity-5" /> -->
    <h1 class="preloader__percent h3 font-semibold">
      <!-- {{ progress ? progress : 0 }}% -->
      <Loader />
    </h1>
  </div>
</template>
<style lang="scss" scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #fff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.preloader__percent {
  opacity: 0;
  font-size: 80px;
}
</style>
