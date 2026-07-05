import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getCommonPageProps } from "@/application/get-common-page-props";

import { CommonPageProps } from "@/shared/model/types";
import ProjectsPageView, {
  ProjectsPageViewRawProps,
} from "@/pages-view/ProjectsPageView";
import { getDirectionCategories, getDirections } from "../server/directions";
import { tp } from "@/shared/lib/formatting";
import { AppLocale, DEFAULT_LOCALE } from "@/shared/сonfig/const";

const ProjectsPage = ({
  h1,
  directionsSectionData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ProjectsPageView h1={h1} directionsSectionData={directionsSectionData} />
  );
};

export default ProjectsPage;

type PageProps = CommonPageProps & ProjectsPageViewRawProps;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const locale = (process.env.NEXT_PUBLIC_LOCALE as AppLocale) || DEFAULT_LOCALE;

  const [commonPageProps, directions, categories] = await Promise.all([
    getCommonPageProps(locale),
    getDirections(locale),
    getDirectionCategories(locale),
  ]);

  const directionsWithCategories = directions.map((direction) => ({
    ...direction,
    categories: categories
      .filter((category) => category.directionId === direction.id)
      .sort((a, b) => a.order - b.order),
  }));

  const isEn = locale === "en";

  return {
    props: {
      ...commonPageProps,
      bodyClass: "about-page projects-page",
      meta: {
        ...commonPageProps.meta,
        title: isEn ? "DigitalPr0 — Projects" : "DigitalPr0 — Проекты",
      },
      breadcrumbs: [],
      h1: isEn ? "All projects" : "Все проекты",
      directionsSectionData: {
        header: tp(isEn ? "All projects" : "Все проекты"),
        directions: directionsWithCategories,
      },
    } satisfies PageProps,
  };
};
