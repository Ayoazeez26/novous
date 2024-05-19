<script setup lang="ts">
import { useDialogStore } from "~/stores/dialog";
import { useDataStore } from "~/stores/data";

const dataStore = useDataStore();
const dialogStore = useDialogStore();
const clickedOutside = () => {
  dialogStore.showModal = false;
  // dataStore.singleProduct = null;
};
const productCategories = ref([
  {
    productName: "Directors handout for effective coproduction in social care.",
    productId: "65baf34d83f8f3ab2b616893",
    productLink:
      "https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/Directors%E2%80%99_new.pdf",
    checked: false,
  },
  {
    productName: "Carers’ handout for effective coproduction in social care.",
    productId: "65baf50183f8f3ab2b61689d",
    productLink:
      "https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/Carers'_new.pdf",
    checked: false,
  },
  {
    productName:
      "Registered Managers’ handout for effective coproduction in social care.",
    productId: "65baf49983f8f3ab2b616898",
    productLink:
      "https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/Registered+Managers%E2%80%99_new.pdf",
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
  },
]);

const email = ref("");
const payload = ref({
  product: "",
  email: "",
  preference: "Handouts",
});

const errorMsg = ref({
  email: "",
});

let selectedProduct = ref({});

onMounted(() => {
  if (dataStore.singleProduct && dataStore.singleProduct.productName) {
    console.log(dataStore.singleProduct);
    // selectedProduct.value = productCategories.value.filter(
    //   (product) => dataStore.singleProduct.productName === product.productName
    // );
    // if (selectedProduct.value.length) {
    console.log(dataStore.singleProduct.id);
    payload.value.product = dataStore.singleProduct.id;
    preferences.value[1].checked = true;
    // if (selectedProduct.value[0].productId === "65baf50183f8f3ab2b61689d") {
    //   payload.value.preference = "Carers";
    // } else if (
    //   selectedProduct.value[0].productId === "65baf49983f8f3ab2b616898"
    // ) {
    //   payload.value.preference = "Managers";
    //   preferences.value[2].checked = true;
    // } else {
    //   payload.value.preference = "Directors";
    //   preferences.value[0].checked = true;
    // }
    // }
  }
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
  if (payload.value.email !== "" && errorMsg.value.email === "") {
    console.log(payload.value);
    const dataResponse = await dataStore.downloadHandout(payload.value);
    if (dataResponse) {
      console.log(dataResponse);
      const link = document.createElement("a");
      link.href = dataResponse;
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
      class="bg-white rounded-xl gap-10 flex flex-col items-start relative md:w-5/6 w-[90%] md:max-w-[1087px] overflow-x-hidden h-auto"
    >
      <div class="flex items-center justify-between py-5 px-10 w-full">
        <h4>Privacy Policy & Protection</h4>
        <Icon
          @click="dialogStore.showModal = false"
          class=""
          name="mdi:close"
          color="#555"
          size="24"
        />
      </div>
      <div class="flex flex-col text-center">
        <div
          class="flex md:flex-row flex-col justify-between items-stretch text-whiter"
        >
          <div class="flex flex-col items-center mt-[43px] pb-[49px] px-4">
            <img src="/img/logo.png" alt="logo" />
            <p class="uppercase mt-6 mb-2.5 text-sm">
              our free meeting enhancer
            </p>
            <h3
              class="font-semibold text-[24px] leading-[32px] tracking-[0.25px] text-whiter uppercase"
            >
              Achieve concrete goals in your meetings with
            </h3>
            <div class="type type-subscribe mt-[33px] self-start">
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
