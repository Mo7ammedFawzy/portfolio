import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin"


gsap.registerPlugin(ScrollToPlugin)
export const useGsap = () => {
    const currentTabIndex = useState('tab-id', () => -3)
    const isAnimate = useState('is-animate', () => false)
    const activeTab = useState('active-tab', () => 'home-page')
    const tl = gsap.timeline();
    const targets = {
        loader: "main#loader",
        landingImg: ".bg-dots"
    }

    const __pageTransitionEnter__ = () => {
        /**
         * sets
         * loader -100
         * img scale(1)
         */


        // sets
        // tl.set(targets.landingImg, {
        //  scale: 1.5,
        //  rotate: 0.001,
        // })
        // loader
        tl.to(targets.loader, {yPercent: -100, ease: "expo.inOut", duration: 1.75, delay: 0.5,})
        // img
        tl.to(targets.landingImg, {
            scale: 1,
            duration: 1.75,
            ease: "expo.inOut"
        }, "<")
        _animateLandingContent_()
    }
    const __pageTransitionLeave__ = () => {
    }
    const ____zoomImgOnScroll____ = () => {
    }
    const _animateLandingContent_ = () => {
        const target = "[once-in]"
        // set first
        // tl.set(target, {
        //  y: '50vh'
        // })
        tl.to(target, {
            y: "0vh",
            // opacity: 1,
            duration: 1.75,
            stagger: .05,
            ease: "expo.inOut", onComplete() {
                __showElementOnScroll__()
                // animateHeaderInicator()
            }
        }, "<")
    }
    const __showElementOnScroll__ = () => {
        const targets: NodeListOf<HTMLElement> = document.querySelectorAll('[fade-scroll]')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('appear')
            })
        }, {root: null, threshold: .1, rootMargin: "0px"})

        targets.forEach((target) => observer.observe(target))

    }
    const ________scrollTo_______ = ({uTarget = 0}: { uTarget: number | string }) => {
        tl.to(window, {scrollTo: uTarget, duration: 1, ease: "power4.inOut"})

    }

    function animateHeaderIndicator(nextActiveTab: string = 'home-page', isResize: boolean = false) {
        return new Promise((resolve, reject) => {
            if (isAnimate.value) {
                return;
            }
            isAnimate.value = true
            const nextTab: NextTab = {
                get html() {
                    return document.querySelector<HTMLDivElement>(`[data-section=${nextActiveTab}]`)
                },
                get index() {
                    return Number(this.html?.dataset.index) ?? 0
                },
                get width() {
                    let DEFAULT_TAB_WIDTH = 80;
                    return this.html?.offsetWidth ?? DEFAULT_TAB_WIDTH
                }
            }
            const indicator = {
                get html(): HTMLDivElement | null {
                    return document.querySelector("#indicator")
                },
                get width(): number {
                    let DEFAULT_INDICATOR_WIDTH = 80;
                    return Number(indicator.html?.offsetWidth) ?? DEFAULT_INDICATOR_WIDTH
                },
                get diff(): number {
                    return (nextTab.width - indicator.width) / 2
                },
                get nextSection(): HTMLElement | null {
                    return document.querySelector(`.head-link[data-section='${nextActiveTab}']`)
                }
            }
            const baseDuration = 1
            const baseEase = "expo.inOut"
            const nextTabIndex = Number(indicator.nextSection?.dataset.index)
            const isLtr = Number(nextTabIndex) - Number(currentTabIndex.value) >= 0
            if (isResize) {
                tl.set("#indicator", {
                    left: 0, right: 'auto'
                })
                tl.to("#indicator", {
                    x: nextTabIndex * nextTab.width + indicator.diff,
                    duration: baseDuration,
                    ease: baseEase
                })
                isAnimate.value = false
                resolve('')
                return;
            }

            const stretchedWidth = indicator.width + Math.abs((nextTabIndex - currentTabIndex.value) * indicator.width) + indicator.diff * 2 * Math.abs((nextTabIndex - currentTabIndex.value));
            const currentOffsetRight = -(4 - currentTabIndex.value) * nextTab.width - indicator.diff
            const currentOffsetLeft = currentTabIndex.value * nextTab.width + indicator.diff
            const transformX = nextTabIndex * nextTab.width + indicator.diff - (!isLtr ? nextTab.width * 4 : 0);

            if (isLtr) {
                tl.set("#indicator", {
                    x: currentOffsetLeft,
                    left: 0, right: 'auto'
                })
            } else {
                tl.set("#indicator", {
                    right: 0, left: 'auto',
                    x: currentOffsetRight
                })
            }
            tl.to(`[data-section] .head-text`, {
                height: 0,
                scale: 0,
                duration: baseDuration - .7,
                ease: baseEase
            }, "<")
            tl.to("#indicator", {
                width: stretchedWidth,
                duration: baseDuration - 0.5,
                ease: baseEase, onComplete() {
                    currentTabIndex.value = nextTabIndex
                }
            }, "<")
            tl.to(`[data-section='${nextActiveTab}'] .head-text`, {
                height: 'auto',
                scale: 1,
                color: "black",
                duration: baseDuration - .7,
                ease: baseEase
            }, "<")
            tl.to(`[data-section] .head-icon`, {
                fill: 'white',
                color: 'white',
                duration: baseDuration - .7,
                ease: baseEase
            }, "<+=.2")
            tl.to(`[data-section='${nextActiveTab}'] .head-icon`, {
                fill: 'black',
                color: 'black',
                duration: baseDuration - .7,
                ease: baseEase
            }, "<")
            tl.to("#indicator", {
                x: transformX,
                duration: baseDuration,
                ease: baseEase,
                onComplete() {
                    activeTab.value = nextActiveTab
                }
            })
            tl.to("#indicator", {
                width: indicator.width,
                duration: baseDuration,
                ease: baseEase
            }, "<")
            const scrollTarget = "#" + indicator.nextSection?.dataset.section
            tl.to(window, {
                scrollTo: scrollTarget, duration: baseDuration,
                ease: baseEase
            }, "<")

            tl.call(() => {
                isAnimate.value = false
            })
            tl.to(`[data-section='${nextActiveTab}'] .head-icon`, {
                color: 'black',
                duration: baseDuration - .7,
                ease: baseEase,
                onComplete() {
                    resolve('')
                }
            })
        })
    }

    interface NextTab {
        html: HTMLDivElement | null,
        index: number,
        width: number
    }


    const changeIndicatorActiveTabOnScroll = (fn: (title: string) => void) => {
        const targets: NodeListOf<HTMLElement> = document.querySelectorAll('section')
        const observer = new IntersectionObserver(useDebounceFn((entries) => {
            entries.forEach((entry: any) => {
                if (!entry.isIntersecting) return;
                fn(entry.target.id);
            })
        }, 250), {root: null, rootMargin: "0px", threshold: 0})

        targets.forEach((target) => observer.observe(target))
    }

    return {
        __pageTransitionEnter__,
        changeIndicatorActiveTabOnScroll,
        __showElementOnScroll__,
        _animateLandingContent_,
        ________scrollTo_______,
        animateHeaderIndicator,
        activeTab
    }

}