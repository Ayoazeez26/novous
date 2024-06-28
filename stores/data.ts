import { defineStore } from "pinia";
import { successToast } from "~/plugins/vue3-toastify";
import { useDialogStore } from "./dialog";
import type { HandoutInput, ArticleCreateInput } from "~/types";

export const useDataStore = defineStore(
  "data",
  () => {
    const { $api } = useNuxtApp();
    const dialog = useDialogStore();
    const singleJob = ref(null);

    const getJobOpenings = () => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data.getJobOpenings().then((res) => {
          dialog.isLoading = false;
          resolve(res.data);
        });
      });
    };

    

    return {
      getJobOpenings,
      singleJob
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
