<script setup lang="ts">
const submitForm = () => {
  console.log("submitting form");
};

const errorMsg = reactive({});
const name = ref("");
const email = ref("");
const message = ref("");

const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.email = "";
  } else {
    errorMsg.email = "Invalid Email Address";
  }
};

const validateInput = (input, value) => {
  if (value) {
    errorMsg[input] = "";
  } else {
    errorMsg[input] = "Required";
  }
};

watch(name, (value) => {
  validateInput("name", value);
});

watch(email, (value) => {
  validateEmail(value);
});

watch(message, (value) => {
  validateInput("message", value);
});
</script>
<template>
  <div
    class="flex flex-col-reverse md:flex-row justify-center items-center my-[60px] lg:mt-[120px] mx-auto w-full max-w-[1240px]"
  >
    <div
      class="w-full flex flex-col justify-center items-center max-w-[612px] px-4 mt-6 md:mt-0"
    >
      <h2
        class="font-semibold leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-[26px] md:text-[32px] lg:text-[48px] capitalize"
      >
        connect <span class="text-blue-4">with us</span>
      </h2>
      <!-- <p class="text-center md:text-lg mt-3">
          Ready to achieve your organization's goals and maximize impact? Contact us today for a free consultation and see how O C Management Consultant can help you succeed.
        </p> -->
      <form
        id="getLicense"
        class="w-full flex flex-col items-start"
        @submit.prevent="submitForm"
      >
        <div class="w-full mt-6">
          <label for="firstName" class="font-medium mb-3">Name</label>
          <input
            id="firstName"
            v-model="name"
            type="text"
            name="firstName"
            required
            class="border border-blue-2 mt-2 rounded py-4 pl-6 pr-2 focus:outline-none w-full h-12"
            :class="errorMsg.name ? 'border border-red-500' : ''"
            placeholder="Enter your full name"
          />
          <span v-if="errorMsg.name" class="text-red-500 text-xs mt-1">{{
            errorMsg.name
          }}</span>
          <span v-else class="text-transparent text-xs mt-1"
            >There is no error message</span
          >
        </div>
        <div class="flex w-full mt-3">
          <div class="flex flex-col w-full">
            <label for="temail" class="font-medium mb-2">Email Address</label>
            <input
              id="temail"
              v-model="email"
              type="email"
              name="email"
              required
              class="border border-blue-2 mt-2 rounded py-4 pl-6 pr-2 focus:outline-none h-12"
              :class="errorMsg.email ? 'border border-red-500' : ''"
              placeholder="Enter your email address"
            />
            <span v-if="errorMsg.email" class="text-red-500 text-xs mt-1">{{
              errorMsg.email
            }}</span>
            <span v-else class="text-transparent text-xs mt-1"
              >There is no error message</span
            >
          </div>
        </div>
        <div class="flex w-full mt-3">
          <div class="flex flex-col w-full">
            <label for="message" class="font-medium mb-2">Message</label>
            <textarea
              id="message"
              v-model="message"
              name="message"
              rows="5"
              cols="30"
              class="border border-blue-2 mt-2 rounded py-4 px-6 focus:outline-none"
              placeholder="Enter your Email Address"
              maxlength="500"
            />
            <span v-if="errorMsg.message" class="text-red-500 text-xs mt-1">{{
              errorMsg.message
            }}</span>
            <span v-else class="text-transparent text-xs mt-1"
              >There is no error message</span
            >
            <!-- <p class="text-grey-4 italic">
                * Please limit your message to 500 characters
              </p> -->
          </div>
        </div>
        <div class="w-full flex justify-center mt-7 self-center md:px-20">
          <button
            type="submit"
            class="liquor-btn min-w-max py-4 md:py-3 px-8 rounded text-sm sm:text-base bg-blue-4 text-white w-full hover:bg-blue-3"
          >
            Contact
          </button>
        </div>
      </form>
      <a href="https://tgpcmedia.com/" target="_blank">
        <img
          class="w-[240px] mt-20"
          src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/tgpc.png"
          alt="designed by tgpc media"
        />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
