import { defineStore } from "pinia";
import { successToast } from "~/plugins/vue3-toastify";
import { useDialogStore } from "./dialog";
import type { HandoutInput, ArticleCreateInput } from "~/types";

export const useDataStore = defineStore(
  "data",
  () => {
    const { $api } = useNuxtApp();
    const dialog = useDialogStore();
    const about = ref(false);
    const careServices = ref(false);
    const training = ref(false);
    const scrolled = ref(false);
    const allProducts = ref([]);
    const allArticles = ref([]);
    const totalCount = ref(0);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const singleProduct = ref(null);
    const category = ref("Books");
    const selectedWeek = ref({});
    const prepbookIndex = ref(null);

    const getAllProducts = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.getAllProducts(data).then((res) => {
          dialog.isLoading = false;
          allProducts.value = res.foundProducts;
          totalCount.value = res.count;
          currentPage.value = res.currentPage;
          totalPages.value = res.totalPages;
          resolve(res);
        });
      });
    };

    const getAllArticles = () => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.getAllArticles().then((res) => {
          dialog.isLoading = false;
          allArticles.value = res.foundArticles;
          // totalCount.value = res.count;
          // currentPage.value = res.currentPage;
          // totalPages.value = res.totalPages;
          resolve(res.foundArticles);
        });
      });
    };

    const getSingleArticle = (id: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.getSingleArticle(id).then((res) => {
          dialog.isLoading = false;
          // allArticles.value = res.foundArticles[0];
          // totalCount.value = res.count;
          // currentPage.value = res.currentPage;
          // totalPages.value = res.totalPages;
          resolve(res.foundArticles[0]);
        });
      });
    };

    const downloadHandout = (data: HandoutInput) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.downloadHandout(data).then((res) => {
          dialog.isLoading = false;
          resolve(res);
        });
      });
    };

    const getFeaturedProducts = () => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.getFeaturedProducts().then((res) => {
          dialog.isLoading = false;
          resolve(res);
        });
      });
    };

    const getSingleProduct = (id: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.viewSingleProduct(id).then((res) => {
          dialog.isLoading = false;
          resolve(res);
        });
      });
    };

    const uploadDocument = (payload: FormData) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.uploadDocument(payload).then((res) => {
          dialog.isLoading = false;
          successToast("Picture Uploaded Successfully");
          // user.value = res;
          resolve(res);
        });
      });
    };

    const createArticle = (payload: ArticleCreateInput) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.createArticle(payload).then((res) => {
          console.log(res);
          dialog.isLoading = false;
          successToast("Article Created Successfully");
          // user.value = res;
          resolve(res);
        });
      });
    };

    return {
      about,
      careServices,
      training,
      scrolled,
      getAllProducts,
      getAllArticles,
      allArticles,
      allProducts,
      singleProduct,
      category,
      downloadHandout,
      selectedWeek,
      getFeaturedProducts,
      getSingleProduct,
      prepbookIndex,
      uploadDocument,
      createArticle,
      getSingleArticle
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
