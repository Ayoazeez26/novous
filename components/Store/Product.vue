<script setup lang="ts">
import { useDialogStore } from "~/stores/dialog";
import { useDataStore } from "~/stores/data";
import { successToast } from "~/plugins/vue3-toastify";

const dataStore = useDataStore();
const dialogStore = useDialogStore();
const router = useRouter();
const route = useRoute();
let count = ref(1);
const phoneNumber = ref("7903094884");
const showSelectWeekDropdown = ref(false);
const message = ref("Hi, I would like to preorder a copy of The CQC Prepbook.");

onMounted(() => {});

const routeToWhatsapp = () => {
  return `https://api.whatsapp.com/send/?phone=%2B44${phoneNumber.value}&text=Hi, I would like to purchase a copy of "${dataStore.singleProduct.productName}" by OC Management Consultants%27`;
};

onMounted(() => {
  if (!dataStore.singleProduct) {
    const productId = route.params.id;
    getSingleProduct(productId);
  } else if (
    dataStore.singleProduct.productName === "February Meeting Enhancer" ||
    dataStore.singleProduct.productName === "Febuary Meeting Enhancer"
  ) {
    dataStore.singleProduct.productName = "";
  }
});

const getSingleProduct = async (id: string) => {
  const singleProduct = await dataStore.getSingleProduct(id);
  if (Object.entries(singleProduct).length) {
    dataStore.singleProduct = singleProduct;
  }
};

const reduceCount = () => {
  if (count.value > 1) count.value--;
};

const increaseCount = () => {
  count.value++;
};

window.scrollTo(0, 0);

const copyLink = () => {
  const link = window.location.href;
  navigator.clipboard.writeText(link);
  successToast("Link copied!");
};

