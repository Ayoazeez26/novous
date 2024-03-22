// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: "O.C. Management Consulting",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Leading management consulting company specializing in Tender, Grant, and Bid writing and management as well as developing quality assurance frameworks and enabling successful license applications.",
        },
      ],
      script: [
        {
          hid: "tawk.to",
          src: "https://embed.tawk.to/64b65abccc26a871b0291a35/1h5k54spo",
          async: true,
          defer: true,
        },
        { src: "https://js.stripe.com/v3/", defer: true },
      ],
    },
  },

  css: ["~/assets/main.scss", "~/assets/fonts/fonts.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    "@pinia/nuxt",
    "nuxt-gtag",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-aos",
  ],

  gtag: {
    id: "G-KV47Z7SGCC",
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      stripePk: process.env.STRIPE_PK_KEY,
    },
  },
  build: {
    transpile: ["gsap"],
  },
});
