<script setup lang='ts'>
import {DEFAULT_INDICATOR_SIZE, HEADERLINKS} from "~/constants"

const sectionStack = ref<string[]>([])

const indicatorSize = ref<number>(DEFAULT_INDICATOR_SIZE)

const {animateHeaderIndicator, changeIndicatorActiveTabOnScroll, activeTab} = useGsap()

onMounted(() => {
  setTimeout(() => {
    changeIndicatorActiveTabOnScroll((title) => (animateHeaderIndicator({
      nextSectionTitle: title,
      indicatorSize
    })))
  }, 1500)

  window.addEventListener('resize', useDebounceFn(() => animateHeaderIndicator({
    nextSectionTitle: toValue(activeTab),
    isResize: true,
    indicatorSize
  }), 750))
})

async function processIndicator(isFirstLoad: boolean = false) {
  if (!toValue(sectionStack).length)
    return 0
  const targetTitle = sectionStack.value[0]
  await animateHeaderIndicator({nextSectionTitle: targetTitle, indicatorSize})
  sectionStack.value = toValue(sectionStack).filter((title) => targetTitle !== title)
  if (!toValue(sectionStack).length && isFirstLoad)
    await animateHeaderIndicator({nextSectionTitle: 'profile', indicatorSize})
  await processIndicator(isFirstLoad);
}

</script>

<template>
  <header id='header' class='fixed z-10 bottom-0 left-1/2 -translate-x-1/2  sm:-translate-y-3 w-96 max-w-full'>
    <div class="header__container min-h-40 overflow-hidden w-full flex items-end">
      <div class="px-8 max-w-full w-full rounded-t-xl  sm:rounded-full bg-main-foreground">
        <div class="header__wrapper h-24 z-20 py-3 relative w-full grid grid-cols-4 items-center justify-center">
          <div id="indicator"
               class=" absolute w-20 h-20 bg-transparent -translate-x-36 left-0 top-1/2 rounded-full -translate-y-1/2">
            <span class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-3/4 bg-white rounded-tl-full rounded-full"/>
          </div>
          <template v-for="(link, index) in HEADERLINKS">
            <div
                class="head-link transition-all cursor-pointer flex flex-col relative items-center justify-center"
                :data-section="link.title" :data-index="index"
                @click="sectionStack.push(link.title);processIndicator()">
              <div
                  class="head-icon w-full icon_wrapper leading-none flex flex-col relative items-center justify-center">
                <UIcon :name="link.icon" :class="[link.title]"
                       class="relative inline-block leading-none size-7 text-[28px]"/>
              </div>
              <span v-text="link.title"
                    class="text-white select-none text-xs h-0 scale-0 leading-none head-text capitalize"/>
            </div>
          </template>
        </div>
      </div>
    </div>

  </header>
</template>

<style scoped>
.u-gradient {
  background: rgb(63, 94, 251);
  background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
}

.u-shadow {
  box-shadow: 0px -10px 0 0 #000;
}


</style>