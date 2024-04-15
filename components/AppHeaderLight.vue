<template>
  <div
    class="fixed right-0 left-0 font-medium text-blue-2 z-10 px-4 md:px-6 xl:px-0"
    :class="dataStore.scrolled ? 'bg-grey-2 py-0' : 'bg-transparent py-6 mt-10'"
  >
    <div
      class="bg-grey-2 flex h-24 md:h-[88px] items-center justify-between px-6 px-md-0 w-full max-w-[1240px] rounded-xl mx-auto"
    >
      <nuxt-link to="/">
        <img class="w-[50px] md:w-28" src="/img/logo.png" />
      </nuxt-link>
      <div class="lg:hidden flex gap-x-4">
        <button
          class="hidden md:block bg-blue-4 border-2 border-blue-4 font-medium px-4 py-3 rounded text-white"
        >
          Request Service
        </button>
        <button ref="hamburger" class="lg:hidden" @click="open = !open">
          <Icon name="ic:round-menu" size="24px" color="#0073FF" />
        </button>
      </div>

      <ul
        class="navbar-links max-h-fit flex items-start"
        :class="{ 'navbar-links--navopen': open }"
        v-click-outside="close"
      >
        <div v-if="open" class="flex items-center justify-between w-full">
          <nuxt-link to="/">
            <img class="w-[50px] md:w-28" src="/img/logo.png" />
          </nuxt-link>
          <button class="" @click="open = !open">
            <Icon name="ic:round-close" size="24px" color="#0073FF" />
          </button>
        </div>

        <ul
          v-if="!open"
          class="flex flex-col lg:flex-row lg:items-center gap-4 mt-10 lg:mt-0 lg:gap-5"
        >
          <!-- <li @click="open = !open"><nuxt-link to="/">Home</nuxt-link></li> -->
          <li @click="careServicesToggled">
            <p
              class="hover:text-blue-4 cursor-pointer"
              :class="
                route.name === 'strategy' || route.name === 'services'
                  ? 'text-blue-4'
                  : ''
              "
            >
              Strategy and Management Consulting<Icon
                class="ml-1"
                name="ic:round-keyboard-arrow-down"
                size="24px"
                color="#001D40"
              />
            </p>
          </li>
          <li @click="aboutUsToggled">
            <p
              class="hover:text-blue-4 cursor-pointer"
              :class="route.name === 'about' ? 'text-blue-4' : ''"
            >
              About Us<Icon
                class="ml-1"
                name="ic:round-keyboard-arrow-down"
                size="24px"
                color="#001D40"
              />
            </p>
          </li>
          <li @click="trainingToggled">
            <p
              class="hover:text-blue-4 cursor-pointer"
              :class="route.name === 'training' ? 'text-blue-4' : ''"
            >
              Training & Events
              <Icon
                class="ml-1"
                name="ic:round-keyboard-arrow-down"
                size="24px"
                color="#001D40"
              />
            </p>
          </li>
          <li @click="open = !open">
            <nuxt-link
              to="/resources"
              :class="route.name === 'ebooks' ? 'text-blue-4' : ''"
              >Resources</nuxt-link
            >
          </li>
          <!-- <li @click="open = !open">
            <nuxt-link
              to="/blog"
              :class="route.name === 'blog' ? 'text-blue-4' : ''"
              >News</nuxt-link
            >
          </li> -->
          <li @click="open = !open">
            <nuxt-link
              to="/store"
              :class="route.name === 'store' ? 'text-blue-4' : ''"
              >Online Store</nuxt-link
            >
          </li>
          <div
            class="lg:hidden flex flex-col lg:flex-row lg:items-center gap-6"
          >
            <button
              class="bg-blue-4 border-2 border-blue-4 font-medium px-4 py-3 rounded text-white"
            >
              Request Service
            </button>
          </div>
        </ul>
        <ul
          v-else
          class="flex flex-col lg:flex-row lg:items-center gap-4 mt-10 lg:mt-0 lg:gap-10 w-full"
        >
          <!-- <li @click="open = !open"><nuxt-link to="/">Home</nuxt-link></li> -->
          <li class="py-4" @click="open = !open">
            <nuxt-link
              to="/about"
              class="hover:text-blue-4 py-4 my-2 cursor-pointer"
              >About Us</nuxt-link
            >
          </li>
          <li class="py-4" @click="open = !open">
            <nuxt-link
              to="/services"
              class="hover:text-blue-4 py-4 my-2 cursor-pointer"
              >Care Services</nuxt-link
            >
          </li>
          <li class="py-4" @click="open = !open">
            <nuxt-link
              to="/strategy"
              class="hover:text-blue-4 py-4 my-2 cursor-pointer"
              >Core Strategy</nuxt-link
            >
          </li>
          <li class="py-4" @click="open = !open">
            <nuxt-link
              to="/training"
              class="hover:text-blue-4 py-4 my-2 cursor-pointer"
              >Training & Events
            </nuxt-link>
          </li>
          <li class="py-4" @click="open = !open">
            <nuxt-link to="/resources" class="py-4 my-2">Resources</nuxt-link>
          </li>
          <!-- <li class="py-4" @click="open = !open">
            <nuxt-link to="/blog" class="py-4 my-2">News</nuxt-link>
          </li> -->
          <li class="py-4" @click="open = !open">
            <nuxt-link to="/store" class="py-4 my-2">Online Store</nuxt-link>
          </li>
          <div
            class="lg:hidden flex flex-col lg:flex-row lg:items-center gap-6"
          >
            <button
              class="bg-blue-4 border-2 border-blue-4 font-medium px-4 py-3 rounded text-white"
            >
              Request Service
            </button>
          </div>
        </ul>
      </ul>
      <div class="hidden lg:flex">
        <button
          class="bg-blue-4 border-2 border-blue-4 font-medium px-4 py-3 rounded text-white"
        >
          Request Service
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();
const route = useRoute();
const open = ref(false);
const close = (e: HTMLInputElement) => {
  if (e.target.tagName !== "svg" && e.target.tagName !== "path") {
    open.value = false;
  }
};

