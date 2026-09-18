<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed, watch, nextTick } from 'vue'
import { GITHUB_URL, PROJECTS, type Project } from '@/constants'
import LivePreviewModal from '@/components/Home/LivePreviewModal.vue'

const activeCategory = ref<'all' | 'fullstack' | 'ecommerce' | 'frontend'>('all')
const gridRef = ref<HTMLElement | null>(null)
const tabsRef = ref<HTMLElement | null>(null)
const pillRef = ref<HTMLElement | null>(null)
const countRef = ref<HTMLElement | null>(null)

const movePill = async () => {
    await nextTick()
    const tabs = tabsRef.value
    const pill = pillRef.value
    if (!tabs || !pill) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        pill.style.display = 'none'
        return
    }
    const active = tabs.querySelector<HTMLElement>(`[data-cat="${activeCategory.value}"]`)
    if (!active) return
    pill.style.display = 'block'
    pill.style.width = `${active.offsetWidth}px`
    pill.style.transform = `translateX(${active.offsetLeft}px)`
}

const revealNewItems = async () => {
    await nextTick()
    const container = gridRef.value
    if (!container) return
    const items = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]:not(.appear)'))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        items.forEach(el => el.classList.add('appear'))
        return
    }
    items.forEach((el, i) => {
        window.setTimeout(() => el.classList.add('appear'), Math.min(i * 45, 360))
    })
}

watch(activeCategory, async () => {
    await movePill()
    await revealNewItems()
    if (countRef.value && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        countRef.value.classList.remove('count-bump')
        void countRef.value.offsetWidth
        countRef.value.classList.add('count-bump')
    }
})

onMounted(() => {
    movePill()
    window.addEventListener('resize', movePill)
})

onUnmounted(() => {
    window.removeEventListener('resize', movePill)
})

const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'E-Commerce', value: 'ecommerce' },
    { label: 'Frontend / Vue', value: 'frontend' },
] as const

const projectOrder = [
    'Library Management',
    'Traders Academy',
    'Hager UI/UX Portfolio',
    'Tabarak Trading',
  'eCommerceHope',
    'Grand Restaurant',
    'GemyClass E-Learning',
    'Pexels Store',
    'Innovate Agency',
]

const filteredProjects = computed(() => {
    const projects = PROJECTS.filter(project => project.show !== false && (activeCategory.value === 'all' || project.type === activeCategory.value))
    return projects.sort((first, second) => projectOrder.indexOf(first.title) - projectOrder.indexOf(second.title))
})

const categoryLabel = (type: string) => {
    return categories.find(category => category.value === type)?.label.replace('Full-Stack & ', '').replace('Frontend / ', '') ?? type
}

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

const onThumbError = (event: Event, project: Project) => {
    if (!project.fallbackSrc) return
    const img = event.target as HTMLImageElement | null
    if (!img || img.dataset.fallbackApplied) return
    img.dataset.fallbackApplied = '1'
    img.src = `/compressed/${project.fallbackSrc}.png`
}
</script>

