<template>
  <section class="px-16">
    <div class="relative">
      <div class="mt-28">
        <h4 class="mb-6 font-bold text-3xl sans">Our Blog</h4>
        <div class="grid grid-cols-2 gap-x-14 pb-16">
          <!-- First column -->
          <div class="col-span-1">
            <div v-for="(article, index) in articles.slice(0, 1)" :key="article.name" class="bg-[#3b4857] rounded-b-lg">
              <a :href="article.link" target="_blank">
                <img :src="article.headLineCover.Location" :alt="article.name" class="article-logo" />
              </a>
              <div class="px-6 pb-10 pt-6 text-white">
                <p class="sans font-semibold text-xl mb-4 capitalize">
                  {{ article.name }}
                </p>
              </div>
            </div>
          </div>
          <!-- Second column -->
          <div class="col-span-1">
            <h3 class="sans font-bold text-4xl pb-5">Top Picks</h3>
            <div class="grid grid-row-3 divide-y-2 gap-y-5">
              <div v-for="(article, index) in articles.slice(1, 4)" :key="article.name" @click="goToArticle(article.id)"
                class="flex items-center space-x-5 pt-5 cursor-pointer">
                <a :href="article.link" target="_blank">
                  <img :src="article.thumbNail.Location" :alt="article.name" class="article-logo h-auto w-auto" />
                </a>
                <div class="">
                  <h2 class="sans font-bold mb-4 capitalize">
                    {{ article.name }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Display message if no courses found -->
      </div>
      <div v-if="articles.length === 0 && searched" class="pb-44">
        Nothing found.
      </div>
    </div>
  </section>
</template>

<script>
const config = useRuntimeConfig();

export default {
  data() {
    return {
      articles: [],
      searchTerm: '',
      searched: false,
      loading: false,
    };
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await fetch('https://dev.tgpcmedia.com/article/search?limit=100');
        const data = await response.json();
        this.articles = data.foundArticles;
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    },
    truncateDescription(description) {
      return description.slice(0, 200);
    },
    truncateTitle(name) {
      return name.slice(0, 30);
    },
    goToArticle(id) {
      this.$router.push(`/articles/${id}`);
    },
  },
  mounted() {
    this.fetchArticles();
  },
};
</script>
