<template>
  <div>
    <NewHeader />
    <div class="my-44 pt-20 md:max-w-xl md:mx-auto">
      <div class="text-center mb-10 space-y-5">
        <h4 class="sans text-[40px]">Yes, you’ve successfully ordered!</h4>
        <p>
          Your payment has been successfully processed, and your order is
          confirmed.
        </p>
      </div>

      <div class="p-8 text-center border shadow rounded-lg">
        <img src="/svg/check.svg" class="mx-auto animate-pulse" />
        <h4 class="font-bold sans text-2xl mt-8 mb-7">
          Payment Successful <br />
          Thanks a lot for putting up this order
        </h4>
        <p>Please provide us your email address below</p>

        <div class="bg-[#ebf3ff] py-8 px-5 mt-8 mb-12">
          <div class="flex items-center space-x-6 p-4 bg-white">
            <Icon name="material-symbols:mail-rounded" color="#000" size="24" />
            <input
              type="email"
              name="email"
              id="email"
              class="w-full outline-none"
              placeholder="Email Address"
              v-model="email"
            />
          </div>
        </div>
        <div class="flex items-center justify-between space-x-6 mb-8">
          <button
            @click="handleSubmit"
            :class="{ 'loading-btn': loading }"
            class="btn px-4 py-3 bg-[#12b76a] w-full text-white rounded font-bold"
          >
            <template v-if="!loading"> Proceed </template>
            <template v-else>
              <Icon name="eos-icons:bubble-loading" />
            </template>
          </button>
          <button
            @click="router.push('/store')"
            class="btn px-4 py-3 bg-[#FDBEBA] w-full text-[#DE1306] rounded font-bold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
</template>

<script lang="ts" setup>
import { errorToast } from "~/plugins/vue3-toastify";
import { successToast } from "~/plugins/vue3-toastify";

const id = localStorage.getItem("productId");
const email = ref("");
const loading = ref(false);
const errorMessage = ref("");
const router = useRouter();

const handleSubmit = () => {
  loading.value = true;
  const emailValue = email.value.trim();

  if (!emailValue) {
    errorToast("Email is required");
    errorMessage.value = "Email is required";
    loading.value = false;
    return;
  }

  const formData = {
    email: emailValue,
    product: id,
  };

  fetch("https://dev.tgpcmedia.com/payment/success", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Server Error");
      }
      return response.text();
    })
    .then((data) => {
      successToast("Email sent successfully");
      email.value = "";
      localStorage.removeItem("productId");
      router.push("/store");
      // console.log(localStorage);
    })
    .catch((error) => {
      console.error("Error:", error);
      errorToast("Failed to send email");
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style></style>
