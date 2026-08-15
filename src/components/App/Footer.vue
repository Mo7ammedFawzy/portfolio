<script setup lang="ts">
function openPDF() {
    const pdfUrl = '/Mohammed_Fawzy_CV.pdf';
    window.open(pdfUrl, '_blank', 'width=800,height=600');
}
</script>

<template>
    <footer id="footer" class="pb-32 lg:pb-32 pt-0">
        <hr class="my-6 border-white/20" />
        <div class="text-2xl sm:text-4xl mb-4">Thanks for scrolling.</div>
        <button type="button" @click="openPDF"
            class="bg-main hover:bg-main/50 rounded-full text-white inline-flex items-center gap-1 px-4 py-2 text-lg">
            Resume
            <UIcon name="radix-icons:arrow-top-right" class="size-5" />
        </button>
    </footer>
</template>
