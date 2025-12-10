import type { Ref } from 'vue'

import type { CompanyMilestone } from './types'

export function useCompanyProgress(milestones: Ref<CompanyMilestone[]>) {
  const currentIndex = ref(0)

  const currentMilestone = computed(() => milestones.value[currentIndex.value])

  const canGoPrev = computed(() => currentIndex.value > 0)
  const canGoNext = computed(() => currentIndex.value < milestones.value.length - 1)

  const isActive = (index: number) => currentIndex.value >= index
  const isCurrent = (index: number) => currentIndex.value === index

  const prev = () => {
    if (canGoPrev.value) {
      currentIndex.value--
    }
  }

  const next = () => {
    if (canGoNext.value) {
      currentIndex.value++
    }
  }

  const goTo = (index: number) => {
    if (index >= 0 && index < milestones.value.length) {
      currentIndex.value = index
    }
  }

  return {
    currentIndex: readonly(currentIndex),
    currentMilestone,
    canGoPrev,
    canGoNext,
    isActive,
    isCurrent,
    prev,
    next,
    goTo
  }
}
