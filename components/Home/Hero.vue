<script setup lang="ts">
import getStarted from "~/assets/loading-animation.json";
</script>
<template>
  <div class="bg-blue pt-20 md:py-28 px-4 md:px-6 xl:px-0 w-full md:pt-[120px]">
    <div
      class="w-full max-w-[1240px] flex justify-between pt-32 md:pt-20 mx-auto h-full"
    >
      <div class="flex flex-col md:justify-between w-full h-full">
        <div class="flex justify-center w-full mb-10 md:mb-12 lg:mb-20">
          <!-- <img class="hidden lg:block w-[146px]" src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/hero-left.png" alt="hero left image"> -->
          <div class="text-center w-full">
            <h1
              class="text-white font-black leading-[42px] md:leading-[54px] lg:leading-[78px] tracking-[-1.5px] text-[32px] md:text-[48px] lg:text-[64px]"
            >
              Enabling
              <span class="text-yellow">Growth and Diversification</span> for
              Social Care Organizations
            </h1>
            <!-- <p class="font-medium text-white tracking-[0.2px] mx-4 mt-6 lg:text-lg">
              Empower your organization's growth and elevate your impact.
            </p> -->
          </div>
          <!-- <img class="hidden lg:block w-[146px]" src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/hero-right.png" alt="hero right image"> -->
        </div>
        <div
          class="-mb-20 md:-mb-40 translate-y-10 md:translate-y-20 relative max-w-fit"
        >
          <div class="absolute -right-2 md:right-8 xl:-right-8 -top-8">
            <img class="" src="/img/play-icon.png" alt="play icon" />
            <div class="-translate-y-[85px] -translate-x-[19px]">
              <Vue3Lottie
                ref="getStartedAnim"
                :animationData="getStarted"
                :height="102"
                :width="102"
              />
            </div>
          </div>
          <video ref="video" controls playsinline autoplay muted loop>
            <source
              src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/ocmc-video.mp4"
              type="video/mp4"
            />
            <p>
              Your browser does not support HTML video, here's a
              <a
                href="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/ocmc-video.mp4"
                >link
              </a>
              to watch the video
            </p>
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-hero-bg {
  background-position: center;
  @media screen and (max-width: 768px) {
    background-position: center left -350px;
  }
}
</style>
