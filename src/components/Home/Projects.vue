<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { GITHUB_URL, PROJECTS, type Project } from '@/constants'
import LivePreviewModal from '@/components/Home/LivePreviewModal.vue'

type ProjectCategory = 'all' | 'fullstack' | 'ecommerce' | 'frontend'

const categories = [
    { label: 'All projects', value: 'all' },
    { label: 'Full-stack', value: 'fullstack' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'Frontend', value: 'frontend' },
] as const

const projectOrder = [
    'Library Management',
    'GemyClass E-Learning',
    'eCommerceHope',
    'Traders Academy',
    'Hager UI/UX Portfolio',
    'Tabarak Trading',
    'Grand Restaurant',
    'Pexels Store',
    'Innovate Agency',
]

const finalProjectTitle = 'Innovate Agency'
const activeCategory = ref<ProjectCategory>('all')
const masonryRef = ref<HTMLElement | null>(null)
const selectedProject = ref<Project | null>(null)
const isPreviewOpen = ref(false)
let revealTimers: number[] = []

const compareProjects = (first: Project, second: Project) => {
    // Keep Innovate as the final editorial card even if new projects are added later.
    if (first.title === finalProjectTitle && second.title === finalProjectTitle) return 0
    if (first.title === finalProjectTitle) return 1
    if (second.title === finalProjectTitle) return -1

    const firstPosition = projectOrder.indexOf(first.title)
    const secondPosition = projectOrder.indexOf(second.title)

    if (firstPosition === -1 && secondPosition === -1) return 0
    if (firstPosition === -1) return 1
    if (secondPosition === -1) return -1

    return firstPosition - secondPosition
}

const filteredProjects = computed(() => {
    const projects = PROJECTS.filter(project => (
        project.show !== false
        && (activeCategory.value === 'all' || project.type === activeCategory.value)
    ))

    return projects.sort(compareProjects)
})

const categoryLabel = (type: string) => {
    return categories.find(category => category.value === type)?.label ?? type
}

const projectImage = (project: Project) => {
    return project.src.startsWith('http') ? project.src : `/compressed/${project.src}.png`
}

const isFeaturedProject = (project: Project) => {
    return project.title !== finalProjectTitle && project.featured === true
}

const isCompactProject = (project: Project) => {
    return project.grid === 'small' || project.title === finalProjectTitle
}

const clearRevealTimers = () => {
    revealTimers.forEach(timer => window.clearTimeout(timer))
    revealTimers = []
}

const revealNewProjects = async () => {
    await nextTick()
    clearRevealTimers()

    const container = masonryRef.value
    if (!container) return

    const items = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]:not(.appear)'))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        items.forEach(item => item.classList.add('appear'))
        return
    }

    items.forEach((item, index) => {
        const timer = window.setTimeout(() => {
            item.classList.add('appear')
        }, Math.min(index * 45, 360))
        revealTimers.push(timer)
    })
}

watch(activeCategory, () => {
    void revealNewProjects()
})

onBeforeUnmount(() => {
    clearRevealTimers()
})

const openPreview = (project: Project) => {
    selectedProject.value = project
    isPreviewOpen.value = true
}

const closePreview = () => {
    isPreviewOpen.value = false
}

const onImageError = (event: Event, project: Project) => {
    if (!project.fallbackSrc) return

    const image = event.target as HTMLImageElement | null
    if (!image || image.dataset.fallbackApplied) return

    image.dataset.fallbackApplied = '1'
    image.src = `/compressed/${project.fallbackSrc}.png`
}
</script>

