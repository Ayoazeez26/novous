<template>
  <footer class="bg-black-2 py-[120px] md:px-[101.6px] px-5 text-white">
    <div class="flex justify-between gap-10 text-sm flex-wrap">
      <div class="">
        <h6 class="font-semibold text-white">Company</h6>
        <ul class="flex flex-col gap-7 mt-8">
          <li>
            <a href="/about">About</a>
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
        <h6 class="font-semibold text-white">Services</h6>
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
        <h6 class="font-semibold text-white">Help & Support</h6>
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
          <h4 class="md:text-2xl text-white text-sm md:mb-0 mb-5">
            Subscribe to our Newsletter
          </h4>
          <p class="text-sm md:text-base mt-4 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
            We promise not to spam you.
          </p>
        </div>

        <form>
          <div class="flex flex-col md:flex-row w-full items-center gap-4">
            <input
              type="email"
              name="email"
              id="bemail"
              value=""
              placeholder="Email Address"
              required
              class="bg-white border text-black-3 font-medium rounded py-3 px-4 w-full md:w-[70%] md:text-auto outline-none"
            />
            <button
              disabled
              class="bg-secondary cursor-auto rounded py-3 px-4 border-2 border-secondary md:text-base text-sm"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="border-t mt-40 border-grey-5 flex flex-col-reverse gap-8 md:flex-row justify-between pt-[33px] text-sm flex-wrap"
    >
      <p class="text-xs font-medium">
        © Copyright 2024, All Rights Reserved by Novus Bank
      </p>
      <div class="flex items-start justify-between text-white/80">
        <div class="flex space-x-2 items-center">
          <a
            href="https://twitter.com/NovusMFB"
            class="social-icon"
          >
            <img src="/svg/x.svg" alt="x logo">
          </a>
          <a
            target="_blank"
            
            href="https://www.instagram.com/novusmfb/"
            class="social-icon p-2"
          >
            <img src="/svg/instagram.svg" alt="instagram logo">
          </a>
          <a
            target="_blank"
            href="https://ng.linkedin.com/in/novus-microfinance-bank-859521307"
            class="social-icon"
          >
            <img class="w-4 h-4" src="/svg/linkedin.svg" alt="Linkedin logo">
          </a>
          <a
            href="https://whatsapp.com/channel/0029VaYoihl77qVZLhr53g1D"
            target="_blank"
            class="social-icon"
          >
            <img src="/svg/whatsapp.svg" alt="whatsapp logo">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
