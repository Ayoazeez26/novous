<script setup lang="ts">
const resource = ref("Books");
const services = ref([
  {
    name: "Best Practices For Providing Domicillary Care",
    image: "book-practice",
    link: "https://www.amazon.com/PRACTICES-PROVIDING-DOMICILIARY-SUPPORTED-SCHEMES-ebook/dp/B0CG4X4KS1",
  },
  {
    name: "bridging the gap",
    image: "book-mockup",
  },
  {
    name: "Social care business management explained",
    image: "book-social",
  },
]);
const videos = ref([
  {
    title: "CQC Regulation 13: Good Governance",
    img: "video-placeholder",
  },
  {
    title: "CQC Regulation 13: Good Governance",
    img: "video-placeholder",
  },
  {
    title: "CQC Regulation 13: Good Governance",
    img: "video-placeholder",
  },
]);
const posts = ref([
  {
    title: "£500 million fund to make patients top priority",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
  {
    title: "workforce development fund: adult social care",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
  {
    title: "supported living: the economical benefits",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
]);
</script>
<template>
  <div
    class="flex flex-col items-center mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-center justify-between w-full"
    >
      <div class="">
        <h2
          class="font-bold leading-[48px] w-[200px] md:w-auto lg:leading-[54px] tracking-[-1.5px] text-[32px] lg:text-[48px]"
        >
          Level Up with <span class="text-blue-4">Our Resources</span>
        </h2>
      </div>
      <div class="flex mt-8 lg:mt-0 overflow-x-auto">
        <button
          @click="resource = 'Books'"
          class="px-10 py-4"
          :class="
            resource === 'Books' ? 'bg-blue-4 text-white  font-semibold' : ''
          "
        >
          Books
        </button>
        <button
          @click="resource = 'Videos'"
          class="px-10 py-4"
          :class="
            resource === 'Videos' ? 'bg-blue-4 text-white  font-semibold' : ''
          "
        >
          Videos
        </button>
        <button
          @click="resource = 'Blog'"
          class="px-10 py-4"
          :class="
            resource === 'Blog' ? 'bg-blue-4 text-white  font-semibold' : ''
          "
        >
          Blog
        </button>
      </div>
    </div>
    <div v-if="resource === 'Books'" class="w-full">
      <div class="flex justify-center mt-10">
        <div
          class="flex flex-col lg:flex-row md:items-stretch justify-center flex-wrap gap-10 lg:gap-2"
        >
          <div
            v-for="(service, idx) in services"
            :key="idx"
            class="flex flex-col w-full xl:h-full lg:w-[408px]"
          >
            <img
              class="w-full"
              :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${service.image}.png`"
            />
            <div
              class="flex items-start xl:h-full px-6 py-8 border bg-blue-2 text-white border-blue-2"
            >
              <div class="flex flex-col justify-between w-full xl:h-full">
                <h3
                  class="font-semibold text-[22px] text-white tracking-[-0.2px] uppercase"
                >
                  {{ service.name }}
                </h3>
                <!-- <p
                  class="cut-text text-lg leading-[28px] font-medium max-h-14 mt-4 text-ellipsis overflow-hidden block"
                >
                  {{ service.title }}
                </p> -->
                <div class="mt-10 self-end flex w-full">
                  <template v-if="service.link">
                    <a
                      :href="service.link"
                      target="_blank"
                      class="bg-blue-4 text-center text-white rounded p-4 w-full"
                    >
                      Get Now!!
                    </a>
                  </template>
                  <template v-else>
                    <nuxt-link
                      to="/resources"
                      class="bg-blue-4 text-center text-white rounded p-4 w-full"
                    >
                      Learn More
                    </nuxt-link>
                  </template>
                  <!-- <nuxt-link
                    to="/resources"
                    class="bg-blue-4 text-center text-white rounded p-4 w-full"
                  >
                    Learn More
                  </nuxt-link> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-10 justify-center">
        <nuxt-link
          to="/resources"
          class="text-blue-4 blue-btn rounded py-4 px-8"
        >
          See More
          <Icon
            class="hovered ml-3"
            name="mdi:arrow-right"
            size="18px"
            color="#0073FF"
          />
        </nuxt-link>
      </div>
    </div>
    <div v-else-if="resource === 'Videos'" class="w-full">
      <div class="flex justify-center mt-10">
        <div
          class="flex flex-col lg:flex-row justify-center flex-wrap gap-10 lg:gap-6"
        >
          <div
            v-for="(video, idx) in videos"
            :key="idx"
            class="flex flex-col w-full lg:w-[397px]"
          >
            <img
              class="w-full"
              :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${video.img}.png`"
            />
            <div
              class="flex items-center px-4 py-8 border bg-blue-2 text-white border-blue-2"
            >
              <div class="flex items-center w-full gap-x-4">
                <img class="h-10 w-10" src="/img/play.png" alt="play picture" />
                <p
                  class="cut-text text-lg leading-[28px] font-medium max-h-14 text-ellipsis overflow-hidden block"
                >
                  {{ video.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-10 justify-center">
        <nuxt-link
          to="/resources"
          class="text-blue-4 blue-btn rounded py-4 px-8"
        >
          See More
          <Icon
            class="hovered ml-3"
            name="mdi:arrow-right"
            size="18px"
            color="#0073FF"
          />
        </nuxt-link>
      </div>
    </div>
    <div v-else class="">
      <div class="flex flex-col lg:flex-row gap-10 mt-10">
        <nuxt-link to="/blog/id" class="w-full max-w-[612px]">
          <img
            src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/book-mockup-1.png"
            alt="book mockup"
          />
          <div class="bg-blue-2 px-6 py-12">
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <div class="flex md:justify-center max-w-fit relative">
                <img
                  class="absolute -right-2 -top-2"
                  src="/img/logo.png"
                  alt="splash logo"
                />
                <nuxt-link
                  to="/services"
                  class="bg-blue-4 text-white uppercase rounded py-2 px-4"
                >
                  Trending
                </nuxt-link>
              </div>
              <div class="flex gap-6 items-center">
                <p class="text-whiter">April 23, 2023</p>
                <div class="w-2 h-9 bg-blue-4" />
                <p class="text-whiter">By Mrs Obi</p>
              </div>
            </div>
            <h2 class="font-bold text-whiter text-2xl max-w-[483px] mt-6">
              SUPPORTED LIVING: MORE THAN PROVIDING A HOUSE AND A SERVICE
            </h2>
          </div>
        </nuxt-link>
        <div class="flex flex-col gap-6">
          <nuxt-link
            v-for="(post, index) in posts"
            :key="index"
            class="flex items-center"
            to="/blog/id"
          >
            <img
              class="w-[164px] hidden md:block"
              src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/book-mockup-mob.png"
              alt="small book mockup"
            />
            <img
              class="w-[164px] md:hidden"
              src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/book-mockup-mob-2.png"
              alt="small book mockup"
            />
            <div class="flex flex-col gap-y-2 px-6 max-w-[424px]">
              <h3
                class="cut-text text-lg font-bold uppercase max-h-14 text-ellipsis overflow-hidden block"
              >
                {{ post.title }}
              </h3>
              <div
                class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6"
              >
                <p>{{ post.date }}</p>
                <div class="w-7/12 md:w-1 h-1 md:h-7 bg-blue-4" />
                <p>By {{ post.author }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="flex mt-10 justify-center">
        <nuxt-link
          to="/resources"
          class="text-blue-4 blue-btn rounded py-4 px-8"
        >
          View More
          <Icon
            class="ml-3 hovered"
            name="mdi:arrow-right"
            size="18px"
            color="#0073FF"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cut-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
</style>
