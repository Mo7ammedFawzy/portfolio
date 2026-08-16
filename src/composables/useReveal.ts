import { useIntersectionObserver } from '@vueuse/core'
import { onMounted, type Ref } from 'vue'

export function useReveal(root: Ref<HTMLElement | null>) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    onMounted(() => {
        const container = root.value
        if (!container) return

        const elements = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]'))
        if (elements.length === 0) return

        if (prefersReducedMotion.matches) {
            elements.forEach(el => el.classList.add('appear'))
            return
        }

        elements.forEach((el) => {
            const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    el.classList.add('appear')
                    stop()
                }
            }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 })
        })
    })
}