const selectWeek = (week) => {
  dataStore.selectedWeek = week;
  showSelectWeekDropdown.value = false;
};
</script>
<template>
  <div v-if="dataStore.singleProduct" class="py-20 md:py-28 w-full">
    <div
      class="w-full md:max-w-[1317px] flex flex-col h-full pt-[140px] gap-14 px-4 md:px-6 xl:px-0 mx-auto"
    >
      <button
        @click="router.push('/store')"
        class="back-btn cursor-pointer self-start px-2 py-1 flex items-center pr-3 gap-2"
      >
        <Icon name="mdi:chevron-left" size="20" />
        <p>Back</p>
      </button>
      <div class="flex w-full gap-8 lg:gap-14 md:flex-row flex-col">
        <div class="flex flex-col">
          <div class="images md:w-[616px] w-full overflow-hidden">
            <img
              class="w-full"
              :src="
                typeof dataStore.selectedWeek !== 'string' &&
                Object.entries(dataStore.selectedWeek).length > 0
                  ? dataStore.selectedWeek.weekCover.Location
                  : dataStore.singleProduct.productImages[0].Location
              "
              alt="bridging the gap"
            />
          </div>
          <!-- <div
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
          </div> -->
        </div>
        <div class="flex flex-col w-full max-w-[648px]">
          <div class="relative mb-8">
            <div
              v-if="dataStore.singleProduct.weeklyLinks.length"
              @click="showSelectWeekDropdown = !showSelectWeekDropdown"
              class="bg-whiter border h-[47px] border-grey-19 px-[13.26px] py-[8.84px] rounded-sm relative flex items-center w-full lg:max-w-md"
            >
              <Icon name="material-symbols:calendar-month-sharp" />
              <h5 class="ml-[8.84px]">
                {{
                  Object.entries(dataStore.selectedWeek).length > 0
                    ? `${dataStore.selectedWeek.week}: ${dataStore.selectedWeek.weekValue}`
                    : "Select a Week"
                }}
              </h5>
              <Icon
                class="absolute top-2.5 right-2"
                name="mdi:chevron-down"
                size="24"
              />
            </div>
            <div
              v-if="showSelectWeekDropdown"
              class="absolute top-12 left-0 bg-grey-20 text-black-5 text-sm border border-grey-19 w-full lg:max-w-md"
            >
              <div
                v-for="(week, index) in dataStore.singleProduct?.weeklyLinks"
                :key="index"
                @click="selectWeek(week)"
                class="border border-grey-19 cursor-pointer flex items-center px-4 w-full h-10"
              >
                <p>{{ week.week }}: {{ week.weekValue }}</p>
              </div>
            </div>
          </div>
          <div class="flex gap-1 items-center mb-7">
            <nuxt-link to="/store">Online Store</nuxt-link>
            <Icon name="material-symbols:arrow-forward-ios" />
            <nuxt-link class="text-blue-14 font-bold" to="#">{{
              dataStore.singleProduct.category.toLowerCase() === "enhancers"
                ? "Download Now"
                : "Shop Now"
            }}</nuxt-link>
            <Icon name="material-symbols:arrow-forward-ios" color="#1D5BBE" />
          </div>
          <h3 class="text-xl text-black-2 font-medium leading-[28px]">
            {{
              typeof dataStore.selectedWeek !== "string" &&
              Object.entries(dataStore.selectedWeek).length > 0
                ? `${dataStore.selectedWeek.week}: ${dataStore.selectedWeek.weekValue}`
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
          <div
            v-if="dataStore.singleProduct.currentPrice"
            class="flex items-center mt-[11px] gap-[6px]"
          >
            <p class="line-through text-grey-13 text-[28px]">
              £{{ dataStore.singleProduct.price }}
            </p>
            <p class="font-bold text-blue-13 text-[28px]">
              £{{ dataStore.singleProduct.currentPrice }}
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
          <div class="flex md:flex-row flex-col gap-4 items-center">
            <template
              v-if="
                typeof dataStore.selectedWeek !== 'string' &&
                Object.entries(dataStore.selectedWeek).length > 0
              "
            >
              <div class="my-8 max-w-full">
                <button
                  @click="dialogStore.showMonthlyEnhancerModal = true"
                  class="bg-blue-4 border border-blue-4 rounded flex gap-[18px] h-[53px] items-center justify-center max-w-full w-[321px]"
                >
                  <p class="text-whiter text-sm">Download Now</p>
                  <Icon name="mdi:arrow-right" size="20" color="#FFFFFF" />
                </button>
              </div>
            </template>
            <template
              v-else-if="
                dataStore.singleProduct.productName ===
                '12-Months Meeting Agenda and Minutes Template (CQC Compliant)'
              "
            >
              <div class="my-8 max-w-full">
                <button
                  @click="dialogStore.showEmailModal = true"
                  class="bg-blue-4 border border-blue-4 rounded flex gap-[18px] h-[53px] items-center justify-center max-w-full w-[321px]"
                >
                  <p class="text-whiter text-sm">Download Now</p>
                  <Icon name="mdi:arrow-right" size="20" color="#FFFFFF" />
                </button>
              </div>
            </template>
            <template
              v-else-if="
                dataStore.singleProduct.category.toUpperCase() === 'PREP BOOKS'
              "
            >
              <!-- <div class="my-8 max-w-full">
                <a
                  href="https://docs.google.com/forms/d/1L3V7FMMeJ4fnswoZsg_Q4vJYEj2LUG5Jr8RroIsZB0E/viewform?pli=1&pli=1&edit_requested=true"
                  target="_blank"
                  class="bg-blue-15 border border-blue-4 rounded flex gap-[18px] h-[53px] items-center justify-center max-w-full w-[321px]"
                >
                  <p class="text-blue-4 text-sm">Shop Now</p>
                  <Icon name="mdi:arrow-right" size="20" color="#0073FF" />
                </a>
              </div> -->
              <div class="my-8 max-w-full">
                <NuxtLink
                  :to="{
                    path: `/store/payment/${productId}`,
                    query: {
                      jobTitle: position.jobTitle,
                      jobRole: position.role,
                    },
                  }"
                  target="_blank"
                  class="bg-blue-15 border border-blue-4 rounded flex gap-[18px] h-[53px] items-center justify-center max-w-full w-[321px]"
                >
                  <p class="text-blue-4 text-sm">Shop Now</p>
                  <Icon name="mdi:arrow-right" size="20" color="#0073FF" />
                </NuxtLink>
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
            <template v-else>
              <div class="my-8 max-w-full">
                <a
                  :href="`https://api.whatsapp.com/send/?phone=%2B44${phoneNumber}&text=Hi, I would like to purchase a copy of ${dataStore.singleProduct.productName} by OC Management Consultants%27`"
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
            <button
              @click="copyLink"
              class="cursor-pointer flex items-center gap-3"
            >
              <p class="text-grey-17 text-sm">Share product:</p>
              <Icon name="bi:copy" color="#5F6C72" />
            </button>
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
