<template>
  <div class="relative">
    <ColormodeSettings />
    <div class="h-screen grid place-items-center justify-center text-center">
      <div class="flex flex-col gap-8">
        <HelloDaisy />
        <HelloContent />
        <AnimationPlayer />
        <ContentViewer />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContentViewer from '~~/components/content/Viewer.vue'
import AnimationPlayer from '~~/components/content/AnimationPlayer.vue'
</script>