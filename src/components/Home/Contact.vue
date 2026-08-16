<script setup lang="ts">
import { EMAIL } from '@/constants'
</script>

<template>
    <section id="contact" class="container-editorial min-h-screen flex flex-col justify-center py-16 sm:py-20">
        <div data-reveal class="relative overflow-hidden rounded-[32px] bg-surface border border-card-border shadow-card px-6 md:px-16 py-16 md:py-20 text-center">
            <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div class="absolute -bottom-32 -left-24 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div class="relative">
                <span class="inline-flex w-16 h-16 rounded-full bg-surface-container-lowest border border-card-border items-center justify-center text-primary shadow-sm mb-8">
                    <UIcon name="material-symbols:rocket-launch" class="text-3xl" />
                </span>
                <p class="label-caps text-primary mb-3">Let's work together</p>
                <h2 class="font-display text-headline-lg text-on-surface mb-4">Have a Project in Mind?</h2>
                <p class="text-body-md text-on-surface-variant max-w-xl mx-auto mb-10">
                    I'm open to new opportunities and collaborations. Let's talk about what we can build together.
                </p>
                <a :href="`mailto:${EMAIL}`" class="btn-primary">
                    Get In Touch
                    <UIcon name="material-symbols:arrow-outward" class="text-base" />
                </a>
            </div>
        </div>
    </section>
</template>
