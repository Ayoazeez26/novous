<script setup lang="ts">
import { useDataStore } from '~/stores/data';
import type { FileUploadResponse } from '~/types';

const data = useDataStore();
const name = ref("");
const message = ref("");
const errorMsg = reactive({});
const fileInput = ref(null);
const fileInputSecond = ref(null);
const fileInputThird = ref(null);
const image = ref(null);
const imageUrl = ref(null);

const formData = reactive({
  cover: '',
  headLineCover: '',
  thumbNail: '',
  name: '',
  body: ''
});

const createArticle = async (): Promise<void> => {
  const result = await data.createArticle(formData);
  console.log(result)
  if (result) {
    formData.cover = '';
    formData.headLineCover = '';
    formData.thumbNail = '';
    formData.name = '';
    formData.body = '';
  }
};
const containsItem = computed(() => {
  if (
    formData.cover &&
    formData.headLineCover &&
    formData.thumbNail &&
    formData.name &&
    formData.body
  ) {
    return false;
  } else {
    return true;
  }
});

const onPickFile = () => {
  fileInput.value.click();
};

const onPickSecondFile = () => {
  fileInputSecond.value.click();
};

const onPickThirdFile = () => {
  fileInputThird.value.click();
}

const onFilePicked = (event) => {
  // console.log(event);
  const files = event.target.files;
  let filename = files[0].name;
  const fileReader = new FileReader();
  fileReader.addEventListener('load', () => {
    imageUrl.value = fileReader.result;
  });
  fileReader.readAsDataURL(files[0]);
  image.value = files[0];
  const formData = new FormData();

  formData.append('file', files[0]);

  data
    .uploadDocument(formData)
    .then((res) => {
      console.log(res);
      console.log(event.target.attributes);
      // profilePicture.value = res?.id;
      // profilePreview.value = res?.Location;
      setValue(res, event.target.attributes[3].value);
    })
    .catch((err) => {
      errorToast(err.response);
    });
};

const setValue = (res, type) => {
  console.log(type);
  if (type === 'cover') {
    formData.cover = res.id;
  } else if (type === 'headLineCover') {
    formData.headLineCover = res.id;
  } else {
    formData.thumbNail = res.id;
  }
};
</script>

