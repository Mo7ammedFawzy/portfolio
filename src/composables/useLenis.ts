import Lenis from 'lenis'

let lenis: Lenis | null = null

export function useLenis() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!lenis && !prefersReducedMotion.matches) {
        lenis = new Lenis({
            autoRaf: true,
            anchors: true,
        })
    }

    return lenis
}

export function scrollToTop() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (lenis) {
        lenis.scrollTo(0, prefersReducedMotion.matches ? { immediate: true } : undefined)
        return
    }

    window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' })
}