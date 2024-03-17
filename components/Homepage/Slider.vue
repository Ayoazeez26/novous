<template>
  <section class="md:mx-0 mx-5">
    <Swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        '1210': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      :loop="true"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper relative"
    >
      <SwiperSlide
        v-for="(client, index) in clients"
        :key="index"
        class="pt-20 relative"
      >
        <div class="h-96 bg-[#fffef5] rounded-2xl px-8 pb-7">
          <div class="flex ml-3 absolute top-6">
            <div
              class="bg-[#fef0c3] border-8 border-[#003069] p-4 rounded-full"
            >
              <div
                class="bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-md"
              >
                <Icon :name="client.logo" size="24" />
              </div>
            </div>
          </div>
          <div class="h-full pt-16 flex flex-col justify-between">
            <div class="space-y-6">
              <div>
                <h4 class="sans">{{ client.companyName }}</h4>
                <div class="text-[#3e66df] flex items-center space-x-0.5">
                  <Icon
                    name="ic:outline-star"
                    v-for="i in client.starCount"
                    :key="i"
                  />
                </div>
              </div>
              <p>{{ client.description }}</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div
                  class="p-[14px] bg-white flex items-center justify-center text-[#699bf7] shadow rounded-xl"
                >
                  <Icon name="ion:md-thumbs-up" />
                </div>
                <div
                  class="p-[14px] bg-white flex items-center justify-center text-[#699bf7] shadow rounded-xl"
                >
                  <Icon name="mingcute:telegram-fill" />
                </div>
              </div>
              <p>{{ client.time }}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div
        class="left absolute h-[30rem] w-[28rem] top-5 z-10 md:inline-block hidden"
      ></div>
      <div
        class="right absolute h-[30rem] w-[28rem] top-5 z-10 right-0 rotate-180 md:inline-block hidden"
      ></div>
    </Swiper>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination, Autoplay],
      clients: [
        {
          logo: "logos:google-icon",
          companyName: "Rose Care",
          starCount: 5,
          description:
            "Always quick to respond to tender writing and any questions you have. I highly recommend them",
          time: "9 months Ago",
        },
        {
          logo: "logos:google-icon",
          companyName: "Admin BloomPage Consulting",
          starCount: 5,
          description:
            "OC Management Consultants have been very reliable business partners going the extra mile to meet some last minute requests whenever they are called upon. They are a very well led organisation and we highly recommend their services.",
          time: "8 months Ago",
        },
        {
          logo: "logos:google-icon",
          companyName: "Eunice Zisengwe",
          starCount: 5,
          description:
            "Great service with excellent customer satisfaction. I highly recommend.",
          time: "9 months Ago",
        },
        {
          logo: "logos:google-icon",
          companyName: "Love Aludo",
          starCount: 5,
          description:
            "Thorough service and the best grant writing support. I highly recommend.",
          time: "9 months Ago",
        },
        {
          logo: "logos:google-icon",
          companyName: "Bimbani Mpandea",
          starCount: 5,
          description:
            "Very professional and did what we wanted I would recommend the company to anyone willing",
          time: "8 months Ago",
        },
        {
          logo: "logos:google-icon",
          companyName: "Raymond sho",
          starCount: 5,
          description:
            "One of the most efficient and customer friendly consultant I have ever worked with.... excellent to say the least!",
          time: "9 months Ago",
        },
        {
          logo: "logos:google-icon",
          companyName: "Dan Elkaim",
          starCount: 5,
          description:
            "From the interactions I have observed that, O C Management Consultants appears to be an exceptional business. Their customer service team is knowledgeable, responsive, and always willing to go the extra mile to ensure that their clients are satisfied. ",
          time: "9 months Ago",
        },
      ],
    };
  },
};
</script>

<style>
.Swiper {
  width: 100%;
}

.SwiperSlide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.SwiperSlide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.left {
  background: linear-gradient(
    90deg,
    #003069 26.49%,
    rgba(0, 48, 105, 0.57) 212.41%
  );
}

.right {
  background: linear-gradient(
    90deg,
    #003069 26.49%,
    rgba(0, 48, 105, 0.57) 212.41%
  );
}
</style>
