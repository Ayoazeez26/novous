<template>
  <div
    class="fixed right-0 left-0 top-0 font-medium text-text text-sm z-10 px-4 md:px-6 xl:px-0"
    :class="
      dataStore.scrolled ? 'bg-grey-1 py-0' : 'bg-transparent py-6 md:mt-11'
    "
  >
    <div
      class="bg-grey-1 flex h-[72px] md:h-[88px] items-center justify-between px-4 md:px-8 w-full max-w-[1240px] rounded-xl mx-auto"
    >
      <nuxt-link to="/">
        <img class="w-[50px] md:w-28" src="/img/logo.png" />
      </nuxt-link>
      <div class="lg:hidden flex gap-x-4">
        <button
          @click="dialog.showAccountModal = true"
          class="hidden lg:block bg-white border-2 border-white font-semibold px-4 py-3 rounded text-blue-2"
        >
          Create Account
        </button>
        <button ref="hamburger" class="lg:hidden" @click="open = !open">
          <Icon name="ic:round-menu" size="24px" color="#090909" />
        </button>
      </div>
      <ul
        class="navbar-links max-h-fit flex items-start"
        :class="{ 'navbar-links--navopen': open }"
        v-click-outside="close"
      >
        <div v-if="open" class="flex items-center justify-between w-full">
          <nuxt-link to="/">
            <img class="w-[50px] md:w-20" src="/img/logo.png" />
          </nuxt-link>
          <button class="" @click="open = !open">
            <Icon name="ic:round-close" size="24px" color="#000" />
          </button>
        </div>
        <ul
          v-if="!open"
          class="flex flex-col lg:flex-row cursor-pointer lg:items-center gap-4 mt-10 lg:mt-0 lg:gap-11"
        >
          <li>
            <nuxt-link
              to="/about"
              class="hover:text-secondary"
              :class="route.name === 'about' ? 'text-secondary' : ''"
            >
              About Us
            </nuxt-link>
          </li>
          <li class="min-w-max">
            <nuxt-link
              to="/services"
              class="hover:text-secondary"
              :class="route.name === 'services' ? 'text-secondary' : ''"
              >Our Services</nuxt-link
            >
          </li>
          <li class="min-w-max">
            <nuxt-link
              to="/career"
              class="hover:text-secondary"
              :class="route.name === 'career' ? 'text-secondary' : ''"
              >Career</nuxt-link
            >
          </li>
          <li class="min-w-max">
            <nuxt-link
              to="/contact"
              class="hover:text-secondary"
              :class="route.name === 'store' ? 'text-secondary' : ''"
              >Contact Us</nuxt-link
            >
          </li>
          <div
            class="lg:hidden flex flex-col lg:flex-row lg:items-center gap-6"
          >
            <button
              @click="dialog.showAccountModal = true"
              class="bg-secondary border-2 border-white font-medium px-4 py-3 rounded text-white"
            >
              Create Account
            </button>
          </div>
        </ul>
        <ul
          v-else
          class="flex flex-col lg:flex-row lg:items-center gap-4 mt-10 lg:mt-0 lg:gap-10 w-full"
        >
          <!-- <li @click="open = !open" class="min-w-max"><nuxt-link to="/">Home</nuxt-link></li> -->
          <li class="py-4" @click="open = !open">
            <nuxt-link
              to="/about"
              class="hover:text-secondary cursor-pointer py-4 my-2"
              >About Us</nuxt-link
            >
          </li>
          <li class="py-4" @click="open = !open">
            <nuxt-link
              to="/services"
              class="hover:text-secondary cursor-pointer py-4 my-2"
              >Our Services</nuxt-link
            >
          </li>
          <li class="py-4" @click="open = !open">
            <nuxt-link
              to="/career"
              class="hover:text-secondary cursor-pointer py-4 my-2"
              >Career</nuxt-link
            >
          </li>
          <li class="py-4" @click="open = !open">
            <nuxt-link
              to="/contact"
              class="hover:text-secondary cursor-pointer py-4 my-2"
              >Contact
            </nuxt-link>
          </li>
          <div
            class="lg:hidden flex flex-col lg:flex-row lg:items-center gap-6"
          >
            <button
              @click="dialog.showAccountModal = true"
              class="bg-secondary border-2 border-white font-medium px-4 py-4 rounded-lg text-white"
            >
              Create Account
            </button>
          </div>
        </ul>
      </ul>
      <div class="hidden lg:flex">
        <button
          @click="dialog.showAccountModal = true"
          class="bg-secondary border-2 border-secondary font-medium px-[25px] py-[14px] rounded text-white"
        >
          Create Account
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { useDialogStore } from "~/stores/dialog";
const dataStore = useDataStore();
const dialog = useDialogStore();
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
.backdrop {
  background: rgba(0, 29, 64, 0.24);
  backdrop-filter: blur(20px);
}
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

      // button:not([data-type=button]) {
      //   color: $black;
      //   font-weight: 700;
      //   border-radius: 8px;
      //   min-height: 50px;
      //   min-width: 170px;
      // }
    }

    &__city {
      width: 300px;
    }
    &__about {
      width: 260px;
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
      background-color: #f5f5ff;
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
      background-color: #f5f5ff;
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
