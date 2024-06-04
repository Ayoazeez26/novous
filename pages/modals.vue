<template>
  <div>
    <button @click="showModal = true" class="bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-600">
      Open Profile Setup
    </button>
    <ProfileSetupModal :isVisible="showModal" @update:isVisible="showModal = $event" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const showModal = ref(false);
</script>