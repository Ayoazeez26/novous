<template>
  <main>
    <AppHeader />
    <ArticleHero />
    <ArticleList />
    <NewFooter />

  </main>
</template>

<script>


export default {
  setup() {


    return {}
  }
}
</script>

<style scoped>
main {
  background: linear-gradient(178.81deg, #E5F6FF 10.59%, #FFF9F0 87.95%);
}

.header {
  background: url('/svg/bg.svg');
  background-size: contain;
}
</style>