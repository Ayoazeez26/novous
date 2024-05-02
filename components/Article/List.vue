<template>
  <section class="px-16">
    <div class="relative">
      <div class="mt-28">
        <h4 class="mb-6 font-bold text-3xl sans">Our Blog</h4>
        <div class="grid grid-cols-2 gap-x-14 pb-16">
          <!-- First column -->
          <div class="col-span-1">
            <div v-for="(article, index) in articles.slice(0, 1)" :key="article.name" class="bg-[#3b4857] rounded-b-lg"
              @click="goToArticle(article.id)">
              <img :src="article.headLineCover.Location" :alt="article.name" class="article-logo" />
              <div class="px-6 pb-10 pt-6 text-white cursor-pointer">
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

<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter();
import { useDataStore } from "~/stores/data";

const data = useDataStore();
console.log(data);

const articles = ref([]);
const searchTerm = ref('');
const searched = ref(false);
const loading = ref(false);

const fetchArticles = async () => {
  try {
    const response = await fetch('https://dev.tgpcmedia.com/article/search?limit=100');
    const data = await response.json();
    articles.value = data.foundArticles;
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};

const truncateDescription = (description) => {
  return description.slice(0, 200);
};

const truncateTitle = (name) => {
  return name.slice(0, 30);
};

const goToArticle = (id) => {
  router.push(`/articles/${id}`);
};

onMounted(() => {
  fetchArticles();
});
</script>