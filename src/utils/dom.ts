import Swiper from 'swiper'
import type { SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

/**
 * Initialize scroll effects for navbar
 */
export const initializeScrollEffects = (): void => {
  const navbar = document.querySelector('.navbar')
  if (!navbar) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  })
}

/**
 * Initialize language toggle functionality
 */
export const initializeLanguageToggle = (): void => {
  const languageItems = document.querySelectorAll('.language_item')
  const languageElement = document.querySelector('.language')

  if (!languageElement) return

  languageItems.forEach(item => {
    item.addEventListener('click', (e: Event) => {
      e.stopPropagation()
      languageElement.classList.toggle('opened')
    })
  })

  window.addEventListener('click', () => {
    languageElement.classList.remove('opened')
  })
}

/**
 * Initialize mobile menu toggle
 */
export const initializeMobileMenu = (): void => {
  const burger = document.querySelector('.navbar__burger')
  const menu = document.querySelector('.navbar_menu')
  const body = document.body

  if (!burger || !menu) return

  burger.addEventListener('click', () => {
    burger.classList.toggle('activebur')
    menu.classList.toggle('activebur')
    body.classList.toggle('lock')
  })
}

/**
 * Initialize accordion functionality
 */
export const initializeAccordion = (): void => {
  const accordions = document.querySelectorAll<HTMLButtonElement>('.accordion')

  accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
      this.classList.toggle('activate')
      const panel = this.nextElementSibling as HTMLElement | null

      if (panel) {
        if (panel.style.maxHeight) {
          panel.style.maxHeight = ''
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      }
    })
  })
}

/**
 * Initialize Swiper carousel
 */
export const initializeSwiper = (): void => {
  const swiperElement = document.querySelector('.founder-slider')
  if (!swiperElement) return

  const options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  new Swiper('.founder-slider', options)
}

/**
 * Initialize smooth scroll for anchor links
 */
export const initializeSmoothScroll = (): void => {
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]')

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault()
      const href = link.getAttribute('href')
      if (!href) return

      const targetElement = document.querySelector(href)
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })
}
