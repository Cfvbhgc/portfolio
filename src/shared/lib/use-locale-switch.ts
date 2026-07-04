import { useRouter } from 'next/router';
import { usePageTransitionStore } from '@/shared/model/page-transition';
import { curtainLeave } from './page-transitions/curtain';
import { DEFAULT_LOCALE } from '../сonfig/const';

// Статический экспорт: две независимые сборки (/portfolio и /portfolio/en),
// поэтому смена локали — жёсткая навигация между ними.
export const useLocaleSwitch = () => {
    const router = useRouter();
    const setIsLeaving = usePageTransitionStore((s) => s.setIsLeaving);
    const setIsEntering = usePageTransitionStore((s) => s.setIsEntering);

    const currentLocale = process.env.NEXT_PUBLIC_LOCALE || DEFAULT_LOCALE;

    const switchLocale = async (locale: string) => {
        if (locale === currentLocale) return;

        setIsLeaving(true);
        setIsEntering(false);

        await curtainLeave();

        const basePath = locale === 'en' ? '/portfolio/en' : '/portfolio';
        window.location.assign(basePath + router.asPath);
    };

    return { switchLocale, currentLocale };
};
