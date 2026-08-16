<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/App/Header/index.vue'
import AppFooter from '@/components/App/Footer.vue'
import AppScrollToTop from '@/components/App/ScrollToTop.vue'
import HomeLanding from '@/components/Home/Landing.vue'
import HomeProjects from '@/components/Home/Projects.vue'
import HomeAbout from '@/components/Home/About.vue'
import HomeSkills from '@/components/Home/Skills.vue'
import HomeContact from '@/components/Home/Contact.vue'
import { useLenis } from '@/composables/useLenis'
import { useReveal } from '@/composables/useReveal'
import { useParallax } from '@/composables/useParallax'

const root = ref<HTMLElement | null>(null)
const parallaxLayer = ref<HTMLElement | null>(null)

useLenis()
useReveal(root)
useParallax(parallaxLayer)
</script>

<template>
    <UApp>
        <div ref="root">
            <div ref="parallaxLayer" class="bg-parallax" aria-hidden="true" />
            <div class="relative z-10">
                <AppHeader />
                <main class="min-h-screen">
                    <HomeLanding />
                    <HomeProjects />
                    <HomeAbout />
                    <HomeSkills />
                    <HomeContact />
                </main>
                <AppFooter />
            </div>
            <AppScrollToTop />
        </div>
    </UApp>
</template>
