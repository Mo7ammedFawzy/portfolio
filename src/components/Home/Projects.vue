<script setup lang="ts">
import { GITHUB_URL, PROJECTS } from '@/constants'

const visibleProjects = PROJECTS.filter(project => project.show !== false)

const pillColors: Record<string, string> = {
    vue: '#42b883',
    vuejs: '#42b883',
    nuxt: '#00dc82',
    nuxtui: '#00dc82',
    vuetify: '#1867c0',
    typescript: '#3178c6',
    tailwindcss: '#38bdf8',
    nodejs: '#339933',
    spring: '#6db33f',
    restapi: '#e85d04',
    bootstrap: '#7952b3',
}

const pillColor = (title: string) => pillColors[title.toLowerCase()] ?? '#8d7165'
</script>

<template>
    <section id="projects" class="container-editorial pb-[120px]">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14" data-reveal>
            <div>
                <p class="label-caps text-primary mb-3">Featured Projects</p>
                <h2 class="font-display text-headline-lg text-on-surface">Projects I've Built</h2>
            </div>
            <a :href="GITHUB_URL" target="_blank" rel="noopener" class="btn-secondary self-start md:self-auto">
                View All Projects
                <UIcon name="material-symbols:arrow-outward" class="text-base" />
            </a>
        </div>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <article v-for="(project, index) in visibleProjects" :key="project.title" data-reveal
                class="project-card" :style="{ '--reveal-delay': `${Math.floor(index / 3) * 80}ms` }">
                <a :href="project.link" target="_blank" rel="noopener" class="block p-4 pb-0">
                    <div class="aspect-[16/10] rounded-xl overflow-hidden bg-surface-container-high">
                        <img :src="project.src.startsWith('http') ? project.src : `/compressed/${project.src}.png`"
                            :alt="project.title" loading="lazy" decoding="async"
                            class="w-full h-full object-cover object-top" />
                    </div>
                </a>
                <div class="p-6">
                    <div class="flex items-start justify-between gap-4">
                        <a :href="project.link" target="_blank" rel="noopener"
                            class="font-sans text-title-lg font-semibold text-on-surface hover:text-primary transition-colors"
                            v-text="project.title" />
                        <a v-if="project.githubLink" :href="project.githubLink" target="_blank" rel="noopener"
                            class="text-on-surface-variant hover:text-primary transition-colors shrink-0" aria-label="GitHub">
                            <UIcon name="mdi:github" class="text-xl" />
                        </a>
                    </div>
                    <p v-if="project.description" class="mt-3 text-body-sm text-on-surface-variant" v-text="project.description" />
                    <div class="mt-5 flex flex-wrap gap-2">
                        <span v-for="tech in project.techs" :key="tech.title" class="tech-pill">
                            <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: pillColor(tech.title) }" />
                            {{ tech.title }}
                        </span>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>
