<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CONTACT, CV_URL, JOURNEY, ROLE } from '@/constants'

const timelineContainer = ref<HTMLElement | null>(null)
const stepElements = ref<HTMLElement[]>([])

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const container = timelineContainer.value
    if (!container) return

    const steps = Array.from(container.querySelectorAll<HTMLElement>('.timeline-step'))
    stepElements.value = steps

    animateTimeline()
})

function animateTimeline() {
    const line = timelineContainer.value?.querySelector('.timeline-progress-line') as HTMLElement
    if (!line) return

    const steps = stepElements.value
    if (steps.length === 0) return

    const stepHeights = steps.map(step => step.offsetHeight + 24)
    const totalHeight = stepHeights.reduce((a, b) => a + b, 0)

    let accumulatedHeight = 0

    steps.forEach((step, index) => {
        const stepTop = accumulatedHeight
        const stepBottom = accumulatedHeight + stepHeights[index]
        accumulatedHeight = stepBottom

        const stepDelay = 800 + index * 400 // Slower: 800ms start, 400ms between steps
        const progressDelay = stepDelay + 150 // Line grows slightly after step appears

        // Animate step entrance (vertical slide up + fade)
        step.style.setProperty('--step-delay', `${stepDelay}ms`)
        step.classList.add('timeline-step-enter')

        // Animate progress line to this step's position
        setTimeout(() => {
            line.style.setProperty('--progress-height', `${(stepBottom / totalHeight) * 100}%`)
        }, progressDelay)
    })

    // Final fill to 100%
    setTimeout(() => {
        line.style.setProperty('--progress-height', '100%')
    }, 800 + steps.length * 400 + 300)
}
</script>

