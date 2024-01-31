<script setup lang="ts">
import { useDataStore } from "~/stores/data";

const dataStore = useDataStore();
const router = useRouter();
const category = ref("Books");
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

const getProducts = async () => {
  await dataStore.getAllProducts(
    `?limit=10&page=1&category[0]=${category.value}`
  );
};
getProducts();

const saveFirstProductToStore = () => {
  dataStore.singleProduct = dataStore.allProducts[0];
  dataStore.category = category.value;
  router.push("/store/id");
};

const saveProductToStore = (product) => {
  
  dataStore.singleProduct = product;
  router.push('/store/id');
  window.scrollTo(0, 0);
}
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
            Bookss
          </button>
          <button
            @click="category = 'Guides'"
            class=""
            :class="
              category === 'Guides'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            Guides
          </button>
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
            @click="category = 'Checklists and Journals'"
            class=""
            :class="
              category === 'Checklists and Journals'
                ? 'text-blue-4 bg-blue-9 font-semibold px-[34px] py-3 rounded-sm'
                : 'border-whiter text-grey-12'
            "
          >
            Checklists and Journals
          </button>
        </div>
      </div>
      <div v-show="category === 'Books'" class="flex mt-14 w-full">
        <template v-if="dataStore.allProducts.length">
          <div class="flex">
            <div class="flex">
              <div
                class="border border-grey-15 flex flex-col relative p-[38px] pb-[85px] bg-whiter w-[519px]"
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
                  @click="saveProductToStore(dataStore.allProducts[idx+1])"
                  class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[392px]"
                >
                  <img
                    class="w-full"
                    :src="dataStore.allProducts[idx+1].productImages[0].Location"
                  />
                  <div class="flex items-start">
                    <div class="flex w-full">
                      <div class="flex flex-col">
                        <h3
                          class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                        >
                          {{ dataStore.allProducts[idx+1].productName }}
                        </h3>
                        <div class="flex mt-[12px] gap-[6px]">
                          <p class="font-bold text-blue-13 text-[22px]">
                            £{{ dataStore.allProducts[idx+1].price }}
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
        <!-- <div class="flex mt-[71px] justify-center">
        <nuxt-link
          to="/eBookss"
          class="text-blue-4 blue-btn rounded py-4 px-8 w-[329px] text-center bg-whiter border border-black/20"
        >
          See all
        </nuxt-link>
      </div> -->
      </div>
      <div v-show="category === 'Videos'" class="w-full">
        <div class="flex justify-center mt-10">
          <div
            class="flex flex-col lg:flex-row justify-center flex-wrap gap-10 lg:gap-6"
          >
            <div
              v-for="(video, idx) in videos"
              :key="idx"
              class="flex flex-col w-full lg:w-[397px]"
            >
              <img
                class="w-full"
                :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${video.img}.png`"
              />
              <div
                class="flex items-center px-4 py-8 border bg-blue-2 text-white border-blue-2"
              >
                <div class="flex items-center w-full gap-x-4">
                  <img
                    class="h-10 w-10"
                    src="/img/play.png"
                    alt="play picture"
                  />
                  <p
                    class="cut-text text-lg leading-[28px] font-medium max-h-14 text-ellipsis overflow-hidden block"
                  >
                    {{ video.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-10 justify-center">
          <nuxt-link
            to="/eBookss"
            class="text-blue-4 blue-btn rounded py-4 px-8"
          >
            See More
            <Icon
              class="hovered ml-3"
              name="mdi:arrow-right"
              size="18px"
              color="#0073FF"
            />
          </nuxt-link>
        </div>
      </div>
      <div v-show="category === 'Blog'" class="">
        <div class="flex flex-col lg:flex-row gap-10 mt-10">
          <nuxt-link to="/blog/id" class="w-full max-w-[612px]">
            <img
              src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/Books-mockup-1.png"
              alt="Books mockup"
            />
            <div class="bg-blue-2 px-6 py-12">
              <div class="flex flex-col md:flex-row md:items-center gap-6">
                <div class="flex md:justify-center max-w-fit relative">
                  <img
                    class="absolute -right-2 -top-2"
                    src="/svg/dark-logo-splash.svg"
                    alt="splash logo"
                  />
                  <nuxt-link
                    to="/services"
                    class="bg-blue-4 text-white uppercase rounded py-2 px-4"
                  >
                    Trending
                  </nuxt-link>
                </div>
                <div class="flex gap-6 items-center">
                  <p class="text-whiter">April 23, 2023</p>
                  <div class="w-2 h-9 bg-blue-4" />
                  <p class="text-whiter">By Mrs Obi</p>
                </div>
              </div>
              <h2 class="font-bold text-whiter text-2xl max-w-[483px] mt-6">
                SUPPORTED LIVING: MORE THAN PROVIDING A HOUSE AND A SERVICE
              </h2>
            </div>
          </nuxt-link>
          <div class="flex flex-col gap-6">
            <nuxt-link
              v-for="(post, index) in posts"
              :key="index"
              class="flex items-center"
              to="/blog/id"
            >
              <img
                class="w-[164px] hidden md:block"
                src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/Books-mockup-mob.png"
                alt="small Books mockup"
              />
              <img
                class="w-[164px] md:hidden"
                src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/Books-mockup-mob-2.png"
                alt="small Books mockup"
              />
              <div class="flex flex-col gap-y-2 px-6 max-w-[424px]">
                <h3
                  class="cut-text text-lg font-bold uppercase max-h-14 text-ellipsis overflow-hidden block"
                >
                  {{ post.title }}
                </h3>
                <div
                  class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6"
                >
                  <p>{{ post.date }}</p>
                  <div class="w-7/12 md:w-1 h-1 md:h-7 bg-blue-4" />
                  <p>By {{ post.author }}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="flex mt-10 justify-center">
          <nuxt-link
            to="/eBookss"
            class="text-blue-4 blue-btn rounded py-4 px-8"
          >
            View More
            <Icon
              class="ml-3 hovered"
              name="mdi:arrow-right"
              size="18px"
              color="#0073FF"
            />
          </nuxt-link>
        </div>
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
