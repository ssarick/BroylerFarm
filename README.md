# Broyler Farm

Сайт компании Broyler Farm - производитель комбикорма для бройлеров в Узбекистане.

## Технологический стек

- **Vue 3** - прогрессивный JavaScript фреймворк
- **TypeScript** - типизированный JavaScript
- **Composition API** - современный API для Vue 3
- **Feature-Sliced Design** - архитектурная методология
- **Vue I18n** - интернационализация (русский/узбекский)
- **Vite** - быстрый инструмент сборки
- **Unplugin Auto Import** - автоматический импорт
- **ESLint + Prettier** - качество кода
- **Swiper** - карусель/слайдер

## Структура проекта (FSD)

```
BroylerFarm/
├── src/
│   ├── app/                          # 🔧 Инициализация приложения
│   │   ├── providers/               # i18n, router, store
│   │   └── index.ts
│   ├── pages/                       # 📄 Страницы
│   │   └── home/
│   ├── widgets/                     # 🧩 Композитные блоки
│   │   ├── company-progress/
│   │   ├── header/
│   │   └── footer/
│   ├── features/                    # ⚡ Пользовательские сценарии
│   │   ├── language-switcher/
│   │   └── smooth-scroll/
│   ├── entities/                    # 💼 Бизнес-сущности
│   │   └── company/
│   │       ├── model/              # Логика и composables
│   │       └── ui/                 # UI компоненты
│   └── shared/                      # 🔗 Переиспользуемый код
│       ├── ui/                      # UI-kit
│       ├── lib/                     # Утилиты
│       ├── config/                  # Конфигурация
│       │   └── i18n/               # Локали (ru, uz)
│       ├── api/                     # API клиент
│       └── types/                   # Общие типы
├── css/                             # Глобальные стили
├── img/                             # Изображения
├── libs/                            # Внешние библиотеки
├── index.html                       # Главная страница
├── uz.html                          # Узбекская версия
├── vite.config.ts                   # Конфигурация Vite
├── tsconfig.json                    # Конфигурация TypeScript
├── FSD_ARCHITECTURE.md              # Документация FSD
└── package.json                     # Зависимости
```

> 📚 Подробнее об архитектуре читайте в [FSD_ARCHITECTURE.md](./FSD_ARCHITECTURE.md)

## Установка и запуск

### Предварительные требования

- Node.js версии 16 или выше
- npm или yarn

### Установка зависимостей

```bash
npm install
```

### Режим разработки

Запуск локального сервера разработки с hot-reload:

```bash
npm run dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

### Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут находиться в папке `dist/`

### Предпросмотр продакшен сборки

```bash
npm run preview
```

### Проверка типов TypeScript

```bash
npm run type-check
```

### Линтинг и форматирование кода

Проверка и автоматическое исправление кода с помощью ESLint:

```bash
npm run lint
```

Форматирование кода с помощью Prettier:

```bash
npm run format
```

#### Правила ESLint

Проект использует рекомендованные правила от команды Vue.js:

- **Vue 3 recommended** - официальные правила для Vue 3
- **TypeScript ESLint** - правила для TypeScript
- **Evan You's style** - стиль кода от создателя Vue.js:
  - Single quotes для строк
  - No semicolons
  - 2 spaces для отступов
  - Trailing commas удалены
  - Arrow functions предпочтительны

## Особенности реализации

### Vue 3 Composition API

Проект использует современный Composition API с `<script setup>` синтаксисом:

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const activeValue = ref<number>(1)
const isActive = computed(() => activeValue.value > 0)
</script>
```

### Многоязычность

Компонент `ProgressApp` поддерживает два языка (русский и узбекский) через prop `lang`:

```typescript
const app = createApp(ProgressApp, { lang: 'ru' }) // или 'uz'
```

Язык автоматически определяется на основе URL страницы.

### TypeScript

Весь код написан на TypeScript с строгой типизацией:

```typescript
interface YearData {
  year: string
  info: string
  yearuz: string
  infouz: string
  value: number
}
```

## Разработка

### Добавление нового компонента

1. Создайте файл в `src/components/`:

```vue
<script setup lang="ts">
// Ваш код
</script>

<template>
  <!-- Ваш шаблон -->
</template>
```

2. Импортируйте в `src/main.ts`:

```typescript
import YourComponent from './components/YourComponent.vue'
```

### Добавление типов

Добавляйте интерфейсы и типы в `src/types/index.ts`:

```typescript
export interface YourType {
  field: string
}
```

## Поддержка браузеров

- Chrome (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- Edge (последние 2 версии)

## Лицензия

© 2021 Broyler Farm. Все права защищены.
