import { ofetch, $fetch, FetchOptions } from "ofetch";
// import AuthModule from '~/repository/modules/auth';
import DataModule from "~/repository/modules/data";
// import { useAuthStore } from '~/stores/auth';
import { errorToast } from "./vue3-toastify";
import { useDialogStore } from "~/stores/dialog";
// import type { RefreshTokenInput } from '~/types';

interface IApiInstance {
  // auth: AuthModule;
  data: DataModule;
}

// Example POST method implementation:
export async function refreshToken(config: any, data: RefreshTokenInput) {
  // Default options are marked with *
  try {
    const response = await fetch(
      `${config.public.baseUrl}/account/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      console.log(response);
      return response.json();
    } else {
      throw new Error(response);
    }
  } catch (response) {
    throw new Error(response);
  }
  // return response.json(); // parses JSON response into native JavaScript objects
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const dialog = useDialogStore();
  const router = useRouter();
  let opt = {};
  const fetchOptions: FetchOptions = {
    retryStatusCodes: [451],
    retry: 3,
    retryDelay: 1000, // ms
    baseURL: config.public.baseUrl,
    onRequest({ request, options }) {
      // const authStore = useAuthStore();
      // if (authStore.authenticated && authStore.user.accessToken) {
      opt = {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 8a5de7738830070b880ad7684fbb5ccd28ee45fc47a9c3c1a9738789ed461988f38bb303d67602091e43283fc4d4a95d427b09af322a583ee47f0b94f7f086349853846b2d65de77b48796aa1daf70d9ef3cf428fa14ca4924ab03afdee4bcf03dbab965f874de9c74c9eac73415c151cc98a02da41ed40068066585e518ed4f",
      };
      options.headers = opt;
      // } else {
      //   opt = { Authorization: '' };
      // }
    },
    onRequestError(error) {
      dialog.isLoading = false;
      console.log(error);
      errorToast(
        error.response && error.response._data
          ? error.response._data.message
          : "Something went wrong, try again!"
      );
    },
    onResponseError(error) {
      // const authStore = useAuthStore();
      const { $api } = useNuxtApp();
      dialog.isLoading = false;
      console.log(error);
      // if (error.response.status === 451) {
      //   const payload: RefreshTokenInput = {
      //     expiredToken: authStore.user.accessToken as string,
      //     refreshToken: authStore.user.refreshToken as string,
      //   };

      //   refreshToken(config, payload)
      //     .then((data) => {
      //       console.log(data);
      //       opt = { Authorization: `Bearer ${data.token}` };
      //       authStore.user.accessToken = data.token;
      //       authStore.user.refreshToken = data.refreshToken;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       errorToast('Session has expired, please login again!');
      //       setTimeout(() => {
      //         authStore.logout();
      //       }, 1000);
      //     });
      // } else if (error.response.status === 456) {
      //   errorToast('Session has expired, please login again!');
      //   setTimeout(() => {
      //     authStore.logout();
      //   }, 1000);
      // } else {
      errorToast(
        error.response && error.response._data
          ? error.response._data.message
          : "Something went wrong, try again!"
      );
      // }
    },
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    // auth: new AuthModule(apiFetcher),
    data: new DataModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
