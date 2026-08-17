<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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
import { useScrollProgress } from '@/composables/useScrollProgress'

const root = ref<HTMLElement | null>(null)
const parallaxLayer = ref<HTMLElement | null>(null)
const verticalScrollIndicator = ref<HTMLElement | null>(null)
const verticalScrollThumb = ref<HTMLElement | null>(null)

useLenis()
useReveal(root)
useParallax(parallaxLayer)
useScrollProgress()

const sections = ['home', 'projects', 'about', 'experience', 'skills', 'contact']

function updateVerticalScrollIndicator() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0

    if (verticalScrollThumb.value) {
        verticalScrollThumb.value.style.transform = `scaleY(${progress})`
    }

    if (verticalScrollIndicator.value) {
        verticalScrollIndicator.value.classList.toggle('visible', scrollTop > 100)
    }

    const dots = verticalScrollIndicator.value?.querySelectorAll('.vertical-scroll-dot')
    if (dots) {
        let activeIndex = 0
        sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId)
            if (section) {
                const rect = section.getBoundingClientRect()
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    activeIndex = index
                }
            }
        })
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex)
        })
    }
}

let rafId: number | null = null

function animateVerticalScroll() {
    updateVerticalScrollIndicator()
    rafId = requestAnimationFrame(animateVerticalScroll)
}

onMounted(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        rafId = requestAnimationFrame(animateVerticalScroll)
    }
})

onUnmounted(() => {
    if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
    <UApp>
        <div ref="root">
            <div ref="parallaxLayer" class="bg-parallax" aria-hidden="true" />
            
            <!-- Scroll Progress Bar -->
            <div class="scroll-progress-container" aria-hidden="true">
                <div class="scroll-progress-bar" />
            </div>

            <!-- Vertical Scroll Indicator -->
            <div class="vertical-scroll-indicator" aria-hidden="true" ref="verticalScrollIndicator">
                <div class="vertical-scroll-track">
                    <div class="vertical-scroll-thumb" ref="verticalScrollThumb" />
                </div>
                <div class="vertical-scroll-dots">
                    <div class="vertical-scroll-dot" data-section="home" />
                    <div class="vertical-scroll-dot" data-section="projects" />
                    <div class="vertical-scroll-dot" data-section="about" />
                    <div class="vertical-scroll-dot" data-section="experience" />
                    <div class="vertical-scroll-dot" data-section="skills" />
                    <div class="vertical-scroll-dot" data-section="contact" />
                </div>
            </div>

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
