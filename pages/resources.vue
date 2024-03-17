<template>
  <div>
    <AppHeaderLight />
    <CareServicesDropdown v-if="dataStore.careServices" />
    <AboutUsDropdown v-if="dataStore.about" />
    <TrainingDropdown v-if="dataStore.training" />
    <ResourcesHero />
    <ResourcesBecause />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();
</script>

<style scoped></style>
