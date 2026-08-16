import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import '@fontsource/libre-caslon-text/400.css'
import '@fontsource/libre-caslon-text/700.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import './assets/css/main.css'

createApp(App).use(ui).mount('#app')
