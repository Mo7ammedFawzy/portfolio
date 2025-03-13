<template>
 <AppHeader />
 <div class="page relative w-full h-full overflow-hidden">
  <!-- <div
   class="bg-dots scale-150 left-0 top-0 fixed inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:48px_48px]">
  </div> -->
  <div
   class="bg-dots scale-150 fixed top-0 left-0 inset-0 h-full w-full bg-black bg-[radial-gradient(#515151_1px,transparent_1px)] [background-size:40px_40px]" />
  <BaseWrapper class="max-w-2xl">
   <slot />
   <AppFooter />
  </BaseWrapper>
 </div>
</template>