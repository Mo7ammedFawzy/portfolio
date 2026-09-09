<script setup lang="ts">
import { CONTACT, CV_URL, JOURNEY, ROLE } from '@/constants'
</script>

<template>
    <section id="home" class="container-editorial min-h-screen flex flex-col justify-center pt-16 pb-8 sm:pb-12">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start lg:pt-8">
            <div class="lg:col-span-7">
                <p class="hero-enter label-caps text-primary mb-4" style="--hero-delay: 0ms">Hello, I'm</p>
                <h1 class="hero-enter font-display text-display-md md:text-display-lg text-on-surface mb-4" style="--hero-delay: 80ms">
                    Mohammed <span class="text-primary">Fawzey</span>
                </h1>
                <p class="hero-enter text-headline-sm font-sans font-semibold text-on-surface mb-4" style="--hero-delay: 160ms">
                    {{ ROLE }}
                </p>
                <p class="hero-enter text-body-lg text-on-surface-variant mb-6" style="--hero-delay: 240ms">
                    Building modern, maintainable web applications with Vue.js, TypeScript, Java, and Spring Boot.
                </p>
                <div class="hero-enter flex flex-wrap gap-4 mb-8" style="--hero-delay: 320ms">
                    <a href="#projects" class="btn-primary">
                        View My Work
                        <UIcon name="material-symbols:arrow-forward" class="text-base" aria-hidden="true" />
                    </a>
                    <a :href="CV_URL" target="_blank" rel="noopener" class="btn-secondary">
                        <UIcon name="material-symbols:download" class="text-base" aria-hidden="true" />
                        Download CV
                    </a>
                </div>
                <div class="hero-enter flex items-center gap-4" style="--hero-delay: 400ms">
                    <span class="label-caps text-on-surface-variant">Find me on</span>
                    <div class="flex gap-3">
                        <a v-for="contact in CONTACT" :key="contact.title" :href="contact.link"
                            :target="contact.isMail ? undefined : '_blank'" :rel="contact.isMail ? undefined : 'noopener'"
                            class="icon-btn" :aria-label="contact.title[0].toUpperCase() + contact.title.slice(1)">
                            <UIcon :name="contact.icon" class="text-xl" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-5">
                <article aria-labelledby="journey-title" class="hero-enter journey-card-stitch relative bg-surface-container-lowest border border-card-border rounded-3xl p-6 sm:p-8 shadow-card overflow-hidden" style="--hero-delay: 320ms">
                    <!-- Top-Right Orange Dot Matrix -->
                    <div class="absolute top-5 right-5 w-36 h-36 opacity-40 pointer-events-none" aria-hidden="true">
                        <svg class="w-full h-full text-primary/50" fill="currentColor" viewBox="0 0 120 120">
                            <pattern id="stitch-dot-grid" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                                <circle cx="3" cy="3" r="1.5" />
                            </pattern>
                            <rect width="120" height="120" fill="url(#stitch-dot-grid)" />
                        </svg>
                    </div>

                    <!-- Card Header: Orange Calendar Badge + Serif Title -->
                    <div class="flex items-center gap-3.5 mb-6 relative z-10">
                        <span class="w-10 h-10 rounded-2xl bg-surface-container-lowest border border-primary/40 flex items-center justify-center text-primary shadow-xs">
                            <UIcon name="material-symbols:calendar-month-outline" class="text-2xl text-primary" aria-hidden="true" />
                        </span>
                        <h2 id="journey-title" class="font-display text-headline-sm text-on-surface tracking-tight">
                            My <span class="text-primary font-display font-medium">Journey</span>
                        </h2>
                    </div>

                    <!-- Timeline Body -->
                    <div class="relative z-10">
                        <!-- Connecting Line -->
                        <div class="timeline-track" aria-hidden="true" />

                        <div class="space-y-6 sm:space-y-7">
                            <div
                                v-for="(step, index) in JOURNEY"
                                :key="`${step.year}-${step.title}`"
                                class="timeline-step relative flex items-start gap-4 sm:gap-6 group"
                                :style="{ '--reveal-delay': `${index * 90}ms` }"
                                data-reveal>

                                <!-- Timeline Icon Node -->
                                <div class="relative shrink-0 w-12 h-12 flex items-center justify-center z-10">
                                    <!-- Animated pulse ring for current active step -->
                                    <div v-if="step.current" class="absolute inset-0 rounded-full bg-primary/20 timeline-now-pulse" />
                                    
                                    <div
                                        class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative z-10"
                                        :class="step.current 
                                            ? 'bg-primary text-on-primary shadow-[0_4px_14px_rgba(232,93,4,0.4)] scale-105' 
                                            : 'bg-surface-container-lowest border-2 border-primary/60 text-on-surface shadow-xs group-hover:border-primary group-hover:scale-105'">
                                        <UIcon
                                            :name="step.icon"
                                            class="text-2xl transition-transform duration-300"
                                            aria-hidden="true" />
                                    </div>
                                </div>

                                <!-- Content Column -->
                                <div class="flex-1 min-w-0 pt-2">
                                    <h3 class="font-sans text-[15px] sm:text-[16px] font-bold text-on-surface leading-snug">
                                        <span class="font-mono text-xs font-medium text-primary tracking-wider mr-1.5">
                                            {{ step.year }}
                                        </span>
                                        {{ step.title }}
                                    </h3>
                                    <p class="text-xs sm:text-[13px] text-on-surface-variant font-normal mt-0.5">
                                        {{ step.subtitle }}
                                    </p>
                                    <ul v-if="step.tags.length" class="flex flex-wrap gap-1.5 mt-2.5" aria-label="Technologies">
                                        <li v-for="tag in step.tags" :key="tag.label">
                                            <UBadge
                                                :icon="tag.icon"
                                                color="neutral"
                                                variant="subtle"
                                                size="md">
                                                {{ tag.label }}
                                            </UBadge>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- Scroll to next section button -->
        <div class="hidden md:flex justify-center mt-6 hero-enter" style="--hero-delay: 500ms">
            <a href="#projects" aria-label="Scroll to projects" class="scroll-down-btn group flex flex-col items-center gap-2">
                <span class="text-[11px] font-sans font-semibold uppercase tracking-[0.1em] text-on-surface-variant group-hover:text-primary transition-colors duration-200">Scroll Down</span>
                <span class="scroll-down-ring">
                    <UIcon name="material-symbols:keyboard-arrow-down-rounded" class="text-xl text-primary" aria-hidden="true" />
                </span>
            </a>
        </div>
    </section>
</template>

<style scoped>
.timeline-track {
    position: absolute;
    left: 24px;
    width: 2px;
    top: 24px;
    bottom: 24px;
    background: var(--color-outline-variant);
    border-radius: 9999px;
}

/* Scroll Down Button */
.scroll-down-btn {
    text-decoration: none;
}

.scroll-down-ring {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px solid var(--color-outline-variant);
    background: var(--color-surface-container-lowest);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.scroll-down-btn:hover .scroll-down-ring {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary) 12%, transparent);
}
</style>
