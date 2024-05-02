<template>
  <main>
    <NewHeader />
    <div class="md:h-screen flex items-center justify-center header pt-32">
      <img
        :src="articleData.cover.Location"
        :alt="articleData.name"
        class="article-logo md:max-w-4xl md:mx-auto bg-white p-3 rounded-lg"
      />
    </div>
    <div class="pt-5 pb-32 md:max-w-4xl md:mx-auto md:px-0 px-5 space-y-10">
      <h3 class="sans font-bold md:text-5xl text-2xl">
        {{ articleData.name }}
      </h3>
      <div class="text-lg">
        <div v-html="formattedArticleBody"></div>
      </div>
    </div>
    <NewFooter />
  </main>
</template>

<script setup lang="ts">
import { useDataStore } from '~/stores/data';

const data = useDataStore();
const route = useRoute();
const articleData = ref({
  name: "",
  cover: {
    Location: "",
  },
});
const articleBody = ref("Recent findings from the Care Quality Commission (CQC) have highlighted inadequate care in some Care homes, thereby underscoring the pressing need to implement safeguarding measures. /n These findings emphasize the critical importance of safeguarding to ensure the safety and well-being of care recipients. Safeguarding measures are therefore essential not just for compliance, but to genuinely protect those who are vulnerable. Furthermore, by prioritizing the well-being of those in care and adhering to principles of dignity, respect, and compassion, organizations can strive toward a system that genuinely serves the needs of vulnerable individuals. Safeguarding is integral to this process, ensuring that care recipients are protected from harm and abuse while promoting a culture of accountability. /n This article will briefly identify the  shortcomings, urgent action required and how safeguarding can address these critical issues within the care system. /n • Worrying deficiencies:  CQC investigations have uncovered worrying deficiencies in various care homes, such as insufficient staffing, a lack of person-centered care, and failures in safeguarding protocols. These issues leave patients unprotected from abuse, highlighting inadequate recruitment processes, and poor management of essential care elements like medication. These systemic failures jeopardize the safety and dignity of those in care. /n • Urgent action needed: The CQC's findings highlight an urgent need to tackle these systemic problems within the care system. Actions needed include bolstering regulatory oversight, supporting care providers with resources, and fostering a culture of accountability and continuous improvement. /n • Why Safeguarding is needed: Safeguarding vulnerable individuals in care settings is crucial. It involves measures to protect individuals from harm, abuse, and neglect, ensuring that care is person-centered, staffing is adequate, and robust procedures are in place to handle incidents and prevent abuse. Some of the Safeguarding measures includes: /n • Upholding dignity and respect: Every person in care deserves dignity, respect, and compassion. Care should always be consensual, prioritizing the preferences and needs of the individual in all decision-making. Ignoring these fundamental principles not only breaches individuals' rights but also degrades the quality of care provided. /n • Involving Carers: Carers are essential in maintaining the safety and well-being of those in their care. They bear a significant responsibility to protect individuals from harm, abuse, and neglect, which demands continuous vigilance and a commitment to high-quality, person-centered care. Ensuring the safety and dignity of those in care is therefore, a critical duty for everyone involved in the care system.")
const formattedArticleBody = computed(() => {
  return articleBody.value.replace(/\/n/g, '<br/><br/>');

});
const getData = async() => {
  // const response = await fetch(`https://dev.tgpcmedia.com/article/search?id[0]=${this.$route.params.id}`);
  const singleArticle = await data.getSingleArticle(route.params.id);
  articleData.value = singleArticle;
  console.log(articleData.value);
};
getData();
</script>

<style scoped>
main {
  background: linear-gradient(178.81deg, #e5f6ff 10.59%, #fff9f0 87.95%);
}

.header {
  background: url("/svg/bg.svg");
  background-size: contain;
}
</style>
