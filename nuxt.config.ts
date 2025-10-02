// nuxt.config.ts
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  alias: {
    '@': projectRoot,
    '~': projectRoot
  },

  modules: ['@pinia/nuxt'],

  css: ['@/assets/styles/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  }
})