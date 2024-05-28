<template>
  <AppHeader />
  <div>
    <ServicesHero />
    <ServicesMission />
    <ServicesRecommendations />
    <!-- <ServicesBecause /> -->
    <!-- <ServicesObjective /> -->
    <!-- <ServicesValues /> -->
    <!-- <ServicesEnroll /> -->
    <AboutTeam />
    <HomepageCTA />
    <!-- <AboutQandA /> -->
    <!-- <HomeEnroll /> -->
  </div>
  <NewFooter />
  <!-- <div class="absolute bg-black/75 w-screen h-screen"></div> -->
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();
</script>

<style scoped></style>
