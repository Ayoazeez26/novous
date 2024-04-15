<script setup lang="ts">
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
  <div class="bg-blue pt-20 md:py-28 px-4 md:px-6 xl:px-0 w-full md:pt-[120px]">
    <div
      class="w-full max-w-[1240px] flex justify-between pt-32 md:pt-20 mx-auto h-full"
    >
      <div class="flex flex-col w-full h-full">
        <div class="flex justify-center w-full">
          <div class="text-center w-full">
            <p class="text-yellow text-lg font-bold uppercase">
              learn from industry experts
            </p>
            <h1
              class="text-whiter font-black leading-[42px] md:leading-[54px] mb-10 lg:leading-[78px] tracking-[-1.5px] text-[32px] md:text-[48px] lg:text-[64px]"
            >
              Gain Insights From <span class="text-yellow">Professionals</span>
            </h1>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-10">
          <div to="/blog/id" class="w-full max-w-[612px]">
            <!-- <img
              src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/book-mockup-1.png"
              alt="book mockup"
            /> -->
            <div class="bg-white px-6 py-12">
              <div class="flex flex-col md:flex-row md:items-center gap-6">
                <div class="flex md:justify-center max-w-fit relative">
                  <img
                    class="absolute -right-2 -top-2"
                    src="/img/logo.png"
                    alt="splash logo"
                  />
                  <nuxt-link
                    to="/services"
                    class="bg-blue-4 text-whiter uppercase rounded py-2 px-4"
                  >
                    Trending
                  </nuxt-link>
                </div>
                <div class="flex gap-6 items-center">
                  <p class="text-blue">December 6, 2023</p>
                  <div class="w-2 h-9 bg-blue-4" />
                  <p class="text-blue">By Olaoluwa Oluwadun</p>
                </div>
              </div>
              <h2 class="font-bold text-2xl uppercase max-w-[483px] mt-6 mb-4">
                UK's New Immigration Policy Update
              </h2>
              <p class="mb-1">
                On Monday, December 4th, 2023, the UK Government launched a new
                immigration policy.
              </p>

              <p class="mb-1">
                The policy is part of a 5-point plan aimed to control net
                migration, which according to Home Secretary James Cleverly MP,
                is alarmingly high
              </p>

              <p class="mb-1">
                This comes after a surge in net migration rates since COVID-19
                hit. In 2022, net migration hit a record high of 745,000.
                Although we saw a 10% drop in 2023 to just over 672,000, these
                figures still reflect a significant number of immigrants. The
                impact on our healthcare sector is immense.
              </p>

              <p class="mb-4">Read more about it below</p>
              <div
                style="
                  position: relative;
                  padding-top: max(60%, 326px);
                  height: 0;
                  width: 100%;
                "
              >
                <iframe
                  allow="clipboard-write"
                  sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
                  allowfullscreen="true"
                  style="
                    position: absolute;
                    border: none;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                  "
                  src="https://e.issuu.com/embed.html?backgroundColor=%2304346c&d=immigration_policy_-_ocmc&u=tgpcmedia"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <div
              v-for="(post, index) in posts"
              :key="index"
              class="flex items-center"
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
                  class="cut-text text-whiter text-lg font-bold uppercase max-h-14 text-ellipsis overflow-hidden block"
                >
                  {{ post.title }}
                </h3>
                <div
                  class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6"
                >
                  <p class="text-whiter">{{ post.date }}</p>
                  <div class="w-7/12 md:w-1 h-1 md:h-7 bg-blue-4" />
                  <p class="text-whiter">By {{ post.author }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cut-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
</style>
