<script setup lang="ts">
import { useDialogStore } from "~/stores/dialog";
import { useDataStore } from "~/stores/data";

const dialogStore = useDialogStore();
const router = useRouter();
const clickedOutside = () => {
  dialogStore.showModal = false;
};

const goToPrivacy = () => {
  clickedOutside();
  router.push("/privacy-policy");
}
</script>

<template>
  <div class="parent flex justify-center items-center">
    <div
      v-click-outside="clickedOutside"
      class="bg-white rounded-xl flex flex-col items-start relative md:w-5/6 w-[90%] md:max-w-[1000px] overflow-x-hidden h-auto"
    >
      <div
        class="border-b border-b-grey-2 flex items-center justify-between py-5 px-4 md:px-10 w-full"
      >
        <h4 class="text-sm md:text-2xl font-bold">
          Privacy Policy & Protection
        </h4>
        <Icon
          @click="dialogStore.showModal = false"
          class=""
          name="mdi:close"
          color="#555"
          size="24"
        />
      </div>
      <div class="flex flex-col">
        <div
          class="flex md:flex-row flex-col justify-between items-stretch text-whiter"
        >
          <div class="flex flex-col justify-start px-4 md:px-10 py-5">
            <p
              class="text-xs leading-[20px] md:text-lg md:leading-[36px] border-b border-b-grey-2 pb-5"
            >
              This Privacy Notice refers to the
              <a href="#" class="text-secondary">Novusmfb.com</a> website and
              its related subdomains. By accessing or using our Service hosted
              on this domain, you indicate that you have read, understood, and
              agreed to our data collecting policies as outlined in our
              <button @click="goToPrivacy" class="text-secondary"
                >Privacy Policy</button
              >
               to be used for website operation, quality of service maintenance,
              and general website statistics.<br />
              We value your privacy and will only use your personal information
              to improve your banking experience. Continuing to use this
              platform shows your agreement to the processing of your personal
              data by Novus Microfinance bank, and third-party processors as
              outlined in our Privacy Policy, in compliance with the NDPR (2019)
              and the NDPA (2023).
            </p>
            <!-- <div class="type type-subscribe mt-5 self-start">
              <div class="flex items-start relative rounded">
                <label class="pl-0">
                  <input
                    type="radio"
                    name="handoutPreference"
                    id="Directors"
                    value="Directors"
                  />
                  <span class="text-sm text-wrap"></span>
                </label>
                <p class="text-left text-xs md:text-base mt-1.5 md:mt-0.5">Don't show again</p>
              </div>
            </div> -->
            <button
              @click="dialogStore.showModal = false"
              class="mt-5 bg-secondary text-white max-w-fit text-sm md:text-base font-medium self-center md:self-end px-[28px] md:px-12 py-2 md:py-5 rounded-lg"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
      <!-- <button
        @click="goHome"
        class="bg-secondary border-2 border-secondary flex items-center justify-center w-full gap-2 font-medium py-4 px-8 rounded text-white"
      >
        <p class="leading-[30px] tracking-[0.028px]">Continue</p>
      </button> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid $primary;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $primary transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

input[type="radio"] {
  display: none;
}

/*
 * Then, style the label so it looks like however you want.
 * Here's a quick rundown of how I did it here:
 */

/*
 * Some basic positioning styles, and we give it the pointer cursor to show 
 * that it's clickable
 */

.type label {
  display: inline-block;
  padding: 5px;
  cursor: pointer;
  min-width: max-content;
}

/*
 * With how I decided to build this, the position: relative is super important.
 * We're going to position a pseudo element within this element(As it is the containing box)
 */

.type label span {
  position: relative;
  line-height: 22px;
}

/* 
 * Because we're using pseudo elements, a content property is required to make them appear.
 */

.type label span:before,
.type label span:after {
  content: "";
}

/*
 * We are using the :before peudo elemnt as the actual button,
 * then we'll position the :after over it. You could also use a background-image,
 * font-icon, or really anything if you want different styles.
 * For the specific style we're going for, this approach is simply the easiest, but
 * once you understand the concept you can really do it however you like.
 */

.type label span:before {
  border: 2px solid #404976;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: center;
}

.type label span:after {
  background: #0073ff;
  width: 12px;
  height: 12px;
  position: absolute;
  top: -2px;
  left: 2px;
  transition: 300ms;
  opacity: 0;
}

.type-subscribe label span:after {
  background: $secondary;
  width: 12px;
  height: 12px;
  position: absolute;
  top: -2px;
  left: 2px;
  transition: 300ms;
  opacity: 0;
}

/*
 * This is the most important part of this whole file, if you understand what's happening here
 * you can really make this in so many different ways.
 * 
 * We start by selecting the input inside of the .type label, with ".type label input". From there we use the 
 * ":checked" selector to *only* select the input when it is checked. We then use the immediate sibling 
 * selector(+) to select the span, and then it's pseudo element :after(What we are using to mark the button)
 * Because we already styled the :after, all we have to do is set the opacity to 1, making it fade in.
 */
.type label input:checked + span:after {
  opacity: 1;
}
</style>
