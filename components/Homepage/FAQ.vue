<template>
  <section class="md:px-16 px-5 bg-[#f0f7f9]">
    <div
      class="grid md:grid-cols-5 rounded-t-[40px] overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        class="md:col-span-2 bg-[#6d5ae0] md:px-11 px-5 md:text-left text-center"
      >
        <div class="md:mb-[131px] mb-16">
          <h3
            class="sans text-white md:pt-[169px] pt-20 font-bold text-[100px] md:pb-12 pb-5"
          >
            FAQ's
          </h3>
          <p class="text-white text-lg">
            Find answers to frequently asked questions about OCMC's services,
            pricing, and how we work with clients to ensure the best possible
            results.
          </p>
        </div>
        <div class="md:mb-96 mb-20">
          <h3
            class="sans font-white font-bold text-white md:text-3xl text-xl mb-12"
          >
            Still have questions?
          </h3>
          <button
            class="w-[80%] bg-[#0073ff] text-white transition-all duration-500 hover:bg-white hover:text-[#0073ff] py-4 border border-white rounded-2xl"
          >
            <NuxtLink to="/store">Lets Talk</NuxtLink>
          </button>
        </div>
      </div>
      <div class="md:col-span-3 bg-[#e4dfff]">
        <HomepageQA />
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped></style>
