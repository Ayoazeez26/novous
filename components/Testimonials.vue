<script setup>
import { ref } from 'vue';

const testimonials = ref([
  {
    name: "Judith Black",
    title: "Junior Accounting Officer",
    message: "Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.",
    imageUrl: "/img/team-member-1.webp"
  },
  {
    name: "John Doe",
    title: "Junior Accounting Officer",
    message: "Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.",
    imageUrl: "/img/team-member-1.webp"
  }
]);
</script>

<template>
  <div class="bg-blue-2 md:py-20 py-10 w-full">
    <div class="max-w-[1240px] mx-auto px-5">
      <div class="text-center">
        <h3 class="text-secondary text-sm mb-2">Testimonies and Praises</h3>
        <h2 class="text-2xl font-bold mb-10">Don't just Take Our Words for It...</h2>
      </div>
      <div
        class="flex md:flex-row flex-col justify-center gap-8 bg-blue md:py-[88px] py-10 md:px-[38px] px-3 rounded-2xl md:divide-x-2">
        <div v-for="(testimonial, index) in testimonials" :key="index"
          class="bg-blue p-8 shadow-lg mx-auto leading-relaxed">
          <p class="text-white mb-5">"{{ testimonial.message }}"</p>
          <div class="flex items-center">
            <img :src="testimonial.imageUrl" alt="Photo of testimonial author" class="w-12 h-12 rounded-full mr-4">
            <div>
              <h4 class="text-white font-bold">{{ testimonial.name }}</h4>
              <p class="text-gray-400 text-sm">{{ testimonial.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
