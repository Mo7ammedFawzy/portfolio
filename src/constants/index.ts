import agGridLogo from '@/assets/icons/ag-grid-logo.svg'

export interface IBase {
  title: string,
  icon: string
}

export interface Contact extends IBase {
  link: string,
  isMail?: boolean
}

export interface Stack extends IBase {
}

export interface Tool extends IBase {
}

export type Icons =
  'mdi:nuxt'
  | 'bxl:typescript'
  | 'mdi:tailwind'
  | 'carbon:api'
  | 'devicon-plain:vuetify'
  | 'devicon:vuetify'
  | 'mdi:vuejs'
  | 'ri:bootstrap-fill'
  | 'file-icons:nuxt' |
  "logos:vue"
  | "devicon:spring"
  | "logos:nodejs-icon"
export interface ITechIcon extends IBase {
  icon: Icons
}

export const SITE_NAME = "Mohammed Fawzey"
export const ROLE = "Fullstack Java Developer"
export const EMAIL = "devfawzey@gmail.com"
export const CV_URL = "/Mohammed_Fawzey_CV.pdf"
export const GITHUB_URL = "https://github.com/Mo7ammedFawzy"
export const LINKEDIN_URL = "https://www.linkedin.com/in/mohammed-fawzey-4202a4316/"

export const CONTACT: Contact[] = [
  {
    title: "github",
    icon: "mdi:github",
    link: GITHUB_URL
  },
  {
    title: "linkedin",
    icon: "mdi:linkedin",
    link: LINKEDIN_URL
  },
  {
    title: "mail",
    icon: "material-symbols-light:mail-outline",
    link: `mailto:${EMAIL}`,
    isMail: true,
  },
]

export interface HeaderLink {
  title: string,
  section: string
}

export const HEADERLINKS: HeaderLink[] = [
  {
    title: "Home",
    section: "home"
  },
  {
    title: "Projects",
    section: "projects"
  },
  {
    title: "Experience",
    section: "experience"
  },
  {
    title: "Skills",
    section: "skills"
  },
  {
    title: "Contact",
    section: "contact"
  },
]

export const ABOUT: string[] = [
  "I am a developer focused on creating clean, intuitive interfaces and robust backend architectures. My foundation in frontend development with Vue.js has evolved into full-stack engineering, leveraging Java and Spring Boot to build comprehensive solutions.",
  "I value clean architecture, maintainable code, and a user-first approach to design and functionality. The intersection of technical rigor and thoughtful user experience is where I thrive."
]

export interface AboutFact {
  label: string,
  value: string,
  icon: string
}

export const ABOUT_FACTS: AboutFact[] = [
  {
    label: "Location",
    value: "Benisuef, Egypt",
    icon: "material-symbols:location-on"
  },
  {
    label: "Email",
    value: EMAIL,
    icon: "material-symbols:mail"
  },
  {
    label: "Education",
    value: "Bachelor of Computer Science",
    icon: "material-symbols:school"
  },
  {
    label: "Languages",
    value: "Arabic (Native) · English (B2)",
    icon: "material-symbols:language"
  },
]

export interface JourneyStep {
  year: string,
  title: string,
  subtitle: string,
  icon: string,
  tags: { label: string, icon: string }[],
  current?: boolean
}

export const JOURNEY: JourneyStep[] =
  [
  {
    year: "2021",
    title: "Computer Science Graduate",
    subtitle: "Helwan University",
    icon: "material-symbols:school",
    tags: [{ label: "Education", icon: "noto:graduation-cap" }]
  },
  {
    year: "2023",
    title: "Frontend Developer",
    subtitle: "Innovate",
    icon: "material-symbols:code",
    tags: [{ label: "Vue.js", icon: "devicon:vuejs" }]
  },
  {
    year: "2025",
    title: "Java Developer",
    subtitle: "Namasoft (ERP Company)",
    icon: "material-symbols:settings",
    tags: [
      { label: "Java", icon: "logos:java" },
      { label: "Spring Boot", icon: "thesvg-color:spring-boot" },
      { label: "Vue.js", icon: "devicon:vuejs" }
    ]
  },
  {
    year: "Now",
    title: "Fullstack Developer",
    subtitle: "Building scalable solutions and growing every day.",
    icon: "mingcute:rocket-fill",
    tags: [],
    current: true
  },
]

