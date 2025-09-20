<template>
  <main id='home-page' class='min-h-screen relative'>
    <HomeLanding class="max-w-5xl mx-auto"/>
    <HomeTimeline v-if="false"/>
    <BaseWrapper class="max-w-2xl">
      <HomeProjects/>
      <HomeTech/>
      <HomeTools/>
    </BaseWrapper>
  </main>
</template>