<template>
    <section id="projects" class="projects-section w-full max-w-[1600px] mx-auto px-6 md:px-10 py-24 sm:py-32">
        <header class="max-w-4xl" data-reveal>
            <p class="label-caps text-primary mb-4">Selected work · 2024–25</p>
            <h2 class="font-display text-headline-lg md:text-display-md text-on-surface text-balance">
                Systems shaped from database to screen.
            </h2>
            <p class="mt-5 max-w-2xl text-body-md text-on-surface-variant">
                A curated collection of full-stack products, commerce experiences, and polished interfaces.
            </p>
        </header>

        <div class="project-toolbar mt-10 flex flex-col gap-5 border-y border-card-border py-5 sm:flex-row sm:items-center sm:justify-between" data-reveal>
            <div
                class="project-filters scrollbar-none flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-card-border bg-surface-container-lowest p-1"
                role="group"
                aria-label="Filter projects by category"
                aria-controls="project-showcase">
                <button
                    v-for="category in categories"
                    :key="category.value"
                    type="button"
                    class="project-filter-button relative min-h-11 cursor-pointer whitespace-nowrap rounded-lg px-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest"
                    :class="activeCategory === category.value
                        ? 'is-active text-on-primary'
                        : 'text-on-surface-variant hover:text-on-surface'"
                    :aria-pressed="activeCategory === category.value"
                    @click="activeCategory = category.value">
                    <span>{{ category.label }}</span>
                </button>
            </div>

            <div class="flex items-center gap-3 text-sm text-on-surface-variant" aria-live="polite" aria-atomic="true">
                <span class="project-count font-mono text-lg font-semibold tabular-nums text-on-surface">
                    {{ String(filteredProjects.length).padStart(2, '0') }}
                </span>
                <span>projects selected</span>
            </div>
        </div>

        <div
            v-if="filteredProjects.length"
            id="project-showcase"
            ref="masonryRef"
            class="project-masonry columns-1 gap-5 sm:columns-2 xl:columns-3"
            aria-label="Selected projects">
            <article
                v-for="(project, index) in filteredProjects"
                :key="project.title"
                data-reveal
                class="project-masonry-card group break-inside-avoid overflow-hidden rounded-2xl border border-card-border bg-surface-container-lowest shadow-card"
                :class="{ 'project-masonry-card-compact': isCompactProject(project) }"
                :style="{ '--reveal-delay': `${(index % 3) * 60}ms` }"
                :aria-labelledby="`project-title-${index}`">
                <div class="project-thumbnail aspect-[16/10]">
                    <button
                        type="button"
                        class="project-image-button group/image absolute inset-0 h-full w-full cursor-pointer border-0 p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        :aria-label="`Open live preview of ${project.title}`"
                        @click="openPreview(project)">
                        <img
                            :src="projectImage(project)"
                            :alt="`${project.title} interface preview`"
                            class="project-thumbnail-image object-contain object-center"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, project)" />

                        <span class="project-image-scrim" aria-hidden="true" />
                        <span v-if="isFeaturedProject(project)" class="project-featured-badge">
                            <UIcon name="material-symbols:star-rounded" class="text-sm" aria-hidden="true" />
                            <span>Featured</span>
                        </span>
                        <span class="project-preview-chip">
                            <UIcon name="material-symbols:visibility-rounded" class="text-base" aria-hidden="true" />
                            <span>Open live preview</span>
                        </span>
                    </button>
                </div>

                <div class="project-card-body">
                    <div class="project-card-meta">
                        <span><strong>{{ String(index + 1).padStart(2, '0') }}</strong> / {{ categoryLabel(project.type) }}</span>
                        <span>{{ project.techs.length }} technologies</span>
                    </div>
                    <h3 :id="`project-title-${index}`" class="project-card-title font-display text-on-surface">
                        {{ project.title }}
                    </h3>
                    <p v-if="project.description" class="project-card-description text-on-surface-variant">
                        {{ project.description }}
                    </p>

                    <ul class="project-tech-list" :aria-label="`${project.title} technologies`">
                        <li v-for="tech in project.techs" :key="tech.title" class="tech-pill">
                            <UIcon :name="tech.icon" class="text-base" aria-hidden="true" />
                            {{ tech.title }}
                        </li>
                    </ul>

                    <div class="project-card-actions">
                        <button type="button" class="btn-primary min-h-11" @click="openPreview(project)">
                            Preview
                            <UIcon name="material-symbols:arrow-outward" class="text-base" aria-hidden="true" />
                        </button>
                        <a
                            :href="project.link"
                            target="_blank"
                            rel="noopener"
                            class="btn-secondary min-h-11"
                            :aria-label="`Open ${project.title} live site`">
                            Visit site
                        </a>
                        <a
                            v-if="project.githubLink"
                            :href="project.githubLink"
                            target="_blank"
                            rel="noopener"
                            class="project-icon-action"
                            :aria-label="`View ${project.title} source on GitHub`">
                            <UIcon name="mdi:github" class="text-xl" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </article>
        </div>

        <div
            v-else
            id="project-showcase"
            class="mt-10 rounded-2xl border border-dashed border-outline-variant bg-surface-container-low px-6 py-16 text-center"
            role="status">
            <p class="font-display text-headline-sm text-on-surface">No projects in this view yet.</p>
            <p class="mt-2 text-body-sm text-on-surface-variant">Choose another category to continue exploring the work.</p>
        </div>

        <a
            :href="GITHUB_URL"
            target="_blank"
            rel="noopener"
            class="project-closing-cta group mt-16 flex min-h-56 flex-col justify-between gap-10 rounded-2xl bg-primary p-7 text-on-primary shadow-card sm:p-10 lg:flex-row lg:items-end"
            data-reveal>
            <div>
                <p class="label-caps text-on-primary/75">More to explore</p>
                <h3 class="mt-4 max-w-3xl font-display text-headline-lg text-balance">
                    The rest is on GitHub.
                </h3>
                <p class="mt-3 max-w-xl text-body-md text-on-primary/80">
                    Experiments, forks, and work in progress.
                </p>
            </div>
            <span class="project-closing-icon inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-on-primary text-primary">
                <UIcon name="mdi:github" class="text-3xl" aria-hidden="true" />
            </span>
        </a>

        <LivePreviewModal
            :is-open="isPreviewOpen"
            :project="selectedProject"
            @close="closePreview" />
    </section>
