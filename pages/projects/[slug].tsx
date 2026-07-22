import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getCommonPageProps } from "@/application/get-common-page-props";
import { CommonPageProps } from "@/shared/model/types";
import ProjectDetailPageView, {
  ProjectDetailPageViewRawProps,
} from "@/pages-view/ProjectDetailPageView";
import { getSeriousProjects } from "../../server/projects";
import { AppLocale, DEFAULT_LOCALE } from "@/shared/сonfig/const";

const ProjectDetailPage = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <ProjectDetailPageView project={project} />;
};

export default ProjectDetailPage;

type PageProps = CommonPageProps & ProjectDetailPageViewRawProps;

export const getStaticPaths: GetStaticPaths = async () => {
  const locale = (process.env.NEXT_PUBLIC_LOCALE as AppLocale) || DEFAULT_LOCALE;
  const projects = await getSeriousProjects(locale);

  return {
    paths: projects.map((project) => ({ params: { slug: project.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const locale = (process.env.NEXT_PUBLIC_LOCALE as AppLocale) || DEFAULT_LOCALE;
  const slug = params?.slug as string;

  const [commonPageProps, projects] = await Promise.all([
    getCommonPageProps(locale),
    getSeriousProjects(locale),
  ]);

  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return { notFound: true };
  }

  const isEn = locale === "en";

  return {
    props: {
      ...commonPageProps,
      bodyClass: "about-page project-detail-page",
      meta: {
        ...commonPageProps.meta,
        title: `DigitalPr0 — ${project.name}`,
      },
      breadcrumbs: [
        {
          text: isEn ? "Home" : "Главная",
          href: "/",
        },
        {
          text: project.name,
          href: null,
        },
      ],
      project,
    } satisfies PageProps,
  };
};
