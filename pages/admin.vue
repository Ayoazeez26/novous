<template>
  <div class="bg-grey-21 min-h-screen">
    <AppHeaderLight />
    <CareServicesDropdown v-if="dataStore.careServices" />
    <AboutUsDropdown v-if="dataStore.about" />
    <TrainingDropdown v-if="dataStore.training" />
    <AdminHero />
    <!-- <AppFooter /> -->
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();
</script>

<style scoped></style>
