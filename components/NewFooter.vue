<template>
  <footer class="bg-[#1d334d] pt-24 pb-20 md:px-[101.6px] px-5 sans">
    <div>
      <img src="/img/logo.png" alt="" class="mx-auto mb-[72px] md:w-1/2 w-[80%] grayscale invert" />
      <div class="bg-[#2c71f6] py-[60px] md:px-[120px] text-center rounded-b-[20.74px] relative md:mx-44">
        <!-- <img
          src="/svg/footer-border.svg"
          alt=""
          class="md:w-[99%] w-[97%] absolute md:bottom-1 bottom-2 md:left-1 left-1.5 md:block hidden"
        />
        <img
          src="/svg/footer-border2.svg"
          alt=""
          class="w-[98%] absolute bottom-1 left-1 md:hidden"
        /> -->
        <div class="mb-8">
          <h4 class="sans text-white md:text-2xl text-xl md:px-0 px-20 md:mb-0 mb-5">
            Do you have any questions?
          </h4>
          <p class="text-white font-sans font-light md:px-0 px-16 md:text-base text-sm">
            Please reach out to us with and we will respond immediately
          </p>
        </div>

        <form>
          <div
            class="flex items-center md:border-2 border border-[#568df8] justify-between rounded-[15px] md:mx-0 mx-3">
            <input type="text" name="phone" id="phone" value="+44"
              class="bg-transparent py-2 px-3 w-[70%] text-white md:text-auto text-sm outline-none" />
            <button disabled
              class="bg-[#122031] cursor-auto text-white uppercase rounded-[15px] py-2 px-5 border-2 border-[#537ac5] my-0.5 md:text-base text-sm">
              send request
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="grid md:grid-cols-5 mt-[72px] pb-24">
      <div class="md:col-span-2">
        <div class="">
          <h5 class="text-white/40 sans mb-6">Navigation</h5>
          <ul class="flex md:flex-row flex-col md:items-center md:space-x-11 md:space-y-0 space-y-4 text-white">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/service">Services</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>
              <a href="/store">Online Store</a>
            </li>
          </ul>
        </div>

        <div class="md:mt-28 mt-10 flex flex-col">
          <a href="" class="text-white/40">Copyright</a>
          <a href="" class="text-white/40">Privacy</a>
          <a href="" class="text-white/40">All rights reserved</a>
        </div>
      </div>
      <div class="md:col-span-3">
        <div class="md:mt-0 mt-5">
          <h5 class="text-white/40 sans mb-6">Contact us</h5>
          <div class="flex md:flex-row flex-col md:space-y-0 space-y-4 items-start justify-between text-white/80">
            <div class="flex flex-col">
              <a href="tel:+447903094884 ">+44 7903 094884 </a>
            </div>
            <a href="mailto:hello@ocmanagementconsultants.co.uk">hello@ocmanagementconsultants.co.uk</a>
            <a href="https://healthandsocialcaretenders.co.uk/"
              class="bg-[#2c71f6] text-white transition-all duration-300 hover:bg-white hover:text-[#2c71f6] uppercase rounded-[15px] py-3 px-10 border-4 border-[#537ac5] my-0.5 text-sm">
              visit tender portal
            </a>
          </div>
        </div>
        <div class="mt-16 flex md:flex-row flex-col md:space-x-[90px] md:space-y-0 space-y-5">
          <div>
            <h5 class="text-white/40 sans mb-6">Follow us</h5>
            <div class="flex items-start justify-between text-white/80">
              <div class="flex space-x-2 items-center">
                <a href="https://web.facebook.com/p/O-C-Management-Consultants-100067805363248/?_rdc=1&_rdr"
                  class="social-icon">
                  <Icon name="mdi:facebook-box" size="20px" class="" />
                </a>
                <a href="https://www.linkedin.com/company/o-c-management-consultants/" class="social-icon">
                  <Icon name="mdi:linkedin" size="20px" class="" />
                </a>
                <a href="https://www.instagram.com/ocmanagementconsultants/" class="social-icon">
                  <Icon name="mdi:instagram" size="20px" class="" />
                </a>
                <a href="https://www.youtube.com/@ocmanagementconsultants" class="social-icon">
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
