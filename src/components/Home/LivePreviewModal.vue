<script setup lang="ts">
import { ref, computed, nextTick, watch, onMounted, onUnmounted } from 'vue'
import type { Project } from '@/constants'
import { applyProjectImageFallback, getProjectImageUrl } from '@/utils/projectImage'

const props = defineProps<{
    project: Project | null
    isOpen: boolean
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

type ViewportMode = 'desktop' | 'tablet' | 'mobile'

const viewportMode = ref<ViewportMode>('desktop')
const iframeRef = ref<HTMLIFrameElement | null>(null)
const isLoading = ref(true)
const iframeFailed = ref(false)
const iframeKey = ref(0)
const modalRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
let previouslyFocusedElement: HTMLElement | null = null

const viewportWidths: Record<ViewportMode, string> = {
    desktop: 'w-full max-w-full',
    tablet: 'w-[768px] max-w-full',
    mobile: 'w-[375px] max-w-full'
}

const currentWidthClass = computed(() => viewportWidths[viewportMode.value])

const refreshIframe = () => {
    isLoading.value = true
    iframeFailed.value = false
    iframeKey.value++
}

const onIframeLoaded = () => {
    isLoading.value = false
}

const onIframeError = () => {
    isLoading.value = false
    iframeFailed.value = true
}

const getFocusableElements = () => {
    const modal = modalRef.value
    if (!modal) return []

    return Array.from(modal.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(element => element.offsetParent !== null)
}

// Timeout detection for frame blocking
let timeoutId: ReturnType<typeof setTimeout> | null = null

watch(() => props.isOpen, (open) => {
    if (open) {
        previouslyFocusedElement = document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null

        isLoading.value = true
        iframeFailed.value = false
        iframeKey.value++
        viewportMode.value = 'desktop'

        void nextTick(() => closeButtonRef.value?.focus())

        if (timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            // If still loading after 8s, offer fallback option
            if (isLoading.value) {
                isLoading.value = false
                iframeFailed.value = true
            }
        }, 8000)
    } else {
        if (timeoutId) clearTimeout(timeoutId)
        const elementToRestore = previouslyFocusedElement
        void nextTick(() => elementToRestore?.focus())
        previouslyFocusedElement = null
    }
})

const handleKeydown = (e: KeyboardEvent) => {
    if (!props.isOpen) return

    if (e.key === 'Escape') {
        emit('close')
        return
    }

    if (e.key !== 'Tab') return

    const focusableElements = getFocusableElements()
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    const activeElement = document.activeElement

    if (e.shiftKey && (activeElement === firstElement || !modalRef.value?.contains(activeElement))) {
        e.preventDefault()
        lastElement.focus()
        return
    }

    if (!e.shiftKey && activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    if (timeoutId) clearTimeout(timeoutId)
})
</script>

<template>
    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="isOpen && project" class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6" data-lenis-prevent>
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" @click="emit('close')" />

                <!-- Modal Window -->
                <div
                    ref="modalRef"
                    role="dialog"
                    aria-modal="true"
                    :aria-label="`Live preview of ${project.title}`"
                    class="relative w-full max-w-6xl h-[92vh] max-h-[850px] bg-surface-container-lowest rounded-2xl shadow-2xl border border-card-border flex flex-col overflow-hidden z-10">
                    <!-- Browser Top Bar -->
                    <div class="px-4 py-3 bg-surface border-b border-card-border flex items-center justify-between gap-3 shrink-0">
                        <!-- Traffic Lights & Title -->
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                                <span class="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                                <span class="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                                <span class="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                            </div>
                            <div class="hidden sm:flex items-center gap-2 text-xs font-semibold text-on-surface truncate">
                                <UIcon name="material-symbols:shield-outline" class="text-primary text-sm shrink-0" />
                                <span class="truncate">{{ project.title }}</span>
                            </div>
                        </div>

                        <!-- Simulated Address Bar -->
                        <div class="flex-1 max-w-lg mx-2 bg-surface-container-high/70 hover:bg-surface-container-high transition-colors rounded-lg px-3 py-1.5 flex items-center justify-between gap-2 border border-card-border/50">
                            <div class="flex items-center gap-2 min-w-0 flex-1">
                                <UIcon name="material-symbols:lock" class="text-xs text-on-surface-variant shrink-0" />
                                <span class="text-xs font-mono text-on-surface-variant truncate select-all">{{ project.link }}</span>
                            </div>
                            <button
                                type="button"
                                aria-label="Reload live preview"
                                @click="refreshIframe"
                                class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                title="Reload preview">
                                <UIcon name="material-symbols:refresh" class="text-sm" :class="{ 'animate-spin': isLoading }" />
                            </button>
                        </div>

                        <!-- Viewport Switcher & Actions -->
                        <div class="flex items-center gap-1.5 shrink-0">
                            <!-- Viewport toggles -->
                            <div class="hidden md:flex items-center bg-surface-container-high/60 rounded-lg p-0.5 border border-card-border/40">
                                <button
                                    type="button"
                                    aria-label="Show desktop preview"
                                    :aria-pressed="viewportMode === 'desktop'"
                                    @click="viewportMode = 'desktop'"
                                    :class="viewportMode === 'desktop' ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold' : 'text-on-surface-variant hover:text-on-surface'"
                                    class="flex h-9 items-center gap-1 rounded-md px-2 text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    title="Desktop View">
                                    <UIcon name="material-symbols:desktop-windows-outline" class="text-base" aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Show tablet preview"
                                    :aria-pressed="viewportMode === 'tablet'"
                                    @click="viewportMode = 'tablet'"
                                    :class="viewportMode === 'tablet' ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold' : 'text-on-surface-variant hover:text-on-surface'"
                                    class="flex h-9 items-center gap-1 rounded-md px-2 text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    title="Tablet View (768px)">
                                    <UIcon name="material-symbols:tablet-mac-outline" class="text-base" aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Show mobile preview"
                                    :aria-pressed="viewportMode === 'mobile'"
                                    @click="viewportMode = 'mobile'"
                                    :class="viewportMode === 'mobile' ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold' : 'text-on-surface-variant hover:text-on-surface'"
                                    class="flex h-9 items-center gap-1 rounded-md px-2 text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    title="Mobile View (375px)">
                                    <UIcon name="material-symbols:smartphone-outline" class="text-base" aria-hidden="true" />
                                </button>
                            </div>

                            <!-- Open in new tab -->
                            <a :href="project.link" target="_blank" rel="noopener"
                                :aria-label="`Open ${project.title} in a new tab`"
                                class="inline-flex min-h-11 items-center gap-1 rounded-lg bg-primary/10 px-3 text-xs font-medium text-primary transition-colors hover:bg-primary/20 hover:text-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                title="Open in new tab">
                                <span class="hidden sm:inline">Open Site</span>
                                <UIcon name="material-symbols:open-in-new" class="text-sm" />
                            </a>

                            <!-- Close Button -->
                            <button
                                ref="closeButtonRef"
                                type="button"
                                aria-label="Close live preview"
                                @click="emit('close')"
                                class="inline-flex h-11 w-11 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                title="Close (Esc)">
                                <UIcon name="material-symbols:close" class="text-lg" />
                            </button>
                        </div>
                    </div>

                    <!-- Viewport Content Stage -->
                    <div class="flex-1 bg-surface-container-high overflow-auto flex items-center justify-center p-2 sm:p-4 relative">
                        <!-- Loading State Overlay -->
                        <div v-if="isLoading" class="absolute inset-0 bg-surface/80 backdrop-blur-xs flex flex-col items-center justify-center gap-3 z-20">
                            <UIcon name="svg-spinners:90-ring-with-bg" class="text-3xl text-primary" />
                            <p class="text-xs font-medium text-on-surface-variant">Connecting live preview...</p>
                        </div>

                        <!-- Iframe Box -->
                        <div v-show="!iframeFailed"
                            :class="[currentWidthClass, 'h-full transition-all duration-300 bg-white rounded-xl shadow-lg border border-card-border overflow-hidden relative']">
                            <iframe
                                ref="iframeRef"
                                :key="iframeKey"
                                :src="project.link"
                                class="w-full h-full border-0 bg-white"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                @load="onIframeLoaded"
                                @error="onIframeError" />
                        </div>

                        <!-- Fallback Screen when iframe is blocked by CSP / X-Frame-Options -->
                        <div v-if="iframeFailed" class="w-full max-w-2xl bg-surface-container-lowest border border-card-border rounded-2xl p-6 md:p-8 text-center shadow-lg my-auto">
                            <div class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                                <UIcon name="material-symbols:lock-outline" class="text-3xl" />
                            </div>
                            <h3 class="font-display text-headline-sm text-on-surface mb-2">Live Preview Restricted</h3>
                            <p class="text-body-sm text-on-surface-variant max-w-md mx-auto mb-6">
                                <strong>{{ project.title }}</strong> enforces browser security policies that prevent direct iframe embedding. You can view the full application directly.
                            </p>

                            <!-- Screenshot preview preview -->
                            <div class="aspect-[16/10] rounded-xl overflow-hidden border border-card-border mb-6 shadow-xs bg-surface-container-high">
                                <img
                                    :src="getProjectImageUrl(project.src)"
                                    :alt="project.title"
                                    class="h-full w-full object-contain object-center"
                                    @error="applyProjectImageFallback($event, project.fallbackSrc)" />
                            </div>

                            <div class="flex items-center justify-center gap-3">
                                <a :href="project.link" target="_blank" rel="noopener" class="btn-primary">
                                    Launch Live Website
                                    <UIcon name="material-symbols:arrow-outward" class="text-base" />
                                </a>
                                <a v-if="project.githubLink" :href="project.githubLink" target="_blank" rel="noopener" class="btn-secondary">
                                    <UIcon name="mdi:github" class="text-lg" />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}
</style>
