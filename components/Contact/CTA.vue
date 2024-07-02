<script setup lang="ts"></script>
<template>
  <div class="bg-blue-2 py-[120px] w-full">
    <div
      class="bg-blue-2 flex flex-col lg:flex-row justify-between items-center md:px-6 xl:px-0 lg:my-[120px] mx-auto w-full max-w-[1240px]"
    >
      <div
        class="w-full flex flex-col lg:items-start md:text-center px-4 lg:px-4 xl:px-0 lg:text-left md:max-w-[480px] md:pr-4"
      >
        <h2
          class="leading-[48px] lg:leading-[48px] tracking-[-1.5px] text-[32px] lg:text-[32px] w-full max-w-[520px] lg:max-w-[532px]"
        >
          Careers at Novus Microfinance Bank
        </h2>
        <p class="leading-[28px] text-grey-8 text-lg mt-2">
          Looking for exciting career opportunities? Explore our current job
          openings below and join our dynamic team of professionals dedicated to
          making a difference in the financial sector. At Novus MFB, we value
          talent, creativity, and passion, and we are eager to welcome
          individuals who share our vision of excellence, positive vibes to work
          and customer-centric service.
          <br /><br />
          Browse through our vacancies and take the next step towards a
          rewarding career with us.
        </p>
        <div class="flex mt-10">
          <nuxt-link
            to="/career"
            class="bg-secondary font-medium text-white flex rounded py-4 w-full justify-center px-8"
          >
            Join Us Today
          </nuxt-link>
        </div>
      </div>
      <div class="mt-10 lg:mt-0 w-full max-w-[588px]">
        <img
          src="/img/career-group.webp"
          alt="picture of people sitting having meeting"
        />
        <div id="team" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
