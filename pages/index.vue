<template>
  <div class="overflow-x-hidden mx-auto">
    <AppHeader />
    <HomepageHero />
    <HomepageClients />
    <HomepageEnhancement />
    <HomepageTestimonials />
    <div class="resources-to-faq">
      <HomepageResources />
      <HomepageTenders />
      <HomepageFAQ />
    </div>
    <NewFooter />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.resources-to-faq {
  background: linear-gradient(178.81deg, #e5f6ff 10.59%, #fff9f0 87.95%);
}
</style>
