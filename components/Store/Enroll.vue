<script setup lang="ts"></script>
<template>
  <div
    class="flex flex-col lg:flex-row-reverse justify-between items-center my-[64px] px-4 md:px-6 xl:px-0 lg:my-[120px] mx-auto w-full max-w-[1240px]"
  >
    <div
      class="w-full flex flex-col items-center lg:items-start text-center lg:px-4 xl:px-0 lg:text-left mg:text-left max-w-[542px] md:pr-4"
    >
      <h2
        class="font-bold leading-[48px] lg:leading-[54px] px-6 md:px-0 tracking-[-1.5px] text-[32px] lg:text-[48px] w-full max-w-[520px] lg:max-w-[436px]"
      >
        Building Lasting Relationships
      </h2>
      <p class="leading-[28px] text-lg mt-4">
        We believe in the power of trust, transparency, and lasting
        relationships. Our commitment to your success goes beyond transactions.
        we forge strong, long-term partnerships.
      </p>
      <div class="flex mt-10">
        <nuxt-link to="" class="bg-blue-4 text-white flex rounded py-4 px-8">
          <img class="mr-3" src="/svg/yt.svg" alt="youtube icon" />
          Watch Our Story
        </nuxt-link>
      </div>
    </div>
    <div class="mt-10 lg:mt-0 w-full max-w-[612px]">
      <img
        src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/lasting.png"
        alt="picture of people sitting having meeting"
      />
      <div id="team" />
    </div>
  </div>
</template>

<style scoped></style>
