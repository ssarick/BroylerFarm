export interface YearData {
  year: string
  info: string
  yearuz: string
  infouz: string
  value: number
}

export interface SwiperOptions {
  slidesPerView: number
  spaceBetween: number
  navigation?: {
    nextEl: string
    prevEl: string
  }
  pagination?: {
    el: string
    clickable: boolean
  }
}
