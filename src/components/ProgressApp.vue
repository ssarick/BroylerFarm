<script setup lang="ts">
import { ref, computed } from 'vue'

interface YearData {
  year: string
  info: string
  yearuz: string
  infouz: string
  value: number
}

interface Props {
  lang?: 'ru' | 'uz'
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'ru'
})

const activeValue = ref<number>(1)

const years = ref<YearData[]>([
  {
    year: '2015 год',
    info: 'Открытие мини-птицефабрика на 500 бройлеров',
    yearuz: '2015 йил',
    infouz: '500 та бройлер товуқлари учун мўлжалланган товуқ фабрикаси очилиши',
    value: 1
  },
  {
    year: '2016 год',
    info: 'Из-за нехватки комбикорма на рынке запуск собственного производства и увеличения объёма производства на 1т/сутки',
    yearuz: '2016 йил',
    infouz: 'Бозор ем махсулоти етмаслиги сабабли ўзимизнинг кичкина ишлаб чиқариш цехини йўлга қўйдик ва кунига 1 тоннагача озуқа ишлаб чиқаришни бошладик',
    value: 2
  },
  {
    year: '2017 год',
    info: 'Увеличения объёма производства комбикорма на 1 т/сутки',
    yearuz: '2017 йил',
    infouz: 'Ем озуқасини ишлаб чиқариш хажмини суткасига 3 т. гача кўтардик',
    value: 3
  },
  {
    year: '2018 год',
    info: 'Увеличения объёма производства комбикорма на 5 т/сутки',
    yearuz: '2018 йил',
    infouz: 'Ем озуқасини ишлаб чиқариш хажмини суткасига 5 т. гача кўтардик',
    value: 4
  },
  {
    year: '2019 год',
    info: 'Первый экспорт комбикорма в Афганистан и Таджикистан и увеличения мощности производства до 100 т/сутки',
    yearuz: '2019 йил',
    infouz: 'Биринчи экспорт Афғонистон ва Тожикистон давлатларига ва кунлик ишлаб чиқариш хажми 100 т ',
    value: 5
  },
  {
    year: '2020 год',
    info: 'Автоматизированный завод по производству комбикорма по турецким технологиям максимальная мощность до 350 т/сутки',
    yearuz: '2020 йил',
    infouz: 'Кунига 350 т ем озуқасини ишлаб чиқариш хажмига эга бўлган автоматлаштирилган завод',
    value: 6
  }
])

const currentYear = computed(() => {
  return years.value.find(year => year.value === activeValue.value)
})

const getYearText = (year: YearData) => {
  return props.lang === 'uz' ? year.yearuz : year.year
}

const getInfoText = (year: YearData) => {
  return props.lang === 'uz' ? year.infouz : year.info
}

const canGoPrev = computed(() => activeValue.value > 1)
const canGoNext = computed(() => activeValue.value < years.value.length)

const prev = () => {
  if (canGoPrev.value) {
    activeValue.value--
  }
}

const next = () => {
  if (canGoNext.value) {
    activeValue.value++
  }
}

const isActive = (value: number) => activeValue.value >= value
const isCurrent = (value: number) => activeValue.value === value
</script>

<template>
  <div class="progress" id="progress-app">
    <div class="container">
      <div class="progress-header">
        <h1 class="progress-header__title">
          {{ props.lang === 'uz' ? 'Компаниянинг ривожланиш босқичлари' : 'Этапы развития нашей компании' }}
        </h1>
        <div v-if="currentYear" class="progress-header__txt">
          <h4>{{ getYearText(currentYear) }}</h4>
          <p>{{ getInfoText(currentYear) }}</p>
        </div>
        <div class="progress-body progress__mob">
          <div class="progress-range">
            <div
              v-for="year in years"
              :key="year.value"
              class="progress-range-item"
              :class="{ 'progress-range-item--active': isActive(year.value) }"
            >
              <div class="progress-range-item__year">
                {{ getYearText(year) }}
              </div>
            </div>
          </div>
        </div>
        <div class="progress-header__btn">
          <button
            class="btn-red"
            :disabled="!canGoPrev"
            id="progress-prev"
            @click="prev"
          >
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.36652 2.40542L7.71573 0.715821L0.715759 7.88013L7.71573 15.0444L9.36652 13.3548L4.01739 7.88013L9.36652 2.40542Z" fill="white"/>
            </svg>
          </button>
          <button
            class="btn-red"
            :disabled="!canGoNext"
            id="progress-next"
            @click="next"
          >
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.715759 2.40542L2.36655 0.715821L9.36652 7.88013L2.36655 15.0444L0.71576 13.3548L6.06488 7.88013L0.715759 2.40542Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="progress-body progress__desk">
        <div class="progress-range">
          <div
            v-for="year in years"
            :key="year.value"
            class="progress-range-item"
            :class="{ 'progress-range-item--active': isActive(year.value) }"
          >
            <div class="progress-range-item__year">
              {{ getYearText(year) }}
            </div>
            <div
              class="progress-range-item__info"
              :class="{ 'progress-range-item__info--active': isCurrent(year.value) }"
            >
              <h4>{{ getYearText(year) }}</h4>
              <p>{{ getInfoText(year) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
