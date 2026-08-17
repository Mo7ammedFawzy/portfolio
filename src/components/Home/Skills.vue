<script setup lang="ts">
import { CORE_SKILLS, SKILL_GROUPS } from '@/constants'
</script>

<template>
    <section id="skills" class="container-editorial min-h-screen flex flex-col justify-center py-16 sm:py-20">
        <div class="text-center mb-12">
            <p data-reveal class="label-caps text-primary mb-3">• • My Toolkit • •</p>
            <h2 data-reveal class="font-display text-headline-lg text-on-surface mb-4">Technologies I Work With</h2>
            <p data-reveal class="text-body-md text-on-surface-variant max-w-2xl mx-auto">A collection of the technologies, frameworks, and tools I use to build scalable, user-friendly, and enterprise-grade applications.</p>
        </div>

        <div class="space-y-8">
            <div data-reveal class="bg-surface-container-lowest rounded-2xl border border-card-border p-8 shadow-card">
                <div class="flex items-center gap-3 mb-8">
                    <UIcon name="material-symbols:star" class="text-primary text-[28px]" />
                    <h3 class="label-caps text-primary">Core Technologies</h3>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    <div v-for="(skill, index) in CORE_SKILLS" :key="skill.title" class="flex flex-col items-center gap-3"
                        :style="{ '--reveal-delay': `${index * 60}ms` }">
                        <UIcon :name="skill.icon" class="w-16 h-16 text-on-surface-variant" />
                        <span class="font-sans text-sm font-bold text-on-surface" v-text="skill.title" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(group, groupIndex) in SKILL_GROUPS" :key="group.title" data-reveal
                    class="bg-surface-container-low/30 rounded-2xl p-6 border border-card-border"
                    :style="{ '--reveal-delay': `${groupIndex * 80}ms` }">
                    <div class="flex items-center gap-3 mb-6">
                        <UIcon :name="group.icon" class="text-primary text-[24px]" />
                        <h3 class="label-caps text-primary" v-text="group.title" />
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div v-for="item in group.items" :key="item.title"
                            class="bg-surface-container-lowest p-3 rounded-lg border border-card-border shadow-sm flex flex-col items-center gap-2">
                            <UIcon :name="item.icon" class="w-8 h-8 text-on-surface-variant" />
                            <span class="text-xs font-bold text-on-surface" v-text="item.title" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>