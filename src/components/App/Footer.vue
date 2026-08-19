<script setup lang="ts">
import { CONTACT, HEADERLINKS, SITE_NAME } from '@/constants'
</script>

<template>
    <footer class="bg-surface border-t border-card-border py-16">
        <div class="container-editorial grid md:grid-cols-3 gap-10">
            <div>
                <a href="#home" class="font-display text-xl text-on-surface">
                    Mohammed <span class="text-primary">Fawzey</span>
                </a>
                <p class="mt-4 text-body-sm text-on-surface-variant max-w-xs">
                    Fullstack Java Developer building modern, maintainable web applications with Vue.js and Spring Boot.
                </p>
                <p class="mt-6 label-caps text-on-surface-variant">© 2025 {{ SITE_NAME }}</p>
            </div>
            <div>
                <h3 class="label-caps text-on-surface mb-5">Navigation</h3>
                <div class="grid grid-cols-2 gap-x-6 gap-y-3">
                    <a v-for="link in HEADERLINKS" :key="link.section" :href="`#${link.section}`"
                        class="link-underline text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                        v-text="link.title" />
                </div>
            </div>
            <div>
                <h3 class="label-caps text-on-surface mb-5">Let's Connect</h3>
                <div class="flex items-center gap-3">
                    <a v-for="contact in CONTACT" :key="contact.title" :href="contact.link"
                        :target="contact.isMail ? undefined : '_blank'" :rel="contact.isMail ? undefined : 'noopener'"
                        class="icon-btn" :aria-label="contact.title">
                        <UIcon :name="contact.icon" class="text-lg" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
