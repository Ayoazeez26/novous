<script setup lang="ts">
const resource = ref("Books");


import { useDataStore } from '~/stores/data';

const dataStore = useDataStore();
const router = useRouter();

const getProducts = async () => {
  await dataStore.getAllProducts(
    `?limit=10&page=1&category[0]=${dataStore.singleProduct.category}`
  );
};
getProducts();

const saveFirstProductToStore = (product) => {
  
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
        <h3
          class="font-semibold text-blue-12 leading-[48px] w-[200px] md:w-auto lg:leading-[54px] tracking-[-1.5px] text-[28px]"
        >
          Similar Publications
        </h3>
      </div>
      <p class="mt-4">You can also check out our other products.</p>
      <div v-if="dataStore.allProducts.length" class="flex justify-start mt-[51px] w-full">
        <div
          class="flex flex-col gap-5 lg:flex-row md:items-stretch xl:justify-center flex-wrap"
        >
          <template v-if="dataStore.allProducts.length >= 3">
            <div
              v-for="(publication, idx) in 3"
              :key="idx"
              @click="saveFirstProductToStore(dataStore.allProducts[idx])"
              class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[392px]"
            >
              <img class="w-full" :src="dataStore.allProducts[idx].productImages[0].Location" />
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
          </template>
          <template v-else>
            <div
              v-for="(publication, idx) in dataStore.allProducts"
              :key="idx"
              @click="saveFirstProductToStore(dataStore.allProducts[idx])"
              class="cursor-pointer flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[392px]"
            >
              <img class="w-full" :src="publication.productImages[0].Location" />
              <div class="flex items-start">
                <div class="flex w-full">
                  <div class="flex flex-col">
                    <h3
                      class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                    >
                      {{ publication.productName }}
                    </h3>
                    <div class="flex mt-[12px] gap-[6px]">
                      <p class="font-bold text-blue-13 text-[22px]">
                        £{{ publication.price }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
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
