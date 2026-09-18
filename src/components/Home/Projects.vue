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
</script>

<template>
    <section id="projects" class="w-full max-w-[1600px] mx-auto px-6 md:px-10 min-h-screen flex flex-col justify-center py-16 sm:py-20">
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

        <!-- Masonry Gallery -->
        <div ref="gridRef" class="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-3">
            <article
                v-for="(project, index) in filteredProjects"
                :key="project.title"
                data-reveal
                class="group relative break-inside-avoid mb-3 overflow-hidden rounded-lg bg-surface-container-high"
                :style="{ '--reveal-delay': `${(index % 3) * 60}ms` }">
                <span
                    v-if="project.featured"
                    class="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur-sm">
                    <UIcon name="material-symbols:star-rounded" class="text-sm" aria-hidden="true" />
                    Featured
                </span>
                <button
                    type="button"
                    @click="openPreview(project)"
                    :aria-label="`Open live preview of ${project.title}`"
                    class="block w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
                    <img
                        :src="project.src.startsWith('http') ? project.src : `/compressed/${project.src}.png`"
                        :alt="project.title"
                        loading="lazy"
                        decoding="async"
                        class="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]" />
                </button>

                <!-- Hover overlay: title + actions -->
                <div class="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:hidden">
                    <p class="font-sans text-base font-semibold text-white" v-text="project.title" />
                    <div class="pointer-events-auto mt-2 flex items-center gap-2">
                        <a
                            :href="project.link"
                            target="_blank"
                            rel="noopener"
                            @click.stop
                            class="inline-flex items-center gap-1 rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-on-surface transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            :aria-label="`Open ${project.title} live site`">
                            <UIcon name="material-symbols:open-in-new" class="text-sm" aria-hidden="true" />
                            Visit
                        </a>
                        <a
                            v-if="project.githubLink"
                            :href="project.githubLink"
                            target="_blank"
                            rel="noopener"
                            @click.stop
                            class="inline-flex items-center gap-1 rounded-md bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            :aria-label="`View ${project.title} source on GitHub`">
                            <UIcon name="mdi:github" class="text-sm" aria-hidden="true" />
                            Code
                        </a>
                    </div>
                </div>

                <!-- Touch fallback caption (no hover on touch devices) -->
                <div class="hidden [@media(hover:none)]:flex items-center justify-between gap-2 bg-surface-container-lowest px-3 py-2">
                    <a
                        :href="project.link"
                        target="_blank"
                        rel="noopener"
                        class="truncate font-sans text-sm font-semibold text-on-surface"
                        v-text="project.title" />
                    <a
                        v-if="project.githubLink"
                        :href="project.githubLink"
                        target="_blank"
                        rel="noopener"
                        class="shrink-0 text-on-surface-variant"
                        :aria-label="`View ${project.title} source on GitHub`">
                        <UIcon name="mdi:github" class="text-lg" aria-hidden="true" />
                    </a>
                </div>
            </article>

            <!-- Closing CTA tile -->
            <a
                :href="GITHUB_URL"
                target="_blank"
                rel="noopener"
                data-reveal
                class="group flex min-h-[260px] flex-col justify-between rounded-lg border border-dashed border-outline-variant bg-surface-container-low p-6 break-inside-avoid mb-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
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
