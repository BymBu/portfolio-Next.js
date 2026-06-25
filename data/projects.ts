// data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[]; // Технологии стек
  image: string; // Путь к картинке
  link?: string; // Ссылка на демо или гитхаб
  link2?: string; // Ссылка на демо или гитхаб
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EngPulse - онлайн школа английского",
    description:
      "Онлайн школа с возможностью покупки курсов английского. Интеграция с Moodle.",
    tech: ["1C Bitrix", "Integration", "PHP"],
    image: "/mock",
    link: "https://promo.engpulse.ru/",
  },
  {
    id: 2,
    title: "3D Байкал",
    description:
      "Интерактивная 3D‑платформа для экологического мониторинга озера Байкал. Vue 3 + Three.js + Laravel API. Маркеры, данные по воде/воздуху/туризму/событиям, день/ночь, адаптив.",
    tech: ["Three.js", "Vue.js", "Laravel API", "GLTFLoader"],
    image: "/mock",
    link: "https://it-baikal.vercel.app/",
  },
  {
    id: 3,
    title: "Интерактивная доска",
    description:
      "1 место. Разработано в рамках чемпионата регионального этапа «Профессионалы» - 2026. SPA-приложение, интерактивная доска для рисования.",
    tech: ["Vue.js", "Pinia", "Vite", "BEM"],
    image: "/mock",
    link: "https://github.com/BymBu/WhiteBoard-Vuejs",
  },
  {
    id: 4,
    title: "Secure Access - backend + frontend",
    description:
      "OAuth 2.0 Authorization Server на NestJS с поддержкой Password Grant, Refresh Token, Authorization Code Flow и PKCE. Включает защиту от перебора учетных данных, token rotation, управление scope и хранение токенов в PostgreSQL. Готов к интеграции в микросервисную архитектуру.",
    tech: ["NestJS", "PostgreSQL", "Vue.js", "Pinia"],
    image: "/mock",
    link: "https://github.com/BymBu/Secure-Access-Vue.js",
    link2: "https://github.com/BymBu/SecureAccessNestJS",
  },
  {
    id: 5,
    title: "MyToolKit - Native JavaScript Dashboard",
    description:
      "1 место. Разработано в рамках конкурса «Открытые IT проекты» от СибГУТИ. SPA-приложение, созданное с нуля как единое пространство для управления задачами, погодой, опросами и другими полезными модулями.",
    tech: ["JavaScript", "Api", "Module system"],
    image: "/mock",
    link: "https://github.com/BymBu/MyToolKit",
  },
];
