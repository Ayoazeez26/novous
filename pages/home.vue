<template>
  <div class="overflow-x-hidden max-w-[1440px] mx-auto">
    <Banner />
    <NewHeader />
    <HomepageHero />
    <HomepageClients />
    <!-- <HomepageClients2 /> -->
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
