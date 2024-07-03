<script setup lang="ts">
import { useDialogStore } from '~/stores/dialog';

const dialog = useDialogStore();
</script>
<template>
  <div
    id="team"
    class="bg-[#3D0A06E3] rounded-t-lg fixed bottom-0 left-0 right-0 py-6 lg:py-[30px] w-full max-w-[1240px] mx-auto z-[10]"
  >
    <div class="relative text-white">
      <Icon @click="dialog.showUSSDModal = false" name="mdi:close" size="24" class="absolute right-6 top-0" />
      <div
        class="flex flex-col mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]"
      >
        <div
          class="flex lg:items-center justify-center w-full max-w-[766px] mx-auto"
        >
          <div class="text-center text-white/80">
            <p class="text-xl md:text-2xl">
              <span class="font-bold">Dial *614*0806#</span> to Stay Connected
              with
              <span class="font-bold">NOVUS</span>

            </p>
            <p class="text-sm md:text-base mt-4">
              Dial *614*0806# Now! Discover instant updates, support, and more
              right at your fingertips. Our USSD code ensures you have the
              latest information and assistance whenever you need it. Stay ahead
              and stay informed with just a few taps!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
