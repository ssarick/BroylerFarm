export interface CompanyMilestone {
  year: number
  yearLabel: string
  description: string
  value: number
}

export interface CompanyProgress {
  milestones: CompanyMilestone[]
  currentIndex: number
}
