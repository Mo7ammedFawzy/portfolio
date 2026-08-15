<script setup lang="ts">
import { HEADERLINKS } from '@/constants'
</script>

<template>
    <nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-on-surface/10">
        <div class="container-editorial flex justify-between items-center py-2">
            <a href="#home" class="font-display text-headline-sm text-on-surface font-semibold hover:text-primary transition-colors">
                Mohammed Fawzy / MF
            </a>
            <div class="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
                <a v-for="link in HEADERLINKS" :key="link.section" :href="`#${link.section}`"
                    class="text-on-surface-variant hover:text-primary transition-colors" v-text="link.title" />
                <a href="/Mohammed_Fawzy_CV.pdf" target="_blank" rel="noopener"
                    class="btn-primary ml-4 !py-3 !px-6">Resume</a>
            </div>
        </div>
    </nav>
</template>
