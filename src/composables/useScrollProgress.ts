import { useScroll } from '@vueuse/core'
import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useScrollProgress() {
    const { y } = useScroll(window)
    const progress = ref(0)
    const isVisible = ref(false)

    let rafId: number | null = null

    const updateProgress = () => {
        const scrollTop = y.value
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const newProgress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
        progress.value = newProgress
        isVisible.value = scrollTop > 100
        rafId = requestAnimationFrame(updateProgress)
    }

    onMounted(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return
        }
        rafId = requestAnimationFrame(updateProgress)
    })

    onUnmounted(() => {
        if (rafId) {
            cancelAnimationFrame(rafId)
        }
    })

    return {
        progress: computed(() => progress.value),
        isVisible: computed(() => isVisible.value)
    }
}