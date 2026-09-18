import { onMounted, onUnmounted, type Ref } from 'vue'

/**
 * Subtle magnetic pull for focal CTAs (max 3px).
 * Compositor-only (transform), disabled on touch / reduced-motion.
 */
export function useMagnetic(target: Ref<HTMLElement | null>, strength = 3) {
    let el: HTMLElement | null = null
    let raf = 0

    const onMove = (e: PointerEvent) => {
        if (!el || e.pointerType === 'touch') return
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left - r.width / 2) / (r.width / 2)
        const y = (e.clientY - r.top - r.height / 2) / (r.height / 2)
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
            if (el) el.style.transform = `translate3d(${(x * strength).toFixed(2)}px, ${(y * strength).toFixed(2)}px, 0)`
        })
    }

    const onLeave = () => {
        cancelAnimationFrame(raf)
        if (el) el.style.transform = 'translate3d(0, 0, 0)'
    }

    onMounted(() => {
        el = target.value
        if (!el) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        if (window.matchMedia('(hover: none)').matches) return
        el.classList.add('btn-magnetic')
        el.addEventListener('pointermove', onMove)
        el.addEventListener('pointerleave', onLeave)
    })

    onUnmounted(() => {
        cancelAnimationFrame(raf)
        el?.removeEventListener('pointermove', onMove)
        el?.removeEventListener('pointerleave', onLeave)
    })
}