<template>
    <section id="home" class="container-editorial min-h-screen flex flex-col justify-center pt-16 pb-8 sm:pb-12">
        <!-- Scroll Progress Indicator -->
        <div class="fixed top-0 left-0 right-0 h-1 bg-surface-container-low z-50 pointer-events-none" aria-hidden="true">
            <div class="scroll-progress-bar h-full bg-primary origin-left transform-gpu" style="transform: scaleX(0);" />
        </div>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div class="lg:col-span-5">
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
                <article ref="timelineContainer" class="hero-enter journey-card-stitch relative bg-surface-container-lowest border border-card-border rounded-[32px] p-6 sm:p-8 shadow-card overflow-hidden" style="--hero-delay: 320ms">
                    <!-- Top-Right Clean Orange Dot Matrix -->
                    <div class="absolute top-5 right-5 w-36 h-36 opacity-80 pointer-events-none" aria-hidden="true">
                        <svg class="w-full h-full text-primary/50" fill="currentColor" viewBox="0 0 120 120">
                            <pattern id="stitch-dot-grid" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                                <circle cx="3" cy="3" r="1.5" />
                            </pattern>
                            <rect width="120" height="120" fill="url(#stitch-dot-grid)" />
                        </svg>
                    </div>

                    <!-- Bottom-Left Small Dot Matrix -->
                    <div class="absolute bottom-6 left-6 w-16 h-16 opacity-60 pointer-events-none" aria-hidden="true">
                        <svg class="w-full h-full text-primary/35" fill="currentColor" viewBox="0 0 60 60">
                            <pattern id="stitch-dot-grid-sm" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
                                <circle cx="2.5" cy="2.5" r="1.4" />
                            </pattern>
                            <rect width="60" height="60" fill="url(#stitch-dot-grid-sm)" />
                        </svg>
                    </div>

                    <!-- Bottom-Right Clean Concentric Arc Watermark -->
                    <div class="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-primary/25 pointer-events-none" aria-hidden="true">
                        <div class="absolute inset-10 rounded-full border border-primary/18" />
                        <span class="absolute top-1/2 left-0 w-2.5 h-2.5 rounded-full border border-primary/60 bg-surface-container-lowest" />
                    </div>

                    <!-- Card Header: Orange Calendar Badge + Serif Title -->
                    <div class="flex items-center gap-3.5 mb-6 relative z-10">
                        <span class="w-10 h-10 rounded-2xl bg-surface-container-lowest border border-primary/40 flex items-center justify-center text-primary shadow-xs">
                            <UIcon name="material-symbols:calendar-month-outline" class="text-2xl text-primary" />
                        </span>
                        <h2 class="font-display text-[26px] sm:text-[30px] font-normal text-on-surface tracking-tight">
                            My <span class="text-primary font-display font-medium">Journey</span>
                        </h2>
                    </div>

                    <!-- Timeline Body -->
                    <div class="relative z-10">
                        <!-- Connecting Orange Animated Line Track -->
                        <div class="absolute left-[23px] top-6 bottom-6 w-[2px] bg-primary/30 rounded-full overflow-hidden" aria-hidden="true">
                            <!-- Creative flowing energy light beam pulse - synced with step reveals -->
                            <div class="timeline-progress-line" style="--progress-height: 0%;" />
                        </div>

                        <div class="space-y-6 sm:space-y-7">
                            <div
                                v-for="(step, index) in JOURNEY"
                                :key="step.year"
                                class="timeline-step relative flex items-start gap-4 sm:gap-6 group"
                                :style="{ '--reveal-delay': `${index * 90}ms` }"
                                data-reveal>

                                <!-- Timeline Icon Node -->
                                <div class="relative shrink-0 w-12 h-12 flex items-center justify-center z-10">
                                    <!-- Animated pulse ring for current active step -->
                                    <div v-if="step.current" class="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                                    
                                    <div
                                        class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative z-10"
                                        :class="step.current 
                                            ? 'bg-primary text-on-primary shadow-[0_4px_14px_rgba(232,93,4,0.4)] scale-105' 
                                            : 'bg-surface-container-lowest border-2 border-primary/40 text-on-surface shadow-xs group-hover:border-primary group-hover:scale-105'">
                                        <UIcon
                                            :name="step.icon"
                                            class="text-xl transition-transform duration-300"
                                            :class="step.current ? '!text-3xl' : ''" />
                                    </div>
                                </div>

                                <!-- Year Column (Aligned directly with node) -->
                                <div class="w-12 sm:w-14 pt-3 shrink-0">
                                    <span class="font-sans text-[15px] font-bold text-primary tracking-tight">
                                        {{ step.year }}
                                    </span>
                                </div>

                                <!-- Content Column -->
                                <div class="flex-1 min-w-0 pt-2">
                                    <h3 class="font-sans text-[15px] sm:text-[16px] font-bold text-on-surface leading-snug">
                                        {{ step.title }}
                                    </h3>
                                    <p class="text-xs sm:text-[13px] text-on-surface-variant font-normal mt-0.5">
                                        {{ step.subtitle }}
                                    </p>
                                    <div v-if="step.tags.length" class="flex flex-wrap gap-1.5 mt-2.5">
                                        <span
                                            v-for="tag in step.tags"
                                            :key="tag"
                                            class="inline-flex items-center text-xs font-semibold text-primary bg-surface-container-lowest border border-primary/40 px-3 py-0.5 rounded-lg shadow-2xs transition-colors hover:border-primary">
                                            {{ tag }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- Scroll to next section button -->
        <div class="flex justify-center mt-10 hero-enter" style="--hero-delay: 500ms">
            <a href="#projects" aria-label="Scroll to projects" class="scroll-down-btn group flex flex-col items-center gap-2">
                <span class="text-[11px] font-sans font-semibold uppercase tracking-[0.1em] text-on-surface-variant group-hover:text-primary transition-colors duration-200">Scroll Down</span>
                <span class="scroll-down-ring">
                    <UIcon name="material-symbols:keyboard-arrow-down-rounded" class="text-xl text-primary scroll-down-arrow" />
                </span>
            </a>
        </div>
    </section>
</template>

<style scoped>
.timeline-progress-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--progress-height, 0%);
    background: linear-gradient(180deg, 
        var(--color-primary) 0%, 
        color-mix(in srgb, var(--color-primary) 70%, var(--color-on-primary)) 50%, 
        var(--color-on-primary) 100%);
    border-radius: inherit;
    transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 8px var(--color-primary), 0 0 16px var(--color-primary);
}

.timeline-step-enter {
    opacity: 0;
    transform: translateY(30px);
    animation: timeline-step-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--step-delay, 0ms);
}

@keyframes timeline-step-in {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Scroll Progress Bar */
.scroll-progress-bar {
    transition: transform 0.1s linear;
    will-change: transform;
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

.scroll-down-arrow {
    animation: scroll-bounce 1.8s ease-in-out infinite;
}

@keyframes scroll-bounce {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(5px); }
}

@media (prefers-reduced-motion: reduce) {
    .timeline-step-enter,
    .timeline-progress-line,
    .scroll-progress-bar {
        animation: none !important;
        transition: none !important;
    }
    .timeline-step-enter {
        opacity: 1 !important;
        transform: none !important;
    }
    .timeline-progress-line {
        height: 100% !important;
    }
    .scroll-progress-bar {
        transform: scaleX(0) !important;
    }
}
</style>
