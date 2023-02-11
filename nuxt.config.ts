// https://nuxt.com/docs/api/configuration/nuxt-config
import Icons from "unplugin-icons/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [Icons({ autoInstall: true })],
  },
  modules: ["@nuxtjs/tailwindcss"],
});
