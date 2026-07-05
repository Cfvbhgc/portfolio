import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getCommonPageProps } from "@/application/get-common-page-props";

import { CommonPageProps } from "@/shared/model/types";
import AboutPageView, {
  AboutPageViewRawProps,
} from "@/pages-view/AboutPageView";
import { getContacts } from "../server/contacts";
import { tp } from "@/shared/lib/formatting";
import { AppLocale, DEFAULT_LOCALE } from "@/shared/сonfig/const";

const AboutPage = ({
  heroSectionData,
  introSectionData,
  contactsSectionData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <AboutPageView
      heroSectionData={heroSectionData}
      introSectionData={introSectionData}
      contactsSectionData={contactsSectionData}
    />
  );
};

export default AboutPage;

type PageProps = CommonPageProps & AboutPageViewRawProps;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const locale = (process.env.NEXT_PUBLIC_LOCALE as AppLocale) || DEFAULT_LOCALE;

  const [commonPageProps, contacts] = await Promise.all([
    getCommonPageProps(locale),
    getContacts(locale),
  ]);

  const isEn = locale === "en";

  return {
    props: {
      ...commonPageProps,
      bodyClass: "about-page",
      meta: {
        ...commonPageProps.meta,
        title: isEn ? "DigitalPr0 — About" : "DigitalPr0 — Обо мне",
      },
      breadcrumbs: [],
      heroSectionData: {
        h1: "DigitalPr0",
        image: {
          vertical: { src: "/portfolio/static/about/hero_mob.jpg" },
          horizontal: { src: "/portfolio/static/about/hero.jpg" },
        },
        textBlock: isEn ? "// FULLSTACK DEVELOPER" : "// FULLSTACK РАЗРАБОТЧИК",
      },
      introSectionData: {
        header: isEn ? "About me" : "Обо мне",
        textBlock1: tp(
          isEn
            ? "DigitalPr0 is a fullstack developer. I build websites, backends, Telegram bots and mobile apps tailored to the task."
            : "DigitalPr0 — fullstack-разработчик. Делаю сайты, бэкенды, Telegram-ботов и мобильные приложения под задачу.",
        ),
        textBlock2: tp(
          isEn
            ? "I work with Python, Node.js, PHP, Java, C# and Kotlin: REST and gRPC APIs, microservices, real-time chats, dashboards, bots, desktop. I value clean architecture and take projects all the way to a working result. Open to commissions."
            : "Работаю с Python, Node.js, PHP, Java, C# и Kotlin: REST и gRPC API, микросервисы, реалтайм-чаты, дашборды, боты, десктоп. Ценю чистую архитектуру и довожу проекты до рабочего результата. Открыт к заказам.",
        ),
      },
      contactsSectionData: {
        header: isEn ? "Contacts" : "Контакты",
        cta: tp(isEn ? "Get in touch" : "Напишите мне"),
        social: contacts,
        image: { src: "/portfolio/static/about/about_bottom_new.jpg" },
        rights: tp(
          isEn
            ? "© 2026 DigitalPr0. All rights reserved."
            : "© 2026 DigitalPr0. Все права защищены.",
        ),
      },
    } satisfies PageProps,
  };
};
