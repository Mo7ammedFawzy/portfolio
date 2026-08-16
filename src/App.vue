<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/App/Header/index.vue'
import AppFooter from '@/components/App/Footer.vue'
import HomeLanding from '@/components/Home/Landing.vue'
import HomeProjects from '@/components/Home/Projects.vue'
import HomeAbout from '@/components/Home/About.vue'
import HomeSkills from '@/components/Home/Skills.vue'
import HomeContact from '@/components/Home/Contact.vue'
import { useLenis } from '@/composables/useLenis'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)

useLenis()
useReveal(root)
</script>

<template>
    <UApp>
        <div ref="root">
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
    </UApp>
</template>
