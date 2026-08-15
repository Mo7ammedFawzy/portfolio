<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/App/Header/index.vue'
import BaseLoader from '@/components/Base/Loader.vue'
import BaseWrapper from '@/components/Base/Wrapper.vue'
import HomeLanding from '@/components/Home/Landing.vue'
import HomeProjects from '@/components/Home/Projects.vue'
import HomeTech from '@/components/Home/Tech.vue'
import HomeTools from '@/components/Home/Tools.vue'
import { useGsap } from '@/composables/useGsap'

const { __pageTransitionEnter__ } = useGsap()

onMounted(() => {
    __pageTransitionEnter__()
})
</script>

<template>
    <UApp>
        <BaseLoader />
        <AppHeader />
        <main id="home-page" class="min-h-screen relative">
            <div class="page relative w-full h-full overflow-hidden">
                <div
                    class="bg-dots scale-150 fixed top-0 left-0 inset-0 h-full w-full bg-black bg-[radial-gradient(#515151_1px,transparent_1px)] [background-size:40px_40px]" />
                <HomeLanding class="max-w-5xl mx-auto" />
                <BaseWrapper class="max-w-2xl">
                    <HomeProjects />
                    <HomeTech />
                    <HomeTools />
                </BaseWrapper>
            </div>
        </main>
    </UApp>
</template>