</template>

<style scoped>
.projects-section {
    --project-ease: cubic-bezier(0.16, 1, 0.3, 1);
}

.scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-none::-webkit-scrollbar {
    display: none;
}

.project-filter-button::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.65rem;
    background: var(--color-primary);
    box-shadow: 0 5px 16px color-mix(in srgb, var(--color-primary) 24%, transparent);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 280ms var(--project-ease);
    pointer-events: none;
}

.project-filter-button.is-active::before {
    transform: scaleX(1);
}

.project-filter-button > * {
    position: relative;
    z-index: 1;
}

.project-count {
    min-width: 2.25rem;
    text-align: right;
}

.project-masonry {
    column-gap: 1.25rem;
    column-fill: balance;
}

.project-masonry-card {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    margin: 0 0 1.25rem;
    break-inside: avoid;
    page-break-inside: avoid;
    transition: transform 300ms var(--project-ease), border-color 300ms ease, box-shadow 300ms ease;
}

.project-masonry-card:hover {
    transform: translateY(-4px);
    border-color: color-mix(in srgb, var(--color-primary) 42%, var(--color-card-border));
    box-shadow: var(--shadow-card-hover);
}

.project-thumbnail {
    position: relative;
    aspect-ratio: 16 / 10;
    margin: 0.75rem 0.75rem 0;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--color-outline-variant) 60%, transparent);
    border-radius: 1rem;
    background: var(--color-surface-container-high);
}

.project-thumbnail-image {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0.75rem;
    object-fit: contain;
    object-position: center;
    transition: transform 700ms var(--project-ease);
}

.project-image-button:hover .project-thumbnail-image,
.project-image-button:focus-visible .project-thumbnail-image {
    transform: scale(1.025);
}

.project-image-scrim {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(18, 14, 12, 0.38), transparent 44%);
    opacity: 0.72;
    transition: opacity 300ms ease;
    pointer-events: none;
}

.project-image-button:hover .project-image-scrim,
.project-image-button:focus-visible .project-image-scrim {
    opacity: 0.92;
}

.project-featured-badge,
.project-preview-chip {
    position: absolute;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-family: var(--font-sans);
    font-weight: 700;
    line-height: 1;
}

.project-featured-badge {
    top: 0.85rem;
    left: 0.85rem;
    border: 1px solid color-mix(in srgb, var(--color-primary) 36%, var(--color-card-border));
    border-radius: 9999px;
    background: color-mix(in srgb, var(--color-primary) 8%, var(--color-surface-container-lowest) 92%);
    color: var(--color-primary);
    padding: 0.42rem 0.68rem;
    font-size: 0.625rem;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    backdrop-filter: blur(8px);
}

.project-preview-chip {
    right: 0.85rem;
    bottom: 0.85rem;
    border: 1px solid color-mix(in srgb, var(--color-on-surface) 12%, transparent);
    border-radius: 9999px;
    background: color-mix(in srgb, var(--color-surface-container-lowest) 90%, transparent);
    color: var(--color-on-surface);
    padding: 0.5rem 0.7rem;
    font-size: 0.68rem;
    letter-spacing: 0.04em;
    box-shadow: 0 8px 22px -14px rgba(18, 14, 12, 0.55);
    backdrop-filter: blur(8px);
}

