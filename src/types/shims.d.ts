declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '../../../libs/swiper/swiper.js' {
  export default class Swiper {
    constructor(selector: string, options?: any)
  }
}

declare global {
  interface Window {
    $: any
    jQuery: any
    roistatProjectId?: string
    roistatHost?: string
    amo_forms_params?: any
    amo_forms_load?: any
  }
}

export {}