<template>
  <div class="bg-grey-21 w-full">
    <div
      class="w-full max-w-[1100px] flex gap-6 flex-col justify-center h-full items-center pt-[272px] px-4 md:px-6 xl:px-0 mx-auto"
    >
      <div
        class="bg-white flex flex-col gap-8 p-10 rounded-3xl border border-grey-22 shadow w-full"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-5">
            <img src="/svg/text.svg" alt="text icon" />
            <h5
              class="uppercase text-[#000B29] font-medium text-2xl leading-none"
            >
              Article Name
            </h5>
          </div>
          <div class="flex items-center gap-4">
            <img src="/svg/dots.svg" alt="dots icon" />
            <img src="/svg/trash.svg" alt="trash icon" />
          </div>
        </div>
        <div class="flex w-full pt-[30px] pb-6 px-4">
          <div class="flex flex-col relative w-full">
            <!-- <label for="email" class="mb-2"></label> -->
            <p
              class="absolute top-4 left-6 text-[30px] font-medium text-[#000B29]"
            >
              NAME
            </p>
            <input
              id="name"
              v-model="formData.name"
              type="name"
              name="name"
              required
              class="bg-white border border-[#E9EEF3] text-black-2 bg-transparent rounded-[19px] px-6 py-4 pl-32 text-[30px] focus:outline-none"
              :class="errorMsg.name ? 'border border-red' : ''"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div
        class="bg-white flex flex-col gap-8 p-10 rounded-3xl border border-grey-22 shadow w-full"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-5">
            <img src="/svg/menu.svg" alt="menu icon" />
            <h5
              class="uppercase text-[#000B29] font-medium text-2xl leading-none"
            >
              Article Body
            </h5>
          </div>
          <div class="flex items-center gap-4">
            <img src="/svg/dots.svg" alt="dots icon" />
            <img src="/svg/trash.svg" alt="trash icon" />
          </div>
        </div>
        <div class="flex w-full pt-[30px] pb-6 px-4">
          <div class="flex flex-col relative w-full">
            <textarea
              id="message"
              v-model="formData.body"
              name="message"
              rows="5"
              cols="30"
              class="bg-white border border-[#E9EEF3] text-black-2 bg-transparent rounded-[19px] px-6 py-4 text-[30px] focus:outline-none"
              placeholder="Tell me about your career, job, and anything you want"
            />
          </div>
        </div>
      </div>
      <div
        class="bg-white flex flex-col gap-8 px-10 md:px-[136px] pt-[99px] pb-[111px] border border-[#DFDEDD] shadow w-full"
      >
        <div class="flex flex-col items-center justify-center text-center gap-5">
          <p
            class="text-[#384A62] font-bold text-[29px] leading-none"
          >
            Upload images of your product
          </p>
        </div>
        <div class="flex items-center justify-center w-full">
          <div class="w-full lg:w-1/2">
            <button
              @click="onPickFile"
              class="w-full flex justify-between items-center p-5 rounded-xl border"
            >
              <p>Upload Cover Image</p>
              <div class="shadow p-2 rounded-lg border bg-white border-grey-1">
                <img src="/svg/upload.svg" alt="upload icon" />
              </div>
            </button>
            <input
            type="file"
            class="hidden"
            aria-name="cover"
            ref="fileInput"
            accept="image/*"
            @change="onFilePicked"
            />
          </div>
          <Icon v-if="formData.cover" name="material-symbols-light:check-circle-outline-rounded" size="36" color="green" />
          <Icon v-else name="material-symbols-light:check-circle-outline-rounded" size="36" color="white" />
        </div>
        <div class="flex gap-1 items-center justify-center w-full">
          <div class="w-full lg:w-1/2">
            <button
              @click="onPickSecondFile"
              class="w-full flex justify-between items-center p-5 rounded-xl border"
            >
              <p>Upload Headline Cover</p>
              <div class="shadow p-2 rounded-lg border bg-white border-grey-1">
                <img src="/svg/upload.svg" alt="upload icon" />
              </div>
            </button>
            <input
            type="file"
            class="hidden"
            aria-name="headLineCover"
            ref="fileInputSecond"
            accept="image/*"
            @change="onFilePicked"
            />
          </div>
          <Icon v-if="formData.headLineCover" name="material-symbols-light:check-circle-outline-rounded" size="36" color="green" />
          <Icon v-else name="material-symbols-light:check-circle-outline-rounded" size="36" color="white" />
        </div>
        <div class="flex gap-1 items-center justify-center w-full">
          <div class="w-full lg:w-1/2 flex items-center">
            <button
              @click="onPickThirdFile"
              class="w-full flex justify-between items-center p-5 rounded-xl border"
            >
              <p>Upload Thumbnail</p>
              
              <div class="shadow p-2 rounded-lg border bg-white border-grey-1">
                <img src="/svg/upload.svg" alt="upload icon" />
              </div>
            </button>
            <input
            type="file"
            class="hidden"
            aria-name="thumbNail"
            ref="fileInputThird"
            accept="image/*"
            @change="onFilePicked"
            />
          </div>
          <Icon v-if="formData.thumbNail" name="material-symbols-light:check-circle-outline-rounded" size="36" color="green" />
          <Icon v-else name="material-symbols-light:check-circle-outline-rounded" size="36" color="white" />
        </div>
      </div>
      <div class="flex flex-col w-full lg:items-center gap-4">
        <button
          @click="createArticle"
          class="bg-[#384A62] disabled:bg-[#384A62]/50 disabled:border-transparent disabled:text-white/90 border-2 border-[#384A62] font-medium py-4 px-8 h-[64px] rounded-lg text-white w-full"
          :disabled="containsItem"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.shadow {
  box-shadow: 0px 6.471px 103.529px 0px rgba(0, 8, 31, 0.05);
}
</style>
