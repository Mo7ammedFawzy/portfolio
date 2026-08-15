<script setup lang="ts">
import { PROJECTS } from '@/constants'
</script>

<template>
  <section id='projects' class='min-h-screen'>
    <hr class="my-6 border-white/20" fade-scroll />
    <div class="text-2xl mb-4" fade-scroll>Projects</div>
    <div class="grid_container">
      <template v-for="project in PROJECTS">
        <div v-if="project.show !== false" :class="[project.grid ?? 'medium']" class="card" fade-scroll>
          <div
              class="group rounded-xl relative w-[90%] h-[90%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <div
              class="content md:group-hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/55 md:bg-black/60 z-[1] md:opacity-0 flex flex-col gap-2 items-center justify-center transition-opacity opacity-100">
              <div class="flex flex-row-reverse items-center justify-between gap-2">
                <a :href="project.link" target="_blank" rel="noopener" class="live-demo text- flex items-center">
                  <UBadge color="neutral" size="sm" variant="solid" class="rounded-full border-white bg-white text-black">
                    <span v-text="'Demo'" class="text-xs" />
                    <UIcon name="radix-icons:arrow-top-right" size="20" class="text-2xl" />
                  </UBadge>
                </a>
                <a :href="project.githubLink" v-if="project.githubLink" target="_blank" rel="noopener">
                  <UBadge class="github-link flex items-center gap-1 rounded-full border-white hover:bg-white/10"
                    color="neutral" variant="outline" size="sm">
                    <span v-text="'Github'" class="text-xs" />
                    <UIcon name="mdi:github" size="20" />
                  </UBadge>
                </a>
              </div>
              <div class="techs_used mt-2 flex items-center justify-center gap-2 flex-wrap">
                <template v-for="tag in project.techs">
                  <UBadge color="neutral" variant="solid"
                    class="rounded-full bg-white text-black flex items-center justify-center gap-1" size="sm">
                    <UIcon :name="tag.icon" class="text-lg" />
                    <span class="" v-text="tag.title" />
                  </UBadge>
                </template>
              </div>
              <div class="name bg-main-foreground p-2 rounded-full capitalize text-xs">
                <span v-text="project.type"/>
              </div>
            </div>
            <img :src="`/compressed/${project.src}.png`" :alt="project.title"
              loading="lazy" decoding="async"
              class="w-full bg-slate-700 max-w-none h-full absolute top-0 scale-110 -translate-x-1/2 left-1/2 rounded-xl object-top origin-top object-cover" />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style lang="postcss">
.grid_container {
  grid-auto-rows: 10px;
  grid-template-columns: repeat(auto-fill, minmax(269px, 1fr));
  display: grid;
  gap: 0.75rem;
}

.card {
  background-color: var(--color-main);
  border-radius: 0.75rem;
}

.small {
  grid-row-end: span 14;
}

.medium {
  grid-row-end: span 16;
}

.large {
  grid-row-end: span 18;
}

.x-large {
  grid-row-end: span 20;
}

.xx-large {
  grid-row-end: span 24;
}
</style>
