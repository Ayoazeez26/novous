import { defineStore } from "pinia";
import { successToast } from "~/plugins/vue3-toastify";
import { useDialogStore } from "./dialog";

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
    const totalCount = ref(0);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const singleProduct = ref(null);

    const getAllProducts = (data: string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.getAllProducts(data).then((res) => {
          dialog.isLoading = false;
          console.log("product response is =>", res);
          allProducts.value = res.foundProducts;
          totalCount.value = res.count;
          currentPage.value = res.currentPage;
          totalPages.value = res.totalPages;
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
      allProducts,
      singleProduct,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
