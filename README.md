# Broyler Farm

Сайт компании Broyler Farm - производитель комбикорма для бройлеров в Узбекистане.

## Технологический стек

- **Vue 3** - прогрессивный JavaScript фреймворк
- **TypeScript** - типизированный JavaScript
- **Composition API** - современный API для Vue 3
- **Vite** - быстрый инструмент сборки
- **Swiper** - карусель/слайдер
- **jQuery** - для работы с DOM

## Структура проекта

```
BroylerFarm/
├── src/
│   ├── components/       # Vue компоненты
│   │   └── ProgressApp.vue
│   ├── types/           # TypeScript типы
│   │   ├── index.ts
│   │   └── shims.d.ts
│   ├── utils/           # Утилиты
│   │   └── dom.ts
│   └── main.ts          # Точка входа приложения
├── css/                 # Стили
├── img/                 # Изображения
├── js/                  # Старые скрипты (deprecated)
├── libs/                # Библиотеки (jQuery, Swiper, Vue)
├── index.html           # Главная страница (русский)
├── uz.html              # Узбекская версия
├── vite.config.ts       # Конфигурация Vite
├── tsconfig.json        # Конфигурация TypeScript
└── package.json         # Зависимости проекта
```

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
