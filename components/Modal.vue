<script setup lang="ts">
import { useDialogStore } from "~/stores/dialog";
import { useDataStore } from "~/stores/data";

const dataStore = useDataStore();
const dialogStore = useDialogStore();
const clickedOutside = () => {
  dialogStore.showModal = false;
  dataStore.singleProduct = null;
};
const productCategories = ref([
  {
    productName: "Carers’ handout for effective coproduction in social care.",
    productId: "65baf50183f8f3ab2b61689d",
    productLink: "https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/Carers'.pdf"
  },
  {
    productName:
      "Registered Managers’ handout for effective coproduction in social care.",
    productId: "65baf49983f8f3ab2b616898",
    productLink: "https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/Registered+Managers%E2%80%99.pdf"
  },
  {
    productName: "Directors handout for effective coproduction in social care.",
    productId: "65baf34d83f8f3ab2b616893",
    productLink: "https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/Directors%E2%80%99.pdf"
  },
]);

const payload = ref({
  product: "",
  email: "",
  preference: ""
})

const selectedProduct = productCategories.value.filter((product) => dataStore.singleProduct.productName === product.productName);
if (selectedProduct.length) {
  payload.value.product = selectedProduct[0].productId;
}

const downloadHandout = () => {
  const link = document.createElement('a');
  link.href = selectedProduct[0].productLink;
  const fileName = selectedProduct[0].productName;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
}
</script>

<template>
  <div class="parent flex justify-center items-center">
    <div
      v-click-outside="clickedOutside"
      class="bg-white px-10 py-6 rounded-xl pb-16 gap-10 flex flex-col items-center relative w-5/6 max-w-[640px]"
    >
      <Icon @click="dialogStore.showModal = false" class="absolute right-4 top-4" name="mdi:close" color="#000000" size="24" />
      <div class="flex flex-col items-center text-center">
        <img class="mt-10" src="/img/send.png" alt="" />
        <div class="flex flex-col mt-4">
          <h3 class="font-semibold text-[28px] leading-[44px]">
            We've successfully processed your application request
          </h3>
          <p class="mt-3 font-light text-grey-8 leading-[32px]">
            An email containing the details of your application has just been
            sent to
          </p>
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
</style>
