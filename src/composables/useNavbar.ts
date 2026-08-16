import { useScroll } from '@vueuse/core'
import { computed } from 'vue'

const SCROLL_THRESHOLD = 16

export function useNavbar() {
    const { y } = useScroll(window)

    const isScrolled = computed(() => y.value > SCROLL_THRESHOLD)

    return { isScrolled }
}
