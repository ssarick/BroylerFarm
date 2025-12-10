import type { I18nOptions } from 'vue-i18n'

import type { AvailableLocale } from './locales'
import { messages } from './locales'

export const FALLBACK_LOCALE: AvailableLocale = 'ru'
export const AVAILABLE_LOCALES: AvailableLocale[] = ['ru', 'uz']

export const i18nConfig: I18nOptions = {
  legacy: false,
  locale: FALLBACK_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  messages,
  globalInjection: true,
  missingWarn: false,
  fallbackWarn: false
}

export { messages }
export type { AvailableLocale, MessageSchema } from './locales'