export interface Experience {
  company: string,
  role: string,
  period: string,
  bullets: string[],
  current?: boolean
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Namasoft",
    role: "Java Developer",
    period: "Jan 2025 – Present",
    current: true,
    bullets: [
      "Developing ERP modules with Java and Spring Boot.",
      "Building responsive frontends with Vue 3 and REST APIs.",
      "Designing and maintaining database schemas and service layers.",
      "Collaborating with the team on architecture, code review, and deployment.",
    ]
  },
  {
    company: "Innovate",
    role: "Frontend Developer (Vue.js)",
    period: "Mid 2023 – Dec 2024",
    bullets: [
      "Built responsive single-page applications with Vue.js and Nuxt.",
      "Delivered pixel-perfect UI from designer mockups.",
      "Improved performance, accessibility, and reusability across client projects.",
    ]
  },
]

export interface Skill {
  title: string,
  icon: string,
  logo?: string
}

export interface SkillGroup {
  title: string,
  icon: string,
  items: Skill[]
}

export const CORE_SKILLS: Skill[] = [
  { title: "Vue 3", icon: "devicon:vuejs" },
  { title: "TypeScript", icon: "devicon:typescript" },
  { title: "Java", icon: "devicon:java" },
  { title: "Jakarta EE", icon: "mdi:server" },
  { title: "Spring Boot", icon: "devicon:spring" },
  { title: "SQL Server", icon: "devicon:microsoftsqlserver" },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "material-symbols:laptop-mac",
    items: [
      { title: "Vue 3", icon: "devicon:vuejs" },
      { title: "Nuxt", icon: "devicon:nuxtjs" },
      { title: "Pinia", icon: "logos:pinia" },
      { title: "VueUse", icon: "logos:vueuse" },
      { title: "Quasar", icon: "devicon:quasar" },
      { title: "Tailwind CSS", icon: "devicon:tailwindcss" },
      { title: "Nuxt UI", icon: "devicon:nuxt" },
      { title: "AG Grid", icon: "logos:grid", logo: agGridLogo },
    ]
  },
  {
    title: "Backend",
    icon: "material-symbols:database",
    items: [
      { title: "Java", icon: "devicon:java" },
      { title: "Jakarta EE", icon: "mdi:server" },
      { title: "Spring Boot", icon: "devicon:spring" },
      { title: "JPA", icon: "material-symbols:schema" },
      { title: "Hibernate", icon: "devicon:hibernate" },
      { title: "Node.js", icon: "devicon:nodejs" },
      { title: "Express", icon: "simple-icons:express" },
      { title: "REST API", icon: "mdi:api" },
    ]
  },
  {
    title: "Tools & Databases",
    icon: "material-symbols:construction",
    items: [
      { title: "SQL Server", icon: "devicon:microsoftsqlserver" },
      { title: "Git", icon: "devicon:git" },
      { title: "GitHub", icon: "mdi:github" },
      { title: "IntelliJ IDEA", icon: "devicon:intellij" },
      { title: "VS Code", icon: "devicon:vscode" },
      { title: "Postman", icon: "devicon:postman" },
      { title: "Maven", icon: "devicon:maven" },
      { title: "Docker", icon: "devicon:docker" },
    ]
  },
]

export interface Project {
  title: string,
  type: string,
  grid?: string,
  techs: ITechIcon[],
  src: string,
  link: string,
  githubLink?: string
  tags?: {
    title: string,
    color: string
  }[],
  show?: boolean,
  made_with?: string,
  description?: string
}

