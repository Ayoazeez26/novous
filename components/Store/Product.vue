<script setup lang="ts">
import { useDataStore } from "~/stores/data";

const dataStore = useDataStore();
const router = useRouter();
console.log(dataStore.singleProduct);

let count = ref(1);

const reduceCount = () => {
  if (count.value > 1) count.value--;
};

const increaseCount = () => {
  count.value++;
};

window.scrollTo(0, 0);
</script>
<template>
  <div class="py-20 md:py-28 w-full">
    <div
      class="w-full max-w-[1317px] flex flex-col h-full pt-[140px] gap-14 px-4 md:px-6 xl:px-0 mx-auto"
    >
      <button
        @click="router.go(-1)"
        class="back-btn cursor-pointer self-start px-2 py-1 flex items-center pr-3 gap-2"
      >
        <Icon name="mdi:chevron-left" size="20" />
        <p>Back</p>
      </button>
      <div class="flex w-full gap-8 lg:gap-14">
        <div class="flex flex-col">
          <div class="images w-[616px] overflow-hidden">
            <img
              class="w-full"
              :src="dataStore.singleProduct.productImages[0].Location"
              alt="bridging the gap"
            />
          </div>
          <div
            v-if="
              dataStore.singleProduct.thumbNails &&
              dataStore.singleProduct.thumbNails.length
            "
            class="flex gap-9"
          >
            <img
              v-for="(thumbNail, index) in dataStore.singleProduct.thumbNails"
              :key="index"
              class="w-[115px] h-[89px]"
              :src="thumbNail.Location"
              :alt="thumbNail.Location"
            />
          </div>
        </div>
        <div class="flex flex-col w-full max-w-[648px]">
          <div class="flex gap-1 items-center mb-7">
            <nuxt-link to="/store">Online Store</nuxt-link>
            <Icon name="material-symbols:arrow-forward-ios" />
            <nuxt-link class="text-blue-14 font-bold" to="#"
              >Shop Now</nuxt-link
            >
            <Icon name="material-symbols:arrow-forward-ios" color="#1D5BBE" />
          </div>
          <h3 class="text-xl text-black-2 font-medium leading-[28px]">
            {{
              dataStore.singleProduct.thumbNails &&
              dataStore.singleProduct.thumbNails.length
                ? dataStore.selectedWeek
                : dataStore.singleProduct.productName
            }}
          </h3>
          <!-- <h3 v-else class="text-xl text-black-2 font-medium leading-[28px]">
          {{ dataStore.singleProduct.productName }}
        </h3> -->
          <div class="mt-6 flex items-center text-grey-14 w-full">
            <div class="w-1/2 flex gap-1">
              <p>Category:</p>
              <p class="text-black-2 font-bold uppercase">
                {{ dataStore.singleProduct.category }}
              </p>
            </div>
            <div class="w-1/2 flex gap-1">
              <p>Availability:</p>
              <p class="text-green-2 font-bold">
                {{ dataStore.singleProduct.availability }}
              </p>
            </div>
          </div>
          <div class="flex items-center mt-[11px] gap-[6px]">
            <!-- <p class="line-through text-grey-13 text-[28px]">
            {{ singleProduct.slashedPrice }}
          </p> -->
            <p class="font-bold text-blue-13 text-[28px]">
              £{{ dataStore.singleProduct.price }}
            </p>
            <div
              v-if="
                dataStore.singleProduct.thumbNails &&
                dataStore.singleProduct.thumbNails.length
              "
              class="bg-yellow-2 text-sm font-bold text-blue-10 rounded-sm px-2.5 py-[5px] max-w-fit"
            >
              Get 4 documents
            </div>
          </div>
          <div class="my-[11px] w-full h-px bg-grey-15"></div>
          <p class="text-black-3 text-lg font-semibold">Description</p>
          <p class="leading-[31.626px] mt-[18px] text-grey-14">
            {{ dataStore.singleProduct.description }}
          </p>
          <div class="my-[11px] w-full h-px bg-grey-15"></div>
          <div class="flex gap-4 items-center">
            <template
              v-if="
                dataStore.singleProduct.thumbNails &&
                dataStore.singleProduct.thumbNails.length
              "
            >
              <div class="my-8 max-w-full">
                <a
                  href="https://s3.eu-west-2.amazonaws.com/files.tgpcmedia/pdfs/feb-enhancers.zip"
                  target="_blank"
                  class="bg-blue-4 rounded flex gap-[18px] h-[53px] items-center justify-center max-w-full w-[321px]"
                  download
                >
                  <p class="text-whiter text-sm">Download Now</p>
                  <Icon name="mdi:arrow-right" size="20" color="#FFFFFF" />
                </a>
              </div>
            </template>
            <template v-else>
              <div class="my-8 max-w-full">
                <a
                  href="https://wa.me/447903094884"
                  target="_blank"
                  class="bg-blue-15 border border-blue-4 rounded flex gap-[18px] h-[53px] items-center justify-center max-w-full w-[321px]"
                >
                  <p class="text-blue-4 text-sm">Shop Now</p>
                  <Icon name="mdi:arrow-right" size="20" color="#0073FF" />
                </a>
              </div>
              <div
                class="px-5 py-4 rounded border-2 border-grey-15 flex items-center w-[164px] justify-between"
              >
                <Icon
                  @click="reduceCount"
                  class="cursor-pointer"
                  name="bi:dash-lg"
                />
                <span>{{ count < 10 ? `0${count}` : count }}</span>
                <Icon
                  @click="increaseCount"
                  class="cursor-pointer"
                  name="mdi:plus"
                />
              </div>
            </template>
            <div class="flex items-center gap-3">
              <p class="text-grey-17 text-sm">Share product:</p>
              <Icon name="bi:copy" color="#5F6C72" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.back-btn {
  border-radius: 4px;
  background: rgba(56, 74, 98, 0.1);
}
</style>
