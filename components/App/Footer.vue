<script setup lang='ts'>
function openPDF() {
 const pdfUrl = '/MohammedFawzey_CV.pdf';
 window.open(pdfUrl, '_blank', 'width=800,height=600');
}

</script>

<template>
 <footer id='footer' class='pb-32 lg:pb-32 pt-0'>
  <hr class="my-6 border-white/20" />
  <div class="text-2xl sm:text-4xl mb-4">Thanks for scrolling.</div>
  <UButton @click="openPDF" label="Resume" icon="radix-icons:arrow-top-right" :ui="{ rounded: 'rounded-full' }" size="lg"
   trailing class="bg-main hover:bg-main/50" />
 </footer>
</template>