import type { App } from 'vue'

import { i18n } from './providers/i18n'
import { router } from './providers/router'

export function setupApp(app: App) {
  app.use(i18n)
  app.use(router)
}

export { i18n, router }
