<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { GITHUB_URL, PROJECTS, type Project } from '@/constants'
import LivePreviewModal from '@/components/Home/LivePreviewModal.vue'

const activeCategory = ref<'all' | 'fullstack' | 'ecommerce' | 'frontend'>('all')
const gridRef = ref<HTMLElement | null>(null)

const revealNewItems = async () => {
    await nextTick()
    const container = gridRef.value
    if (!container) return
    container.querySelectorAll<HTMLElement>('[data-reveal]:not(.appear)').forEach(el => el.classList.add('appear'))
}

watch(activeCategory, revealNewItems)

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

const getTileSpan = (project: Project) => {
    // Bento rhythm on a 4-col grid: featured tiles are full-row heroes,
    // standards are uniform single tiles. grid-flow-dense fills the gaps.
    if (project.featured) return 'md:col-span-2 lg:col-span-4'
    return ''
}
</script>

<template>
    <section id="projects" class="container-editorial min-h-screen flex flex-col justify-center py-16 sm:py-20">
        <!-- Section Header -->
        <div class="flex flex-col gap-6 mb-10" data-reveal>
            <div>
                <p class="label-caps text-primary mb-3">Featured Work</p>
                <h2 class="font-display text-headline-lg text-on-surface">Interactive Projects</h2>
                <p class="text-body-sm text-on-surface-variant mt-2 max-w-lg">
                    Explore web applications, full-stack systems, and design implementations. Click any preview to test the live sandbox.
                </p>
            </div>
        </div>

        <!-- Filter Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" data-reveal role="group" aria-label="Filter projects by category">
            <button
                v-for="cat in categories"
                :key="cat.value"
                type="button"
                @click="activeCategory = cat.value"
                :aria-pressed="activeCategory === cat.value"
                :class="[
                    activeCategory === cat.value
                        ? 'bg-primary text-on-primary shadow-sm font-semibold'
                        : 'bg-surface-container-lowest text-on-surface-variant border border-card-border hover:border-primary/50 hover:text-on-surface'
                ]"
                class="px-4 py-2 rounded-xl text-xs sm:text-sm font-sans whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                {{ cat.label }}
            </button>
        </div>

        <!-- Bento Grid Layout -->
        <div ref="gridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 grid-flow-dense">
            <article
                v-for="(project, index) in filteredProjects"
                :key="project.title"
                data-reveal
                :class="[getTileSpan(project), 'project-card group flex flex-col justify-between relative rounded-[20px]', project.featured ? 'project-card-featured' : '']"
                :style="{ '--reveal-delay': `${(index % 4) * 60}ms` }">

                <div :class="project.featured ? 'lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-center' : ''">
                    <!-- Visual Thumbnail / Sandbox Trigger -->
                    <div class="p-4 pb-0 relative lg:p-6">
                        <button
                            type="button"
                            @click="openPreview(project)"
                            :aria-label="`Open live preview of ${project.title}`"
                            class="block w-full text-left aspect-[16/10] rounded-xl overflow-hidden bg-surface-container-high relative cursor-pointer group-hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                            <span
                                v-if="project.featured"
                                class="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wider text-on-primary shadow-md">
                                <UIcon name="material-symbols:star-rounded" class="text-sm" aria-hidden="true" />
                                Featured
                            </span>
                            <img
                                :src="project.src.startsWith('http') ? project.src : `/compressed/${project.src}.png`"
                                alt=""
                                loading="lazy"
                                decoding="async"
                                class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />

                            <!-- Overlay Hover Action (visual only — the wrapping button is the control) -->
                            <span aria-hidden="true" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:hidden transition-opacity duration-300 flex items-center justify-center gap-3">
                                <span
                                    class="px-4 py-2 rounded-lg bg-surface-container-lowest/95 text-on-surface text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <UIcon name="material-symbols:visibility-outline" class="text-base text-primary" />
                                    Live Preview
                                </span>
                            </span>
                        </button>
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
                                <span v-if="project.type" class="block text-[11px] font-bold uppercase tracking-wider text-primary mt-0.5">
                                    {{ project.type }}
                                </span>
                            </div>

                            <div class="flex items-center gap-2 shrink-0">
                                <button
                                    type="button"
                                    @click="openPreview(project)"
                                    class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-md hover:bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                    :aria-label="`Open preview of ${project.title}`">
                                    <UIcon name="material-symbols:open-in-browser" class="text-xl" aria-hidden="true" />
                                </button>
                                <a
                                    v-if="project.githubLink"
                                    :href="project.githubLink"
                                    target="_blank"
                                    rel="noopener"
                                    class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-md hover:bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                    :aria-label="`View ${project.title} source on GitHub`">
                                    <UIcon name="mdi:github" class="text-xl" aria-hidden="true" />
                                </a>
                            </div>
                        </div>

                        <p v-if="project.description" class="mt-3 text-body-sm text-on-surface-variant line-clamp-2" v-text="project.description" />
                    </div>
                </div>

                <!-- Footer Tech Pills -->
                <div class="px-6 pb-6 pt-0 mt-auto">
                    <ul class="flex flex-wrap gap-1.5 pt-4 border-t border-card-border/60" aria-label="Technologies used">
                        <li
                            v-for="tech in project.techs"
                            :key="tech.title"
                            class="tech-pill text-[11px] py-1 px-2.5">
                            <span class="w-1.5 h-1.5 rounded-full" aria-hidden="true" :style="{ backgroundColor: pillColor(tech.title) }" />
                            {{ tech.title }}
                        </li>
                    </ul>
                </div>
            </article>

            <!-- Closing CTA tile -->
            <a
                :href="GITHUB_URL"
                target="_blank"
                rel="noopener"
                data-reveal
                class="group flex min-h-[260px] flex-col justify-between rounded-[20px] border border-dashed border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <span class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-card-border bg-surface-container-lowest text-on-surface-variant shadow-sm transition-colors group-hover:border-primary group-hover:text-primary">
                    <UIcon name="mdi:github" class="text-2xl" aria-hidden="true" />
                </span>
                <span>
                    <span class="block font-sans text-title-lg font-semibold text-on-surface">More on GitHub</span>
                    <span class="mt-1 block text-body-sm text-on-surface-variant">Experiments, forks and work in progress.</span>
                    <span class="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Browse repositories
                        <UIcon name="material-symbols:arrow-outward" class="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                </span>
            </a>
        </div>

        <!-- Live Website Preview Modal -->
        <LivePreviewModal
            :is-open="isPreviewOpen"
            :project="selectedProject"
            @close="closePreview" />
    </section>
</template>

<style scoped>
.scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-none::-webkit-scrollbar {
    display: none;
}
</style>
