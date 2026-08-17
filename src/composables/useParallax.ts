import { useRafFn, useScroll } from '@vueuse/core'
import type { Ref } from 'vue'

export function useParallax(layer: Ref<HTMLElement | null>, speed = 0.06) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
    }

    const { y } = useScroll(window)

    useRafFn(() => {
        const el = layer.value
        if (!el) return
        el.style.transform = `translate3d(0, ${Math.round(-y.value * speed)}px, 0)`
    })
}