<template>
  <AppHeader/>
  <div class="page relative w-full h-full overflow-hidden">
    <div
        class="bg-dots scale-150 fixed top-0 left-0 inset-0 h-full w-full bg-black bg-[radial-gradient(#515151_1px,transparent_1px)] [background-size:40px_40px]"/>
    <slot/>
  </div>
</template>