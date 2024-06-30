<script setup lang="ts">
import { errorToast } from "~/plugins/vue3-toastify";
import { successToast } from "~/plugins/vue3-toastify";
import { useDataStore } from "~/stores/data";

const dataStore = useDataStore();
const id = localStorage.getItem("productId");
const email = ref("");
const loading = ref(false);
const errorMessage = ref("");
const router = useRouter();
const jobOpenings = ref([]);

const getAllJobOpenings = async () => {
  const jobOpening = await dataStore.getJobOpenings();
  if (jobOpening) {
    console.log(jobOpening);
    jobOpenings.value = jobOpening;
  }
};
getAllJobOpenings();

const goToJD = (id) => {
  const singleJobApplication = jobOpenings.value.find(el => el.id === id);
  dataStore.singleJob = singleJobApplication;
  router.push(`/career/${singleJobApplication.id}`);
}
</script>
<template>
  <div>
    <div id="team" class="py-14 lg:py-[100px] w-full">
      <div
        class="flex flex-col mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]"
      >
        <div class="flex lg:items-center justify-center w-full mb-10">
          <div class="text-center">
            <p class="pre-header">Come Work With Us</p>
            <h2
              class="md:font-medium leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] capitalize"
            >
              Our Current Job Openings
            </h2>
          </div>
        </div>
        <div v-if="jobOpenings.length" class="flex flex-col items-center gap-6 mb-16">
          <div
            v-for="(opening, index) in jobOpenings"
            :key="index"
            class="border border-grey-4 flex flex-col md:flex-row md:items-center justify-between rounded-2xl gap-6 p-4 w-full"
          >
            <div class="flex flex-col md:flex-row md:items-center w-full gap-4">
              <img
                class="w-[160px]"
                :src="opening.attributes.img"
                alt="job placeholder image"
              />
              <div class="flex flex-col text-grey-10">
                <p class="mb-2">Novus Microfinance Bank</p>
                <h4 class="font-medium text-xl md:text-2xl text-black">
                  {{ opening.attributes.title }}
                </h4>
                <div class="flex flex-col md:flex-row md:items-center gap-1 mt-1">
                  <p>Makurdi, Benue State</p>
                  <div class="h-2 w-2 rounded-full bg-grey-11" />
                  <p>
                    Grade Band: <span class="text-black font-medium">{{ opening.attributes.band }}</span>
                  </p>
                  <div class="h-2 w-2 rounded-full bg-grey-11" />
                  <p>
                    Age Limit:
                    <span class="text-black">{{ opening.attributes.age }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:items-end gap-1">
              <p class="min-w-max mb-2">Closing {{ opening.attributes.endDate }}</p>
              <button @click="goToJD(opening.id)" class="bg-secondary px-8 py-4 rounded-lg text-white">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
