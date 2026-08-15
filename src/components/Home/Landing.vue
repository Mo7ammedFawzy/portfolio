<script setup lang="ts">
import { CONTACT } from '@/constants'
</script>

<template>
    <section id="home" class="container-editorial pt-[240px] pb-[160px]">
        <div class="max-w-3xl">
            <h1 class="font-display text-display-mobile md:text-display-lg text-on-surface mb-6">Mohammed Fawzy</h1>
            <p class="font-sans text-body-lg text-on-surface-variant mb-4">
                Frontend Developer → Full-Stack Developer
            </p>
            <p class="font-sans text-body-md text-on-surface-variant mb-12 max-w-2xl">
                Building modern, maintainable web applications with Vue.js, TypeScript, Java, and Spring Boot.
            </p>
            <div class="flex gap-4 mb-16 flex-wrap">
                <a href="#work" class="btn-primary">View My Work</a>
                <a href="/Mohammed_Fawzy_CV.pdf" target="_blank" rel="noopener" class="btn-secondary">Download Resume</a>
            </div>
            <div class="flex gap-6 font-mono text-xs uppercase text-on-surface-variant tracking-widest flex-wrap">
                <a v-for="contact in CONTACT" :key="contact.title" :href="contact.link"
                    target="_blank" rel="noopener" class="hover:text-primary transition-colors capitalize" v-text="contact.title" />
            </div>
        </div>
    </section>
</template>
