import { CommonPageProps } from '@/shared/model/types';

type Locale = 'ru' | 'en';

const i18n = {
    ru: {
        baseTitle: 'Портфолио',
        description: 'Портфолио — DigitalPr0, fullstack-разработчик',
        about: 'Обо мне',
        home: 'Главная',
    },
    en: {
        baseTitle: 'Portfolio',
        description: 'Portfolio — DigitalPr0, fullstack developer',
        about: 'About',
        home: 'Home',
    },
};

export const getCommonPageProps = async (
    locale: Locale = 'ru'
): Promise<Omit<CommonPageProps, 'breadcrumbs'>> => {
    const t = i18n[locale];

    return {
        meta: {
            baseTitle: t.baseTitle,
            description: t.description,
            ogImage: '/portfolio/static/about/hero_mob.jpg',
        },
        headerData: {
            links: [
                {
                    href: '/',
                    text: 'DigitalPr0',
                },
                {
                    href: '/about',
                    text: t.about,
                    showPage: 'main',
                },
                {
                    href: '/',
                    text: t.home,
                    showPage: 'about',
                },
            ],
        },
        footerData: {
            policy: { text: 'GitHub', href: 'https://github.com/Cfvbhgc' },
        },
    };
};