export const PROJECTS: Project[] = [
  {
    title: "eCommerceHope",
    type: "ecommerce",
    grid: "large",
    techs: [
      {
        icon: "logos:vue",
        title: "Vue"
      },
      {
        icon: "logos:nodejs-icon",
        title: "NodeJS"
      },
      {
        icon: "bxl:typescript",
        title: "typescript"
      },
      {
        icon: "mdi:tailwind",
        title: "tailwindcss"
      },
    ],
    src: "eCommerce",
    link: "https://ecommercelytics.vercel.app/",
    githubLink: "https://github.com/Mo7ammedFawzy/eCommerce",
    description: "Full-stack storefront with an editorial design, cart state management, and seamless product exploration.",
    show: true
  },
  {
    title: "Tabarak Trading",
    type: "frontend",
    grid: "large",
    techs: [
      {
        icon: "mdi:nuxt",
        title: "Nuxt",
      },
      {
        icon: "bxl:typescript",
        title: "typescript"
      },
      {
        icon: "file-icons:nuxt",
        title: "NuxtUI"
      },
      {
        icon: "mdi:tailwind",
        title: "tailwindcss"
      }
    ],
    src: "tabark",
    link: "https://tabrak-pi.vercel.app/",
    githubLink: "https://github.com/devfawzey/tabrak",
    description: "Corporate portal for a trading company featuring structured bento grids and NuxtUI components.",
    show: true
  },
  {
    title: "Library Management",
    type: "fullstack",
    grid: "medium",
    techs: [
      {
        icon: "devicon:spring",
        title: "Spring",
      },
      {
        icon: "carbon:api",
        title: "RestAPI"
      },
      {
        icon: "logos:vue",
        title: "Vue"
      }
    ],
    src: "https://raw.githubusercontent.com/Mo7ammedFawzy/Spring-Boot-Library-Management/main/preview.png",
    link: "https://spring-boot-library-management.vercel.app/",
    githubLink: "https://github.com/Mo7ammedFawzy/Spring-Boot-Library-Management",
    description: "Full-stack system with Spring Boot REST services, JWT auth, and interactive Vue interface.",
    show: true
  },
  {
    title: "Movies Hunter",
    type: "frontend",
    grid: "medium",
    techs: [
      {
        icon: "mdi:vuejs",
        title: "vue",
      },
      {
        icon: "devicon:vuetify",
        title: "vuetify",
      },
      {
        icon: "carbon:api",
        title: "RestAPI"
      }
    ],
    src: "movies",
    link: "https://movie-appio.vercel.app/",
    description: "Dynamic cinema discovery app with live TMDB search, trending feeds, and responsive modal details.",
    show: true
  },
  {
    title: "Commerce-Hope",
    type: "ecommerce",
    grid: "medium",
    techs: [
      {
        icon: "mdi:nuxt",
        title: "Nuxt",
      },
      {
        icon: 'devicon:vuetify',
        title: "vuetify",
      },
      {
        icon: 'carbon:api',
        title: "RestAPI",
      }
    ],
    src: "commerce-hope",
    link: "https://commerce-hope.vercel.app/",
    description: "Product catalog and checkout application built with Nuxt SSR and Vuetify design tokens.",
    show: true
  },
  {
    title: "Innovate Agency",
    type: "frontend",
    grid: "small",
    techs: [
      {
        icon: "devicon:vuetify",
        title: "vuetify"
      },
      {
        icon: "mdi:nuxt",
        title: "Nuxt"
      }
    ],
    src: "innovate",
    link: "https://innovate3.online/",
    description: "Digital agency portfolio built with Nuxt and smooth transitions.",
    show: true
  },
  {
    title: "Hager UI/UX Portfolio",
    type: "frontend",
    grid: "small",
    techs: [
      {
        icon: "mdi:nuxt",
        title: "Nuxt",
      },
      {
        icon: "devicon:vuetify",
        title: "vuetify",
      },
    ],
    src: "ui-ux",
    link: "https://hager-ui-ux.vercel.app/",
    description: "Designer portfolio showcasing UI case studies and interactive galleries.",
    show: true
  },
  {
    title: "Traders Academy",
    type: "frontend",
    grid: "small",
    techs: [
      {
        icon: "mdi:vuejs",
        title: "Vue",
      },
      {
        icon: "devicon:vuetify",
        title: "Vuetify",
      },
    ],
    src: "traders",
    link: "https://traders-academy-gold.vercel.app/ar",
    description: "Bilingual educational landing page with RTL support and course showcases.",
    show: true
  },
  {
    title: ".Store eCommerce",
    type: "ecommerce",
    grid: "small",
    techs: [
      {
        icon: "mdi:nuxt",
        title: "Nuxt",
      },
      {
        icon: "devicon:vuetify",
        title: "vuetify"
      }
    ],
    src: "store",
    link: "https://storex.vercel.app/",
    description: "Minimalist fashion e-commerce storefront with smooth filtering.",
    show: true
  },
  {
    title: "Pexels Store",
    type: "ecommerce",
    grid: "small",
    techs: [
      {
        icon: "mdi:nuxt",
        title: "Nuxt",
      },
      {
        icon: "devicon:vuetify",
        title: "vuetify",
      },
    ],
    src: "pexel",
    link: "https://ecommerce-pexels.vercel.app/",
    description: "Visual-first stock media storefront integration with Pexels API.",
    show: true
  },
  {
    title: "Grand Restaurant",
    type: "frontend",
    grid: "small",
    techs: [
      {
        icon: "ri:bootstrap-fill",
        title: "Bootstrap",
      },
    ],
    src: "restaurant",
    link: "https://mohammed2711111.github.io/Restaurant_Site/resturant.html",
    description: "Fine dining restaurant landing page with booking preview.",
    show: true
  },
  {
    title: "NIX Landing",
    type: "frontend",
    grid: "small",
    techs: [
      {
        icon: "ri:bootstrap-fill",
        title: "Bootstrap",
      }
    ],
    src: "nix",
    link: "https://mohammed2711111.github.io/NIX_Website/Nix.html",
    description: "Product showcase landing page with clean layouts and dark accents.",
    show: true
  },
]

