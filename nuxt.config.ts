export default defineNuxtConfig({
  compatibilityDate: '2024-10-25',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vee-validate/nuxt',
    '@nuxtjs/supabase',
    'nuxt-og-image',
  ],
  components: [{ path: '@/features', pathPrefix: false }],
  shadcn: {
    prefix: '',
    componentDir: './components',
  },
  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        display: 'swap',
        subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
      },
    ],
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
});
