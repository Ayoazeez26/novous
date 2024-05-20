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
          <p class="mt-4 mb-6b">
            The latest news, articles, and resources, sent to your inbox weekly.
            We promise not to spam you.
          </p>
        </div>

        <form>
          <div class="flex items-center gap-4">
            <input
              type="email"
              name="email"
              id="email"
              value=""
              placeholder="Email Address"
              required
              class="bg-white border text-black-3 font-medium rounded py-3 px-4 w-[70%] md:text-auto outline-none"
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
      class="border-t mt-40 border-grey-5 flex justify-between pt-[33px] text-sm flex-wrap"
    >
      <p class="text-xs font-medium">
        © Copyright 2024, All Rights Reserved by Novus Bank
      </p>
      <div class="flex items-start justify-between text-white/80">
        <div class="flex space-x-2 items-center">
          <a
            href="#"
            class="social-icon"
          >
            <img src="/svg/x.svg" alt="x logo">
          </a>
          <a
            href="#"
            class="social-icon"
          >
            <img src="/svg/instagram.svg" alt="instagram logo">
          </a>
          <a
            href="#"
            class="social-icon"
          >
            <img src="/svg/facebook.svg" alt="facebook logo">
          </a>
          <a
            href="#"
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