.project-card-body {
    padding: 1.25rem 1.5rem 1.5rem;
}

.project-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    color: var(--color-on-surface-variant);
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    letter-spacing: 0.06em;
    line-height: 1.4;
    text-transform: uppercase;
}

.project-card-meta strong {
    color: var(--color-primary);
}

.project-card-title {
    margin-top: 0.8rem;
    font-size: 1.5rem;
    line-height: 1.2;
    text-wrap: balance;
}

.project-card-description {
    display: -webkit-box;
    margin-top: 0.65rem;
    overflow: hidden;
    font-size: 0.9375rem;
    line-height: 1.55;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.project-tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin: 1.25rem 0 0;
    padding: 0;
    list-style: none;
}

.project-card-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
    margin-top: 1.25rem;
    padding-top: 1.15rem;
    border-top: 1px solid var(--color-card-border);
}

.project-icon-action {
    display: inline-flex;
    width: 2.75rem;
    min-width: 2.75rem;
    height: 2.75rem;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    border: 1px solid var(--color-card-border);
    border-radius: 9999px;
    background: var(--color-surface-container-lowest);
    color: var(--color-on-surface-variant);
    box-shadow: 0 6px 18px -12px rgba(18, 14, 12, 0.35);
    transition: color 200ms ease, border-color 200ms ease, background-color 200ms ease, transform 200ms var(--project-ease);
}

.project-icon-action:hover {
    border-color: var(--color-primary);
    background: var(--color-primary);
    color: var(--color-on-primary);
    transform: translateY(-2px);
}

.project-icon-action:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
}

.project-masonry-card-compact .project-thumbnail {
    margin: 0.625rem 0.625rem 0;
}

.project-masonry-card-compact .project-card-body {
    padding: 1rem;
}

.project-masonry-card-compact .project-card-title {
    font-size: 1.3rem;
}

.project-masonry-card-compact .project-card-description {
    -webkit-line-clamp: 2;
    font-size: 0.875rem;
}

.project-masonry-card-compact .project-tech-list {
    margin-top: 1rem;
}

.project-masonry-card-compact .project-card-actions {
    margin-top: 1rem;
    padding-top: 1rem;
    gap: 0.5rem;
}

.project-masonry-card-compact .btn-primary,
.project-masonry-card-compact .btn-secondary {
    padding-right: 0.875rem;
    padding-left: 0.875rem;
}

.project-closing-cta {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    transition: transform 300ms var(--project-ease), box-shadow 300ms ease;
}

.project-closing-cta::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: -12rem;
    right: -7rem;
    width: 22rem;
    height: 22rem;
    border: 1px solid color-mix(in srgb, var(--color-on-primary) 22%, transparent);
    border-radius: 9999px;
    box-shadow: 0 0 0 4rem color-mix(in srgb, var(--color-on-primary) 4%, transparent), 0 0 0 8rem color-mix(in srgb, var(--color-on-primary) 3%, transparent);
    transition: transform 600ms var(--project-ease);
}

.project-closing-cta:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px -24px color-mix(in srgb, var(--color-primary) 58%, transparent);
}

.project-closing-cta:hover::after {
    transform: scale(1.08) translate3d(-0.75rem, 0.5rem, 0);
}

.project-closing-cta:hover .project-closing-icon {
    transform: rotate(-8deg) scale(1.05);
}

.project-closing-cta:focus-visible {
    outline: 3px solid var(--color-on-primary);
    outline-offset: 4px;
}

.project-closing-icon {
    transition: transform 360ms var(--project-ease);
}

@media (hover: none) {
    .project-preview-chip {
        transform: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    .project-filter-button::before,
    .project-masonry-card,
    .project-thumbnail-image,
    .project-image-scrim,
    .project-icon-action,
    .project-closing-cta,
    .project-closing-cta::after,
    .project-closing-icon {
        transition: none !important;
        animation: none !important;
    }

    .project-masonry-card:hover,
    .project-icon-action:hover,
    .project-closing-cta:hover,
    .project-closing-cta:hover::after,
    .project-closing-cta:hover .project-closing-icon,
    .project-image-button:hover .project-thumbnail-image,
    .project-image-button:focus-visible .project-thumbnail-image {
        transform: none;
    }
}
</style>
