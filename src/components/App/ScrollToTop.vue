<script setup lang="ts">
import { computed } from 'vue'
import { useScroll } from '@vueuse/core'
import { scrollToTop } from '@/composables/useLenis'

const SHOW_AFTER = 400

const { y } = useScroll(window)
const show = computed(() => y.value > SHOW_AFTER)
</script>

<template>
    <Transition name="scroll-top">
        <button v-if="show" type="button" class="scroll-top-btn fixed bottom-6 right-6 z-40" aria-label="Back to top"
            @click="scrollToTop">
            <UIcon name="material-symbols:arrow-upward" class="text-lg" />
        </button>
    </Transition>
</template>

<style scoped>
.scroll-top-enter-active,
.scroll-top-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
    opacity: 0;
    transform: translateY(8px);
}
</style>