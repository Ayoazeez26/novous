<script setup lang="ts"></script>
<template>
  <div class="bg-peach mb-28 px-4 py-10 xl:px-0 w-full">
    <div
      class="flex flex-col mx-auto w-full max-w-[1240px]"
    >
      <div
        class="flex flex-col-reverse lg:flex-row justify-between items-center text-grey-6 w-full"
      >
        <div
          class="w-full flex flex-col items-center md:items-start max-w-[375px] md:max-w-full lg:max-w-[542px] mt-10 lg:mt-0"
        >
          <h2
            class="font-semibold leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-[28px] md:text-[42px] w-full capitalize"
          >
            Our Objective
          </h2>
          <p class="leading-6 md:leading-[30px] text-sm md:text-lg mt-1">
            Our goal is to promote economic development in the community by
            offering financial services to its members and by supporting
            individuals, nMSMEs, and agricultural endeavours as well as job
            creation, trade, and rural development. This will be accomplished by
            offering low-cost, high-impact financial products that are tailored
            to the unique needs of the community.
          </p>
          <div class="flex flex-wrap gap-x-4 md:gap-x-8 mt-8 leading-[18px] md:leading-[28px] text-xs md:text-lg gap-y-5">
            <div class="flex gap-3 items-center md:items-start w-[175px] md:w-[246px]">
              <img class="w-5 md:w-6" src="/svg/check.svg" alt="first pic" />
              <p class="">Tailored Financial Products:</p>
            </div>
            <div class="flex gap-3 items-center md:items-start w-[175px] md:w-[246px]">
              <img class="w-5 md:w-6" src="/svg/check.svg" alt="first pic" />
              <p class="">Job Creation Initiatives:</p>
            </div>
            <div class="flex gap-3 items-center md:items-start w-[175px] md:w-[246px]">
              <img class="w-5 md:w-6" src="/svg/check.svg" alt="first pic" />
              <p class="">Commerce Support:</p>
            </div>
            <div class="flex gap-3 items-center md:items-start max-w-fit md:w-[255px]">
              <img class="w-5 md:w-6" src="/svg/check.svg" alt="first pic" />
              <p class="">Rural Development Projects:</p>
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
