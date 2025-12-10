# Feature-Sliced Design Architecture

Этот проект использует методологию **Feature-Sliced Design (FSD)** - современную архитектурную методологию для фронтенд-приложений.

## 🏗️ Структура проекта

```
src/
├── app/                          # 🔧 Application Layer
│   ├── providers/               # Глобальные провайдеры (i18n, router, etc)
│   │   └── i18n.ts
│   └── index.ts                 # Инициализация приложения
│
├── pages/                       # 📄 Pages Layer
│   └── home/                    # Страницы приложения
│       └── ui/
│
├── widgets/                     # 🧩 Widgets Layer
│   └── company-progress/        # Композитные блоки интерфейса
│       ├── ui/
│       │   └── CompanyProgressWidget.vue
│       └── index.ts
│
├── features/                    # ⚡ Features Layer
│   ├── language-switcher/       # Пользовательские сценарии
│   └── smooth-scroll/
│
├── entities/                    # 💼 Entities Layer
│   └── company/                 # Бизнес-сущности
│       ├── model/
│       │   ├── types.ts
│       │   └── useCompanyProgress.ts
│       └── index.ts
│
└── shared/                      # 🔗 Shared Layer
    ├── ui/                      # Переиспользуемые UI-компоненты
    ├── lib/                     # Утилиты и хелперы
    ├── config/                  # Конфигурация
    │   └── i18n/
    │       ├── locales/
    │       │   ├── ru.ts
    │       │   ├── uz.ts
    │       │   └── index.ts
    │       └── index.ts
    ├── api/                     # API клиент
    └── types/                   # Общие типы
```

## 📚 Слои архитектуры

### 1. **app** - Application Layer
Инициализация приложения, провайдеры, глобальные стили.

**Правило**: Знает обо всех нижележащих слоях.

```typescript
// app/index.ts
import { setupApp } from '@/app'

setupApp(app) // Настройка провайдеров
```

### 2. **pages** - Pages Layer
Композиционный слой для сборки страниц из виджетов и фич.

**Правило**: Может использовать widgets, features, entities, shared.

### 3. **widgets** - Widgets Layer
Большие композитные блоки интерфейса (header, footer, сложные секции).

**Правило**: Может использовать features, entities, shared.

```vue
<!-- widgets/company-progress/ui/CompanyProgressWidget.vue -->
<script setup lang="ts">
import { useCompanyProgress } from '@/entities/company'
</script>
```

### 4. **features** - Features Layer
Пользовательские сценарии и бизнес-логика (переключатель языка, авторизация).

**Правило**: Может использовать entities, shared.

### 5. **entities** - Entities Layer
Бизнес-сущности домена (company, product, user).

**Правило**: Может использовать только shared.

```typescript
// entities/company/model/useCompanyProgress.ts
export function useCompanyProgress() {
  // Бизнес-логика управления прогрессом компании
}
```

### 6. **shared** - Shared Layer
Переиспользуемый код без привязки к бизнес-логике.

**Правило**: Не зависит от других слоев.

## 🌐 Интернационализация (i18n)

Проект использует **Vue I18n** для поддержки множества языков.

### Структура локалей

```
shared/config/i18n/
├── locales/
│   ├── ru.ts    # Русский
│   ├── uz.ts    # Узбекский
│   └── index.ts
└── index.ts     # Конфигурация i18n
```

### Использование

```vue
<script setup lang="ts">
const { t, locale } = useI18n()
</script>

<template>
  <h1>{{ t('companyProgress.title') }}</h1>
</template>
```

### Типобезопасность

```typescript
import type { MessageSchema } from '@/shared/config/i18n'

// TypeScript будет проверять ключи переводов
const { t } = useI18n<MessageSchema>()
```

## 🎯 Composables

### Entity Composable

```typescript
// entities/company/model/useCompanyProgress.ts
export function useCompanyProgress(milestones: Ref<CompanyMilestone[]>) {
  const currentIndex = ref(0)

  const currentMilestone = computed(() =>
    milestones.value[currentIndex.value]
  )

  const next = () => {
    if (currentIndex.value < milestones.value.length - 1) {
      currentIndex.value++
    }
  }

  return {
    currentMilestone,
    next
  }
}
```

## 📦 Публичный API (index.ts)

Каждый слайс экспортирует публичный API через `index.ts`:

```typescript
// entities/company/index.ts
export { useCompanyProgress } from './model/useCompanyProgress'
export type { CompanyMilestone } from './model/types'
```

## 🔧 Auto-Import

Проект настроен для автоматического импорта:

- Vue API (`ref`, `computed`, etc.)
- Vue I18n API (`useI18n`, `useLocale`)
- Entity/Feature composables
- UI компоненты

```vue
<script setup lang="ts">
// Не нужно импортировать!
const count = ref(0)
const { t } = useI18n()
const { currentMilestone } = useCompanyProgress(milestones)
</script>
```

## 🎨 Стиль кода

- **Single Responsibility**: Один файл = одна ответственность
- **Composition API**: Только `<script setup lang="ts">`
- **Type Safety**: Все типизировано TypeScript
- **Import Sorting**: Автоматическая сортировка импортов

## 📖 Правила импорта

### ✅ Правильно

```typescript
// От общего к частному
import type { CompanyMilestone } from '@/entities/company'
import { useCompanyProgress } from '@/entities/company'
```

### ❌ Неправильно

```typescript
// Прямой импорт внутренних модулей
import { useCompanyProgress } from '@/entities/company/model/useCompanyProgress'
```

## 🚀 Преимущества FSD

1. **Масштабируемость** - легко добавлять новые фичи
2. **Понятность** - ясная структура и зоны ответственности
3. **Изоляция** - изменения в одном слое не влияют на другие
4. **Повторное использование** - shared слой доступен везде
5. **Тестируемость** - каждый слой тестируется независимо

## 📚 Дополнительные ресурсы

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vue I18n](https://vue-i18n.intlify.dev/)
