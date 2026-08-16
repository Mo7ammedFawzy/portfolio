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
    title: "About",
    section: "about"
  },
  {
    title: "Projects",
    section: "projects"
  },
  {
    title: "Skills",
    section: "skills"
  },
  {
    title: "Experience",
    section: "experience"
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
  tags: string[],
  current?: boolean
}

export const JOURNEY: JourneyStep[] = [
  {
    year: "2021",
    title: "Computer Science Graduate",
    subtitle: "Helwan University",
    icon: "material-symbols:school",
    tags: ["Education"]
  },
  {
    year: "2023",
    title: "Frontend Developer",
    subtitle: "Innovate",
    icon: "material-symbols:code",
    tags: ["Vue.js"]
  },
  {
    year: "2025",
    title: "Java Developer",
    subtitle: "Namasoft (ERP Company)",
    icon: "material-symbols:settings",
    tags: ["Java", "Spring Boot", "Vue 3"]
  },
  {
    year: "Now",
    title: "Fullstack Developer",
    subtitle: "Building scalable solutions and growing every day.",
    icon: "material-symbols:rocket-launch",
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
  icon: string
}

export const SKILLS: Skill[] = [
  { title: "Java", icon: "devicon-plain:java" },
  { title: "Spring Boot", icon: "devicon-plain:spring" },
  { title: "Hibernate", icon: "devicon-plain:hibernate" },
  { title: "MySQL", icon: "devicon-plain:mysql" },
  { title: "REST API", icon: "material-symbols:api" },
  { title: "Git", icon: "devicon-plain:git" },
  { title: "Vue 3", icon: "devicon-plain:vuejs" },
  { title: "JavaScript", icon: "devicon-plain:javascript" },
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

export const PROJECTS: Project[] =
  [
  {
    title: "eCommerceHope",
    type: "ecommerce",
    grid: "xx-large",
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
    description: "Full-stack storefront with a clean, editorial product experience."
  },
  {
    title: "tabarak company",
    type: "design",
    grid: "x-large",
    techs: <ITechIcon[]>[
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
    description: "Corporate site for a trading company with bold, grid-driven layouts."
  },
  {
    title: "Innovate",
    type: "design",
    grid: "small",
    techs: [{
      icon: "devicon-plain:vuetify",
      title: "vuetify"
    },
      {
        icon: "mdi:nuxt",
        title: "Nuxt"
      }],
    tags: [
      {
        "title": "NuxtJs",
        "color": "rgb(79 70 229)"
      },
      {
        "title": "Portfolio",
        "color": "rgb(71 85 105)"
      },
      {
        "title": "latest",
        "color": "rgb(220 38 38)"
      }
    ],
    "src": "innovate",
    link: "https://innovate3.online/",
    show: false
  },
    {
      title: "Library Management System",
      type: "fullstack",
      grid: "x-large",
      techs: <ITechIcon[]>[
        {
          icon: "devicon:spring",
          title: "Spring",
        },
        {
          icon: "carbon:api",
          title: "RestAPI"
        }
      ],
      tags: [
        {
          "title": "Java",
          "color": "rgb(232, 68, 37)"
        },
        {
          "title": "Spring Boot",
          "color": "rgb(107 114 128)"
        }
      ],
      src: "https://raw.githubusercontent.com/Mo7ammedFawzy/Spring-Boot-Library-Management/main/preview.png",
      link: "https://spring-boot-library-management.vercel.app/",
      githubLink: "https://github.com/Mo7ammedFawzy/Spring-Boot-Library-Management",
      description: "Full-stack library management with a Spring Boot REST API and Vue frontend."
    },
    {
    "title": "Commerce-Hope",
    "type": "ecommerce",
    show: true,
    "grid": "xx-large",
    techs: <ITechIcon[]>[
      {
        icon: "mdi:nuxt",
        title: "Nuxt",
      },
      {
        icon: 'devicon-plain:vuetify',
        title: "vuetify",
      },
      {
        icon: 'carbon:api',
        title: "RestAPI",
      }
    ],

    "tags": [
      {
        "title": "nuxt",
        "color": "rgb(79 70 229)"
      },
      {
        "title": "Ecommerce",
        "color": "rgb(220 38 38)"
      }
    ],
    "src": "commerce-hope",
    "link": "https://commerce-hope.vercel.app/",
    description: "E-commerce experience focused on product discovery and smooth checkout."
  },
    {
    "title": "Hager UI-UX Developer",
    "type": "design",
    grid: "x-large",
    techs: <ITechIcon[]>[
      {
        icon: "mdi:nuxt",
        title: "Nuxt",
      },
      {
        icon: "devicon-plain:vuetify",
        title: "vuetify",
      },
    ],
    "tags": [
      {
        "title": "NuxtJs",
        "color": "rgb(79 70 229)"
      },
      {
        "title": "Portfolio",
        "color": "rgb(71 85 105)"
      }
    ],
    "src": "ui-ux",
    "link": "https://hager-ui-ux.vercel.app/",
    description: "Portfolio for a UI/UX designer showcasing her selected projects."
  },
    {
    "title": "Movies Hunter",
    show: true,
    "type": "design",
    "grid": "xx-large",
    techs: <ITechIcon[]>[
      {
        icon: "mdi:vuejs",
        title: "vue",
      },
      {
        icon: "devicon-plain:vuetify",
        title: "vuetify",
      },
      {
        icon: "carbon:api",
        title: "RestAPI"
      }
    ],
    "tags": [
      {
        "title": "VueJS",
        "color": "rgb(66, 184, 131)"
      }
    ],
    "src": "movies",
    "link": "https://movie-appio.vercel.app/",
    description: "Movie discovery app with search, trending lists, and rich detail views."
  },
    {
    title: ".Store",
    show: false,
    type: "ecommerce",
    techs: [
      {
        icon: "mdi:nuxt",
        title: "Nuxt",
      },
      {
        icon: "devicon-plain:vuetify",
        title: "vuetify"
      }
    ],
    tags: [
      {
        "title": "NuxtJs",
        "color": "rgb(79 70 229)"
      },
      {
        "title": "eCommerce",
        "color": "rgb(71 85 105)"
      }
    ],
    "src": "store",
    "link": "https://storex.vercel.app/"
  },
    {
    "title": "traders-academy",
    "type": "design",
    techs: <ITechIcon[]>[
      {
        icon: "mdi:vuejs",
        title: "Vue",
      },
      {
        icon: "devicon-plain:vuetify",
        title: "Vuetify",
      },
    ],
    "tags": [
      {
        "title": "VueJS",
        "color": "rgb(66, 184, 131)"
      },
      {
        "title": "Landing",
        "color": "rgb(71 85 105)"
      }
    ],
    "src": "traders",
    "link": "https://traders-academy-gold.vercel.app/ar",
    description: "Bilingual landing page for a trading education academy."
  },
    {
    "title": "Pexels eCommerce",
    show: false,
    "type": "ecommerce",
    "made_with": "Nuxtjs",
    techs: <ITechIcon[]>[
      {
        icon: "mdi-nuxt",
        title: "Nuxt",
      },
      {
        icon: "devicon-plain:vuetify",
        title: "vuetify",
      },
    ],
    "grid": "medium",
    "tags": [
      {
        "title": "NuxtJS",
        "color": "rgb(79 70 229)"
      }
    ],
    "src": "pexel",
    "link": "https://ecommerce-pexels.vercel.app/"
  },
    {
    "title": "Restaurant",
    techs: <ITechIcon[]>[
      {
        icon: "ri:bootstrap-fill",
        title: "Bootstrap",
      },
    ],
    "type": "design",
    "made_with": "",
    "grid": "xx-large",
    "tags": [
      {
        "title": "Bootstrap",
        "color": "rgb(118, 16, 245)"
      }
    ],
    "src": "restaurant",
    "link": "https://mohammed2711111.github.io/Restaurant_Site/resturant.html",
    description: "Static restaurant website built with Bootstrap."
  },
    {
    "title": "nix",
    "type": "design",
    "made_with": "",
    techs: [],
    "tags": [
      {
        "title": "Bootstrap",
        "color": "rgb(118, 16, 245)"
      }
    ],
    "src": "nix",
    show: false,
    "link": "https://mohammed2711111.github.io/NIX_Website/Nix.html"
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
    icon: "devicon-plain:vuetify"
  },
  {
    icon: "devicon-plain:quasar",
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
    icon: "simple-icons:postman"
  },
  {
    title: "Google Chrome",
    icon: "simple-icons:googlechrome"
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
