<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// Detect language from URL on mount
onMounted(() => {
  const path = window.location.pathname
  locale.value = path.includes('uz.html') ? 'uz' : 'ru'
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
