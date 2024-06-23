<script setup lang="ts">
const openings = ref([
  {
    title: 'Senior Credit Officer',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'MT',
    ageLimit: 'Thirty(30)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'job-place'
  },
  {
    title: 'Brand/Product Advertising & Media Management Comm Officer',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'MT',
    ageLimit: 'Twenty-six(26)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'job-place'
  },
  {
    title: 'Credit Officer',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'MT2',
    ageLimit: 'Twenty-five(25)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'credit-place'
  },
  {
    title: 'Head of Operations',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'Off',
    ageLimit: 'Thirty-five(35)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'job-place'
  },
  {
    title: 'Teller',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'MT',
    ageLimit: 'Twenty-four(24)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'teller-place'
  },
  {
    title: 'Administration & Procurement Officer',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'MT',
    ageLimit: 'Thirty(30)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'job-place'
  },
  {
    title: 'Zonal Lead',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'Officer',
    ageLimit: 'Thirty-seven(37)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'job-place'
  },
  {
    title: 'Corporate Governance, Regulatory & Legal Compliance Officer ',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'Off',
    ageLimit: 'Thirty-five(35)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'job-place'
  },
  {
    title: 'Technology Officer',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'Off',
    ageLimit: 'Thirty-five(35)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'job-place'
  },
  {
    title: 'Technical Assistant to The Chief Executive officer ',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'MT-Officer upon confirmation',
    ageLimit: 'Thirty-Two(32)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'tech-place'
  },
  {
    title: 'Investment Officer',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'MT',
    ageLimit: 'Twenty-seven(27)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'job-place'
  },
  {
    title: 'Collection & Recovery Officer',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'MT',
    ageLimit: 'Thirty-three(33)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'job-place'
  },
  {
    title: 'Customer Service Officer',
    bank: 'Novus Microfinance Bank',
    location: 'Makurdi, Benue State',
    band: 'MT',
    ageLimit: 'Twenty-seven(27)',
    endDate: '30th May, 2024',
    link: '/career/4',
    img: 'service-place'
  },
])
</script>
<template>
  <div>
    <div id="team" class="py-14 lg:py-[100px] w-full">
      <div
        class="flex flex-col mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]"
      >
        <div class="flex lg:items-center justify-center w-full mb-10">
          <div class="text-center">
            <p class="pre-header">Come Work With Us</p>
            <h2
              class="md:font-medium leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] capitalize"
            >
              Our Current Job Openings
            </h2>
          </div>
        </div>
        <div class="flex flex-col items-center gap-6 mb-16">
          <div
            v-for="(opening, index) in openings"
            :key="index"
            class="border border-grey-4 flex items-center justify-between rounded-2xl p-4 w-full"
          >
            <div class="flex items-center w-full gap-4">
              <img
                class="w-[160px]"
                :src="`/img/${opening.img}.webp`"
                alt="job placeholder image"
              />
              <div class="flex flex-col text-grey-10">
                <p class="mb-2">{{ opening.bank }}</p>
                <h4 class="font-medium text-[24px] text-black">
                  {{ opening.title }}
                </h4>
                <div class="flex items-center gap-1 mt-1">
                  <p>{{ opening.location }}</p>
                  <div class="h-2 w-2 rounded-full bg-grey-11" />
                  <p>
                    Grade Band: <span class="text-black font-medium">{{ opening.band }}</span>
                  </p>
                  <div class="h-2 w-2 rounded-full bg-grey-11" />
                  <p>
                    Age Limit:
                    <span class="text-black">{{ opening.ageLimit }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-end gap-1">
              <p class="min-w-max mb-2">Closing {{ opening.endDate }}</p>
              <nuxt-link :to="opening.link" class="bg-secondary px-8 py-4 rounded-lg text-white">
                Apply Now
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
