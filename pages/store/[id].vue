<template>
  <AppHeaderLight />
  <div>
    <CareServicesDropdown v-if="dataStore.careServices" />
    <AboutUsDropdown v-if="dataStore.about" />
    <TrainingDropdown v-if="dataStore.training" />
    <StoreProduct />
    <StoreSimilar />
    <StoreFeatures />
  </div>
  <AppFooter />
  <!-- <div class="absolute bg-black/75 w-screen h-screen"></div> -->
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();
</script>

<style scoped></style>
