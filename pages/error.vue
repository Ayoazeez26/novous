<template>
  <div>
    <NewHeader />
    <div class="my-44 pt-20 md:max-w-xl md:mx-auto">
      <div class="text-center mb-10 space-y-5">
        <h4 class="sans text-[40px]">Sorry, your order was not processed</h4>
        <p>
          We regret to inform you that we encountered an issue processing your
          order.
        </p>
      </div>

      <div class="p-8 text-center border shadow rounded-lg">
        <img src="/svg/error.svg" class="mx-auto animate-pulse" />
        <h4 class="font-bold sans text-2xl mt-8 mb-7">
          Payment Unsuccessful there was an issue processing your payment.
        </h4>

        <div class="flex items-center justify-between space-x-6 mb-8">
          <button
            @click="router.push('/store')"
            class="btn px-4 py-3 bg-[#12b76a] w-full text-white rounded font-bold"
          >
            Retry
          </button>
          <button
            @click="router.push('/store')"
            class="btn px-4 py-3 bg-[#FDBEBA] w-full text-[#DE1306] rounded font-bold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
</template>

<style></style>
