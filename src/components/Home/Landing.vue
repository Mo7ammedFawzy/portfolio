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
                    <ol class="space-y-10">
                        <li v-for="step in JOURNEY" :key="step.year" class="relative pl-12">
                            <span class="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                                :class="step.current ? 'border-primary bg-primary/5' : 'border-card-border bg-white'">
                                <span :class="['w-2 h-2 rounded-full', step.current ? 'bg-primary' : 'bg-outline']" />
                            </span>
                            <div class="flex flex-wrap items-center gap-2 mb-1">
                                <span class="label-caps text-primary" v-text="step.year" />
                                <span v-for="pill in step.pills" :key="pill" class="tech-pill !text-[10px] !py-1">
                                    <span class="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {{ pill }}
                                </span>
                            </div>
                            <h3 class="font-sans text-body-md font-semibold text-on-surface" v-text="step.title" />
                            <p class="text-body-sm text-on-surface-variant mt-0.5" v-text="step.subtitle" />
                        </li>
                    </ol>
                </article>
            </div>
        </div>
    </section>
</template>
