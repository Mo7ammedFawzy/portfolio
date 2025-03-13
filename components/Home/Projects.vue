<script setup lang='ts'>
import { PROJECTS } from "~/constants"


</script>

<template>
  <section id='projects' class='min-h-screen'>
    <hr class="my-6 border-white/20" fade-scroll />
    <div class="text-2xl mb-4" fade-scroll>Projects</div>
    <!--  -->
    <div class="grid_container">
      <template v-for="prjct in PROJECTS">
        <div v-if="prjct.show !== false" :class="[prjct.grid ?? 'medium']" class="card" fade-scroll>
          <div
            class="img__wrapper group rounded-xl relative w-[90%] h-[90%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <!-- content -->
            <!-- target="__blank" :href="prjct.link" -->
            <div
              class="content md:group-hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/55 md:bg-black/60 z-[1] md:opacity-0 flex flex-col gap-2 items-center justify-center transition-opacity opacity-100">
              <div class="flex flex-row-reverse items-center justify-between gap-2">
                <NuxtLink :to="prjct.link" target="_blank" class="live-demo text- flex items-center">
                  <!-- <span v-text="prjct.title" /> -->
                  <UBadge color="white" size="sm" variant="solid" class="rounded-full border-white">
                    <span v-text="'Demo'" class="text-xs" />
                    <UIcon name="radix-icons:arrow-top-right" size="20" class="text-2xl" />
                  </UBadge>
                </NuxtLink>
                <NuxtLink :to="prjct.githubLink" v-if="prjct.githubLink" target="_blank">
                  <UBadge class="github-link flex items-center gap-1 rounded-full hover:bg-white/10" color="white"
                    variant="outline" :ui="{ variant: { outline: 'ring-white dark:ring-white' } }" size="sm">
                    <span v-text="'Github'" class="text-xs" />
                    <UIcon name="mdi-github" size="20" />
                  </UBadge>
                </NuxtLink>
              </div>
              <div class="techs_used mt-2 flex items-center justify-center gap-2 flex-wrap">
                <template v-for="tag in prjct.techs">
                  <!-- <UTooltip :text="tag.title"> -->
                  <UBadge color="black"
                    class="bg-white text-black dark:bg-white dark:text-black rounded-full flex items-center justify-center gap-1" size="sm">
                    <UIcon :name="tag.icon" class="text-lg" />
                    <span class="" v-text="tag.title" />
                  </UBadge>
                  <!-- </UTooltip> -->
                </template>
              </div>
              <div class="name bg-main-foreground p-2 rounded-full capitalize text-xs">
                <span v-text="prjct.type" />
              </div>
            </div>
            <NuxtImg v-if="true" quality="60" :alt="prjct.title"
              placeholder-class="animate-pulse !w-full !h-full max-w-full" format="webp" loading="lazy" placeholder
              sizes="550px, sm:700px" :src="`/compressed/${prjct.src}.png`"
              class="w-full !bg-slate-700 max-w-none h-full absolute top-0 scale-110 -translate-x-1/2 -translate-y-0 left-1/2 rounded-xl object-top origin-top object-cover" />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style lang="postcss">
.grid_container {
  grid-auto-rows: 10px;
  /* justify-content: center; */
  grid-template-columns: repeat(auto-fill, minmax(269px, 1fr));
  @apply grid gap-3
}

.card {
  @apply bg-main rounded-xl
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

.u-skeleton {
  @apply animate-pulse !w-full !h-full bg-slate-700 !max-w-full
}
</style>