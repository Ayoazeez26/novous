<template>
  <header
    class="fixed w-full top-16 px-16 pt-8 z-40 md:inline-block hidden max-w-[1440px]"
  >
    <nav class="flex items-center justify-between">
      <div class="w-full">
        <img
          src="/img/logo.png"
          alt=""
          class="bg-[#0073ff] px-6 py-5 rounded-2xl w-40"
        />
      </div>
      <div class="w-full">
        <ul
          class="flex items-center space-x-6 px-11 py-6 bg-white shadow-md rounded-2xl text-sm"
        >
          <NuxtLink to="/about">
            <li class="min-w-max">About Us</li>
          </NuxtLink>
          <NuxtLink to="/services" class="flex items-center space-x-3">
            <li class="min-w-max">Services</li>
          </NuxtLink>
          <NuxtLink to="resources">
            <li class="min-w-max">Resources</li>
          </NuxtLink>
          <NuxtLink to="store">
            <li class="min-w-max">Online Store</li>
          </NuxtLink>
        </ul>
      </div>
      <div class="w-full">
        <div class="text-white uppercase tracking-wide text-right">
          <a
            href="https://healthandsocialcaretenders.co.uk/"
            class="bg-[#0073ff] p-7 rounded-2xl"
            >Visit Tender portal</a
          >
        </div>
      </div>
    </nav>
  </header>
  <header
    class="mobile md:hidden bg-[#3b3f59] text-white fixed top-0 w-full z-40"
  >
    <nav>
      <div class="flex items-center justify-between py-3 px-5 border-b">
        <img src="/img/logo.png" alt="" />
        <div @click="toggleMobileNav">
          <Icon
            v-if="!mobileNavOpen"
            name="gravity-ui:bars-descending-align-right"
            size="24"
          />
          <Icon v-else name="material-symbols:close" size="24" />
        </div>
      </div>
      <div v-show="mobileNavOpen" class="mobile-nav">
        <ul class="flex flex-col space-y-7 text-lg p-5">
          <li><NuxtLink to="/about">About us</NuxtLink></li>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/resources">Resources</NuxtLink></li>
          <li><NuxtLink to="/store">Online Store</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact us</NuxtLink></li>
        </ul>
        <div class="text-center bg-white py-5 text-black">
          <a href="https://healthandsocialcaretenders.co.uk/"
            >Visit Tender portal</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
  },
};
</script>
