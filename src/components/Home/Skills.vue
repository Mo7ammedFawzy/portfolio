<script setup lang="ts">
import { SKILLS } from '@/constants'
</script>

<template>
    <section id="skills" class="container-editorial py-[120px] text-center">
        <p data-reveal class="label-caps text-primary mb-3">My Skills</p>
        <h2 data-reveal class="font-display text-headline-lg text-on-surface mb-14">Technologies I Work With</h2>
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-left">
            <div v-for="(skill, index) in SKILLS" :key="skill.title" data-reveal class="skill-card"
                :style="{ '--reveal-delay': `${index * 40}ms` }">
                <UIcon :name="skill.icon" class="text-5xl" />
                <span class="font-sans text-body-sm font-semibold text-on-surface text-center" v-text="skill.title" />
            </div>
        </div>
    </section>
</template>
