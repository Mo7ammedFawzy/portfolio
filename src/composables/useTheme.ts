import { useDark } from '@vueuse/core'

export function useTheme() {
    const isDark = useDark({
        storageKey: 'portfolio-theme',
    })

    const toggleTheme = () => {
        isDark.value = !isDark.value
    }

    return { isDark, toggleTheme }
}