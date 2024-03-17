<template>
  <section
    class="md:px-16 px-5 bg-[#fff9f0] pt-56 z-20"
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <div class="md:max-w-xl mx-auto pb-20">
      <div class="relative">
        <div class="">
          <h3
            class="sans text-[#044da6] md:text-7xl text-[38px] font-bold text-center"
          >
            How we improve your <span class="text-[#0073ff]">business</span>
          </h3>
        </div>
        <div class="animate-pulse">
          <img
            src="/svg/star.svg"
            alt=""
            class="absolute -top-6 md:-right-2 right-5"
          />
          <img src="/svg/star.svg" alt="" class="absolute -top-6 md:-left-14" />
          <img
            src="/svg/star.svg"
            alt=""
            class="absolute -bottom-3 md:left-36 left-10"
          />
          <img src="/svg/star.svg" alt="" class="absolute -bottom-3 right-10" />
        </div>
      </div>
    </div>

    <div class="">
      <div class="grid md:grid-cols-5 gap-5">
        <div
          class="md:col-span-2 md:row-span-2 bg-[#e8f2ff] p-11 pt-20 rounded"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="">
            <img src="/svg/enhancement-grid-icon.svg" alt="" class="mb-5" />
            <h4 class="sans text-2xl text-[#328BFF]">
              Curate Compelling Tenders:
            </h4>
            <p class="text-[#58A1FF] mt-6 text-lg md:max-w-[80%] font-light">
              We Create, source, and review your tenders so you don’t have to.
            </p>
          </div>
        </div>
        <div class="md:col-span-3">
          <div>
            <div class="grid md:grid-cols-3 gap-5">
              <div
                class="bg-[#fbeddd] rounded py-[85px] px-8"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <img
                  src="/svg/ocmc-pulse.svg"
                  alt=""
                  class="animate-pulse mx-auto"
                />
              </div>
              <div
                class="md:col-span-2 p-11 bg-[#e2f7ef] rounded"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div class="flex items-center space-x-5 mb-8">
                  <img src="/svg/enhancement-grid-icon2.svg" alt="" />
                  <h4 class="sans text-2xl text-[#22B57C]">
                    Conduct Comprehensive Audits:
                  </h4>
                </div>
                <p class="text-[#24C285] mt-6 text-lg font-light">
                  We provide you with comprehensive assessments of your
                  company's compliance and quality standards.
                </p>
              </div>
            </div>
            <div
              class="p-11 bg-[#ffe9f3] rounded mt-6"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div class="flex items-center space-x-5 mb-8">
                <img src="/svg/enhancement-grid-icon3.svg" alt="" />
                <h4 class="sans text-2xl text-[#FF509E]">
                  Complete Compliant Support
                </h4>
              </div>
              <p class="text-[#FB7DB5] mt-6 text-lg font-light">
                From training to comprehensive resources, we ensure your
                business aligns with regulatory policies.
              </p>
              <img src="/svg/ellipse.svg" class="-mt-20" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.rounded {
  border-radius: 30px;
}
</style>
