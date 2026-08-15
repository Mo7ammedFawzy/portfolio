<script setup lang="ts">
import { CONTACT } from '@/constants'
</script>

<template>
    <footer id="contact" class="bg-surface border-t border-on-surface/10 w-full py-12">
        <div class="container-editorial flex flex-col md:flex-row justify-between items-center gap-2">
            <div class="text-center md:text-left">
                <h2 class="font-display text-headline-sm text-on-surface mb-2">Let's build something together.</h2>
                <p class="font-mono text-xs text-on-surface-variant">© 2024 Mohammed Fawzy. Built for performance.</p>
            </div>
            <div class="flex gap-6 font-mono text-xs text-on-surface-variant">
                <a v-for="contact in CONTACT" :key="contact.title" :href="contact.link"
                    target="_blank" rel="noopener"
                    class="hover:text-primary underline underline-offset-4 transition-colors capitalize"
                    v-text="contact.title" />
            </div>
        </div>
    </footer>
</template>
