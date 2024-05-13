import type { Config } from "tailwindcss";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'grey-1': '#F5F5FF',
        text: '#2B2B2B',
        secondary: '#EA3223',
        black: "#000A0A",
        "black-2": "#191C1F",
        "black-3": "#1F1F1F",
        "black-4": "#1C212B",
        "black-5": "#1A1F28",
        blue: "#00092C",
        "blue-2": "#001D40",
        "blue-3": "#0E193A",
        "blue-4": "#0073FF",
        "blue-5": "#003069",
        "blue-6": "#3E5065",
        "blue-7": "#011742",
        "blue-8": "#01318E",
        "blue-9": "#D6E9FF",
        "blue-10": "#011C51",
        "blue-11": "#F3F8FD",
        "blue-12": "#05283E",
        "blue-13": "#2DA5F3",
        "blue-14": "#1D5BBE",
        "blue-15": "#E9F3FF",
        "blue-16": "#EBF3FF",
        "blue-17": "#0C62C9",
        yellow: "#FADB36",
        "yellow-2": "#EFD33D",
        primary: "#03989E",
        white: "#FAFFFF",
        whiter: "#FFFFFF",
        red: "#EE5858",
        "light-green": "#CDEAEC",
        grey: "#1A2323",
        green: "#003D40",
        "green-2": "#2DB224",
        "grey-2": "#F4F7FA",
        "grey-3": "#666C6C",
        "grey-4": "#4D5454",
        "grey-5": "#808484",
        "grey-6": "#333B3B",
        "grey-7": "#E5E7E7",
        "grey-8": "#A4A5A7",
        "red-10": "#BE0712",
        "green-10": "#629442",
        "orange-10": "#CE9A22",
        "grey-9": "#CCCECE",
        "grey-10": "#1A1A1A",
        "grey-11": "#999999",
        "grey-12": "#7D89B0",
        "grey-13": "#ADB7BC",
        "grey-14": "#5F6C72",
        "grey-15": "#E4E7E9",
        "grey-16": "#7A7E81",
        "grey-17": "#475156",
        "grey-18": "#DFDBDB",
        "grey-19": "#F0F0F0",
        "grey-20": "#FAFAFA",
        "grey-21": "#F8FAFB",
        "grey-22": "#E9EEF3",
      },
      backgroundImage: {
        "hero-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/hero-bg.png')",
        "hero-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/hero-bg-mob.png')",
        "about-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/about-bg.png')",
        "about-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/about-bg-mob.png')",
        "services-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/services-bg.png')",
        "services-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/excellence.png')",
        "contact-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/contact-bg.png')",
        "contact-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/contact-bg-mob.png')",
        "blog-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/blog-bg.png')",
        "ebooks-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/resources-bg.png')",
        "bridging-bg": "url('/img/bridging-bg.png')",
      },
    },
  },
  plugins: [],
  content: [],
};
