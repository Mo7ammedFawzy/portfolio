<script setup lang='ts'>
import { STACKS } from "~/constants"

</script>

<template>
 <section id='techs' class='min-h-screen'>
  <hr class="my-6 border-white/20" fade-scroll />
  <div class="text-2xl mb-4" fade-scroll>Techs</div>
  <div class="grid gap-3 grid-cols-[repeat(auto-fill,minmax(145px,1fr))]">
   <!--  -->
   <div fade-scroll
    class="box hover:bg-main-foreground transition-colors cursor-pointer aspect-square bg-main rounded-lg p-3 capitalize flex items-center justify-center flex-col gap-3"
    v-for="tech in STACKS">
    <UIcon :name="tech.icon" class="text-4xl" />
    <div class="text-base" v-text="tech.title" />
   </div>
   <!--  -->
  </div>
 </section>
</template>