<script setup lang="ts"></script>
<template>
  <div class="bg-peach mb-28 px-4 py-10 xl:px-0 w-full">
    <div
      class="flex flex-col mx-auto w-full max-w-[1240px]"
    >
      <div
        class="flex flex-col lg:flex-row justify-between items-center text-grey-6 w-full"
      >
        <div
          class="w-full flex flex-col items-center md:items-start text-center md:text-left max-w-[375px] md:max-w-full lg:max-w-[542px] mt-10 lg:mt-0"
        >
          <h2
            class="font-semibold leading-[48px] lg:leading-[54px] px-6 md:px-0 tracking-[-1.5px] text-[28px] md:text-[42px] w-full capitalize"
          >
            Our Objective
          </h2>
          <p class="leading-[30px] text-lg mt-1">
            Our goal is to promote economic development in the community by
            offering financial services to its members and by supporting
            individuals, nMSMEs, and agricultural endeavours as well as job
            creation, trade, and rural development. This will be accomplished by
            offering low-cost, high-impact financial products that are tailored
            to the unique needs of the community.
          </p>
          <div class="flex flex-wrap gap-x-8 mt-8 gap-y-5">
            <div class="flex gap-3 items-center md:items-start w-[246px]">
              <img src="/svg/check.svg" alt="first pic" />
              <p class="leading-[28px] text-lg">Tailored Financial Products:</p>
            </div>
            <div class="flex gap-3 items-center md:items-start w-[246px]">
              <img src="/svg/check.svg" alt="first pic" />
              <p class="leading-[28px] text-lg">Job Creation Initiatives:</p>
            </div>
            <div class="flex gap-3 items-center md:items-start w-[246px]">
              <img src="/svg/check.svg" alt="first pic" />
              <p class="leading-[28px] text-lg">Commerce Support:</p>
            </div>
            <div class="flex gap-3 items-center md:items-start w-[255px]">
              <img src="/svg/check.svg" alt="first pic" />
              <p class="leading-[28px] text-lg">Rural Development Projects:</p>
            </div>
          </div>
        </div>
        <img
          class="w-full max-w-[505px]"
          src="/img/arrow.webp"
          alt="picture of people sitting having meeting"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  color: white;
}
</style>
