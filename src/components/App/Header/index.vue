<script setup lang="ts">
import { ref } from 'vue'
import { EMAIL, HEADERLINKS } from '@/constants'
import { useNavbar } from '@/composables/useNavbar'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { useTheme } from '@/composables/useTheme'

const { isScrolled } = useNavbar()
const { activeSection } = useScrollSpy(['home', 'projects', 'about', 'experience', 'skills', 'contact'])
const { isDark, toggleTheme } = useTheme()

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }

const themeToggleKey = ref(0)

function handleToggleTheme() {
    themeToggleKey.value++
    toggleTheme()
}
</script>

<template>
    <nav class="fixed inset-x-0 top-3 z-50 px-4 sm:top-4 sm:px-6" aria-label="Primary">
        <div class="nav-transition mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 rounded-2xl border bg-surface-container-lowest/85 px-3 backdrop-blur-md sm:px-4"
            :class="isScrolled ? 'border-card-border shadow-[0_8px_32px_-12px_rgba(0,0,0,0.25)]' : 'border-transparent'">
            <a href="#home" class="group flex min-w-0 items-center gap-2.5" aria-label="Mohammed Fawzey — home">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary font-display text-sm font-bold text-on-primary shadow-sm transition-transform duration-300 group-hover:-rotate-6">MF</span>
                <span class="truncate font-display text-lg leading-none text-on-surface">
                    Mohammed <span class="text-primary">Fawzey</span>
                </span>
            </a>
            <div class="hidden items-center gap-1 md:flex">
                <a v-for="(link, i) in HEADERLINKS" :key="link.section" :href="`#${link.section}`"
                    :aria-current="activeSection === link.section ? 'page' : undefined"
                    :class="['flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold transition-colors',
                        activeSection === link.section
                            ? 'bg-primary/10 text-primary'
                            : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface']">
                    <span class="font-mono text-[10px] font-bold" :class="activeSection === link.section ? 'text-primary' : 'text-on-surface-variant/60'">{{ String(i + 1).padStart(2, '0') }}</span>
                    <span v-text="link.title" />
                </a>
                <span aria-hidden="true" class="mx-1 h-5 w-px bg-card-border" />
                <button type="button" class="icon-btn !h-10 !w-10" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                    @click="handleToggleTheme">
                    <UIcon :key="themeToggleKey" :name="isDark ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'" class="theme-toggle-icon theme-toggle-icon--spin text-xl" />
                </button>
                <a :href="`mailto:${EMAIL}`" class="btn-primary group !px-5 !py-2.5">
                    Let's Talk
                    <UIcon name="material-symbols:arrow-outward" class="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
            </div>
            <button type="button" class="p-2 text-on-surface md:hidden" aria-label="Toggle menu" :aria-expanded="menuOpen"
                @click="menuOpen = !menuOpen">
                <UIcon :name="menuOpen ? 'material-symbols:close' : 'material-symbols:menu'" class="text-2xl" />
            </button>
        </div>
        <div v-if="menuOpen" class="mx-auto mt-2 max-w-5xl rounded-2xl border border-card-border bg-surface-container-lowest/95 p-4 shadow-xl backdrop-blur-md md:hidden">
            <div class="flex items-center justify-between px-2 pb-3">
                <span class="label-caps text-on-surface-variant">Appearance</span>
                <button type="button" class="icon-btn !h-10 !w-10" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                    @click="handleToggleTheme">
                    <UIcon :key="themeToggleKey" :name="isDark ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'" class="theme-toggle-icon theme-toggle-icon--spin text-xl" />
                </button>
            </div>
            <a v-for="(link, i) in HEADERLINKS" :key="link.section" :href="`#${link.section}`"
                :class="['flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold',
                    activeSection === link.section ? 'bg-primary/10 text-primary' : 'text-on-surface-variant']"
                @click="closeMenu">
                <span class="font-mono text-[11px] font-bold text-primary">{{ String(i + 1).padStart(2, '0') }}</span>
                <span v-text="link.title" />
            </a>
            <a :href="`mailto:${EMAIL}`" class="btn-primary mt-3 w-full" @click="closeMenu">
                Let's Talk
                <UIcon name="material-symbols:arrow-outward" class="text-base" />
            </a>
        </div>
    </nav>
</template>
