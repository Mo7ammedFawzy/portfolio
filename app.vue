<script setup>
const nuxtApp = useNuxtApp()
const { __pageTransitionEnter__ } = useGsap()

nuxtApp.hook("page:finish", () => {
  __pageTransitionEnter__()
})
</script>

<template>
  <NuxtLayout>
    <BaseLoader />
    <NuxtPage />
  </NuxtLayout>
</template>
