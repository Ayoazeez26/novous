import { defineStore } from "pinia";
import { errorToast, successToast } from "~/plugins/vue3-toastify";
import { useDialogStore } from "./dialog";
import type {
  HandoutInput,
  ArticleCreateInput,
  JobApplicationForm,
} from "~/types";

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
    const submitJobApplication = (applicationData: JobApplicationForm) => {
      dialog.isLoading = true;
      return new Promise((resolve, reject) => {
        $api.data
          .jobApplication(applicationData)
          .then((res: any) => {
            dialog.isLoading = false;
            successToast("Application submitted successfully");
            resolve(res.data);
          })
          .catch((error: any) => {
            dialog.isLoading = false;
            reject(error);
          });
      });
    };

    return {
      getJobOpenings,
      submitJobApplication,
      singleJob,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
