import { onBeforeUnmount, onMounted, type Ref } from 'vue'

const revealSelector = '[data-reveal]'

export function useReveal(root: Ref<HTMLElement | null>) {
    let intersectionObserver: IntersectionObserver | null = null
    let mutationObserver: MutationObserver | null = null
    let reducedMotionQuery: MediaQueryList | null = null
    let handleReducedMotionChange: (() => void) | null = null
    const registeredElements = new Set<Element>()
    const revealedElements = new Set<Element>()

    const reveal = (element: Element) => {
        if (revealedElements.has(element)) return

        revealedElements.add(element)
        element.classList.add('appear')
        intersectionObserver?.unobserve(element)
    }

    const register = (element: Element) => {
        if (registeredElements.has(element)) return

        registeredElements.add(element)

        if (!intersectionObserver || reducedMotionQuery?.matches || element.classList.contains('appear')) {
            reveal(element)
            return
        }

        intersectionObserver.observe(element)
    }

    const registerWithin = (node: Node) => {
        if (!(node instanceof Element)) return

        if (node.matches(revealSelector)) {
            register(node)
        }

        node.querySelectorAll<HTMLElement>(revealSelector).forEach(register)
    }

    const unregisterWithin = (node: Node) => {
        if (!(node instanceof Element)) return

        const elements = [
            node,
            ...node.querySelectorAll<HTMLElement>(revealSelector),
        ]

        elements.forEach(element => {
            intersectionObserver?.unobserve(element)
            registeredElements.delete(element)
            revealedElements.delete(element)
        })
    }

    onMounted(() => {
        const container = root.value
        if (!container) return

        reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

        if ('IntersectionObserver' in window) {
            intersectionObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && registeredElements.has(entry.target)) {
                        reveal(entry.target)
                    }
                })
            }, {
                rootMargin: '0px 0px -12% 0px',
                threshold: 0.15,
            })
        }

        mutationObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(registerWithin)
                mutation.removedNodes.forEach(unregisterWithin)
            })
        })
        mutationObserver.observe(container, {
            childList: true,
            subtree: true,
        })

        handleReducedMotionChange = () => {
            if (reducedMotionQuery?.matches) {
                registeredElements.forEach(reveal)
            }
        }
        reducedMotionQuery.addEventListener?.('change', handleReducedMotionChange)

        registerWithin(container)
    })

    onBeforeUnmount(() => {
        intersectionObserver?.disconnect()
        mutationObserver?.disconnect()

        if (handleReducedMotionChange) {
            reducedMotionQuery?.removeEventListener?.('change', handleReducedMotionChange)
        }

        registeredElements.clear()
        revealedElements.clear()
        intersectionObserver = null
        mutationObserver = null
        reducedMotionQuery = null
        handleReducedMotionChange = null
    })
}
