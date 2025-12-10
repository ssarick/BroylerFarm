<script setup lang="ts">
import type { CompanyMilestone } from '@/entities/company'
import { useCompanyProgress } from '@/entities/company'

const { t, locale } = useI18n()

const milestones = computed<CompanyMilestone[]>(() => {
  return [2015, 2016, 2017, 2018, 2019, 2020].map((year, index) => ({
    year,
    yearLabel: t(`companyProgress.years.${year}.year`),
    description: t(`companyProgress.years.${year}.description`),
    value: index + 1
  }))
})

const {
  currentMilestone,
  canGoPrev,
  canGoNext,
  isActive,
  isCurrent,
  prev,
  next
} = useCompanyProgress(milestones)
</script>

<template>
  <div class="progress" id="progress-app">
    <div class="container">
      <div class="progress-header">
        <h1 class="progress-header__title">
          {{ t('companyProgress.title') }}
        </h1>

        <div v-if="currentMilestone" class="progress-header__txt">
          <h4>{{ currentMilestone.yearLabel }}</h4>
          <p>{{ currentMilestone.description }}</p>
        </div>

        <div class="progress-body progress__mob">
          <div class="progress-range">
            <div
              v-for="(milestone, index) in milestones"
              :key="milestone.value"
              class="progress-range-item"
              :class="{ 'progress-range-item--active': isActive(index) }"
            >
              <div class="progress-range-item__year">
                {{ milestone.yearLabel }}
              </div>
            </div>
          </div>
        </div>

        <div class="progress-header__btn">
          <button
            class="btn-red"
            :disabled="!canGoPrev"
            @click="prev"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.36652 2.40542L7.71573 0.715821L0.715759 7.88013L7.71573 15.0444L9.36652 13.3548L4.01739 7.88013L9.36652 2.40542Z" fill="white"/>
            </svg>
          </button>

          <button
            class="btn-red"
            :disabled="!canGoNext"
            @click="next"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.715759 2.40542L2.36655 0.715821L9.36652 7.88013L2.36655 15.0444L0.71576 13.3548L6.06488 7.88013L0.715759 2.40542Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="progress-body progress__desk">
        <div class="progress-range">
          <div
            v-for="(milestone, index) in milestones"
            :key="milestone.value"
            class="progress-range-item"
            :class="{ 'progress-range-item--active': isActive(index) }"
          >
            <div class="progress-range-item__year">
              {{ milestone.yearLabel }}
            </div>

            <div
              class="progress-range-item__info"
              :class="{ 'progress-range-item__info--active': isCurrent(index) }"
            >
              <h4>{{ milestone.yearLabel }}</h4>
              <p>{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
