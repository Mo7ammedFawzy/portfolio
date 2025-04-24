export interface IBase {
    title: string,
    icon: string
}

export interface Contact extends IBase {
    link: string,
    isMail?: boolean
}

export interface Stack extends IBase {
    title: string,
    icon: string
}

export interface Tool extends IBase {
}

export type Icons =
    'mdi:nuxt'
    | 'bxl:typescript'
    | 'mdi:tailwind'
    | 'carbon:api'
    | 'devicon-plain:vuetify'
    | 'mdi:vuejs'
    | 'ri:bootstrap-fill'
    | 'file-icons:nuxt'

export interface ITechIcon extends IBase {
    icon: Icons,
}
