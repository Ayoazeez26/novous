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
            <h3 class="sans faq__question">What is your success rate like?</h3>
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
            Our 80% success rate is largely influenced by our collaborative
            approach. From finding tenders to submitting them, we guide our
            clients every step of the way. This approach not only welcomes
            client feedback but also ensures a thorough grasp of all tender
            requirements.
          </p>
        </div>
        <div
          @click="second = !second"
          class="md:p-8 p-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="faq__container">
            <h3 class="sans faq__question">
              I am a new provider and unsure how to start this business.
            </h3>
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
            For new providers, we recommend focusing on Dynamic Purchasing
            System (DPS) tenders due to their flexibility and openness to new
            providers. DPS tenders have fewer constraints, longer open periods,
            and basic requirements, making them ideal for newcomers.
          </p>
        </div>
        <div
          @click="third = !third"
          class="md:p-8 p-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="faq__container">
            <h3 class="sans faq__question">
              What's your tender writing and management process like?
            </h3>
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
            Upon receiving a tender you're keen on, we analyse it to ensure
            basic requirements are understood. Once confirmed, we start crafting
            the tender. Before submission, we share a draft for your review.
            After submission, you'll get a folder with a copy of all responses.
            If we source tenders for you, we tailor them to your profile and
            send them for your approval before submission.
          </p>
        </div>
        <div
          @click="fourth = !fourth"
          class="md:p-8 p-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="faq__container">
            <h3 class="sans faq__question">
              What are your payment services like?
            </h3>
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
            We require an initial down payment. Our pricing structure varies
            based on the complexity of the tender. Pricing can differ for DPS or
            framework tenders. For detailed pricing information, clients can
            request our pricing schedule via email.
          </p>
        </div>
        <!-- <div
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
        </div> -->
      </div>
    </div>
    <div class="" id="connect" />
  </div>
</template>

<style scoped></style>
