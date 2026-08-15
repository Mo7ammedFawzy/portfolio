<script setup lang="ts">
import { SKILLS_GROUPS } from '@/constants'
</script>

<template>
    <section id="skills" class="container-editorial py-[160px]">
        <h2 class="font-display text-headline-md text-on-surface mb-16 border-b border-on-surface/10 pb-4">Skills &amp; Tools</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div v-for="group in SKILLS_GROUPS" :key="group.title">
                <h4 class="font-mono text-xs uppercase tracking-widest mb-6 text-primary" v-text="group.title" />
                <ul class="font-mono text-code-label text-on-surface space-y-4">
                    <li v-for="skill in group.skills" :key="skill" v-text="skill" />
                </ul>
            </div>
        </div>
    </section>
</template>
