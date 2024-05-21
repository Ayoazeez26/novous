<template>
  <AppHeader />
  <div>
    <AboutHero />
    <AboutMission />
    <AboutBecause />
    <AboutObjective />
    <AboutEnroll />
    <AboutTeam />
    <AboutQandA />
    <HomeEnroll />
  </div>
  <AppFooter />
  <!-- <div class="absolute bg-black/75 w-screen h-screen"></div> -->
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();
</script>

<style scoped></style>
