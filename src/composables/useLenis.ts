import Lenis from 'lenis'
import { onUnmounted } from 'vue'

export function useLenis() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let lenis: Lenis | null = null

    if (!prefersReducedMotion.matches) {
        lenis = new Lenis({
            autoRaf: true,
            anchors: true,
        })
    }

    onUnmounted(() => {
        lenis?.destroy()
        lenis = null
    })
}
