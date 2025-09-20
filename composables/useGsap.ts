import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin"
import {DEFAULT_INDICATOR_SIZE} from "~/constants";


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
  const _animateLandingContent_ = () => {
    const target = "[once-in]"
    tl.to(target, {
      y: "0vh",
      // opacity: 1,
      duration: 1.75,
      stagger: .05,
      ease: "expo.inOut", onComplete() {
        __showElementOnScroll__()
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


  function modifyIndicatorWidthIfNeeded(indicatorSize: Ref<number>) {
    if (!indicatorSize.value)
      return
    const header = document.getElementById("header")
    if (!header)
      return;
    const shouldMinimizeIndicator = header.offsetWidth <= 383;
    const smallIndicatorSize = DEFAULT_INDICATOR_SIZE - 20;
    if (shouldMinimizeIndicator && indicatorSize.value == smallIndicatorSize)
      return;
    else if (!shouldMinimizeIndicator && indicatorSize.value == DEFAULT_INDICATOR_SIZE)
      return;
    indicatorSize.value = shouldMinimizeIndicator ? smallIndicatorSize : DEFAULT_INDICATOR_SIZE
    if (indicatorSize.value)
      tl.to("#indicator", {
        width: indicatorSize.value + "px",
        duration: 1,
        ease: "expo.inOut"
      })
  }

  function animateHeaderIndicator({nextSectionTitle = "home-page", isResize = false, indicatorSize}: {
    indicatorSize: Ref<number>,
    nextSectionTitle?: string,
    isResize?: boolean
  }) {
    // if header width is less than 360px make indicator width to 60px
    return new Promise((resolve) => {
      if (isAnimate.value) {
        return;
      }
      isAnimate.value = true
      modifyIndicatorWidthIfNeeded(indicatorSize)

      const DEFAULT_TAB_WIDTH = 80;
      const tab: Tab = {
        get html() {
          return document.querySelector<HTMLDivElement>(`[data-section=${nextSectionTitle}]`)
        },
        get width() {
          return this.html?.offsetWidth ?? DEFAULT_TAB_WIDTH
        },
        get currentIndex() {
          return currentTabIndex.value
        },
        get nextIndex() {
          return Number(this.html?.dataset.index) ?? 0
        }
      }
      const indicator = {
        get html(): HTMLDivElement | null {
          return document.querySelector("#indicator")
        },
        get width(): number {
          return indicatorSize.value
        },
        get diff(): number {
          return (indicator.width - tab.width) / 2
        },
        get nextSection(): HTMLElement | null {
          return document.querySelector(`.head-link[data-section='${nextSectionTitle}']`)
        }
      }
      const baseDuration = 1
      const baseEase = "expo.inOut"
      const isLtr = Number(tab.nextIndex) - Number(tab.currentIndex) >= 0
      const stretchedWidth = indicator.width + Math.abs((tab.nextIndex - tab.currentIndex) * indicator.width) - indicator.diff * 2 * Math.abs((tab.nextIndex - tab.currentIndex));
      let numberOfLinks = 3;
      const currentOffset = (isLtr ? +1 : -1) * tab.width * (isLtr ? tab.currentIndex : numberOfLinks - tab.currentIndex) + (!isLtr ? +1 : -1) * indicator.diff
      const transformX = (isLtr ? +1 : -1) * tab.width * (isLtr ? tab.nextIndex : numberOfLinks - tab.nextIndex) + (!isLtr ? +1 : -1) * indicator.diff

      if (isResize) {
        tl.set("#indicator", {
          left: isLtr ? 0 : "auto", right: isLtr ? 'auto' : 0
        })
        tl.to("#indicator", {
          x: currentOffset,
          duration: baseDuration,
          ease: baseEase
        })
        isAnimate.value = false
        resolve('')
        return;
      }

      tl.set("#indicator", {
        x: currentOffset,
        left: isLtr ? 0 : "auto", right: isLtr ? 'auto' : 0
      })

      tl.to(`[data-section] .head-text`, {
        height: 0,
        scale: 0,
        paddingBottom: "0px",
        duration: baseDuration - .7,
        ease: baseEase
      }, "<")
      tl.to("#indicator", {
        width: stretchedWidth,
        duration: baseDuration - 0.5,
        ease: baseEase, onComplete() {
          currentTabIndex.value = tab.nextIndex
        }
      }, "<")
      tl.to(`[data-section='${nextSectionTitle}'] .head-text`, {
        height: 'auto',
        scale: 1,
        paddingBottom: "8px",
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
      tl.to(`[data-section='${nextSectionTitle}'] .head-icon`, {
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
          activeTab.value = nextSectionTitle
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
      tl.to(`[data-section='${nextSectionTitle}'] .head-icon`, {
        color: 'black',
        duration: baseDuration - .7,
        ease: baseEase,
        onComplete() {
          resolve('')
        }
      })
    })
  }

  interface Tab {
    html: HTMLDivElement | null,
    width: number,
    currentIndex: number,
    nextIndex: number
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