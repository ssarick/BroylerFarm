import { setupApp } from '@/app'
import { CompanyProgressWidget } from '@/widgets/company-progress'

import {
  initializeAccordion,
  initializeLanguageToggle,
  initializeMobileMenu,
  initializeScrollEffects,
  initializeSmoothScroll,
  initializeSwiper
} from '@utils/dom'

// Detect language from URL and set it
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
    const app = createApp(CompanyProgressWidget)

    // Setup app providers (i18n, etc)
    setupApp(app)

    // Set initial locale
    app.config.globalProperties.$i18n.global.locale.value = lang

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
