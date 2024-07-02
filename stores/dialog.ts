import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  const isLoading = ref(false);
  const showModal = ref(true);
  const showAccountModal = ref(false);

  return { isLoading, showModal, showAccountModal }
})