<script setup>
import { ref } from "vue";
import { VuePDF, usePDF } from "@tato30/vue-pdf";

const page = ref(1);
const { pdf, pages } = usePDF(
  "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
);
</script>

<template>
  <div class="flex items-center justify-center">
    <div>
      <div>
        <button @click="page = page > 1 ? page - 1 : page">Prev</button>
        <span>{{ page }} / {{ pages }}</span>
        <button @click="page = page < pages ? page + 1 : page">Next</button>
      </div>
      <VuePDF :pdf="pdf" :page="page" />
    </div>
  </div>
</template>
