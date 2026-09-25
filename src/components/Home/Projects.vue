<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import {
    GITHUB_URL,
    PROJECTS,
    PROJECTS_SECTION_CONTENT,
    PROJECT_CATEGORIES,
    type Project,
    type ProjectCategory
} from '@/constants'
import LivePreviewModal from '@/components/Home/LivePreviewModal.vue'
import { applyProjectImageFallback, getProjectImageUrl } from '@/utils/projectImage'

const activeCategory = ref<ProjectCategory>('all')
const tabsRef = ref<HTMLElement | null>(null)
const pillRef = ref<HTMLElement | null>(null)
const countRef = ref<HTMLElement | null>(null)
const selectedProject = ref<Project | null>(null)
const isPreviewOpen = ref(false)
let tabsResizeObserver: ResizeObserver | null = null

const movePill = async () => {
    await nextTick()
    const tabs = tabsRef.value
    const pill = pillRef.value
    if (!tabs || !pill) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        pill.style.display = 'none'
        return
    }

    const activeTab = tabs.querySelector<HTMLElement>(`[data-cat="${activeCategory.value}"]`)
    if (!activeTab) return

    pill.style.display = 'block'
    pill.style.width = `${activeTab.offsetWidth}px`
    pill.style.transform = `translateX(${activeTab.offsetLeft}px)`
}

watch(activeCategory, async () => {
    await nextTick()
    void movePill()

    if (countRef.value && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        countRef.value.classList.remove('count-bump')
        void countRef.value.offsetWidth
        countRef.value.classList.add('count-bump')
    }
})

onMounted(() => {
    void movePill()
    window.addEventListener('resize', movePill)

    if (tabsRef.value) {
        tabsResizeObserver = new ResizeObserver(() => void movePill())
        tabsResizeObserver.observe(tabsRef.value)
    }
})

onUnmounted(() => {
    window.removeEventListener('resize', movePill)
    tabsResizeObserver?.disconnect()
})

const filteredProjects = computed(() => {
    return PROJECTS.filter(project => (
        project.show !== false
        && (activeCategory.value === 'all' || project.type === activeCategory.value)
    ))
})

const categoryLabel = (type: string) => {
    return PROJECT_CATEGORIES.find(category => category.value === type)?.cardLabel ?? type
}

const openPreview = (project: Project) => {
    selectedProject.value = project
    isPreviewOpen.value = true
}

const closePreview = () => {
    isPreviewOpen.value = false
}
</script>

<template>
    <section id="projects" class="projects-section w-full max-w-[1600px] mx-auto px-6 md:px-10 py-24 sm:py-32">
        <header class="max-w-4xl" data-reveal>
            <p class="label-caps text-primary mb-4">{{ PROJECTS_SECTION_CONTENT.eyebrow }}</p>
            <h2 class="font-display text-headline-lg md:text-display-md text-on-surface text-balance">
                {{ PROJECTS_SECTION_CONTENT.heading }}
            </h2>
            <p class="mt-5 max-w-2xl text-body-md text-on-surface-variant">
                {{ PROJECTS_SECTION_CONTENT.description }}
            </p>
        </header>

        <div class="project-toolbar mt-10 flex flex-col gap-5 border-y border-card-border py-5 sm:flex-row sm:items-center sm:justify-between" data-reveal>
            <div
                ref="tabsRef"
                class="filter-tabs project-filters scrollbar-none flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-card-border bg-surface-container-lowest p-1"
                role="group"
                :aria-label="PROJECTS_SECTION_CONTENT.filterAriaLabel"
                aria-controls="project-showcase">
                <span ref="pillRef" class="filter-pill" aria-hidden="true" />
                <button
                    v-for="category in PROJECT_CATEGORIES"
                    :key="category.value"
                    type="button"
                    :data-cat="category.value"
                    class="relative z-10 min-h-11 cursor-pointer whitespace-nowrap rounded-[0.65rem] px-4 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    :class="activeCategory === category.value
                        ? 'text-on-primary'
                        : 'text-on-surface-variant hover:text-on-surface'"
                    :aria-pressed="activeCategory === category.value"
                    @click="activeCategory = category.value">
                    {{ category.label }}
                </button>
            </div>

            <div class="flex items-center gap-3 text-sm text-on-surface-variant" aria-live="polite" aria-atomic="true">
                <span ref="countRef" class="project-count font-mono text-lg font-semibold tabular-nums text-on-surface">
                    {{ String(filteredProjects.length).padStart(2, '0') }}
                </span>
                <span>{{ PROJECTS_SECTION_CONTENT.countLabel }}</span>
            </div>
        </div>

        <div
            v-if="filteredProjects.length"
            id="project-showcase"
            class="project-masonry columns-1 gap-5 sm:columns-2 xl:columns-3"
            :aria-label="PROJECTS_SECTION_CONTENT.showcaseAriaLabel">
            <article
                v-for="(project, index) in filteredProjects"
                :key="project.title"
                data-reveal
                class="project-masonry-card group break-inside-avoid overflow-hidden rounded-2xl border border-card-border bg-surface-container-lowest shadow-card"
                :class="{ 'project-masonry-card-compact': project.grid === 'small' }"
                :style="{ '--reveal-delay': `${(index % 3) * 60}ms` }"
                :aria-labelledby="`project-title-${index}`">
                <div class="project-thumbnail aspect-[16/10]">
                    <button
                        type="button"
                        class="project-image-button group/image absolute inset-0 h-full w-full cursor-pointer border-0 p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        :aria-label="`Open live preview of ${project.title}`"
                        @click="openPreview(project)">
                        <img
                            :src="getProjectImageUrl(project.src)"
                            :alt="`${project.title} interface preview`"
                            class="project-thumbnail-image object-contain object-center"
                            loading="lazy"
                            decoding="async"
                            @error="applyProjectImageFallback($event, project.fallbackSrc)" />

                        <span class="project-image-scrim" aria-hidden="true" />
                        <span v-if="project.featured" class="project-featured-badge">
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
            <p class="font-display text-headline-sm text-on-surface">{{ PROJECTS_SECTION_CONTENT.emptyTitle }}</p>
            <p class="mt-2 text-body-sm text-on-surface-variant">{{ PROJECTS_SECTION_CONTENT.emptyDescription }}</p>
        </div>

        <a
            :href="GITHUB_URL"
            target="_blank"
            rel="noopener"
            class="project-closing-cta group mt-16 flex min-h-56 flex-col justify-between gap-10 rounded-2xl bg-primary p-7 text-on-primary shadow-card sm:p-10 lg:flex-row lg:items-end"
            data-reveal>
            <div>
                <p class="label-caps text-on-primary/75">{{ PROJECTS_SECTION_CONTENT.closingEyebrow }}</p>
                <h3 class="mt-4 max-w-3xl font-display text-headline-lg text-balance">
                    {{ PROJECTS_SECTION_CONTENT.closingHeading }}
                </h3>
                <p class="mt-3 max-w-xl text-body-md text-on-primary/80">
                    {{ PROJECTS_SECTION_CONTENT.closingDescription }}
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
.scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-none::-webkit-scrollbar {
    display: none;
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

@media (hover: none) {
    .project-preview-chip {
        transform: none;
    }
}

</style>