const careServicesToggled = () => {
  dataStore.careServices = !dataStore.careServices;
};

const aboutUsToggled = () => {
  dataStore.about = !dataStore.about;
};

const trainingToggled = () => {
  dataStore.training = !dataStore.training;
};

const handleScroll = () => {
  dataStore.scrolled = window.scrollY > 0;
};

if (typeof window !== "undefined") {
  window.addEventListener("scroll", handleScroll);
}
</script>

<style lang="scss" scoped>
.navbar {
  &-links {
    display: flex;
    // align-items: center;
    list-style-type: none;

    &__item {
      margin: 0;
      a:not([data-type="button"]) {
        color: $primary;
        text-decoration: none;
        &:hover {
          opacity: 0.9;
          color: $primary;
        }
        @media screen and (min-width: 768px) {
          padding-left: 15px;
          padding-right: 15px;
        }
        &.drop {
          color: $primary;
          padding: 0;
        }
      }
    }

    @media screen and (max-width: 1023px) {
      transform: translateX(100vw);
      // pointer-events: none;
      position: fixed;
      transition: transform 0.2s ease-out;
      display: flex;
      flex-direction: column;
      padding: 24px;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 12px;
      width: 500px;
      max-width: calc(100vw - 32px);
      margin-right: 16px;
      margin-top: 16px;
      background-color: $grey-2;
      z-index: 100;
      &__toggle {
        display: none;
      }
      &--navopen {
        transform: translateX(0);
        pointer-events: all;

        .navbar-links__toggle {
          display: block;
          position: fixed;
          top: 50px;
          right: 20px;
          background: none;
          border: none;
        }

        .navbar-links__item {
          text-align: left;
          margin: 20px 0;
          width: 100%;

          .btn {
            width: 100%;
          }
        }
      }
    }
  }

  &__toggle {
    background: none;
    border: none;

    div {
      background-color: $black;
      height: 3px;
      border-radius: 2px;
      margin: 4px;
      &:nth-child(2) {
        width: 20px;
      }

      &:nth-child(3) {
        width: 15px;
      }

      &:last-child {
        width: 9px;
      }
    }
  }
  &-scroll {
    box-shadow: 1px 2px 18px rgba(255, 255, 255, 0.1);
    background-color: $grey-2 !important;
    // background-color: transparent !important;
  }
}
</style>
