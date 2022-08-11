<template>
  <div class="relative">
    <ColormodeSettings />
    <div class="h-screen grid place-items-center justify-center text-center">
      <div class="flex flex-col gap-8">
        <HelloDaisy />
        <HelloContent />
        <ContentViewer />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContentViewer from '~~/components/content/Viewer.vue'
</script>