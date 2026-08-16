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
                <article class="hero-enter journey-card-stitch relative bg-white border border-[#f4e8e1] rounded-[32px] p-8 sm:p-10 shadow-[0_10px_35px_rgba(232,93,4,0.04)] overflow-hidden" style="--hero-delay: 320ms">
                    <!-- Top-Right Clean Orange Dot Matrix -->
                    <div class="absolute top-5 right-5 w-36 h-36 opacity-80 pointer-events-none" aria-hidden="true">
                        <svg class="w-full h-full text-[#ea580c]/50" fill="currentColor" viewBox="0 0 120 120">
                            <pattern id="stitch-dot-grid" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                                <circle cx="3" cy="3" r="1.5" />
                            </pattern>
                            <rect width="120" height="120" fill="url(#stitch-dot-grid)" />
                        </svg>
                    </div>

                    <!-- Bottom-Left Small Dot Matrix -->
                    <div class="absolute bottom-6 left-6 w-16 h-16 opacity-60 pointer-events-none" aria-hidden="true">
                        <svg class="w-full h-full text-[#ea580c]/35" fill="currentColor" viewBox="0 0 60 60">
                            <pattern id="stitch-dot-grid-sm" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
                                <circle cx="2.5" cy="2.5" r="1.4" />
                            </pattern>
                            <rect width="60" height="60" fill="url(#stitch-dot-grid-sm)" />
                        </svg>
                    </div>

                    <!-- Bottom-Right Clean Concentric Arc Watermark -->
                    <div class="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-[#ea580c]/25 pointer-events-none" aria-hidden="true">
                        <div class="absolute inset-10 rounded-full border border-[#ea580c]/18" />
                        <span class="absolute top-1/2 left-0 w-2.5 h-2.5 rounded-full border border-[#ea580c]/60 bg-white" />
                    </div>

                    <!-- Card Header: Orange Calendar Badge + Serif Title -->
                    <div class="flex items-center gap-3.5 mb-10 relative z-10">
                        <span class="w-10 h-10 rounded-2xl bg-white border border-[#fed7aa] flex items-center justify-center text-[#ea580c] shadow-xs">
                            <UIcon name="material-symbols:calendar-month-outline" class="text-2xl text-[#ea580c]" />
                        </span>
                        <h2 class="font-display text-[26px] sm:text-[30px] font-normal text-on-surface tracking-tight">
                            My <span class="text-[#ea580c] font-display font-medium">Journey</span>
                        </h2>
                    </div>

                    <!-- Timeline Body -->
                    <div class="relative z-10">
                        <!-- Connecting Orange Animated Line Track -->
                        <div class="absolute left-[23px] top-6 bottom-6 w-[2px] bg-[#ea580c]/30 rounded-full overflow-hidden" aria-hidden="true">
                            <!-- Creative flowing energy light beam pulse -->
                            <div class="timeline-laser-pulse" />
                        </div>

                        <div class="space-y-8 sm:space-y-9">
                            <div
                                v-for="(step, index) in JOURNEY"
                                :key="step.year"
                                class="relative flex items-start gap-4 sm:gap-6 group"
                                :style="{ '--reveal-delay': `${index * 90}ms` }"
                                data-reveal>

                                <!-- Timeline Icon Node -->
                                <div class="relative shrink-0 w-12 h-12 flex items-center justify-center z-10">
                                    <!-- Animated pulse ring for current active step -->
                                    <div v-if="step.current" class="absolute inset-0 rounded-full bg-[#ea580c] animate-ping opacity-25" />
                                    
                                    <div
                                        class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative z-10"
                                        :class="step.current 
                                            ? 'bg-[#ea580c] text-white shadow-[0_4px_14px_rgba(234,88,12,0.4)] scale-105' 
                                            : 'bg-white border-2 border-[#fdba74] text-neutral-800 shadow-xs group-hover:border-[#ea580c] group-hover:scale-105'">
                                        <UIcon
                                            :name="step.icon"
                                            class="text-xl transition-transform duration-300"
                                            :class="step.current ? '!text-3xl' : ''" />
                                    </div>
                                </div>

                                <!-- Year Column (Aligned directly with node) -->
                                <div class="w-12 sm:w-14 pt-3 shrink-0">
                                    <span class="font-sans text-[15px] font-bold text-[#ea580c] tracking-tight">
                                        {{ step.year }}
                                    </span>
                                </div>

                                <!-- Content Column -->
                                <div class="flex-1 min-w-0 pt-2">
                                    <h3 class="font-sans text-[15px] sm:text-[16px] font-bold text-neutral-900 leading-snug">
                                        {{ step.title }}
                                    </h3>
                                    <p class="text-xs sm:text-[13px] text-neutral-500 font-normal mt-0.5">
                                        {{ step.subtitle }}
                                    </p>
                                    <div v-if="step.tags.length" class="flex flex-wrap gap-1.5 mt-2.5">
                                        <span
                                            v-for="tag in step.tags"
                                            :key="tag"
                                            class="inline-flex items-center text-xs font-semibold text-[#ea580c] bg-white border border-[#fed7aa] px-3 py-0.5 rounded-lg shadow-2xs transition-colors hover:border-[#ea580c]">
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
    </section>
</template>

<style scoped>
.timeline-laser-pulse {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45%;
    background: linear-gradient(180deg, transparent, #ea580c 50%, #ffffff 80%, transparent);
    animation: timeline-flow 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes timeline-flow {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(300%);
    }
}
</style>
