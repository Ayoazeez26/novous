<script>
import Markdown from 'vue3-markdown-it';

export default {
  components: {
    Markdown
  },
}
</script>
<script setup>
import { ref } from "vue";
import { useDataStore } from "~/stores/data";
const dataStore = useDataStore();

console.log(dataStore.singleJob);
const jobAd = dataStore.singleJob.attributes;
const jobObjective = ref(
  "To ensure successful credit analysis is done as requested by the Credit Officers in line with the Bank’s credit policy and within the expected turnaround time, to deliver quality and sustainable risk assets."
);
const accountabilities = ref([
  "Review of the credit requests to identify key risks and policy mitigants, and approve as appropriate within limits provided in consideration of set turnarounds.",
  "Review of covenants to provide assurance to the quality of the asset.",
  "Provide an independent credit opinion to the credit committee members to safeguard the bank against loss.",
  "Review and analyse the NPL credit recovery information and make recommendations.",
  "Review and update the bank’s credit risk-related analytical models with new thresholds of approval.",
  "Participate in the credit policy design/information process.",
]);

const keyPerformanceIndicators = ref({
  Financial: ["Bank’s Risk", "Cost containment"],
  Customer: ["Net Promoter Score"],
  People: [
    "Staff Turnover - Retention (Regrettable Loss)",
    "Staff Performance Management",
    "Staff Training & Development",
  ],
  Process: [
    "Percentage achievement of the Risk Asset budget for the group - At least 80%",
    "NPL ratio - Not more than 5%",
    "The ratio of problematic groups based on a 3-tiered process T3 threshold",
    "The ratio of unmitigated approved requests to total approved credit requests",
    "Quality of credit processes measured by the number of reviewed/reworked requests referred for SRG",
  ],
  Risk: ["Risk & Control Ratings"],
});

const requiredCompetencies = ref({
  "Professional Competencies (Core)": [
    "Credit Analysis",
    "Understanding of CBN regulatory guidelines",
    "Loan structuring & documentation",
    "Credit risk management",
    "Financial Analysis",
    "Industry knowledge",
    "Fraud detection & documentary credit/bills review",
  ],
  "Professional Competencies (Non-core)": [
    "Product Knowledge",
    "Project Finance & implementation",
  ],
  "Behavioural Competencies": [
    "Interpersonal skills",
    "Negotiation skills",
    "Analytical skills",
    "Decision making",
    "Dedication & timely problem-solving",
  ],
});

const aboutTheJob = ref({
  educationalRequirement: "First Degree or HND in any Field",
  experience: "At least One (1) year cognate experience",
  jobTitle: "Senior Credit Officer",
  gradeBand: "MT",
  ageLimit: "Thirty-two (32)",
  unit: "Service Experience Standardisation",
  department: "Finance and Administration",
  team: "Underwriting",
  supervises: "Credit Officers",
  reportsTo: "Head of Operations",
});

const personSpecification = ref({
  title: "Person Specification/Job Profile",
  behavioralCompetencies: [
    "Be a self-starter in order to complete tasks and overcome problems as well as providing direction for others.",
    "Create a culture of continuous improvement.",
    "Continually seek out opportunities, practice and encourage a culture of strategic excellence.",
    "Take appropriate decisions whilst, at the same time, ensuring that others do likewise.",
    "Evaluate situations and calculate risks whilst justifying and defending quality standards.",
    "Enjoy challenging problem-solving situations and come up with well-thought-through practical solutions.",
    "Provide simple, practical solutions and complete all assignments thoroughly and concisely.",
    "Work as part of a team and demonstrate tolerance, understanding, and consistency when dealing with others.",
    "Adopt a serious and questioning manner in order to assess situations and reach conclusions, thus basing the processes on facts and information gleaned from others.",
  ],
  jobProfile: [
    "The Job Profile indicates that the job requirement is for a person who has the ability to achieve results through a logical, systematic and perfectionist approach. Challenging assignments and the research of facts and information within a specialist/technical area are also important to the role. The incumbent should have the persistence to see a job through to conclusion and be happy to work either alone or on the periphery of a team. The function calls for well-defined parameters, achieving goals and solving problems, whilst at the same time maintaining quality and standards.",
    "A friendly approach and the ability to communicate thoroughly and factually are integral to the function. Standard operating procedures, adherence torules, and a patient, hard-working nature are also important aspects of the role. Ideally, the person fulfilling this job will have the ability to persuade others, and work within specific guidelines whilst at the same time maintaining quality and standards.",
    "The person occupying the job should be authoritative, inquisitive, self-reliant, methodical, deliberate and precise in approach. The ability to question, concentrate and work within set precedents may also be important aspects within this job.",
  ],
});
</script>

<template>
  <div class="bg-blue-2 md:py-20 py-10 w-full">
    <div
      class="bg-blue-2 flex flex-col lg:flex-row justify-between items-center mx-auto w-full max-w-[1240px] md:px-10 px-5"
    >
      <div
        class="flex md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-10 w-full"
      >
        <div class="md:w-[60%] w-full space-y-7">
          <Markdown class="markdown leading-[32px]" :source="dataStore.singleJob.attributes.description" />
          <!-- <div class="job-objective md:space-y-5 space-y-3">
            <h2 class="md:text-2xl text-xl font-bold">Job Objective</h2>
            <p>{{ jobObjective }}</p>
          </div>
          <div class="accountabilities md:space-y-5 space-y-3">
            <h2 class="md:text-2xl text-xl font-bold">Accountabilities</h2>
            <ol class="pl-2 space-y-2">
              <li
                v-for="(accountability, index) in accountabilities"
                :key="index"
                class="list-decimal"
              >
                {{ accountability }}
              </li>
            </ol>
          </div>
          <div class="key-performance-indicator md:space-y-5 space-y-3">
            <h2 class="md:text-2xl text-xl font-bold">
              Key Performance Indicator
            </h2>
            <div
              v-for="(kpi, category) in keyPerformanceIndicators"
              :key="category"
              class="space-y-2"
            >
              <h3 class="font-semibold">{{ category }}</h3>
              <ul class="space-y-1 pl-2">
                <li v-for="(item, index) in kpi" :key="index" class="list-disc">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="required-competencies md:space-y-5 space-y-3">
            <h2 class="md:text-2xl text-xl font-bold">Required Competencies</h2>
            <div
              v-for="(competency, category) in requiredCompetencies"
              :key="category"
              class="space-y-2"
            >
              <h3 class="font-semibold">{{ category }}</h3>
              <ul class="space-y-1 pl-2 list-disc">
                <li v-for="(item, index) in competency" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="person-specification md:space-y-5 space-y-3">
            <h2 class="md:text-2xl text-xl font-bold">
              {{ personSpecification.title }}
            </h2>
            <div class="behavioral-competencies space-y-2">
              <p class="">
                The behavioural competencies of the job include the ability to:
              </p>
              <ul class="space-y-1 pl-2 list-disc">
                <li
                  v-for="(
                    item, index
                  ) in personSpecification.behavioralCompetencies"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="job-profile space-y-2">
              <div class="space-y-4">
                <p
                  v-for="(item, index) in personSpecification.jobProfile"
                  :key="index"
                >
                  {{ item }}
                </p>
              </div>
            </div>
          </div> -->
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
                <span class="text-neutral font-normal">Unit:</span> {{ aboutTheJob.unit }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Department:</span>
                {{ jobAd.department }}
              </p>
              <p class="">
                <span class="text-neutral font-normal">Team:</span> {{ aboutTheJob.team }}
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
              to="/career/apply/4"
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
