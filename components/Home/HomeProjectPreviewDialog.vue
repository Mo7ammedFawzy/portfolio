<script setup lang="ts">
defineProps<{
  link: string;
}>()

const model = defineModel({default: false, type: Boolean})
</script>
<template>
  <UDrawer
      title="products"
      as="div"
      description="products"
      v-model:open="model"
      should-scale-background set-background-color-on-scale
      :ui="{content:'bg-background ui-ring pt-0',
      header:'flex justify-end items-center',
      body:'max-h-full pt-0 min-h-[75vh] md:min-h-fit overflow-y-auto ui-scrollbar-y'}">
    <template #header>
      <UButton color="gray" class="rounded-full" variant="ghost" icon="i-lucide-x" @click="model = false"/>
    </template>
    <template #body>
      body
      />
    </template>
  </UDrawer>
</template>
