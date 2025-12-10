import ru from './ru'
import uz from './uz'

export const messages = {
  ru,
  uz
}

export type MessageSchema = typeof ru
export type AvailableLocale = keyof typeof messages
