<script setup lang="ts">
import { useDialogStore } from "~/stores/dialog";
import { useDataStore } from "~/stores/data";

const dataStore = useDataStore();
const dialogStore = useDialogStore();
const router = useRouter();
const category = ref("Books");
const selectedWeek = ref("Select week");
const selectedPaymentPlan = ref("Choose Payment Plan");
const showPaymentDropdown = ref(false);
const showSelectWeekDropdown = ref(false);
const services = ref([
  {
    image: "dom-care",
    title:
      "BEST PRACTICES FOR PROVIDING DOMICILIARY CARE IN SUPPORTED LIVING SCHEMES ",
    price: "£0.99",
    slashedPrice: "£3.15",
  },
  {
    image: "tupe",
    title: "MASTERING TUPE TRANSFERS IN SOCIAL CARE SERVICES",
    price: "£0.99",
    slashedPrice: "£3.15",
  },
  {
    image: "social-care",
    title: "A Social Care Provider's Guide to the 2023 State of Care Report ",
    price: "£0.99",
    slashedPrice: "£3.15",
  },
  {
    image: "workBooks",
    title: "CQC Registered Manager's Interview WorkBooks",
    price: "£0.99",
    slashedPrice: "£3.15",
  },
]);
const videos = ref([
  {
    title: "CQC Regulation 13: Good Governance",
    img: "video-placeholder",
  },
  {
    title: "CQC Regulation 13: Good Governance",
    img: "video-placeholder",
  },
  {
    title: "CQC Regulation 13: Good Governance",
    img: "video-placeholder",
  },
]);
const posts = ref([
  {
    title: "£500 million fund to make patients top priority",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
  {
    title: "workforce development fund: adult social care",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
  {
    title: "supported living: the economical benefits",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
]);

watch(category, (value) => {
  if (value === "Books" || value === "Handouts") {
    getProducts(value);
  }
});

const getProducts = async (value) => {
  await dataStore.getAllProducts(`?limit=10&page=1&category[0]=${value}`);
};
getProducts(category.value);

const saveFirstProductToStore = () => {
  dataStore.singleProduct = dataStore.allProducts[0];
  dataStore.category = category.value;
  router.push("/store/id");
};

const saveProductToStore = (product) => {
  dataStore.singleProduct = product;
  router.push("/store/id");
  window.scrollTo(0, 0);
};

const showModal = (handout) => {
  dataStore.singleProduct = handout;
  dialogStore.showModal = true;
};
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
            class=""
            :class="
              category === 'All'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            All resources
          </button>
          <button
            @click="category = 'Books'"
            class=""
            :class="
              category === 'Books'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            Books
          </button>
          <!-- <button
            @click="category = 'Guides'"
            class=""
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
            class=""
            :class="
              category === 'Handouts'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            Handouts
          </button>
          <button
            @click="category = 'Meeting Enhancers'"
            class=""
            :class="
              category === 'Meeting Enhancers'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            Meeting Enhancers
          </button>
        </div>
      </div>
      <div v-show="category === 'Books'" class="flex mt-14 w-full">
        <template v-if="dataStore.allProducts.length">
          <div class="flex flex-wrap md:flex-nowrap">
            <div class="flex">
              <div
                class="border border-grey-15 flex flex-col relative p-5 md:p-[38px] pb-[85px] bg-whiter md:w-[519px]"
              >
                <!-- <div
                  class="absolute top-7 left-10 bg-blue-9 text-base text-blue-10 rounded-md px-[17px] py-[5.76px] max-w-fit"
                >
                  95% off
                </div>
                <div
                  class="absolute top-20 left-10 bg-red text-base text-whiter rounded-sm px-[17px] py-[7.91px] max-w-fit"
                >
                  HOT
                </div> -->
                <img
                  :src="dataStore.allProducts[0].productImages[0].Location"
                  alt="A picture of a Books titled bridging the gap"
                />
                <h3 class="mt-[78px] text-xl font-medium leading-[37.951px]">
                  {{ dataStore.allProducts[0].productName }}
                </h3>
                <div class="flex my-6 gap-[6px]">
                  <!-- <p class="line-through text-grey-13 text-[25px]">
                    {{ hotResource.slashedPrice }}
                  </p> -->
                  <p class="font-bold text-blue-13 text-[25px]">
                    £{{ dataStore.allProducts[0].price }}
                  </p>
                </div>
                <p
                  class="clamp leading-[31.626px] overflow-hidden text-ellipsis text-grey-14"
                >
                  {{ dataStore.allProducts[0].description }}
                </p>
                <div class="mt-12 max-w-fit">
                  <button
                    class="bg-blue-4 flex h-[76px] items-center px-10"
                    @click="saveFirstProductToStore"
                  >
                    <img class="mr-3" src="/svg/shop.svg" alt="shop icon" />
                    <span class="text-white">SHOP NOW</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-start w-full">
              <div
                class="bg-whiter flex flex-col lg:flex-row md:items-start flex-wrap"
              >
                <div
                  v-for="(publication, idx) in dataStore.allProducts.length - 1"
                  :key="idx"
                  @click="saveProductToStore(dataStore.allProducts[idx + 1])"
                  class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[392px]"
                >
                  <img
                    class="w-full"
                    :src="
                      dataStore.allProducts[idx + 1].productImages[0].Location
                    "
                  />
                  <div class="flex items-start">
                    <div class="flex w-full">
                      <div class="flex flex-col">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ dataStore.allProducts[idx + 1].productName }}
                        </h3>
                        <div class="flex mt-[12px] gap-[6px]">
                          <p class="font-bold text-blue-13 text-[22px]">
                            £{{ dataStore.allProducts[idx + 1].price }}
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
      <div v-show="category === 'Handouts'" class="flex mt-14 w-full">
        <template v-if="dataStore.allProducts.length">
          <div class="flex">
            <div class="flex justify-center items-start w-full">
              <div
                class="bg-whiter gap-4 flex flex-col lg:flex-row md:items-start flex-wrap"
              >
                <div
                  v-for="(publication, idx) in dataStore.allProducts"
                  :key="idx"
                  @click="showModal(publication)"
                  class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[392px]"
                >
                  <img
                    class="w-full"
                    :src="dataStore.allProducts[idx].productImages[0].Location"
                  />
                  <div class="flex items-start">
                    <div class="flex w-full">
                      <div class="flex flex-col">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ dataStore.allProducts[idx].productName }}
                        </h3>
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
      <div v-show="category === 'Meeting Enhancers'" class="flex mt-14 w-full">
        <template v-if="dataStore.allProducts.length">
          <div class="flex flex-wrap md:flex-nowrap">
            <div class="flex justify-center items-start w-full">
              <div
                class="bg-whiter flex flex-col lg:flex-row md:items-start flex-wrap"
              >
                <div
                  v-for="(publication, idx) in dataStore.allProducts.length"
                  :key="idx"
                  @click="saveProductToStore(dataStore.allProducts[idx])"
                  class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[392px]"
                >
                  <img
                    class="w-full"
                    :src="dataStore.allProducts[idx].productImages[0].Location"
                  />
                  <div class="flex items-start">
                    <div class="flex w-full">
                      <div class="flex flex-col">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ dataStore.allProducts[idx].productName }}
                        </h3>
                        <div class="flex mt-[12px] gap-[6px]">
                          <p class="font-bold text-blue-13 text-[22px]">
                            £{{ dataStore.allProducts[idx].price }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[392px]"
                >
                  <img
                    class="w-full"
                    :src="dataStore.allProducts[0].productImages[0].Location"
                  />
                  <div class="flex items-start">
                    <div class="flex w-full">
                      <div class="flex flex-col">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ dataStore.allProducts[0].productName }}
                        </h3>
                        <div class="bg-blue-16 flex flex-col items-start mt-[12px] rounded-md px-[26px] py-4 h-[230px] overflow-y-auto">
                          <div @click="showSelectWeekDropdown=!showSelectWeekDropdown" class="bg-whiter border h-[47px] border-grey-19 px-[13.26px] py-[8.84px] rounded-sm relative flex items-center w-full">
                            <Icon name="material-symbols:calendar-month-sharp" />
                            <h5 class="ml-[8.84px]">{{ selectedWeek }}</h5>
                            <Icon class="absolute top-2.5 right-2" name="mdi:chevron-down" size="24" />
                          </div>
                          <div v-if="showSelectWeekDropdown" class="bg-grey-20 text-black-5 text-sm border border-grey-19 w-full">
                            <div class="border border-grey-19 flex items-center px-4 w-full h-10">
                              <p>Week 1 Shared Decision Making</p>
                            </div>
                            <div class="border border-grey-19 flex items-center px-4 text-black-5/30 w-full h-10">
                              <p>Week 2 Shared Decision Making</p>
                            </div>
                            <div class="border border-grey-19 flex items-center px-4 text-black-5/30 w-full h-10">
                              <p>Week 3 Shared Decision Making</p>
                            </div>
                            <div class="border border-grey-19 flex items-center px-4 text-black-5/30 w-full h-10">
                              <p>Week 4 Shared Decision Making</p>
                            </div>
                          </div>
                          <div @click="showPaymentDropdown=!showPaymentDropdown" class="bg-whiter border h-[47px] border-grey-19 px-[13.26px] py-[8.84px] rounded-sm relative flex items-center mt-[18px] w-full">
                            <Icon name="fluent:payment-32-filled" />
                            <h5 class="ml-[8.84px]">{{ selectedPaymentPlan }}</h5>
                            <Icon class="absolute top-2.5 right-2" name="mdi:chevron-down" size="24" />
                          </div>
                          <div v-if="showPaymentDropdown" class="bg-grey-20 text-black-5 text-sm border border-grey-19 w-full">
                            <div class="border border-grey-19 flex items-center px-4 w-full h-10">
                              <p>Free Plan</p>
                            </div>
                            <div class="border border-grey-19 flex items-center px-4 w-full h-10">
                              <p><span class="line-through">£39.96</span><span class="text-blue-4 ml-2">£0</span></p>
                            </div>
                          </div>
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
</style>
