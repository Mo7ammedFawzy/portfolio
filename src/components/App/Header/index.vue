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
    <nav class="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-card-border nav-transition"
        :class="isScrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.06)]' : ''">
        <div class="container-editorial flex items-center justify-between h-16">
            <a href="#home" class="font-display text-xl text-on-surface">
                Mohammed <span class="text-primary">Fawzey</span>
            </a>
            <div class="hidden md:flex items-center gap-8">
                <a v-for="link in HEADERLINKS" :key="link.section" :href="`#${link.section}`"
                    :class="['text-sm font-semibold transition-colors py-1 border-b-2',
                        activeSection === link.section
                            ? 'text-primary border-primary'
                            : 'text-on-surface-variant border-transparent hover:text-primary']"
                    v-text="link.title" />
                <button type="button" class="icon-btn !w-10 !h-10" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                    @click="handleToggleTheme">
                    <UIcon :key="themeToggleKey" :name="isDark ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'" class="theme-toggle-icon theme-toggle-icon--spin text-xl" />
                </button>
                <a :href="`mailto:${EMAIL}`" class="btn-primary !px-5 !py-2.5">
                    Let's Talk
                    <UIcon name="material-symbols:arrow-outward" class="text-base" />
                </a>
            </div>
            <button type="button" class="md:hidden text-on-surface -mr-2 p-2" aria-label="Toggle menu" :aria-expanded="menuOpen"
                @click="menuOpen = !menuOpen">
                <UIcon :name="menuOpen ? 'material-symbols:close' : 'material-symbols:menu'" class="text-2xl" />
            </button>
        </div>
        <div v-if="menuOpen" class="md:hidden bg-surface-container-lowest/95 backdrop-blur-md border-t border-card-border">
            <div class="container-editorial py-6 flex flex-col gap-4">
                <div class="flex items-center justify-between">
                    <span class="label-caps text-on-surface-variant">Appearance</span>
                    <button type="button" class="icon-btn !w-10 !h-10" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                        @click="handleToggleTheme">
                        <UIcon :key="themeToggleKey" :name="isDark ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'" class="theme-toggle-icon theme-toggle-icon--spin text-xl" />
                    </button>
                </div>
                <a v-for="link in HEADERLINKS" :key="link.section" :href="`#${link.section}`"
                    :class="['text-sm font-semibold py-1',
                        activeSection === link.section ? 'text-primary' : 'text-on-surface-variant']"
                    v-text="link.title" @click="closeMenu" />
                <a :href="`mailto:${EMAIL}`" class="btn-primary" @click="closeMenu">
                    Let's Talk
                    <UIcon name="material-symbols:arrow-outward" class="text-base" />
                </a>
            </div>
        </div>
    </nav>
</template>
