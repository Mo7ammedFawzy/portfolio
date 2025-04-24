export interface Contact {
    title: string,
    icon: string,
    link: string,
    isMail?: boolean
}

export interface Stack {
    title: string,
    icon: string
}

export interface Tool extends Stack {
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

export interface ITechIcons {
    icon: Icons,
    title: string
}

// export interface HeaderLink {
//     title: string,
//     icon: string
// }
