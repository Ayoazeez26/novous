<script setup lang="ts">
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  console.log("Form Data:", formData);
};
</script>

<template>
  <div class="bg-blue py-[100px] w-full">
    <div
      class="bg-blue flex flex-col lg:flex-row justify-between items-center md:px-6 xl:px-0 lg:my-[20px] mx-auto w-full max-w-[1240px]"
    >
      <div class="w-full">
        <div class="text-center">
          <p class="pre-header">Don't be Shy</p>
          <h2
            class="leading-[48px] lg:leading-[48px] tracking-[-1.5px] text-2xl lg:text-[32px] text-white w-full"
          >
            Say hello, we want to hear from you
          </h2>
        </div>
        <div class="grid md:grid-cols-3 gap-24 mt-12 md:px-28 px-20">
          <div class="bg-white p-6 rounded-l-2xl w-[300px]">
            <div
              class="flex items-center justify-center rounded-[10px] text-white p-4 max-w-fit bg-blue mb-12"
            >
              <Icon name="ph:envelope" size="24" />
            </div>
            <h3 class="font-semibold text-xl mb-2">Email</h3>
            <p class="mb-5">
              Send a mail to our team and get responded to in less than 24 hours
            </p>
            <a href="mailto:info@novusmfb.com" class="font-medium underline"
              >info@novusmfb.com</a
            >
          </div>
          <div class="bg-white p-6 rounded-2xl w-[300px]">
            <div
              class="flex items-center justify-center rounded-[10px] text-white p-4 max-w-fit bg-blue mb-12"
            >
              <Icon name="material-symbols:location-on-rounded" size="24" />
            </div>
            <h3 class="font-semibold text-xl mb-2">Office</h3>
            <p class="mb-5">
              Come over to our headquarters, we are always ready to receive you
            </p>
            <a
              href="https://maps.app.goo.gl/bKcsVuZLvZkhnPtw8"
              target="_blank"
              class="font-medium"
            >
              Head Office: Plot BN10558, New Bridge Road, Makurdi, Benue state.
          </a>
          </div>
          <div class="bg-white p-6 rounded-r-2xl w-[300px]">
            <div
              class="flex items-center justify-center rounded-[10px] text-white p-4 max-w-fit bg-blue mb-12"
            >
              <Icon name="material-symbols:phone-in-talk-sharp" size="24" />
            </div>
            <h3 class="font-semibold text-xl mb-2">Phone</h3>
            <p class="mb-5">Mon-Fri from 8am to 5pm.</p>
            <p class="font-medium">070066887632 08122220105</p>
          </div>
        </div>
        <img src="/img/map.png" alt="" class="mt-10" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
