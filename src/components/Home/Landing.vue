<script setup lang="ts">
import { CONTACT, CV_URL, JOURNEY, ROLE } from '@/constants'
</script>

<template>
    <section id="home" class="container-editorial pt-[100px] pb-[120px]">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div class="lg:col-span-5">
                <p class="hero-enter label-caps text-primary mb-4" style="--hero-delay: 0ms">Hello, I'm</p>
                <h1 class="hero-enter font-display text-display-md md:text-display-lg text-on-surface mb-4" style="--hero-delay: 80ms">
                    Mohammed <span class="text-primary">Fawzey</span>
                </h1>
                <p class="hero-enter text-headline-sm font-sans font-semibold text-on-surface mb-4" style="--hero-delay: 160ms">
                    {{ ROLE }}
                </p>
                <p class="hero-enter text-body-lg text-on-surface-variant mb-10" style="--hero-delay: 240ms">
                    Building modern, maintainable web applications with Vue.js, TypeScript, Java, and Spring Boot.
                </p>
                <div class="hero-enter flex flex-wrap gap-4 mb-12" style="--hero-delay: 320ms">
                    <a href="#projects" class="btn-primary">
                        View My Work
                        <UIcon name="material-symbols:arrow-forward" class="text-base" />
                    </a>
                    <a :href="CV_URL" target="_blank" rel="noopener" class="btn-secondary">
                        <UIcon name="material-symbols:download" class="text-base" />
                        Download CV
                    </a>
                </div>
                <div class="hero-enter flex items-center gap-4" style="--hero-delay: 400ms">
                    <span class="label-caps text-on-surface-variant">Find me on</span>
                    <div class="flex gap-3">
                        <a v-for="contact in CONTACT" :key="contact.title" :href="contact.link"
                            :target="contact.isMail ? undefined : '_blank'" :rel="contact.isMail ? undefined : 'noopener'"
                            class="icon-btn" :aria-label="contact.title">
                            <UIcon :name="contact.icon" class="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-7">
                <article class="hero-enter journey-card" style="--hero-delay: 320ms">
                    <div class="flex items-center gap-4 mb-10">
                        <span class="w-12 h-12 rounded-full bg-white border border-card-border flex items-center justify-center text-primary shadow-sm">
                            <UIcon name="material-symbols:calendar-month" class="text-xl" />
                        </span>
                        <h2 class="font-display text-headline-sm text-on-surface">
                            My <em class="text-primary">Journey</em>
                        </h2>
                    </div>
                    <div class="relative">
                        <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-card-border" aria-hidden="true" />
                        <ol class="space-y-12">
                            <li v-for="(step, index) in JOURNEY" :key="step.year" class="relative flex gap-6" :style="{ '--reveal-delay': `${index * 100}ms` }" data-reveal>
                                <div class="relative flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center shadow-sm z-10"
                                    :class="step.current ? 'border-primary bg-primary/5' : 'border-card-border'">
                                    <UIcon :name="step.icon" class="text-xl" :class="step.current ? 'text-primary' : 'text-on-surface-variant'" />
                                </div>
                                <div class="flex-1 min-w-0 pt-1">
                                    <span class="label-caps text-primary" v-text="step.year" />
                                    <h3 class="font-sans text-body-md font-semibold text-on-surface mt-1" v-text="step.title" />
                                    <p class="text-body-sm text-on-surface-variant mt-0.5" v-text="step.subtitle" />
                                    <div v-if="step.tags.length" class="flex flex-wrap gap-2 mt-3">
                                        <span v-for="tag in step.tags" :key="tag" class="tech-pill text-[11px] px-2.5 py-0.5">
                                            {{ tag }}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
