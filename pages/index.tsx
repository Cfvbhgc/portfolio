import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getCommonPageProps } from "@/application/get-common-page-props";

import IndexPageView, {
  IndexPageViewRawProps,
} from "@/pages-view/IndexPageView";
import { CommonPageProps } from "@/shared/model/types";
import { getProjects, getSeriousProjects } from "../server/projects";
import { AppLocale, DEFAULT_LOCALE } from "@/shared/сonfig/const";

const IndexPage = ({
  h1,
  projectsSectionData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <IndexPageView h1={h1} projectsSectionData={projectsSectionData} />
    </>
  );
};

export default IndexPage;

type PageProps = CommonPageProps & IndexPageViewRawProps;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const locale = (process.env.NEXT_PUBLIC_LOCALE as AppLocale) || DEFAULT_LOCALE;

  const [commonPageProps, projects, seriousProjects] = await Promise.all([
    getCommonPageProps(locale),
    getProjects(locale),
    getSeriousProjects(locale),
  ]);

  return {
    props: {
      ...commonPageProps,
      bodyClass: "index-page",
      meta: {
        ...commonPageProps.meta,
        title:
          locale === "en" ? "DigitalPr0 — Portfolio" : "Портфолио DigitalPr0",
      },
      breadcrumbs: [],
      h1: locale === "en" ? "DigitalPr0 Portfolio" : "Портфолио DigitalPr0",
      projectsSectionData: {
        projects: [...projects, ...seriousProjects],
        scrollBtn: locale === "en" ? "Scroll Down" : "Скролл вниз",
        allProjects: {
          text: locale === "en" ? "View all projects" : "Смотреть все проекты",
          href: "/projects",
        },
      },
    } satisfies PageProps,
  };
};
