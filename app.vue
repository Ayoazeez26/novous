<script setup lang="ts">
import { useDialogStore } from "~/stores/dialog";

// const seoData = reactive({
//   title: 'O.C. Management Consulting',
//   description: 'Leading management consulting company specializing in Tender, Grant, and Bid writing and management as well as developing quality assurance frameworks and enabling successful license applications.',
//   img: 'https://s3.eu-west-2.amazonaws.com/ocmc-img.com/logo.png'
// });

// useSeoMeta({
//   title: seoData.title,
//   ogTitle: seoData.title,
//   description: seoData.description,
//   ogDescription: seoData.description,
//   ogImage: seoData.img
// })
const dialogStore = useDialogStore();
const clickedOutside = () => {
  console.log("clicked outside");

  dialogStore.showModal = false;
};
</script>
<template>
  <PreLoader />
  <div class="body">
    <main>
      <CustomCursor />
      <Modal v-if="dialogStore.showModal" class="loader" />
      <Loading v-if="dialogStore.isLoading" class="loader" />
      <CreateAccountModal v-if="dialogStore.showAccountModal" class="" />
      <NuxtPage />
    </main>
  </div>
</template>
<style lang="scss">
html {
  height: 100%;
}
.body {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
}

main {
  flex: 1 0;
}
footer {
  flex: 0 0;
}
</style>
