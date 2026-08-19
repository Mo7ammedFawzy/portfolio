<script setup lang="ts">
import { ref, computed } from 'vue'
import { GITHUB_URL, PROJECTS, type Project } from '@/constants'
import LivePreviewModal from '@/components/Home/LivePreviewModal.vue'

const activeCategory = ref<'all' | 'fullstack' | 'ecommerce' | 'frontend'>('all')

const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full-Stack & Java', value: 'fullstack' },
    { label: 'E-Commerce', value: 'ecommerce' },
    { label: 'Frontend / Vue', value: 'frontend' },
] as const

const filteredProjects = computed(() => {
    if (activeCategory.value === 'all') {
        return PROJECTS.filter(p => p.show !== false)
    }
    return PROJECTS.filter(p => p.show !== false && p.type === activeCategory.value)
})

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

// Modal State
const selectedProject = ref<Project | null>(null)
const isPreviewOpen = ref(false)

const openPreview = (project: Project) => {
    selectedProject.value = project
    isPreviewOpen.value = true
}

const closePreview = () => {
    isPreviewOpen.value = false
}

const getBentoSpan = (project: Project, index: number) => {
    // Dynamic organic bento layout pattern:
    // Index 0: 2-column wide featured
    // Index 1: 1-column standard
    // Index 2: 1-column standard
    // Index 3: 2-column wide featured
    // Index 4: 1-column standard
    // Index 5: 1-column standard
    // Index 6: 2-column wide featured
    const pattern = [
        'md:col-span-2',
        'md:col-span-1',
        'md:col-span-1',
        'md:col-span-2',
        'md:col-span-1',
        'md:col-span-1',
        'md:col-span-2',
        'md:col-span-1',
        'md:col-span-1',
        'md:col-span-1',
        'md:col-span-2',
        'md:col-span-1'
    ]
    return pattern[index % pattern.length]
}
</script>

<template>
    <section id="projects" class="container-editorial min-h-screen flex flex-col justify-center py-16 sm:py-20">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10" data-reveal>
            <div>
                <p class="label-caps text-primary mb-3">Featured Work</p>
                <h2 class="font-display text-headline-lg text-on-surface">Interactive Projects</h2>
                <p class="text-body-sm text-on-surface-variant mt-2 max-w-lg">
                    Explore web applications, full-stack systems, and design implementations. Click any preview to test the live sandbox.
                </p>
            </div>
            <a :href="GITHUB_URL" target="_blank" rel="noopener" class="btn-secondary self-start md:self-auto shrink-0">
                View GitHub Repos
                <UIcon name="material-symbols:arrow-outward" class="text-base" />
            </a>
        </div>

        <!-- Filter Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" data-reveal>
            <button
                v-for="cat in categories"
                :key="cat.value"
                @click="activeCategory = cat.value"
                :class="[
                    activeCategory === cat.value
                        ? 'bg-primary text-on-primary shadow-sm font-semibold'
                        : 'bg-surface-container-lowest text-on-surface-variant border border-card-border hover:border-primary/50 hover:text-on-surface'
                ]"
                class="px-4 py-2 rounded-xl text-xs sm:text-sm font-sans whitespace-nowrap transition-all duration-200 cursor-pointer">
                {{ cat.label }}
            </button>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense">
            <article
                v-for="(project, index) in filteredProjects"
                :key="project.title"
                data-reveal
                :class="[getBentoSpan(project, index), 'project-card group flex flex-col justify-between relative']"
                :style="{ '--reveal-delay': `${(index % 4) * 60}ms` }">

                <div>
                    <!-- Visual Thumbnail / Sandbox Trigger -->
                    <div class="p-4 pb-0 relative">
                        <div
                            @click="openPreview(project)"
                            role="button"
                            tabindex="0"
                            class="aspect-[16/10] rounded-xl overflow-hidden bg-surface-container-high relative cursor-pointer group-hover:shadow-md transition-all">
                            <img
                                :src="project.src.startsWith('http') ? project.src : `/compressed/${project.src}.png`"
                                :alt="project.title"
                                loading="lazy"
                                decoding="async"
                                class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />

                            <!-- Overlay Hover Action -->
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                                <button
                                    class="px-4 py-2 rounded-lg bg-surface-container-lowest/95 text-on-surface text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-surface-container-lowest hover:text-primary">
                                    <UIcon name="material-symbols:visibility-outline" class="text-base text-primary" />
                                    Live Preview
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Card Body -->
                    <div class="p-6">
                        <div class="flex items-start justify-between gap-4">
                            <div>
                                <a
                                    :href="project.link"
                                    target="_blank"
                                    rel="noopener"
                                    class="font-sans text-title-lg font-semibold text-on-surface hover:text-primary transition-colors inline-flex items-center gap-1.5"
                                    v-text="project.title" />
                                <span v-if="project.type" class="block text-[11px] font-bold uppercase tracking-wider text-primary/80 mt-0.5">
                                    {{ project.type }}
                                </span>
                            </div>

                            <div class="flex items-center gap-2 shrink-0">
                                <button
                                    @click="openPreview(project)"
                                    class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-md hover:bg-surface-container-high"
                                    title="Open interactive preview">
                                    <UIcon name="material-symbols:open-in-browser" class="text-xl" />
                                </button>
                                <a
                                    v-if="project.githubLink"
                                    :href="project.githubLink"
                                    target="_blank"
                                    rel="noopener"
                                    class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-md hover:bg-surface-container-high"
                                    aria-label="GitHub Source">
                                    <UIcon name="mdi:github" class="text-xl" />
                                </a>
                            </div>
                        </div>

                        <p v-if="project.description" class="mt-3 text-body-sm text-on-surface-variant line-clamp-2" v-text="project.description" />
                    </div>
                </div>

                <!-- Footer Tech Pills -->
                <div class="px-6 pb-6 pt-0 mt-auto">
                    <div class="flex flex-wrap gap-1.5 pt-4 border-t border-card-border/60">
                        <span
                            v-for="(tech, techIndex) in project.techs"
                            :key="tech.title"
                            data-reveal
                            :style="{ '--reveal-delay': `${(index % 4) * 60 + 100 + techIndex * 40}ms` }"
                            class="tech-pill text-[11px] py-1 px-2.5">
                            <span class="w-1.5 h-1.5 rounded-full" :style="{ backgroundColor: pillColor(tech.title) }" />
                            {{ tech.title }}
                        </span>
                    </div>
                </div>
            </article>
        </div>

        <!-- Live Website Preview Modal -->
        <LivePreviewModal
            :is-open="isPreviewOpen"
            :project="selectedProject"
            @close="closePreview" />
    </section>
</template>

