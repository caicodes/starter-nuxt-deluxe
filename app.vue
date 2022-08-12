<template>
  <div class="relative">
    <ColormodeSettings />
    <div class="flex justify-center text-center">
      <div class="flex flex-col gap-8">
        <HelloDaisy />
        <HelloPinia />
        <HelloContent />
        <AnimationPlayer />
        <ContentViewer />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContentViewer from '~~/components/content/Viewer.vue'
import AnimationPlayer from '~~/components/animation/AnimationPlayer.vue'
import HelloPinia from '~~/components/HelloPinia.vue';
</script>