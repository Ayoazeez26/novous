<template>
  <div class="overflow-x-hidden mx-auto">
    <AppHeader />
    <HomepageUSSD v-if="dialog.showUSSDModal"/>
    <HomepageHero />
    <HomepageRecommendations />
    <HomepageCTA />
    <!-- <HomepageClients /> -->
    <!-- <HomepageEnhancement /> -->
    <!-- <HomepageTestimonials /> -->
    <div class="resources-to-faq">
      <!-- <HomepageResources /> -->
      <!-- <HomepageTenders /> -->
      <!-- <HomepageFAQ /> -->
    </div>
    <NewFooter />
  </div>
</template>

<script setup lang="ts">
import { useDialogStore } from '~/stores/dialog';

const dialog = useDialogStore();
</script>

<style lang="scss" scoped>
.resources-to-faq {
  background: linear-gradient(178.81deg, #e5f6ff 10.59%, #fff9f0 87.95%);
}
</style>
