<script setup lang="ts">
import { PROJECTS } from '@/constants'

const visibleProjects = PROJECTS.filter(project => project.show !== false)
</script>

<template>
    <section id="work" class="container-editorial pb-[160px]">
        <h2 class="font-display text-headline-md text-on-surface mb-16 border-b border-on-surface/10 pb-4">Featured Work</h2>
        <div class="grid md:grid-cols-2 gap-6">
            <article v-for="project in visibleProjects" :key="project.title" class="project-card">
                <a :href="project.link" target="_blank" rel="noopener" class="block">
                    <div class="h-64 bg-surface-container-highest overflow-hidden">
                        <img :src="project.src.startsWith('http') ? project.src : `/compressed/${project.src}.png`"
                            :alt="project.title" loading="lazy" decoding="async"
                            class="w-full h-full object-cover object-top" />
                    </div>
                    <div class="p-8">
                        <h3 class="font-display text-headline-sm text-on-surface mb-4" v-text="project.title" />
                        <p class="font-mono text-code-label text-on-surface-variant">
                            {{ project.techs.map(tech => tech.title).join(' / ') }}
                        </p>
                    </div>
                </a>
            </article>
        </div>
    </section>
</template>
