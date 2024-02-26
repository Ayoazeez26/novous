<script setup lang="ts">
import { ref, watch } from "vue";

const opened = ref("first");
const first = ref(true);
const second = ref(false);
const third = ref(false);
const fourth = ref(false);
const fifth = ref(false);

const resetOtherVariables = (currentRef) => {
  if (currentRef === first) {
    second.value = false;
    third.value = false;
    fourth.value = false;
    fifth.value = false;
  } else if (currentRef === second) {
    first.value = false;
    third.value = false;
    fourth.value = false;
    fifth.value = false;
  } else if (currentRef === third) {
    first.value = false;
    second.value = false;
    fourth.value = false;
    fifth.value = false;
  } else if (currentRef === fourth) {
    first.value = false;
    second.value = false;
    third.value = false;
    fifth.value = false;
  } else if (currentRef === fifth) {
    first.value = false;
    second.value = false;
    third.value = false;
    fourth.value = false;
  }
};

watch([first, second, third, fourth, fifth], () => {
  resetOtherVariables(opened);
});
</script>

<template>
  <div class="flex md:pl-6 md:mt-20 mt-10 md:pb-0 pb-56">
    <div class="w-full">
      <div class="">
        <div
          @click="first = !first"
          class="md:p-8 p-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="faq__container">
            <h3 class="sans faq__question">What is HSCT Portal?</h3>
            <div class="faq__button">
              <Icon
                v-if="first"
                class="cursor-pointer"
                name="material-symbols-light:arrow-downward-alt"
                color="#000000"
                size="24px"
              />
              <Icon
                v-else
                class="cursor-pointer"
                name="material-symbols-light:arrow-upward-alt"
                color="#000000"
                size="24px"
              />
            </div>
          </div>
          <p v-if="first" class="faq__answer">
            Find answers to frequently asked questions about OCMC's services,
            pricing, and how we work with clients to ensure the best possible
            results.
          </p>
        </div>
        <div
          @click="second = !second"
          class="md:p-8 p-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="faq__container">
            <h3 class="sans faq__question">What are the benefits?</h3>
            <div class="faq__button">
              <Icon
                v-if="second"
                class="cursor-pointer"
                name="material-symbols-light:arrow-downward-alt"
                color="#000000"
                size="24px"
              />
              <Icon
                v-else
                class="cursor-pointer"
                name="material-symbols-light:arrow-upward-alt"
                color="#000000"
                size="24px"
              />
            </div>
          </div>
          <p v-if="second" class="faq__answer">
            Find answers to frequently asked questions about OCMC's services,
            pricing, and how we work with clients to ensure the best possible
            results.
          </p>
        </div>
        <div
          @click="third = !third"
          class="md:p-8 p-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="faq__container">
            <h3 class="sans faq__question">What types of services?</h3>
            <div class="faq__button">
              <Icon
                v-if="third"
                class="cursor-pointer"
                name="material-symbols-light:arrow-downward-alt"
                color="#000000"
                size="24px"
              />
              <Icon
                v-else
                class="cursor-pointer"
                name="material-symbols-light:arrow-upward-alt"
                color="#000000"
                size="24px"
              />
            </div>
          </div>
          <p v-if="third" class="faq__answer">
            Find answers to frequently asked questions about OCMC's services,
            pricing, and how we work with clients to ensure the best possible
            results.
          </p>
        </div>
        <div
          @click="fourth = !fourth"
          class="md:p-8 p-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="faq__container">
            <h3 class="sans faq__question">How to contact?</h3>
            <div class="faq__button">
              <Icon
                v-if="fourth"
                class="cursor-pointer"
                name="material-symbols-light:arrow-downward-alt"
                color="#000000"
                size="24px"
              />
              <Icon
                v-else
                class="cursor-pointer"
                name="material-symbols-light:arrow-upward-alt"
                color="#000000"
                size="24px"
              />
            </div>
          </div>
          <p v-if="fourth" class="faq__answer">
            Find answers to frequently asked questions about OCMC's services,
            pricing, and how we work with clients to ensure the best possible
            results.
          </p>
        </div>
        <div
          @click="fifth = !fifth"
          class="md:p-8 p-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="faq__container">
            <h3 class="sans faq__question">What are the pricing options?</h3>
            <div class="faq__button">
              <Icon
                v-if="fifth"
                class="cursor-pointer"
                name="material-symbols-light:arrow-downward-alt"
                color="#000000"
                size="24px"
              />
              <Icon
                v-else
                class="cursor-pointer"
                name="material-symbols-light:arrow-upward-alt"
                color="#000000"
                size="24px"
              />
            </div>
          </div>
          <p v-if="fifth" class="faq__answer">
            Find answers to frequently asked questions about OCMC's services,
            pricing, and how we work with clients to ensure the best possible
            results.
          </p>
        </div>
      </div>
    </div>
    <div class="" id="connect" />
  </div>
</template>

<style scoped></style>
