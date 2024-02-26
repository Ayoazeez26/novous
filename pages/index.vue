<template>
  <div>
    <AppHeader />
    <CareServicesDropdown v-if="dataStore.careServices" />
    <AboutUsDropdown v-if="dataStore.about" />
    <TrainingDropdown v-if="dataStore.training" />
    <HomeHero />
    <HomeServices />
    <HomeAbout />
    <HomeTestimonials />
    <HomeTeam />
    <HomeEbooks />
    <HomeEnroll />
    <AppFooter />
    <!-- <HomeVideos /> -->
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();
</script>

<style scoped></style>
