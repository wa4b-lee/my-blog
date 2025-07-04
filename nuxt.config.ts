export default defineNuxtConfig({
  compatibilityDate: '2025-07-02',
  devtools: { enabled: false },
  vite: {
    server: {
      allowedHosts: ['wicecream.kr', 'localhost']
    }
  }
})
