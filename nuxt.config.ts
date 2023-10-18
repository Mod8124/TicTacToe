export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        'nuxt-icon',
        '@nuxtjs/i18n',
        'nuxt-mongoose',
        '@pinia/nuxt',
        'nuxt-socket-io',
    ],
    pinia: {
        autoImports: [
            'defineStore', // import { defineStore } from 'pinia'
            'storeToRefs',
        ],
    },
    i18n: {
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        vueI18n: './config/languages/i18n.config.ts',
    },
    mongoose: {
        uri: process.env.DB_URL,
        options: {},
        modelsDir: 'models',
    },
    imports: {
        dirs: ['stores'],
        presets: [
            {
                from: 'uuid',
                imports: ['v4'],
            },
        ],
    },
    typescript: {
        strict: true,
    },
});
