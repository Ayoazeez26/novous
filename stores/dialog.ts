import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  const isLoading = ref(false);
  const showModal = ref(false);
  const showEmailModal = ref(false);
  const showMonthlyEnhancerModal = ref(false);

  return { isLoading, showModal, showEmailModal, showMonthlyEnhancerModal }
})