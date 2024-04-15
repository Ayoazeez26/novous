<script setup lang="ts">
import { useDialogStore } from "~/stores/dialog";
import { useDataStore } from "~/stores/data";
import { storeToRefs } from "pinia";

const dataStore = useDataStore();
const dialogStore = useDialogStore();
const router = useRouter();
const category = ref("All");
const selectedPaymentPlan = ref("Choose Payment Plan");
const showPaymentDropdown = ref(false);
const showSelectWeekDropdown = ref(false);
const featuredProducts = ref([]);
const featuredWorkbooks = ref([]);
const featuredOtherbooks = ref([]);
const singleProduct = ref({});
// const { prepbookIndex } = storeToRefs(dataStore);

// watch(prepbookIndex, () => {
//   console.log(prepbookIndex.value);
//   if (prepbookIndex.value) {
//     goToCheckout(prepbookIndex.value);
//   }
//   dataStore.prepbookIndex = null;
// })

const phoneNumber = ref("7903094884");
const workMessage = ref(
  "Hi, I would like to preorder a copy of The CQC Prepbook."
);
const bridgeMessage = ref(
  'Hi, I would like to purchase a copy of "Bridging the Gap: The Vital Role of MSMEs in Reducing Health Inequalities" by TGPC Health'
);
const domMessage = ref(
  'Hi, I would like to purchase a copy of "Best Practices in Providing Domiciliary Care in Supported Living Schemes" by TGPC Health'
);
const tupeMessage = ref(
  'Hi, I would like to purchase a copy of "Mastering TUPE Transfers in Social Care Service" by TGPC Health'
);
const prepMessage = ref(
  "Hi, I would like to preorder a copy of The CQC Workbook"
);
const prepWorkMessage = ref(
  "Hi, I would like to preorder one copy of The CQC Prepbook and one copy of the Workbook"
);
const calendarMessage = ref(
  "Hi, I would like to preorder one copy of the 12-Months Meeting Schedule Calendar"
);

watch(category, (value) => {
  if (value !== "All") {
    getProducts(value);
  } else if (value === "All") {
    getFeaturedProducts();
  }
});

const getFeaturedProducts = async () => {
  featuredProducts.value = await dataStore.getFeaturedProducts();
  featuredWorkbooks.value = featuredProducts.value.filter(
    (product) => product.category.toLowerCase() === "prep books"
  );
  featuredOtherbooks.value = featuredProducts.value.filter(
    (product) => product.category.toLowerCase() !== "prep books"
  );
  // singleProduct.value = featuredProducts.value.splice(0, 1);
};

const getProducts = async (value: string) => {
  await dataStore.getAllProducts(`?limit=10&page=1&category[0]=${value}`);
};
getFeaturedProducts();

const saveProductToStore = (product) => {
  if (
    product.productName === dataStore.allProducts[0].productName &&
    Object.entries(dataStore.selectedWeek).length > 0 &&
    selectedPaymentPlan.value !== "Choose Payment Plan"
  ) {
    dataStore.singleProduct = product;
    router.push(`/store/${product.id}`);
    window.scrollTo(0, 0);
  } else {
    dataStore.singleProduct = product;
    router.push(`/store/${product.id}`);
    // router.push("/store/id");
    window.scrollTo(0, 0);
    dataStore.selectedWeek = "Week 1 Shared Decision Making";
  }
};

const showModal = (handout) => {
  dataStore.singleProduct = handout;
  dialogStore.showModal = true;
};

const selectWeek = (week) => {
  dataStore.selectedWeek = week;
  showSelectWeekDropdown.value = false;
};

const changePaymentPlan = (plan: string) => {
  selectedPaymentPlan.value = plan;
  showPaymentDropdown.value = false;
};

const getOutput = (index: number) => {
  switch (index) {
    case 0:
      return "Prepbook & Workbook";
      break;
    case 1:
      return "Prepbook";
      break;
    case 2:
      return "Workbook";
      break;
    default:
      return "Prepbook & Workbook";
  }
};

