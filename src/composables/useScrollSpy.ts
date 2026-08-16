import { useScroll } from '@vueuse/core'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

export function useScrollSpy(ids: string[]) {
    const { y } = useScroll(window)
    const offsets = ref<Record<string, number>>({})

    const measure = () => {
        const next: Record<string, number> = {}
        for (const id of ids) {
            const el = document.getElementById(id)
            next[id] = el ? el.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY
        }
        offsets.value = next
    }

    onMounted(() => {
        requestAnimationFrame(() => {
            measure()
            window.addEventListener('resize', measure)
        })
    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', measure)
    })

    const activeSection = computed(() => {
        const threshold = 120
        let current = ids[0]
        for (let i = 1; i < ids.length; i++) {
            const id = ids[i]
            if (offsets.value[id] <= y.value + threshold && offsets.value[id] > offsets.value[current]) {
                current = id
            }
        }
        return current
    })

    return { activeSection }
}
