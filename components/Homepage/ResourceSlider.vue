<template>
  <section>
    <div class="md:block hidden">
      <swiper
        :pagination="pagination"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper relative"
      >
        <swiper-slide>
          <div class="pb-20">
            <div class="p-11 bg-[#f3f8fd] rounded border-4 border-[#e7eaee]">
              <img
                src="/img/resource1.png"
                alt=""
                class="w-[332px] h-[459px]"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="pb-20">
            <div class="p-11 bg-[#f3f8fd] rounded border-4 border-[#e7eaee]">
              <img
                src="/img/resource1.png"
                alt=""
                class="w-[332px] h-[459px]"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="pb-20">
            <div class="p-11 bg-[#f3f8fd] rounded border-4 border-[#e7eaee]">
              <img
                src="/img/resource1.png"
                alt=""
                class="w-[332px] h-[459px]"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="pb-20">
            <div class="p-11 bg-[#f3f8fd] rounded border-4 border-[#e7eaee]">
              <img
                src="/img/resource1.png"
                alt=""
                class="w-[332px] h-[459px]"
              />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="md:hidden">
      <swiper
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper relative"
      >
        <swiper-slide>
          <div class="pb-20">
            <div class="p-5 bg-[#f3f8fd] rounded border-4 border-[#e7eaee]">
              <img src="/img/resource1.png" alt="" class="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="pb-20">
            <div class="p-5 bg-[#f3f8fd] rounded border-4 border-[#e7eaee]">
              <img src="/img/resource1.png" alt="" class="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="pb-20">
            <div class="p-5 bg-[#f3f8fd] rounded border-4 border-[#e7eaee]">
              <img src="/img/resource1.png" alt="" class="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="pb-20">
            <div class="p-5 bg-[#f3f8fd] rounded border-4 border-[#e7eaee]">
              <img src="/img/resource1.png" alt="" class="" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "~/assets/resources-slider.css";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },
      },
      modules: [Pagination, Navigation, Autoplay],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}
</style>