export const STACKS: Stack[] = [
  {
    title: "vue",
    icon: "logos:vue"
  },
  {
    title: "NodeJS",
    icon: "logos:nodejs-icon"
  },
  {
    title: "Java",
    icon: "skill-icons:java-light"
  },
  {
    title: "Spring",
    icon: "devicon:spring"
  },
  {
    title: "typescript",
    icon: "bxl:typescript"
  },
  {
    title: "RestAPI",
    icon: "carbon:api"
  },
  {
    title: "nuxt",
    icon: "mdi:nuxt"
  },
  {
    title: "NuxtUI",
    icon: "file-icons:nuxt"
  },
  {
    title: "tailwind",
    icon: "mdi:tailwind"
  },
  {
    title: "vuetify",
    icon: "devicon:vuetify"
  },
  {
    icon: "devicon:quasar",
    title: "quasar"
  },
  {
    title: "git",
    icon: "mdi:git"
  },
  {
    title: "bootstrap",
    icon: "ri:bootstrap-fill"
  },
  {
    title: "javascript",
    icon: "ri:javascript-fill"
  },
  {
    title: "CSS",
    icon: "flowbite:css-solid"
  },
  {
    title: "HTML",
    icon: "flowbite:html-solid"
  },
]

export const TOOLS: Tool[] = [
  {
    title: "Claude",
    icon: "material-icon-theme:claude"
  },
  {
    title: "vscode",
    icon: "mdi:microsoft-visual-studio-code"
  },
  {
    title: "mongodb",
    icon: "fontisto:mongodb"
  },
  {
    title: "postman",
    icon: "devicon:postman"
  },
  {
    title: "Google Chrome",
    icon: "devicon:googlechrome"
  },
  {
    title: "Chat GPT",
    icon: "arcticons:openai-chatgpt"
  },
  {
    title: "Figma",
    icon: "solar:figma-broken"
  }
]
