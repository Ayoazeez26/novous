<template>
  <section class="bg-[#fff9f0]" data-aos="fade-up" data-aos-duration="1500">
    <!-- <div
      class="md:mx-16 mx-5 border-2 border-[#5548A4] rounded-[32px] overflow-hidden -mt-32"
    > -->
    <div
      class="md:mx-16 mx-5 border-2 border-[#5548A4] rounded-[32px] overflow-hidden mt-32 grid md:grid-cols-5"
    >
      <div class="bg-[#6d5ae0] py-20 md:col-span-3 md:text-left text-center">
        <h4 class="sans text-[#DFDAFF] md:text-[59.2px] text-[32px] font-bold">
          Meet Our
        </h4>
        <h3
          class="sans text-[#DFDAFF] md:text-[160px] text-[32px] font-bold border-y"
        >
          Clients
        </h3>
        <p
          class="md:text-2xl text-center font-sans md:font-light font-semibold md:px-16 px-3 text-[#DFDAFF] md:mt-0 mt-3"
        >
          We love seeing our clients thrive. From writing compelling tenders to
          conducting extensive audits we have worked with multiple companies,
          enabling them maintain and secure public contracts and compliance
        </p>
      </div>
      <div class="py-20 bg-[#e4dfff] md:col-span-2">
        <Vue3Lottie ref="clientsAnim" :animationData="clients" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import clients from "~/assets/clients.json";
</script>

<style scoped></style>
