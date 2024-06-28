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
          "Bearer dfda7eb4f035d6ab674d5554fac85052d174ed336d846819bdcd2519a6e199937ec1d312a490a8cba77f4822bf7800b0a337bdb5e3689cf5494cb08308d4d558f8dd792a7ae2a491d9083e74313acce1b1b9fb7ef80933d43513e939450d365b89d056cf9672515c602775e3401b5e45124d490f9abdcbc692d71a435ef6f194",
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