<template>
    <section id="projects" class="w-full max-w-[1600px] mx-auto px-6 md:px-10 min-h-screen flex flex-col justify-center py-20 sm:py-28">
        <!-- Section Header -->
        <div class="mb-10 flex flex-col justify-between gap-6 border-b border-card-border pb-8 lg:flex-row lg:items-end" data-reveal>
            <div class="max-w-2xl">
                <p class="label-caps mb-3 text-primary"><span class="font-mono mr-2 opacity-70">01</span>Selected work · 2024—25</p>
                <h2 class="font-display text-headline-lg text-on-surface">Built for real people,<br class="hidden sm:block" /> not just screens.</h2>
                <p class="mt-3 max-w-xl text-body-sm text-on-surface-variant">
                    A growing collection of full-stack products, commerce experiences, and polished interfaces. Open a project to explore it live.
                </p>
            </div>
            <div class="flex items-center gap-3 text-sm text-on-surface-variant">
                <span ref="countRef" class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">{{ filteredProjects.length }}</span>
                <span class="font-medium">projects in this<br />collection</span>
            </div>
        </div>

        <!-- Filter Tabs -->
        <div ref="tabsRef" class="filter-tabs relative flex items-center gap-1 overflow-x-auto pb-1 mb-8 scrollbar-none w-fit max-w-full rounded-xl border border-card-border bg-surface-container-lowest p-1" data-reveal role="group" aria-label="Filter projects by category">
            <span ref="pillRef" class="filter-pill" aria-hidden="true" />
            <button
                v-for="cat in categories"
                :key="cat.value"
                type="button"
                :data-cat="cat.value"
                @click="activeCategory = cat.value"
                :aria-pressed="activeCategory === cat.value"
                :class="[
                    activeCategory === cat.value
                        ? 'text-on-primary font-semibold'
                        : 'text-on-surface-variant hover:text-on-surface'
                ]"
                class="relative z-10 px-4 py-2 rounded-[0.65rem] text-xs sm:text-sm font-sans whitespace-nowrap transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                {{ cat.label }}
            </button>
        </div>

        <!-- Masonry Gallery -->
        <div ref="gridRef" class="project-masonry columns-1 sm:columns-2 xl:columns-3 gap-5">
            <article
                v-for="(project, index) in filteredProjects"
                :key="project.title"
                data-reveal
                :class="[
                    'project-gallery-card group break-inside-avoid mb-5 overflow-hidden rounded-[1.25rem] border bg-surface-container-lowest shadow-card',
                    project.featured ? 'border-primary/40 ring-1 ring-primary/25' : 'border-card-border'
                ]"
                :style="{ '--reveal-delay': `${(index % 3) * 60}ms` }">
                <div :class="['relative overflow-hidden bg-surface-container-high', project.featured ? 'aspect-[4/3]' : 'aspect-video']">
                    <span
                        v-if="project.featured"
                        class="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-md">
                        <UIcon name="material-symbols:star-rounded" class="text-sm text-amber-300" aria-hidden="true" />
                        Featured
                    </span>
                    <button
                        type="button"
                        @click="openPreview(project)"
                        :aria-label="`Open live preview of ${project.title}`"
                        class="absolute inset-0 block h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
                        <img
                            :src="project.src.startsWith('http') ? project.src : `/compressed/${project.src}.png`"
                            :alt="project.title"
                            loading="lazy"
                            decoding="async"
                            @error="onThumbError($event, project)"
                            class="block h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.05]" />
                    </button>
                    <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                    <div class="card-overlay" aria-hidden="true">
                        <span class="card-overlay-chip">View live
                            <UIcon name="material-symbols:arrow-outward-rounded" class="text-sm" aria-hidden="true" />
                        </span>
                    </div>
                    <button
                        type="button"
                        @click="openPreview(project)"
                        :aria-label="`Preview ${project.title}`"
                        class="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface/95 text-on-surface opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary [@media(hover:none)]:opacity-100">
                        <UIcon name="material-symbols:visibility-rounded" class="text-lg" aria-hidden="true" />
                    </button>
                </div>
                <div class="p-5 sm:p-6">
                    <div class="mb-3 flex items-baseline justify-between gap-3">
                        <p class="font-mono text-[11px] tracking-[0.08em] text-on-surface-variant">
                            <span class="font-bold text-primary">{{ String(index + 1).padStart(2, '0') }}</span>
                            <span aria-hidden="true" class="mx-2">/</span>
                            <span class="label-caps text-[10px]">{{ categoryLabel(project.type) }}</span>
                        </p>
                        <span class="shrink-0 text-xs text-on-surface-variant">{{ project.techs.length }} technologies</span>
                    </div>
                    <h3 class="font-display text-[1.35rem] leading-tight text-on-surface">{{ project.title }}</h3>
                    <p v-if="project.description" class="mt-2 text-sm leading-6 text-on-surface-variant">{{ project.description }}</p>
                    <div class="mt-5 flex items-center justify-between gap-3 border-t border-card-border pt-4">
                        <div class="flex -space-x-1.5" :aria-label="`${project.title} technologies`">
                            <span
                                v-for="tech in project.techs.slice(0, 4)"
                                :key="tech.title"
                                :title="tech.title"
                                class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface-container-lowest bg-surface-container-low text-on-surface-variant transition-colors duration-200 group-hover:border-primary/30">
                                <UIcon :name="tech.icon" class="text-sm" aria-hidden="true" />
                            </span>
                        </div>
                        <div class="flex items-center gap-1">
                            <a :href="project.link" target="_blank" rel="noopener" class="project-action" :aria-label="`Open ${project.title} live site`">
                                <UIcon name="material-symbols:arrow-outward-rounded" class="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                            </a>
                            <a v-if="project.githubLink" :href="project.githubLink" target="_blank" rel="noopener" class="project-action" :aria-label="`View ${project.title} source on GitHub`">
                                <UIcon name="mdi:github" class="text-base" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Closing CTA tile -->
            <a
                :href="GITHUB_URL"
                target="_blank"
                rel="noopener"
                data-reveal
                class="group flex min-h-[280px] flex-col justify-between rounded-2xl border border-dashed border-outline-variant bg-surface-container-low p-6 break-inside-avoid mb-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
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

.project-gallery-card {
    transition: transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease;
}

.project-gallery-card:hover {
    transform: translateY(-6px);
    border-color: color-mix(in srgb, var(--color-primary) 55%, var(--color-card-border));
    box-shadow: var(--shadow-card-hover), 0 16px 44px -16px color-mix(in srgb, var(--color-primary) 28%, transparent);
}

.project-action {
    display: inline-flex;
    height: 2rem;
    width: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    color: var(--color-on-surface-variant);
    transition: background-color 200ms ease, color 200ms ease, transform 200ms ease;
}

.project-action:hover {
    background: var(--color-primary);
    color: var(--color-on-primary);
    transform: translateY(-2px);
}

.project-action:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
    .project-gallery-card,
    .project-action {
        transition: none;
    }

    .project-gallery-card:hover,
    .project-action:hover {
        transform: none;
    }
}
</style>
