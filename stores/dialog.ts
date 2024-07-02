import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  const isLoading = ref(false);
  const showModal = ref(true);
  const showAccountModal = ref(false);
  const showUSSDModal = ref(true);

  return { isLoading, showModal, showAccountModal, showUSSDModal }
})