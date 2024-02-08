<script setup lang="ts">
import { useDialogStore } from "~/stores/dialog";
import { useDataStore } from "~/stores/data";

const dataStore = useDataStore();
const dialogStore = useDialogStore();
const clickedOutside = () => {
  dialogStore.showMonthlyEnhancerModal = false;
  dataStore.singleProduct = null;
};
const productCategories = ref([
  {
    productName: "Directors handout for effective coproduction in social care.",
    productId: "65baf34d83f8f3ab2b616893",
    productLink:
      "https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/Directors%E2%80%99.pdf",
    checked: false,
  },
  {
    productName: "Carers’ handout for effective coproduction in social care.",
    productId: "65baf50183f8f3ab2b61689d",
    productLink:
      "https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/Carers'.pdf",
    checked: false,
  },
  {
    productName:
      "Registered Managers’ handout for effective coproduction in social care.",
    productId: "65baf49983f8f3ab2b616898",
    productLink:
      "https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/Registered+Managers%E2%80%99.pdf",
    checked: false,
  },
]);

const preferences = ref([
  {
    value: "Directors",
    name: "Social Care Director",
    checked: false,
  },
  {
    value: "Carers",
    name: "Support Worker/Carer",
    checked: false,
  },
  {
    value: "Managers",
    name: "Care Manager",
    checked: false,
  }
])

const email = ref("");
const payload = ref({
  product: "",
  email: "",
  preference: "",
});

const errorMsg = ref({
  email: "",
});

let selectedProduct = ref([]);

onMounted(() => {
  payload.value.preference = dataStore.singleProduct.category;
  payload.value.product = dataStore.singleProduct.id;
}),
watch(email, (value) => {
  validateEmail(value);
});

const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.value.email = "";
    payload.value.email = email;
  } else {
    errorMsg.value.email = "Invalid Email Address";
  }
};

const downloadHandout = async () => {
  const href = "https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/February+Meeting+Enhancers+Week+1.zip"
  if (payload.value.email !== "" && errorMsg.value.email === "") {
    console.log(payload.value);
    const dataResponse = await dataStore.downloadHandout(payload.value);
    if (dataResponse === 'success') {
      console.log(dataResponse);
      const link = document.createElement("a");
      link.href = href;
      const fileName = dataStore.singleProduct.productName;
      link.setAttribute("download", fileName);
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      link.remove();
      clickedOutside();
    }
  } else {
    errorMsg.value.email = "Invalid Email Address";
  }
};
</script>

<template>
  <div class="parent flex justify-center items-center">
    <div
      v-click-outside="clickedOutside"
      class="bg-blue-4 rounded-xl gap-10 flex flex-col items-start relative w-5/6 max-w-[1087px]"
    >
      <Icon
        @click="dialogStore.showMonthlyEnhancerModal = false"
        class="absolute cursor-pointer right-4 top-4"
        name="mdi:close"
        color="#FFFFFF"
        size="24"
      />
      <div class="flex flex-col text-center">
        <div class="flex justify-between items-stretch text-whiter">
          <img class="w-[503px]" src="/img/monthly-enhancers.png" alt="monthly-enhancers image" />
          <div
            class="flex flex-col items-center mt-[43px] pb-[49px] px-4 w-[582px]"
          >
            <img src="/img/logo.png" alt="logo" />
            <p class="uppercase mt-6 mb-2.5 text-sm">
              our free meeting enhancer
            </p>
            <h3
              class="font-semibold text-[24px] leading-[32px] tracking-[0.25px] text-whiter max-w-[308px]"
            >
              Get Your February Meeting Enhancers Here!
            </h3>
            <div class="mt-11">Please enter your details here to Proceed</div>
            <div class="bg-blue-16 mt-2 rounded w-full">
              
              <div class="flex w-full pt-[30px] pb-6 px-4">
                <div class="flex flex-col relative w-full">
                  <!-- <label for="email" class="mb-2"></label> -->
                  <Icon
                    class="absolute top-3 left-4"
                    name="material-symbols:mail-rounded"
                    color="#000"
                    size="24"
                  />
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    required
                    class="bg-white text-black-2 bg-transparent rounded-lg py-4 pl-14 pr-2 focus:outline-none h-12"
                    :class="errorMsg.email ? 'border border-red' : ''"
                    placeholder="Enter your email address"
                  />
                  <span
                    v-if="errorMsg.email"
                    class="text-red text-left text-xs mt-1"
                    >{{ errorMsg.email }}</span
                  >
                  <span v-else class="text-transparent text-xs mt-1"
                    >There is no error message</span
                  >
                </div>
              </div>
            </div>
            <div class="type type-subscribe mt-14 self-start">
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
                <p class="text-left text-sm">
                  By subscribing to our newsletter you're agreeing to our terms
                  & conditions & cookie policy.
                </p>
              </div>
            </div>
            <button
              @click="downloadHandout"
              class="mt-5 bg-whiter text-blue-4 w-full text-lg px-4 py-3 font-medium"
            >
              Get My Enhancer
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
  padding: 5px 10px;
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
  margin-right: 10px;
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
  background: #000;
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
