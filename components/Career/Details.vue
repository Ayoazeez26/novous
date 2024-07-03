<script lang="ts">
import Markdown from 'vue3-markdown-it';

export default {
  components: {
    Markdown
  },
}
</script>
<script setup lang="ts">
import { useDataStore } from "~/stores/data";
const dataStore = useDataStore();
const route = useRoute();

const jobAd = ref({});
const id = ref('');

onMounted(() => {
  getLastSegment(route.fullPath);
});

const getLastSegment = async (url: string) => {
  const segments = url.split("/");
  const ids = segments[segments.length - 1];
  const singleJob = await dataStore.getSingleJob(ids);
  console.log(singleJob);
  jobAd.value = singleJob.attributes;
  id.value = singleJob.id;
};
</script>

<template>
  <div class="bg-blue-2 md:py-20 py-10 w-full">
    <div
      v-if="id"
      class="bg-blue-2 flex flex-col lg:flex-row justify-between items-center mx-auto w-full max-w-[1240px] md:px-10 px-5"
    >
      <div
        class="flex md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-10 w-full"
      >
        <div class="md:w-[60%] w-full space-y-7">
          <Markdown class="markdown leading-[32px]" :source="jobAd.description" />
        </div>
        <div class="md:w-[40%]">
          <div class="about-the-job space-y-6 mb-16">
            <h2 class="md:text-2xl text-xl font-bold">About the Job</h2>
            <div class="md:space-y-6 text-black font-medium space-y-4">
              <p class="">
                <span class="text-neutral font-normal">Educational Requirement:</span>
                {{ jobAd.qualification }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Experience:</span>
                {{ jobAd.experience }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Job Title:</span>
                {{ jobAd.title }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Grade Band:</span>
                {{ jobAd.band }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Age Limit:</span>
                {{ jobAd.age }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Unit:</span> {{ jobAd.unit }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Department:</span>
                {{ jobAd.department }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Team:</span> {{ jobAd.team }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Supervises:</span>
                {{ jobAd.supervises }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Reports to:</span>
                {{ jobAd.reportsTo }}
              </p>
            </div>
          </div>
          <div class="w-full flex items-center justify-center text-center">
            <nuxt-link
              :to="`/career/apply/${id}`"
              class="bg-secondary text-white rounded md:py-6 px-12 py-4 w-full min-w-max hover:bg-white hover:text-secondary transition-all duration-300 ease-in-out border border-white hover:border-secondary"
              >Apply Now</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
