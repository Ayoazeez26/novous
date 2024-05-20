<template>
  <footer class="bg-black-2 py-[120px] md:px-[101.6px] px-5 text-white">
    <div class="flex justify-between text-sm flex-wrap">
      <div class="">
        <h6 class="font-semibold">Company</h6>
        <ul class="flex flex-col gap-7 mt-8">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Career</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="">
        <h6 class="font-semibold">Services</h6>
        <ul class="flex flex-col gap-7 mt-8">
          <li>
            <a href="/">Side Hustle</a>
          </li>
          <li>
            <a href="/">Personal Banking</a>
          </li>
          <li>
            <a href="/">Business Banking</a>
          </li>
          <li>
            <a href="/">Payment Services</a>
          </li>
        </ul>
      </div>
      <div class="">
        <h6 class="font-semibold">Help & Support</h6>
        <ul class="flex flex-col gap-7 mt-8">
          <li>
            <a href="/">Customer Support</a>
          </li>
          <li>
            <a href="/">Terms & Condition</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div class="w-full max-w-[376px]">
        <div class="mb-8">
          <h4 class="md:text-2xl text-xl md:px-0 px-20 md:mb-0 mb-5">
            Subscribe to our Newsletter
          </h4>
          <p class=" mt-4 mb-6b">
            The latest news, articles, and resources, sent to your inbox weekly. We promise not to spam you.
          </p>
        </div>

        <form>
          <div
            class="flex items-center md:border-2 border border-[#568df8] justify-between rounded-[15px] md:mx-0 mx-3"
          >
            <input
              type="text"
              name="phone"
              id="phone"
              value="+44"
              class="bg-transparent py-2 px-3 w-[70%] md:text-auto text-sm outline-none"
            />
            <button
              disabled
              class="bg-[#122031] cursor-auto uppercase rounded-[15px] py-2 px-5 border-2 border-[#537ac5] my-0.5 md:text-base text-sm"
            >
              send request
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="grid md:grid-cols-5 mt-[72px] pb-24">
      <div class="md:col-span-2">
        <div class="md:mt-28 mt-10 flex flex-col">
          <a href="" class="text-white/40">Copyright</a>
          <a href="" class="text-white/40">Privacy</a>
          <a href="" class="text-white/40">All rights reserved</a>
        </div>
      </div>
      <div class="md:col-span-3">
        <div class="md:mt-0 mt-5">
          <h5 class="text-white/40 sans mb-6">Contact us</h5>
          <div
            class="flex md:flex-row flex-col md:space-y-0 space-y-4 items-start justify-between text-white/80"
          >
            <div class="flex flex-col">
              <a href="tel:+447903094884 ">+44 7903 094884 </a>
            </div>
            <a href="mailto:hello@ocmanagementconsultants.co.uk"
              >hello@ocmanagementconsultants.co.uk</a
            >
            <a
              href="https://healthandsocialcaretenders.co.uk/"
              class="bg-[#2c71f6] text-white transition-all duration-300 hover:bg-white hover:text-[#2c71f6] uppercase rounded-[15px] py-3 px-10 border-4 border-[#537ac5] my-0.5 text-sm"
            >
              visit tender portal
            </a>
          </div>
        </div>
        <div
          class="mt-16 flex md:flex-row flex-col md:space-x-[90px] md:space-y-0 space-y-5"
        >
          <div>
            <h5 class="text-white/40 sans mb-6">Follow us</h5>
            <div class="flex items-start justify-between text-white/80">
              <div class="flex space-x-2 items-center">
                <a
                  href="https://web.facebook.com/p/O-C-Management-Consultants-100067805363248/?_rdc=1&_rdr"
                  class="social-icon"
                >
                  <Icon name="mdi:facebook-box" size="20px" class="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/o-c-management-consultants/"
                  class="social-icon"
                >
                  <Icon name="mdi:linkedin" size="20px" class="" />
                </a>
                <a
                  href="https://www.instagram.com/ocmanagementconsultants/"
                  class="social-icon"
                >
                  <Icon name="mdi:instagram" size="20px" class="" />
                </a>
                <a
                  href="https://www.youtube.com/@ocmanagementconsultants"
                  class="social-icon"
                >
                  <Icon name="mdi:youtube" size="20px" class="" />
                </a>
              </div>
            </div>
          </div>
          <!-- <div>
            <h5 class="text-white/40 sans mb-6">Let's Chat</h5>
            <div class="flex items-start justify-between text-white/80">
              <div class="flex space-x-2 items-center">
                <a href="https://www.facebook.com/" class="social-icon"
                  ><Icon name="simple-icons:viber" size="20px" class=""
                /></a>
                <a href="https://www.google.com/" class="social-icon"
                  ><Icon name="mdi:telegram" size="20px" class=""
                /></a>
                <a href="https://www.instagram.com/" class="social-icon"
                  ><Icon name="mdi:whatsapp" size="20px" class=""
                /></a>
              </div>
            </div>
          </div> -->
        </div>
        <div class="mt-16 flex md:space-x-[90px]">
          <div>
            <h5 class="text-white/40 sans mb-6">Location</h5>
            <p class="text-white/80">
              Blue information 133 Benets Rd, Hornchurch RM11 3PT, UK
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
