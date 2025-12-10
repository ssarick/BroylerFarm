import { setupApp } from '@/app'
import App from '@/App.vue'

import {
  initializeAccordion,
  initializeLanguageToggle,
  initializeMobileMenu,
  initializeScrollEffects,
  initializeSmoothScroll,
  initializeSwiper
} from '@utils/dom'

// Create Vue application
const app = createApp(App)

// Setup app providers (i18n, router, etc)
setupApp(app)

// Mount app
app.mount('#app')

// Initialize DOM utilities after Vue is mounted
nextTick(() => {
  initializeScrollEffects()
  initializeLanguageToggle()
  initializeMobileMenu()
  initializeAccordion()
  initializeSwiper()
  initializeSmoothScroll()
})
