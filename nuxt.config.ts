// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},

    app: {
        head: {
            title: "mofawzey",
            link: [
                {
                    rel: "icon", href: "/favicon.svg", type: "image/svg+xml"
                }
            ]
        }
    },

    modules: [
        '@nuxt/ui',
        "@vueuse/nuxt",
        "@pinia/nuxt",
        "@nuxt/image",
        "@nuxtjs/google-fonts"
    ],
    colorMode: {
        preference: "light",
        fallback: "light",
        classSuffix: '',
    },
    googleFonts: {
        families: {
            Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    },
    image: {
        provider: "vercel"
    },
    sourcemap: true
})
