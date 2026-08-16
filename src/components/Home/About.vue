<script setup lang="ts">
import { ABOUT, ABOUT_FACTS, EXPERIENCE, LINKEDIN_URL } from '@/constants'
</script>

<template>
    <section class="bg-surface border-y border-card-border py-[120px]">
        <div class="container-editorial grid lg:grid-cols-12 gap-14 lg:gap-16">
            <div class="lg:col-span-4" id="about">
                <p data-reveal class="label-caps text-primary mb-3">About Me</p>
                <h2 data-reveal class="font-display text-headline-lg text-on-surface mb-6">Who I Am</h2>
                <p data-reveal class="text-body-md text-on-surface-variant mb-8" v-text="ABOUT[0]" />
                <ul data-reveal class="space-y-4 mb-8">
                    <li v-for="fact in ABOUT_FACTS" :key="fact.label" class="flex items-center gap-4">
                        <span class="w-11 h-11 rounded-full bg-white border border-card-border flex items-center justify-center text-primary shadow-sm shrink-0">
                            <UIcon :name="fact.icon" class="text-lg" />
                        </span>
                        <div>
                            <p class="label-caps text-on-surface-variant !text-[10px]" v-text="fact.label" />
                            <p class="font-sans text-body-sm font-semibold text-on-surface" v-text="fact.value" />
                        </div>
                    </li>
                </ul>
                <a data-reveal :href="LINKEDIN_URL" target="_blank" rel="noopener" class="btn-secondary">
                    More About Me
                    <UIcon name="material-symbols:arrow-outward" class="text-base" />
                </a>
            </div>
            <div class="lg:col-span-8" id="experience">
                <p data-reveal class="label-caps text-primary mb-3">Experience</p>
                <h2 data-reveal class="font-display text-headline-lg text-on-surface mb-8">Professional Experience</h2>
                <div class="space-y-6">
                    <article v-for="job in EXPERIENCE" :key="job.company" data-reveal class="exp-card">
                        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div class="flex items-center gap-4">
                                <span class="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center font-sans text-headline-sm font-bold shrink-0"
                                    v-text="job.company.charAt(0)" />
                                <div>
                                    <h3 class="font-display text-headline-sm text-on-surface" v-text="job.company" />
                                    <p class="text-body-sm text-on-surface-variant mt-1" v-text="job.role" />
                                </div>
                            </div>
                            <span class="self-start sm:mt-1 inline-flex items-center rounded-full bg-primary/5 text-primary px-3 py-1.5 text-xs font-bold whitespace-nowrap"
                                v-text="job.period" />
                        </div>
                        <ul class="mt-6 space-y-3">
                            <li v-for="bullet in job.bullets" :key="bullet" class="flex gap-3">
                                <span class="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <span class="text-body-sm text-on-surface-variant" v-text="bullet" />
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>
