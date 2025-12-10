import type { App } from 'vue'

import { i18n } from './providers/i18n'

export function setupApp(app: App) {
  app.use(i18n)
}

export { i18n }
