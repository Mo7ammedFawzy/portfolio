<script setup lang='ts'>
</script>

<template>
  <section id="profile" class="h-screen flex items-center justify-center">
    <div class="flex flex-col items-center text-center px-4">

      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-tight" once-in>
        Hey, I'm Mohammed
      </h1>

      <h2 once-in
          class="text-3xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-600 inline-block text-transparent bg-clip-text mb-6 leading-tight">
        Software Developer
      </h2>

      <div class="flex flex-wrap gap-4 justify-center mb-8" once-in>
        <a href="https://github.com/Mo7ammedFawzy" target="_blank"
           class="px-4 py-2 md:px-6 md:py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white text-md sm:text-xl transition">GitHub</a>
        <a href="https://www.linkedin.com/in/mohammed-fawzey-4202a4316/" target="_blank"
           class="px-4 py-2 md:px-6 md:py-3  rounded-full bg-[#0A66C2] text-white hover:bg-[#004182] text-lg sm:text-xl transition">LinkedIn</a>
        <a href="mailto:devfawzey@gmail.com"
           class="px-4 py-2 md:px-6 md:py-3  rounded-full bg-gray-800 hover:bg-gray-700 text-white text-lg sm:text-xl transition">Mail</a>
      </div>


      <p once-in class="text-base sm:text-xl lg:text-2xl text-gray-400 max-w-2xl leading-relaxed">
        I build modern frontends with
        <UBadge size="lg" color="green" label="Vue.js"/>
        <br/> and scalable backends with
        <UBadge size="lg" color="orange" label="Java Spring Boot"/>
        .
      </p>
    </div>
  </section>


</template>

<style>
.lumb_linear {
  background: linear-gradient(to right, #ffffff7a 0%, #1e1e1e 50%, #1e1e1e 100%);
  filter: blur(112.75px);
}
</style>