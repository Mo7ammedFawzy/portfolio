export function getProjectImageUrl(src: string): string {
    if (!src) return ''
    return src.startsWith('http') ? src : `/compressed/${src}.png`
}

export function applyProjectImageFallback(event: Event, fallbackSrc?: string): void {
    if (!fallbackSrc) return

    const image = event.target as HTMLImageElement | null
    if (!image || image.dataset.fallbackApplied) return

    image.dataset.fallbackApplied = '1'
    image.src = getProjectImageUrl(fallbackSrc)
}
