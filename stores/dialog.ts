import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  const isLoading = ref(false);
  const showModal = ref(false);

  return { isLoading, showModal }
})