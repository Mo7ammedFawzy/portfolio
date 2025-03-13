<script setup lang='ts'>
import { CONTACT } from "~/constants"

</script>

<template>
 <section id='profile' class="min-h-screen pt-28">
  <div class="shape flex items-center gap-3 mb-8" once-in>
   <div class="bg-green-400 shadow shadow-green-400 w-2 h-2 rounded-full" />
   <div class="text-sm">Online.</div>
  </div>
  <div class="text-3xl sm:text-5xl mb-2 font-semibold" once-in>
   Hey, I'm Mohammed
  </div>
  <!--from-blue-600 to-rose-600 to -->
  <div
   class="text-3xl sm:text-5xl font-semibold bg-gradient-to-r from-indigo-600 to-pink-600 inline-block text-transparent bg-clip-text"
   once-in>
   Frontend Developer.
  </div>
  <!-- buttons -->

  <div class="btns_group my-8 flex flex-wrap gap-2 items-center justify-center sm:justify-start" once-in>
   <a :href="btn.link" :target="btn.isMail ? '_self' : '_blank'" v-for="btn in CONTACT" class="link cursor-pointer transition-all hover:scale-110 capitalize hover:bg-white hover:text-black  bg-main px-8 py-3 rounded-full items-center gap-1
    inline-flex ">
    <UIcon :name="btn.icon" />
    <span v-text="btn.title" />
   </a>
  </div>
  <p class="text-sm text-white/50 sm:text-base" once-in>
   experienced
   converting Ul design to large scale -
   websites based on Web standard
   technologies. talents, and areas of
   expertise
  </p>
 </section>
</template>

<style>
.lumb_linear {
 background: linear-gradient(to right, #ffffff7a 0%, #1e1e1e 50%, #1e1e1e 100%);
 filter: blur(112.75px);
}
</style>