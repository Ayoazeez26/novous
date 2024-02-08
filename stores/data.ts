import { defineStore } from "pinia";
import { successToast } from "~/plugins/vue3-toastify";
import { useDialogStore } from "./dialog";
import { HandoutInput } from "types";

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
    const category = ref('Books');
    const selectedWeek = ref('Select Week');

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

    const getSingleProduct = (id:string) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.viewSingleProduct(id).then((res) => {
          dialog.isLoading = false;
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
      category,
      downloadHandout,
      selectedWeek,
      getFeaturedProducts,
      getSingleProduct
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
