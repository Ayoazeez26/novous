<script setup lang="ts">
import { useDialogStore } from "~/stores/dialog";
import { useDataStore } from "~/stores/data";

const dataStore = useDataStore();
const dialogStore = useDialogStore();
const category = ref("Handouts");
const blogs = ref([
  {
    name: "Best Practices For Providing Domicillary Care",
    image: "book-practice",
    link: "https://www.amazon.com/PRACTICES-PROVIDING-DOMICILIARY-SUPPORTED-SCHEMES-ebook/dp/B0CG4X4KS1",
  },
  {
    name: "bridging the gap",
    image: "book-mockup",
  },
  {
    name: "social care business management explained",
    image: "book-social",
  },
  {
    name: "mastering tupe transfers in social care services",
    image: "book-tupe",
  },
  {
    name: "the ultimate guide to tender writing",
    image: "book-tender",
  },
]);

const phoneNumber = ref("7903094884");
const message = ref("Hello, I would like to request for the free pdf copy");

const messageUrl = () => {
  return `https://api.whatsapp.com/send/?phone=%2B44${phoneNumber}&text=${message}%27;`;
};

// const getProducts = async () => {
//   await dataStore.getAllProducts(
//     `?limit=10&page=1&category[0]=${category.value}`
//   );
// };
// getProducts();

// const showModal = (handout) => {
//   dataStore.singleProduct = handout;
//   dialogStore.showModal = true;
// }
</script>
<template>
  <div
    class="mx-auto w-full px-4 md:px-6 xl:px-0 mt-14 md:mt-16 mb-16 max-w-[1240px]"
  >
    <h2
      class="font-bold px-8 lg:px-0 leading-[36px] md:leading-[48px] lg:leading-[54px] mb-3 tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] w-full"
    >
      Don't Waste Your Bid: Choose the Right Tenders for Your Business Success
    </h2>
    <img
      class=""
      src="/img/blog-cover-first.jpg"
      alt="people working"
    />
    <p class="leading-[28px] text-lg mt-8">
      Bidding on tenders can be a fantastic way to secure new contracts and grow
      your business. However, investing time and resources in bids you're
      unlikely to win is a recipe for wasted effort. The key? Selecting the
      right tenders that perfectly align with your company's strengths and
      experience.
    </p>
    <div class="h-16 flex items-center justify-start max-w-fit">
      <nuxt-link
        to="/blog/id"
        class="light-blue-bg bg-blue-5 text-white h-12 px-5 flex items-center font-medium justify-center w-full"
      >
        Read More
      </nuxt-link>
    </div>
    <!-- <div class="flex xl:justify-center mb-16 items-start w-full">
      <div
        class="bg-whiter flex flex-col gap-6 lg:flex-row md:items-stretch flex-wrap"
      >
        <div
          v-for="(publication, idx) in dataStore.allProducts"
          :key="idx"
          @click="showModal(publication)"
          class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[392px]"
        >
          <img class="w-full" :src="publication.productImages[0].Location" />
          <div class="flex items-start">
            <div class="flex w-full">
              <div class="flex flex-col">
                <h3 class="mt-[12.65px] text-lg font-medium leading-[31.626px]">
                  {{ publication.productName }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <h2
      class="font-bold px-8 lg:px-0 leading-[36px] md:leading-[48px] lg:leading-[54px] mt-12 mb-5 tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] w-full"
    >
      Out Now: A Social Care Provider’s Guide to the 2023 CQC State of Care
      Report. An Analytical Summary by OC Management Consultants
    </h2>
    <p class="leading-[28px] text-lg mt-4">
      Discover what the
      <span class="font-bold">2023 CQC State of Care Report</span> means for
      social care providers like you in our latest guide!
    </p>
    <p class="leading-[28px] text-lg my-4">
      The Care Quality Commission (CQC) released their annual assessment on
      England’s health and social care sector, which attested to the
      <span class="font-bold">deteriorating state of care in the country.</span>
      We have analysed the report from a provider’s lens, and identified key
      findings that will empower your decisions about service provision and
      organisational growth.
    </p>

    <div
      style="
        position: relative;
        padding-top: max(60%, 326px);
        height: 0;
        width: 100%;
      "
    >
      <iframe
        allow="clipboard-write"
        sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
        allowfullscreen="true"
        style="
          position: absolute;
          border: none;
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        "
        src="https://e.issuu.com/embed.html?backgroundColor=%23043c89&d=report_design_recovered_&u=tgpcmedia"
      ></iframe>
    </div>
    <p class="leading-[28px] text-lg mt-4 mb-8">
      <a
        :href="`https://api.whatsapp.com/send/?phone=%2B44${phoneNumber}&text=${message}%27`"
        class="underline"
        target="_blank"
        >Click here</a
      >
      to get a free version of the pdf
    </p>
  </div>
</template>

<style scoped>
.cut-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
</style>
