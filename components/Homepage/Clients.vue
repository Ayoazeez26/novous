<template>
  <section class="bg-[#fff9f0]" data-aos="fade-up" data-aos-duration="1500">
    <div
      class="md:mx-16 mx-5 border-2 border-[#5548A4] rounded-[32px] overflow-hidden -mt-32"
    >
      <div class="bg-[#6d5ae0] md:px-44 py-20">
        <h3
          class="sans text-[#DFDAFF] md:text-[102px] text-[32px] font-bold text-center"
        >
          Meet Our Clients
        </h3>
        <p
          class="md:text-2xl text-center font-sans md:font-light font-semibold md:px-16 px-3 text-[#DFDAFF] md:mt-0 mt-3"
        >
          We love seeing our clients thrive. From writing compelling tenders to
          conducting extensive audits we have worked with multiple companies,
          enabling them maintain and secure public contracts and compliance
        </p>
      </div>
      <!-- 
    <div class="flex bg-[#e4dfff]">
      <div v-for="(client, index) in clients" :key="index">
        <div class="flex">
          <div class="bg-white w-[371.57px] py-4">
            <p class="text-xl text-center sans font-light max-w-[176px] w-20">
              {{ client.companyName }}
            </p>
          </div>
          <div class="text-xl text-center sans font-light">
            <img :src="client.logo" alt="" srcset="" />
            {{ client.description }}
          </div>
        </div>
      </div>
    </div> -->

      <div class="bg-[#e4dfff] py-20 space-y-3">
        <div class="flex space-x-7">
          <div class="flex items-center space-x-1.5 sans">
            <div class="client__name__container">
              <p class="client__name">
                Crystalize health <br />
                Care Services
              </p>
            </div>
            <div class="client__image__container bg-[#ffe3b8]">
              <img src="/svg/crystalize.svg" alt="" class="mx-auto" />
            </div>
          </div>
          <div class="flex items-center space-x-1.5 sans">
            <div class="client__name__container">
              <p class="client__name">
                Treasure <br />
                Vince Care
              </p>
            </div>
            <div class="client__image__container bg-[#c1efde]">
              <img src="/svg/treasure-vince.svg" alt="" class="mx-auto" />
            </div>
          </div>
          <div class="flex items-center space-x-1.5 sans">
            <div class="client__name__container">
              <p class="client__name">
                OC Management <br />
                Consultants
              </p>
            </div>
            <div class="client__image__container bg-[#0073ff]">
              <img src="/svg/ocmc.svg" alt="" class="mx-auto" />
            </div>
          </div>
          <div class="flex items-center space-x-1.5 sans">
            <div class="client__name__container">
              <p class="client__name">
                HSCT Portal <br />
                Services
              </p>
            </div>
            <div class="client__image__container bg-[#f9b19d]">
              <img src="/svg/hsct.svg" alt="" class="mx-auto" />
            </div>
          </div>
          <div class="flex items-center space-x-1.5 sans">
            <div class="client__name__container">
              <p class="client__name">
                Wana Health <br />
                Care Services
              </p>
            </div>
            <div class="client__image__container bg-[#ffe3b8]">
              <img src="/svg/wana.svg" alt="" class="mx-auto" />
            </div>
          </div>
        </div>
        <div class="flex space-x-7">
          <div class="flex items-center space-x-1.5 sans">
            <div class="client__name__container">
              <p class="client__name">
                HSCT Portal <br />
                Services
              </p>
            </div>
            <div class="client__image__container bg-[#f9b19d]">
              <img src="/svg/hsct.svg" alt="" class="mx-auto" />
            </div>
          </div>
          <div class="flex items-center space-x-1.5 sans">
            <div class="client__name__container">
              <p class="client__name">
                Wana Health <br />
                Care Services
              </p>
            </div>
            <div class="client__image__container bg-[#ffe3b8]">
              <img src="/svg/wana.svg" alt="" class="mx-auto" />
            </div>
          </div>
          <div class="flex items-center space-x-1.5 sans">
            <div class="client__name__container">
              <p class="client__name">
                Crystalize health <br />
                Care Services
              </p>
            </div>
            <div class="client__image__container bg-[#ffe3b8]">
              <img src="/svg/crystalize.svg" alt="" class="mx-auto" />
            </div>
          </div>
          <div class="flex items-center space-x-1.5 sans">
            <div class="client__name__container">
              <p class="client__name">
                OC Management <br />
                Consultants
              </p>
            </div>
            <div class="client__image__container bg-[#0073ff]">
              <img src="/svg/ocmc.svg" alt="" class="mx-auto" />
            </div>
          </div>
          <div class="flex items-center space-x-1.5 sans">
            <div class="client__name__container">
              <p class="client__name">
                Treasure <br />
                Vince Care
              </p>
            </div>
            <div class="client__image__container bg-[#c1efde]">
              <img src="/svg/treasure-vince.svg" alt="" class="mx-auto" />
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
    return {
      clients: [
        {
          logo: "/svg/crystalize.svg",
          companyName: "Crystalize health Care Services",
          bgColor: "#ffe3b8",
        },
        {
          logo: "/svg/treasure-vince.svg",
          companyName: "Treasure Vince Care",
          bgColor: "#c1efde",
        },
        {
          logo: "/svg/ocmc.svg",
          companyName: "OC Management Consultants",
          bgColor: "#0073ff",
        },
        {
          logo: "/svg/hsct.svg",
          companyName: "HSCT Portal Services",
          bgColor: "#f9b19d",
        },
        {
          logo: "/svg/wana.svg",
          companyName: "Wana Health Care Services",
          bgColor: "#ffe3b8",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
