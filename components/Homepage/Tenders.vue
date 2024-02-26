<template>
  <section class="select-none md:mb-96 mb-32">
    <div>
      <img src="/svg/line.svg" alt="" class="mx-auto" />
      <img src="/svg/line-ellipse.svg" alt="" class="mx-auto" />
      <img src="/svg/line2.svg" alt="" class="mx-auto md:block hidden" />
      <img src="/svg/line3.svg" alt="" class="mx-auto md:hidden" />
      <!-- <img
        src="/svg/hsct-logo.svg"
        alt=""
        class="md:block hidden mx-auto w-20 -mb-20"
      /> -->
    </div>
    <div class="md:mx-16 mx-5 md:-mt-20 -mt-10 relative">
      <img src="/img/folder.png" alt="" class="md:block hidden" />
      <img src="/img/folder2.png" alt="" class="md:hidden" />
      <div
        class="absolute top-40 md:w-full md:grid md:grid-cols-2 md:flex-none flex flex-col pb-16 md:px-[89px] px-5 items-center gap-20 md:pl-[89px] pl-12"
      >
        <div>
          <div
            class="space-y-10 md:max-w-md max-w-[264px] md:text-left text-center"
          >
            <h3
              class="sans font-bold text-[#30374f] md:text-5xl text-2xl leading-normal"
            >
              <span class="text-[#0062f2]">500+</span> Live Tenders <br />
              Available Now!
            </h3>
            <p class="md:text-xl">
              Discover new Tenders with ease, register today
            </p>
            <button
              class="w-full bg-[#0073ff] text-white hover:bg-white hover:text-[#0073ff] hover:border-[#0073ff] transition-all duration-500 border border-[#DDDBDB] rounded-2xl py-4 md:text-xl"
            >
              Find My Tender
            </button>
          </div>
        </div>
        <div>
          <div
            class="md:h-[580px] h-[371px] md:w-[470px] w-[275px] bg-white rounded-2xl flex items-center justify-center px-16"
          >
            <img src="/gif/tenders.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
