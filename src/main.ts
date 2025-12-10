import ProgressApp from '@components/ProgressApp.vue'

import {
  initializeAccordion,
  initializeLanguageToggle,
  initializeMobileMenu,
  initializeScrollEffects,
  initializeSmoothScroll,
  initializeSwiper
} from '@utils/dom'

// Detect language based on page
const detectLanguage = (): 'ru' | 'uz' => {
  const path = window.location.pathname
  return path.includes('uz.html') ? 'uz' : 'ru'
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Vue app for progress section
  const progressAppElement = document.querySelector('#progress-app')
  if (progressAppElement) {
    const lang = detectLanguage()
    const app = createApp(ProgressApp, { lang })
    app.mount('#progress-app')
  }

  // Initialize DOM utilities
  initializeScrollEffects()
  initializeLanguageToggle()
  initializeMobileMenu()
  initializeAccordion()
  initializeSwiper()
  initializeSmoothScroll()
})