const dated = new Date();
const weekOfMonth = (0 | (dated.getDate() / 7)) + 1;
</script>
<template>
  <div class="bg-blue-11 py-28 w-full">
    <div
      class="flex flex-col items center mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1304px]"
    >
      <div
        class="flex flex-col lg:flex-row lg:items-center justify-between w-full"
      >
        <h2
          class="font-semibold text-blue-12 leading-[48px] w-[200px] md:w-auto lg:leading-[54px] tracking-[-1.5px] text-[32px] lg:text-[40px]"
        >
          Featured Publications
        </h2>
        <div
          class="bg-whiter px-[18.5px] py-[9px] flex mt-8 gap-[34px] rounded lg:mt-0 overflow-x-auto"
        >
          <button
            @click="category = 'All'"
            class="min-w-max"
            :class="
              category === 'All'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            All resources
          </button>
          <button
            @click="category = 'Prep Books'"
            class="min-w-max"
            :class="
              category === 'Prep Books'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            Prep Books
          </button>
          <!-- <button
            @click="category = 'Guides'"
            class="min-w-max"
            :class="
              category === 'Guides'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            Guides
          </button> -->
          <button
            @click="category = 'Handouts'"
            class="min-w-max"
            :class="
              category === 'Handouts'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            Handouts
          </button>
          <button
            @click="category = 'Books'"
            class="min-w-max"
            :class="
              category === 'Books'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            Books
          </button>
          <button
            @click="category = 'Enhancers'"
            class="min-w-max"
            :class="
              category === 'Enhancers'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            Meeting Enhancers
          </button>
        </div>
      </div>
      <div v-show="category === 'All'" class="flex mt-14 w-full">
        <template v-if="featuredProducts.length">
          <div class="flex flex-wrap md:flex-nowrap">
            <div class="flex justify-center items-start w-full">
              <div class="bg-whiter flex flex-col lg:flex-row flex-wrap">
                <div
                  v-for="(publication, idx) in featuredWorkbooks"
                  :key="idx"
                  class="flex flex-col w-full p-[25px] border justify-between bg-whiter relative border-grey-15 lg:w-[433px]"
                >
                  <img
                    class="absolute top-8 left-4 h-10"
                    :src="publication.banners[0]?.Location"
                  />
                  <img
                    class="w-full"
                    :src="publication.productImages[0].Location"
                  />
                  <div class="flex items-start">
                    <div class="flex w-full">
                      <div class="flex flex-col">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ publication.productName }}
                        </h3>
                        <div class="flex mt-[12px] gap-[6px]">
                          <p class="line-through text-grey-13 text-[22px]">
                            £{{ publication.price }}
                          </p>
                          <p v-if="publication.currentPrice" class="font-bold text-blue-13 text-[22px]">
                            £{{ publication.currentPrice }}
                          </p>
                        </div>
                        <div class="mt-12 w-full">
                          <button
                            class="bg-blue-4 flex h-[76px] items-center px-10 w-full justify-center"
                            @click="saveProductToStore(publication)"
                          >
                            <img
                              class="mr-3"
                              src="/svg/shop.svg"
                              alt="shop icon"
                            />
                            <span class="text-white">SHOP NOW</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-for="(publication, idx) in featuredOtherbooks"
                  :key="idx"
                  class="flex flex-col w-full p-[25px] border justify-between bg-whiter relative border-grey-15 lg:w-[433px]"
                >
                  <img
                    class="absolute top-8 left-4 h-10"
                    :src="publication.banners[0]?.Location"
                  />
                  <img
                    class="w-full"
                    :src="publication.productImages[0].Location"
                  />
                  <div class="flex items-start">
                    <div class="flex w-full">
                      <div class="flex flex-col">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ publication.productName }}
                        </h3>
                        <!-- <div class="flex mt-[12px] gap-[6px]">
                          <p class="line-through text-grey-13 text-[22px]">
                            £{{ publication.price }}
                          </p>
                          <p  class="font-bold text-blue-13 text-[22px]">
                            £{{ publication.currentPrice }}
                          </p>
                        </div> -->
                        <div class="mt-12 w-full">
                          <button
                            class="bg-blue-4 flex h-[76px] items-center px-10 w-full justify-center"
                            @click="saveProductToStore(publication)"
                          >
                            <img
                              class="mr-3"
                              src="/svg/shop.svg"
                              alt="shop icon"
                            />
                            <span class="text-white">SHOP NOW</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div v-show="category === 'Books'" class="flex mt-14 w-full">
        <template v-if="dataStore.allProducts.length">
          <div class="flex flex-wrap md:flex-nowrap">
            <div class="flex justify-center items-start w-full">
              <div
                class="bg-whiter flex flex-col lg:flex-row md:items-start flex-wrap"
              >
                <div
                  v-for="(publication, idx) in dataStore.allProducts"
                  :key="idx"
                  @click="saveProductToStore(publication)"
                  class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[433px]"
                >
                  <img
                    class="w-full"
                    :src="publication.productImages[0].Location"
                  />
                  <div class="flex items-start">
                    <div class="flex w-full">
                      <div class="flex flex-col">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ publication.productName }}
                        </h3>
                        <div class="flex mt-[12px] gap-[6px]">
                           <p class="line-through text-grey-13 text-[22px]">
                            £{{ publication.price }}
                          </p>
                          <p  class="font-bold text-blue-13 text-[22px]">
                            £{{ publication.currentPrice }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div v-show="category === 'Prep Books'" class="flex mt-14 w-full">
        <div
          class="flex md:flex-row flex-col md:space-y-0 space-y-5 justify-center w-full"
        >
          <template v-if="dataStore.allProducts.length">
            <div class="flex flex-wrap md:flex-nowrap">
              <div class="flex justify-center items-start w-full">
                <div class="bg-whiter flex flex-col lg:flex-row flex-wrap">
                  <div
                    v-for="(publication, idx) in dataStore.allProducts"
                    :key="idx"
                    @click="saveProductToStore(publication)"
                    class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 h-[530px] lg:w-[433px]"
                  >
                    <img
                      class="w-full"
                      :src="publication.productImages[0].Location"
                    />
                    <div class="flex items-start h-full">
                      <div class="flex w-full h-full">
                        <div class="flex flex-col justify-between h-full">
                          <div class="">
                            <h3
                              class="mt-[12.65px] text-black-2 text-xl font-medium leading-[31.626px]"
                            >
                              {{ publication.productName }}
                            </h3>
                            <div class="flex mt-[12px] gap-[6px]">
                              <p class="text-grey-13 line-through text-[22px]">
                                £{{ publication.price }}
                              </p>
                              <p class="font-bold text-blue-13 text-[22px]">
                                £{{ publication.currentPrice }}
                              </p>
                            </div>
                          </div>
                          <div class="h-16 flex items-center justify-center">
                            <a
                              :href="`https://api.whatsapp.com/send/?phone=%2B44${phoneNumber}&text=${prepMessage}%27`"
                              class="light-blue-bg text-blue-17 h-16 flex items-center justify-center text-sm w-full"
                              >Pre-order {{ getOutput(idx) }}</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div
        v-show="category === 'Handouts'"
        class="flex lg:justify-center mt-14 w-full"
      >
        <template v-if="dataStore.allProducts.length">
          <div class="flex">
            <div class="flex justify-center items-start w-full">
              <div class="bg-whiter flex flex-col lg:flex-row flex-wrap">
                <div
                  v-for="(publication, idx) in 3"
                  :key="idx"
                  @click="showModal(dataStore.allProducts[idx])"
                  class="cursor-pointer flex flex-col w-full p-[25px] justify-between border bg-whiter border-grey-15 h-[664px] lg:w-[433px]"
                >
                  <div class="">
                    <img
                      class="w-[200px] mx-auto"
                      :src="
                        dataStore.allProducts[idx].productImages[0].Location
                      "
                    />
                    <div class="flex items-start">
                      <div class="flex w-full">
                        <div class="flex flex-col">
                          <h3
                            class="mt-6 text-lg leading-[34.934px] text-black-2"
                          >
                            {{ dataStore.allProducts[idx].productName }}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="h-16 flex items-center justify-center">
                    <button
                      class="light-blue-bg bg-blue-5 text-white h-16 flex items-center font-medium justify-center w-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- <div class="flex mt-[71px] justify-center">
        <nuxt-link
          to="/resourcess"
          class="text-blue-4 blue-btn rounded py-4 px-8 w-[329px] text-center bg-whiter border border-black/20"
        >
          See all
        </nuxt-link>
      </div> -->
      </div>
      <div
        v-show="category === 'Enhancers'"
        class="flex lg:justify-center mt-14 w-full"
      >
        <template v-if="dataStore.allProducts.length">
          <div class="flex flex-wrap md:flex-nowrap lg:justify-center">
            <div class="flex justify-center items-start w-full">
              <div class="bg-whiter flex flex-col lg:flex-row flex-wrap">
                <div
                  class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[433px]"
                >
                  <img
                    class="w-full"
                    :src="dataStore.allProducts[2].productImages[0].Location"
                  />
                  <div class="flex items-start h-full">
                    <div class="flex w-full h-full">
                      <div class="flex flex-col h-full justify-between w-full">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ dataStore.allProducts[2].productName }}
                        </h3>
                        <div class="h-16 flex items-center justify-center">
                          <a
                            :href="`https://api.whatsapp.com/send/?phone=%2B44${phoneNumber}&text=${calendarMessage}%27`"
                            target="_blank"
                            download
                            class="bg-blue-17 h-16 flex items-center justify-center text-sm text-whiter w-full"
                            >Coming Soon</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  @click="saveProductToStore(dataStore.allProducts[1])"
                  class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[433px]"
                >
                  <img
                    class="w-full"
                    :src="dataStore.allProducts[1].productImages[0].Location"
                  />
                  <div class="flex items-start h-full">
                    <div class="flex w-full h-full">
                      <div class="flex flex-col h-full justify-between w-full">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ dataStore.allProducts[1].productName }}
                        </h3>
                        <div class="h-16 flex items-center justify-center">
                          <button
                            class="bg-blue-17 h-16 flex items-center justify-center text-sm text-whiter w-full"
                          >
                            Get 12 Months meeting Agenda Template
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[433px]"
                >
                  <img
                    class="w-full"
                    :src="dataStore.allProducts[0].productImages[0].Location"
                  />
                  <div class="flex items-start">
                    <div class="flex w-full">
                      <div class="flex flex-col w-full">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ dataStore.allProducts[0].productName }}
                        </h3>
                        <div
                          class="bg-blue-16 flex flex-col items-start mt-[12px] rounded-md px-[26px] py-4 h-[230px] overflow-y-hidden"
                        >
                          <div
                            @click="
                              showSelectWeekDropdown = !showSelectWeekDropdown
                            "
                            class="bg-whiter border h-[47px] border-grey-19 px-[13.26px] py-[8.84px] rounded-sm relative flex items-center w-full"
                          >
                            <Icon
                              name="material-symbols:calendar-month-sharp"
                            />
                            <h5 class="ml-[8.84px]">
                              {{
                                typeof dataStore.selectedWeek !== "string" &&
                                Object.entries(dataStore.selectedWeek).length >
                                  0
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
                            class="bg-grey-20 text-black-5 text-sm border border-grey-19 w-full"
                          >
                            <div
                              v-for="(week, index) in dataStore.allProducts[0]
                                ?.weeklyLinks"
                              :key="index"
                              @click="selectWeek(week)"
                              class="border border-grey-19 flex items-center disabled:border-black disabled:text-black-5/30 px-4 w-full h-10"
                              :disabled="weekOfMonth < index + 1"
                            >
                              <p>{{ week.week }}: {{ week.weekValue }}</p>
                            </div>
                          </div>
                          <div
                            @click="showPaymentDropdown = !showPaymentDropdown"
                            class="bg-whiter border h-[47px] border-grey-19 px-[13.26px] py-[8.84px] rounded-sm relative flex items-center mt-[18px] w-full"
                          >
                            <Icon name="fluent:payment-32-filled" />
                            <h5 class="ml-[8.84px]">
                              {{ selectedPaymentPlan }}
                            </h5>
                            <Icon
                              class="absolute top-2.5 right-2"
                              name="mdi:chevron-down"
                              size="24"
                            />
                          </div>
                          <div
                            v-if="showPaymentDropdown"
                            class="bg-grey-20 text-black-5 text-sm border border-grey-19 w-full"
                          >
                            <div
                              @click="changePaymentPlan('Free Plan')"
                              class="border border-grey-19 flex items-center px-4 w-full h-10"
                            >
                              <p>Free Plan</p>
                            </div>
                            <div
                              @click="changePaymentPlan('£0')"
                              class="border border-grey-19 flex items-center px-4 w-full h-10"
                            >
                              <p>
                                <span class="line-through">£39.96</span
                                ><span class="text-blue-4 ml-2">£0</span>
                              </p>
                            </div>
                          </div>
                          <button
                            @click="
                              saveProductToStore(dataStore.allProducts[0])
                            "
                            class="bg-blue-17 h-16 text-whiter mt-[18px] w-full"
                          >
                            Get My Enhancer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- <div class="flex mt-[71px] justify-center">
        <nuxt-link
          to="/resourcess"
          class="text-blue-4 blue-btn rounded py-4 px-8 w-[329px] text-center bg-whiter border border-black/20"
        >
          See all
        </nuxt-link>
      </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cut-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
.light-blue-bg {
  border-radius: 2.209px;
}
</style>
