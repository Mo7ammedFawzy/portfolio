<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { CONTACT, CORE_SKILLS, CV_URL, JOURNEY, ROLE } from '@/constants'
import { useMagnetic } from '@/composables/useMagnetic'
import { useParallax } from '@/composables/useParallax'

const ctaRef = ref<HTMLElement | null>(null)
const heroVisualRef = ref<HTMLElement | null>(null)
const scrollHintRef = ref<HTMLElement | null>(null)
const featuredSkills = CORE_SKILLS.slice(0, 4)

useMagnetic(ctaRef)
useParallax(heroVisualRef, 0.035)

function onScrollHint() {
    scrollHintRef.value?.classList.toggle('scroll-down-fade', window.scrollY > 100)
}

onMounted(() => {
    window.addEventListener('scroll', onScrollHint, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScrollHint)
})
</script>

<template>
    <section id="home" class="hero-section relative isolate min-h-dvh overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-28 lg:pb-12">
        <div class="hero-atmosphere" aria-hidden="true">
            <div class="hero-grid-plane" />
            <div class="hero-glow-orb hero-glow-orb--warm" />
            <div class="hero-glow-orb hero-glow-orb--cool" />
            <svg class="hero-orbit-drawing" viewBox="0 0 620 620" fill="none">
                <circle cx="310" cy="310" r="235" />
                <circle cx="310" cy="310" r="170" />
                <path d="M92 402C174 486 330 512 455 435C548 378 572 256 518 168" />
                <circle class="hero-orbit-dot hero-orbit-dot--one" cx="92" cy="402" r="5" />
                <circle class="hero-orbit-dot hero-orbit-dot--two" cx="518" cy="168" r="5" />
            </svg>
            <span class="hero-index-mark">01 / PORTFOLIO</span>
        </div>

        <div class="container-editorial relative z-10 flex w-full flex-col justify-center">
            <div class="grid items-center gap-14 lg:grid-cols-12 lg:gap-8 xl:gap-12">
                <div class="lg:col-span-7">
                    <div class="hero-enter hero-availability mb-7" style="--hero-delay: 0ms">
                        <span class="hero-status-dot" aria-hidden="true" />
                        <span>Available for meaningful work</span>
                    </div>

                    <p class="hero-enter label-caps mb-4 text-on-surface-variant" style="--hero-delay: 40ms">
                        Hello, I'm
                    </p>

                    <h1 class="mb-6 font-display text-display-md text-on-surface md:text-display-lg" aria-label="Mohammed Fawzey">
                        <span class="hero-title-reveal" style="--hero-title-delay: 90ms">
                            <span>Mohammed</span>
                        </span>
                        <span class="hero-title-reveal hero-title-reveal--accent" style="--hero-title-delay: 180ms">
                            <span>Fawzey<span class="hero-title-period">.</span></span>
                        </span>
                    </h1>

                    <div class="hero-enter mb-6 flex items-center gap-3" style="--hero-delay: 300ms">
                        <span class="hero-role-mark" aria-hidden="true" />
                        <p class="font-sans text-lg font-bold tracking-tight text-on-surface sm:text-xl">
                            {{ ROLE }}
                        </p>
                    </div>

                    <p class="hero-enter mb-8 max-w-2xl text-body-lg text-on-surface-variant" style="--hero-delay: 350ms">
                        I turn ambitious ideas into dependable digital products—pairing thoughtful interfaces with clean, scalable Java architecture.
                    </p>

                    <div class="hero-enter mb-8 flex flex-wrap gap-3 sm:gap-4" style="--hero-delay: 410ms">
                        <a ref="ctaRef" href="#projects" class="btn-primary btn-shine min-h-12">
                            Explore my work
                            <UIcon name="material-symbols:arrow-outward" class="text-lg" aria-hidden="true" />
                        </a>
                        <a :href="CV_URL" target="_blank" rel="noopener" class="btn-secondary min-h-12">
                            <UIcon name="material-symbols:download" class="text-lg" aria-hidden="true" />
                            Download CV
                        </a>
                    </div>

                    <div class="hero-enter flex flex-wrap items-center gap-x-5 gap-y-4" style="--hero-delay: 470ms">
                        <span class="label-caps text-on-surface-variant">Find me on</span>
                        <div class="flex gap-2.5">
                            <a
                                v-for="contact in CONTACT"
                                :key="contact.title"
                                :href="contact.link"
                                :target="contact.isMail ? undefined : '_blank'"
                                :rel="contact.isMail ? undefined : 'noopener'"
                                class="icon-btn"
                                :aria-label="contact.title[0].toUpperCase() + contact.title.slice(1)"
                            >
                                <UIcon :name="contact.icon" class="text-xl" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5">
                    <div ref="heroVisualRef" class="hero-visual-parallax">
                        <div class="hero-float-chip hero-float-chip--vue" aria-hidden="true">
                            <span class="hero-chip-icon">
                                <UIcon :name="featuredSkills[0]?.icon" class="text-xl" />
                            </span>
                            Vue 3
                        </div>
                        <div class="hero-float-chip hero-float-chip--java" aria-hidden="true">
                            <span class="hero-chip-icon">
                                <UIcon :name="featuredSkills[2]?.icon" class="text-xl" />
                            </span>
                            Java
                        </div>

                        <article class="hero-code-window" aria-label="Developer profile card">
                            <div class="hero-window-bar">
                                <div class="flex gap-1.5" aria-hidden="true">
                                    <span class="hero-window-dot hero-window-dot--muted" />
                                    <span class="hero-window-dot hero-window-dot--warm" />
                                    <span class="hero-window-dot hero-window-dot--primary" />
                                </div>
                                <span class="hero-window-title">developer.profile</span>
                                <UIcon name="material-symbols:code-rounded" class="text-base opacity-60" aria-hidden="true" />
                            </div>

                            <div class="hero-code-body" aria-hidden="true">
                                <div class="hero-code-line" style="--code-delay: 320ms">
                                    <span class="hero-line-number">01</span>
                                    <code><span class="hero-code-keyword">const</span> <span class="hero-code-variable">developer</span> = {</code>
                                </div>
                                <div class="hero-code-line" style="--code-delay: 400ms">
                                    <span class="hero-line-number">02</span>
                                    <code><span class="hero-code-property">focus</span>: <span class="hero-code-string">'full-stack'</span>,</code>
                                </div>
                                <div class="hero-code-line" style="--code-delay: 480ms">
                                    <span class="hero-line-number">03</span>
                                    <code><span class="hero-code-property">craft</span>: <span class="hero-code-string">'clear + robust'</span>,</code>
                                </div>
                                <div class="hero-code-line" style="--code-delay: 560ms">
                                    <span class="hero-line-number">04</span>
                                    <code><span class="hero-code-property">learning</span>: <span class="hero-code-boolean">true</span></code>
                                </div>
                                <div class="hero-code-line" style="--code-delay: 640ms">
                                    <span class="hero-line-number">05</span>
                                    <code>}<span class="hero-code-caret" /></code>
                                </div>
                            </div>

                            <div class="hero-profile-signal">
                                <div class="mb-4 flex items-center justify-between gap-4">
                                    <span class="label-caps text-primary">Currently</span>
                                    <span class="hero-signal-badge">
                                        <span aria-hidden="true" /> Open to work
                                    </span>
                                </div>
                                <h2 class="mb-2 font-display text-headline-sm text-on-surface">
                                    Frontend craft.<br>Backend discipline.
                                </h2>
                                <p class="text-sm leading-relaxed text-on-surface-variant">
                                    Vue experiences backed by dependable Spring Boot services.
                                </p>
                            </div>

                            <ul class="hero-stack-list" aria-label="Core technologies">
                                <li v-for="(skill, index) in featuredSkills" :key="skill.title" :style="{ '--stack-delay': `${700 + index * 80}ms` }">
                                    <UIcon :name="skill.icon" class="text-xl" aria-hidden="true" />
                                    <span>{{ skill.title }}</span>
                                </li>
                            </ul>
                        </article>

                        <div class="hero-location-chip hero-enter" style="--hero-delay: 540ms" aria-hidden="true">
                            <UIcon name="material-symbols:location-on" class="text-lg text-primary" />
                            <span>
                                <small>Based in</small>
                                Benisuef, Egypt
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hero-enter hero-journey-rail mt-16 sm:mt-20 lg:mt-16" style="--hero-delay: 520ms" aria-labelledby="journey-rail-title">
                <div class="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                    <div>
                        <p class="label-caps mb-2 text-primary">The path so far</p>
                        <h2 id="journey-rail-title" class="font-display text-headline-sm text-on-surface">
                            From computer science to full-stack.
                        </h2>
                    </div>
                    <p class="max-w-md text-sm leading-relaxed text-on-surface-variant sm:text-right">
                        Learning in public, shipping with care, and growing the stack with every project.
                    </p>
                </div>

                <ol class="hero-journey-grid">
                    <li
                        v-for="(step, index) in JOURNEY"
                        :key="`${step.year}-${step.title}`"
                        class="hero-journey-item"
                        :class="{ 'hero-journey-item--current': step.current }"
                        :style="{ '--reveal-delay': `${index * 70}ms` }"
                        data-reveal
                    >
                        <div class="hero-journey-marker" aria-hidden="true">
                            <span v-if="step.current" class="hero-journey-marker-pulse" />
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="font-mono text-xs font-bold uppercase tracking-wider text-primary">{{ step.year }}</span>
                            <span v-if="step.current" class="text-[10px] font-bold uppercase tracking-widest text-primary">Current</span>
                        </div>
                        <h3 class="mt-2 text-sm font-bold leading-snug text-on-surface sm:text-[15px]">
                            {{ step.title }}
                        </h3>
                        <p class="mt-1 text-xs leading-relaxed text-on-surface-variant sm:text-[13px]">
                            {{ step.subtitle }}
                        </p>
                    </li>
                </ol>
            </div>

            <div ref="scrollHintRef" class="hero-enter mt-7 hidden justify-end md:flex" style="--hero-delay: 600ms">
                <a href="#projects" aria-label="Scroll to projects" class="scroll-down-btn group flex items-center gap-3">
                    <span class="label-caps text-on-surface-variant transition-colors duration-200 group-hover:text-primary">Scroll to projects</span>
                    <span class="scroll-down-ring scroll-down-bob">
                        <UIcon name="material-symbols:keyboard-arrow-down-rounded" class="text-xl text-primary" aria-hidden="true" />
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
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
