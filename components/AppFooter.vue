<template>
  <footer
    class="bg-blue min-h-[633px] pt-12 flex flex-col justify-between px-4 md:px-6 xl:px-0"
  >
    <div
      class="flex flex-col-reverse text-center lg:text-left items-center lg:items-start lg:flex-row justify-between w-full max-w-[1240px] mx-auto"
    >
      <div
        class="mt-20 mb-12 lg:mb-0 lg:mt-0 flex flex-col items-center lg:items-start"
      >
        <nuxt-link to="/">
          <img class="w-[85px] md:w-[134px]" src="/svg/logo-footer.svg" />
        </nuxt-link>
        <p
          class="text-whiter text-lg w-full max-w-[310px] lg:text-left mt-3 font-normal"
        >
          Empower your organization's growth and elevate your impact.
        </p>
        <h6 class="lg:hidden text-xl font-semibold uppercase text-white mt-14">
          Community
        </h6>
        <div
          class="lg:hidden flex p-10 rounded-full lg:flex-col justify-center md:justify-start gap-10 mt-6"
        >
          <a href="#" target="_blank"
            ><Icon name="mdi:linkedin" size="24px" color="#FFFFFF"
          /></a>
          <a href="#" target="_blank"
            ><Icon name="ri:instagram-fill" size="24px" color="#FFFFFF"
          /></a>
          <a href="#" target="_blank"
            ><Icon name="mdi:twitter" size="24px" color="#FFFFFF"
          /></a>
          <a href="#" target="_blank"
            ><Icon name="ic:round-facebook" size="24px" color="#FFFFFF"
          /></a>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <div
          class="flex flex-col md:flex-row text-grey-9 flex-wrap items-center md:items-start gap-y-10 gap-x-[64px]"
        >
          <div class="flex flex-col">
            <h6 class="text-xl font-semibold uppercase text-white mb-4">
              Quick Links
            </h6>
            <nuxt-link class="mb-4" to="/about">About Us</nuxt-link>
            <nuxt-link class="mb-4" to="/services">Services</nuxt-link>
            <nuxt-link class="mb-4" to="/training">Training</nuxt-link>
            <nuxt-link class="mb-4" to="/blog">News</nuxt-link>
            <nuxt-link class="mb-4" to="/strategy"
              >Strategy and Management Consulting</nuxt-link
            >
          </div>
          <div class="flex flex-col">
            <h6 class="text-xl font-semibold uppercase text-white mb-4">
              Resources
            </h6>
            <nuxt-link class="mb-4" to="/resources">eBooks</nuxt-link>
            <nuxt-link class="mb-4" to="/resources">Videos</nuxt-link>
          </div>
          <!-- <div class="flex flex-col mt-10 text-grey-2">
            <h6 class="text-xl font-semibold uppercase text-white mb-4">Social Media</h6>
            <a href="#" target="_blank" class="mb-4">LinkedIn</a>
            <a href="#" target="_blank" class="mb-4">Facebook</a>
            <a href="#" target="_blank" class="mb-4">Twitter</a>
            <a href="#" target="_blank">Instagram</a>
          </div> -->
          <div class="flex flex-col">
            <h6 class="text-xl font-semibold uppercase text-white mb-4">
              Contact Us
            </h6>
            <p class="mb-4">03337722724</p>
            <!-- <p class="mb-4 break-words">hello@ocmanagementconsultants.co.uk</p> -->
            <!-- <p class="mb-4">Company's Address</p> -->
          </div>
        </div>
        <div class="hidden lg:flex flex-col items-end">
          <h6 class="text-xl font-semibold uppercase text-white mb-4">
            Community
          </h6>
          <div
            class="flex rounded-full justify-center md:justify-start gap-10 mt-3"
          >
            <a href="#" target="_blank"
              ><Icon name="mdi:linkedin" size="24px" color="#FFFFFF"
            /></a>
            <a href="#" target="_blank"
              ><Icon name="ri:instagram-fill" size="24px" color="#FFFFFF"
            /></a>
            <a href="#" target="_blank"
              ><Icon name="mdi:twitter" size="24px" color="#FFFFFF"
            /></a>
            <a href="#" target="_blank"
              ><Icon name="ic:round-facebook" size="24px" color="#FFFFFF"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-grey-9 py-6">
      <p class="text-center mb-3 leading-snug">Designed by TGPC Media</p>
      <p class="text-center leading-snug">
        © {{ new Date().getFullYear() }} OC Management Consultants. All Rights
        Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
