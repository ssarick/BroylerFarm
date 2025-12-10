<script setup lang="ts">
import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
import { CompanyProgressWidget } from '@/widgets/company-progress'
</script>

<template>
  <DefaultLayout>
    <div id="progress-app">
      <CompanyProgressWidget />
    </div>
  </DefaultLayout>
</template>
