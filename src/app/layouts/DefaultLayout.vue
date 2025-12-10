<script setup lang="ts">
// Layout for main application pages
</script>

<template>
  <div class="app-layout">
    <slot />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
