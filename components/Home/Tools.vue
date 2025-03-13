<script setup lang='ts'>
import { TOOLS } from "~/constants"


</script>

<template>
  <section id='tools' class='min-h-screen'>
    <hr class="my-6 border-white/20" fade-scroll/>
    <div class="text-2xl mb-4" fade-scroll>Tools</div>
    <div class="grid gap-3 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
      <!--  -->
      <div fade-scroll
        class="box hover:bg-main-foreground transition-colors cursor-pointer aspect-square bg-main rounded-lg p-3 capitalize flex items-center justify-center flex-col gap-3"
        v-for="tool in TOOLS">
        <UIcon :name="tool.icon" class="text-4xl" />
        <div class="text-base" v-text="tool.title" />
      </div>
      <!--  -->
    </div>
  </section>
</template>