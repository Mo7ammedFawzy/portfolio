import { ref, onMounted, onUnmounted } from 'vue'
import { ROLE } from '@/constants'

const ROLES = ['Vue.js Developer', 'Java Developer', 'Fullstack Developer'] as const

const TYPING_SPEED = 80
const DELETING_SPEED = 40
const PAUSE_DURATION = 1500

export function useTypewriter() {
    const displayText = ref(ROLE)
    const isTyping = ref(false)
    let timeout: ReturnType<typeof setTimeout> | null = null
    let currentIndex = 0

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function typeText(text: string, onComplete: () => void) {
        let charIndex = 0
        displayText.value = ''

        function typeChar() {
            if (charIndex < text.length) {
                displayText.value = text.slice(0, charIndex + 1)
                charIndex++
                timeout = setTimeout(typeChar, TYPING_SPEED)
            } else {
                onComplete()
            }
        }
        typeChar()
    }

    function deleteText(onComplete: () => void) {
        let charIndex = displayText.value.length

        function deleteChar() {
            if (charIndex > 0) {
                charIndex--
                displayText.value = displayText.value.slice(0, charIndex)
                timeout = setTimeout(deleteChar, DELETING_SPEED)
            } else {
                onComplete()
            }
        }
        deleteChar()
    }

    function cycle() {
        const nextIndex = (currentIndex + 1) % ROLES.length
        currentIndex = nextIndex

        isTyping.value = true
        deleteText(() => {
            timeout = setTimeout(() => {
                typeText(ROLES[nextIndex], () => {
                    isTyping.value = false
                    timeout = setTimeout(cycle, PAUSE_DURATION)
                })
            }, PAUSE_DURATION)
        })
    }

    onMounted(() => {
        if (prefersReducedMotion || ROLES.length <= 1) return
        timeout = setTimeout(cycle, PAUSE_DURATION + 500)
    })

    onUnmounted(() => {
        if (timeout) clearTimeout(timeout)
    })

    return { displayText, isTyping }
}
