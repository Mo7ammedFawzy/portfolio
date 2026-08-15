<script setup lang="ts">
import AppHeader from '@/components/App/Header/index.vue'
import AppFooter from '@/components/App/Footer.vue'
import HomeLanding from '@/components/Home/Landing.vue'
import HomeProjects from '@/components/Home/Projects.vue'
import HomeAbout from '@/components/Home/About.vue'
import HomeSkills from '@/components/Home/Skills.vue'
</script>

<template>
    <UApp>
        <AppHeader />
        <main class="min-h-screen">
            <HomeLanding />
            <HomeProjects />
            <HomeAbout />
            <HomeSkills />
        </main>
        <AppFooter />
    </UApp>
</template>
