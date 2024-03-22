<template>
  <header
    class="fixed w-full top-16 px-16 pt-8 z-40 md:inline-block hidden max-w-[1440px]"
  >
    <nav class="flex items-center justify-between">
      <div class="w-full">
        <img
          src="/svg/header-logo.svg"
          alt=""
          class="bg-[#0073ff] px-6 py-5 rounded-2xl"
        />
      </div>
      <div class="w-full">
        <ul
          class="flex items-center space-x-6 px-11 py-6 bg-white shadow-md rounded-2xl text-sm"
        >
          <a href="/about">
            <li>About Us</li>
          </a>
          <a href="/services" class="flex items-center space-x-3">
            <li>Services</li>
          </a>
          <a href="resources">
            <li>Resources</li>
          </a>
          <a href="store">
            <li>Online Store</li>
          </a>
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
        <img src="/svg/logo.svg" alt="" />
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
          <li><a href="/about">About us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/store">Online Store</a></li>
          <li><a href="/contact">Contact us</a></li>
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
