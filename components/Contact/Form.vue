<script setup lang="ts">
import { useDataStore } from "~/stores/data";

const data = useDataStore();
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const handleSubmit = async (event: Event) => {
  event.preventDefault();

  const formData = {
    data: {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      subject: subject.value,
      content: message.value,
    },
  };

  await data.contactUs(formData);
  console.log("Form Data:", formData);
};
</script>

<template>
  <div class="bg-blue-2 py-[120px] w-full">
    <div
      class="bg-blue-2 flex flex-col lg:flex-row justify-between items-center md:px-6 xl:px-0 lg:my-[120px] mx-auto w-full max-w-[1240px]"
    >
      <div class="w-full">
        <div class="text-center">
          <h2
            class="leading-[48px] lg:leading-[48px] tracking-[-1.5px] text-2xl lg:text-[32px] w-full"
          >
            Say hello, we want to hear from you
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-24 mt-12 md:px-0 px-5">
          <div class="mt-10 lg:mt-0 w-full">
            <img
              src="/img/contents.webp"
              alt="picture of people sitting having meeting"
            />
          </div>
          <div>
            <form @submit="handleSubmit" class="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                id="firstName"
                class="form-input"
                placeholder="First Name"
                v-model="firstName"
              />
              <input
                type="text"
                id="lastName"
                class="form-input"
                placeholder="Last Name"
                v-model="lastName"
              />
              <input
                type="email"
                id="email"
                class="form-input md:col-span-2"
                placeholder="Email Address"
                v-model="email"
              />
              <input
                type="text"
                id="subject"
                class="form-input md:col-span-2"
                placeholder="Subject"
                v-model="subject"
              />
              <textarea
                name="message"
                id="message"
                rows="5"
                class="form-input md:col-span-2"
                placeholder="Message"
                v-model="message"
              ></textarea>
              <button
                type="submit"
                class="bg-secondary text-white py-5 w-full rounded-md md:col-span-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
