<script setup lang="ts">
const resource = ref("Books");
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
]);
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
      <p class="mt-4">Porem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <div class="flex justify-start mt-[51px] w-full">
        <div
          class="flex flex-col gap-5 lg:flex-row md:items-stretch justify-center flex-wrap"
        >
          <div
            v-for="(service, idx) in services"
            :key="idx"
            class="flex flex-col w-full p-[25px] border bg-whiter border-grey-15 lg:w-[392px]"
          >
            <img class="w-full" :src="`/img/${service.image}.png`" />
            <div class="flex items-start">
              <div class="flex w-full">
                <div class="flex flex-col">
                  <h3
                    class="mt-[12.65px] text-lg font-medium leading-[31.626px]"
                  >
                    {{ service.title }}
                  </h3>
                  <div class="flex mt-[12px] gap-[6px]">
                    <p class="line-through text-grey-13 text-[22px]">
                      {{ service.slashedPrice }}
                    </p>
                    <p class="font-bold line-through text-blue-13 text-[22px]">
                      {{ service.price }}
                    </p>
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

<style scoped lang="scss">
.cut-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
</style>
