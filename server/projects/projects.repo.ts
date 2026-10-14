import { IProject, IProjectFlat } from "@/entities/project";
import { tp } from "@/shared/lib/formatting";
import { AppLocale } from "@/shared/сonfig/const";

const DEMO = "https://cfvbhgc.github.io/";
const GH = "https://github.com/Cfvbhgc/";

export const PROJECTS_BASE = [
    {
        id: "cleanova",
        href: `${DEMO}cleanova/`,
        github: `${GH}cleanova`,
        previewImg: {
            src: "/portfolio/static/previews/cleanova.jpg",
        },
        category: "Landing / Services",

        ru: {
            name: "Cleanova",
            summary: tp(
                "Лендинг клининговой компании: услуги с ценами, фото до и после, форма заявки.",
            ),
        },

        en: {
            name: "Cleanova",
            summary:
                "Cleaning company landing: services with prices, before-and-after photos, request form.",
        },
    },

    {
        id: "dentalis",
        href: `${DEMO}dentalis/`,
        github: `${GH}dentalis`,
        previewImg: {
            src: "/portfolio/static/previews/dentalis.jpg",
        },
        category: "Landing / Clinic",

        ru: {
            name: "Dentalis",
            summary: tp(
                "Лендинг премиальной стоматологии: услуги и цены, врачи, отзывы, запись на приём.",
            ),
        },

        en: {
            name: "Dentalis",
            summary:
                "Premium dental clinic landing: services and prices, doctors, reviews, appointment booking.",
        },
    },

    {
        id: "semiglobe-brasil",
        href: `${DEMO}semiglobe-brasil/`,
        github: `${GH}semiglobe-brasil`,
        previewImg: {
            src: "/portfolio/static/previews/semiglobe-brasil.jpg",
        },
        category: "Landing / Premium",

        ru: {
            name: "Semiglobe Brasil",
            summary: tp(
                "Премиум-лендинг кофейного бренда: горизонтальный скролл каталога, переключатель языка.",
            ),
        },

        en: {
            name: "Semiglobe Brasil",
            summary:
                "Premium coffee brand landing: horizontal catalog scroll, language switcher.",
        },
    },

    {
        id: "shemberg-windows",
        href: `${DEMO}shemberg-windows/`,
        github: `${GH}shemberg-windows`,
        previewImg: {
            src: "/portfolio/static/previews/shemberg-windows.jpg",
        },
        category: "Web / 3D",

        ru: {
            name: "Shemberg Windows",
            summary: tp(
                "Сайт премиальных окон с 3D-конфигуратором на Three.js.",
            ),
        },

        en: {
            name: "Shemberg Windows",
            summary:
                "Premium windows site with a Three.js 3D configurator.",
        },
    },

    {
        id: "hero-design",
        href: `${DEMO}hero-design/`,
        github: `${GH}hero-design`,
        previewImg: {
            src: "/portfolio/static/previews/hero-design.jpg",
        },
        category: "Web / Studio",

        ru: {
            name: "Hero Design",
            summary: tp(
                "Сайт дизайн-студии: кастомный курсор, GSAP-анимации, smooth scroll.",
            ),
        },

        en: {
            name: "Hero Design",
            summary:
                "Design studio site: custom cursor, GSAP animations, smooth scroll.",
        },
    },

    {
        id: "sales-dash",
        href: `${DEMO}sales-dash/`,
        github: `${GH}sales-dash`,
        previewImg: {
            src: "/portfolio/static/previews/sales-dash.jpg",
        },
        category: "Dashboard / Analytics",

        ru: {
            name: "Sales Dash",
            summary: tp(
                "Дашборд аналитики продаж: метрики, графики выручки, экспорт CSV.",
            ),
        },

        en: {
            name: "Sales Dash",
            summary:
                "Sales analytics dashboard: metrics, revenue charts, CSV export.",
        },
    },
] satisfies IProject[];

export const getProjects = async (locale: AppLocale = 'ru'): Promise<IProjectFlat[]> =>
    PROJECTS_BASE.map(({ ru, en, ...base }) => ({
        ...base,
        ...(locale === 'en' ? en : ru),
    }));
