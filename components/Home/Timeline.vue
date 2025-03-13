<script setup lang='ts'>
import { TIMELINE } from "~/constants"


</script>

<template>
 <section id='timeline' class='pb-12 min-h-screen'>
  <hr class="mt-12 mb-6 border-white/20" fade-scroll />
  <div class="text-2xl mb-14 md:mb-4" fade-scroll>My Timeline</div>
  <div class="timeline_wrapper relative flex items-center md:justify-center">
   <ul class="relative md:w-1/2 h-full top-0 md:left-1/2 ms-4 md:ms-0 md:-translate-x-1/2">
    <div class="absolute h-full w-[1px] bg-white left-0 top-0" fade-scroll />
    <li fade-scroll v-for="(item, index) in TIMELINE" class="ms-6 relative"
     :class="{ 'md:right-full md:text-right md:me-6': item.isLeft, 'mb-12': index !== TIMELINE.length - 1 }">
     <!-- w-1/2 + ms 6 + 3/2 -->
     <div class="dot w-3 aspect-square bg-white absolute -left-[30px] rounded-full top-0"
      :class="{ 'md:-right-[30px] md:!left-auto': item.isLeft }" />
     <div v-text="item.date" class="text-white/70 relative -translate-y-1 text-xs md:text-sm" />
     <div v-html="item.text" class="text-sm md:text-base [&>a]:text-indigo-600" />
    </li>
   </ul>
  </div>
 </section>
</template>