// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // set source dir
  srcDir: "src/",
  // Environment Variables
  runtimeConfig: {
    // The private keys which are only available within server-side
    // NOTHING
    // Keys within public, will be also exposed to the client-side
    public: {
      network: "",
      accessApi: "",
      walletDiscovery: "",
    },
  },
  // ts config
  typescript: {
    shim: false,
  },
  // installed modules
  modules: [
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    "@nuxtjs/tailwindcss",
  ],
  build: {
    transpile: ["@heroicons/vue", "@onflow/fcl"],
  },
  // vite configure
  vite: {
    // raw assets
    assetsInclude: ["**/*.cdc"],
  },
  nitro: {
    preset: "vercel",
  },
});
