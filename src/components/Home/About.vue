<script setup lang="ts">
import { ABOUT, EXPERIENCE } from '@/constants'
</script>

<template>
    <div class="bg-surface border-y border-on-surface/10 py-[160px]">
        <div class="container-editorial grid md:grid-cols-2 gap-24">
            <section id="about">
                <h2 class="font-display text-headline-md text-on-surface mb-8">About</h2>
                <div class="font-sans text-body-md text-on-surface-variant space-y-6">
                    <p v-for="paragraph in ABOUT" :key="paragraph" v-text="paragraph" />
                </div>
            </section>
            <section id="experience">
                <h2 class="font-display text-headline-md text-on-surface mb-8">Experience</h2>
                <div class="space-y-12">
                    <div v-for="job in EXPERIENCE" :key="job.company" class="relative pl-8 border-l border-on-surface/10">
                        <div :class="['absolute w-2 h-2 left-[-4.5px] top-2', job.current ? 'bg-primary' : 'bg-on-surface/20']" />
                        <h4 class="font-display text-headline-sm text-on-surface" v-text="job.company" />
                        <p class="font-mono text-xs text-primary mt-2 uppercase tracking-widest">
                            {{ job.role }} | {{ job.period }}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
